import {forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useReducer, useRef, useState} from "react";

import type {HTMLProps} from "react";

export interface DatePickerRef {
    focus: () => void;
}

export interface DatePickerProps extends Omit<HTMLProps<HTMLDivElement>, "onChange" | "value" | "id"> {
    id: string;
    value: Date | null;
    onChange: (date: Date | null) => void;
    label: string;
    disabled?: boolean | undefined;
    minDate?: Date | undefined;
    maxDate?: Date | undefined;
    locale?: string | undefined;
    error?: boolean | undefined;
    description?: string | undefined;
}

type CalendarView = "days" | "years";

interface State {
    currentMonth: Date;
    isOpen: boolean;
    view: CalendarView;
    flipUp: boolean;
}

type Action =
    | {type: "OPEN"; flipUp: boolean}
    | {type: "CLOSE"}
    | {type: "SET_MONTH"; month: Date}
    | {type: "PREV_MONTH"}
    | {type: "NEXT_MONTH"}
    | {type: "SHOW_YEARS"}
    | {type: "SHOW_DAYS"}
    | {type: "SELECT_YEAR"; year: number};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "OPEN":
            return {...state, isOpen: true, view: "days", flipUp: action.flipUp};
        case "CLOSE":
            return {...state, isOpen: false, view: "days"};
        case "SET_MONTH":
            return {...state, currentMonth: action.month};
        case "PREV_MONTH":
            return {
                ...state,
                currentMonth: new Date(state.currentMonth.getFullYear(), state.currentMonth.getMonth() - 1, 1)
            };
        case "NEXT_MONTH":
            return {
                ...state,
                currentMonth: new Date(state.currentMonth.getFullYear(), state.currentMonth.getMonth() + 1, 1)
            };
        case "SHOW_YEARS":
            return {...state, view: "years"};
        case "SHOW_DAYS":
            return {...state, view: "days"};
        case "SELECT_YEAR":
            return {...state, currentMonth: new Date(action.year, state.currentMonth.getMonth(), 1), view: "days"};
        default:
            return state;
    }
}

const GRID_STYLE = {display: "grid", gridTemplateColumns: "repeat(7, 1fr)"} as const;
const DROPDOWN_MIN_SPACE = 340;

function getWeekStart(locale: string): number {
    if (locale === "en-US" || locale === "en-CA") return 0;
    return 1;
}

function getWeekdays(locale: string): string[] {
    const weekStart = getWeekStart(locale);
    const monday = new Date(2024, 0, 1); // Known Monday
    const base = new Date(monday);
    base.setDate(monday.getDate() + (weekStart === 0 ? -1 : 0));
    return Array.from({length: 7}, (_, i) => {
        const d = new Date(base);
        d.setDate(base.getDate() + i);
        return d.toLocaleDateString(locale, {weekday: "short"}).replace(".", "");
    });
}

function formatDate(date: Date | null, locale: string): string {
    if (!date) return "";
    return date.toLocaleDateString(locale, {day: "2-digit", month: "2-digit", year: "numeric"});
}

function getPlaceholder(locale: string): string {
    if (locale === "en-US" || locale === "en-CA") return "MM/DD/YYYY";
    if (locale === "tr-TR") return "GG.AA.YYYY";
    return "TT.MM.JJJJ";
}

function isSameDay(a: Date, b: Date): boolean {
    return a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
}

function parseDate(str: string, locale: string): Date | null {
    let day: number, month: number, year: number;
    if (locale === "en-US" || locale === "en-CA") {
        const match = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
        if (!match || !match[1] || !match[2] || !match[3]) return null;
        month = parseInt(match[1], 10) - 1;
        day = parseInt(match[2], 10);
        year = parseInt(match[3], 10);
    } else {
        const match = str.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
        if (!match || !match[1] || !match[2] || !match[3]) return null;
        day = parseInt(match[1], 10);
        month = parseInt(match[2], 10) - 1;
        year = parseInt(match[3], 10);
    }
    const date = new Date(year, month, day);
    if (date.getDate() !== day || date.getMonth() !== month || date.getFullYear() !== year) return null;
    return date;
}

function getYearRange(current: number, min?: Date, max?: Date): number[] {
    const start = min ? min.getFullYear() : current - 100;
    const end = max ? max.getFullYear() : current + 10;
    const years: number[] = [];
    for (let y = end; y >= start; y--) years.push(y);
    return years;
}

function CalendarIcon() {
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
    );
}

function ChevronLeft() {
    return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2">
            <path d="M10 12L6 8l4-4" />
        </svg>
    );
}

function ChevronRight() {
    return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2">
            <path d="M6 4l4 4-4 4" />
        </svg>
    );
}

function getDayClassName(isSelected: boolean, isToday: boolean, isDisabled: boolean): string {
    const base =
        "flex items-center justify-center h-8 w-full text-sm transition-all rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info focus-visible:ring-offset-1";
    if (isDisabled) return `${base} opacity-40 cursor-not-allowed text-subtile`;
    if (isSelected) return `${base} bg-cta-primary text-cta-primary font-semibold cursor-pointer`;
    if (isToday) return `${base} border border-standard text-highlight font-medium cursor-pointer hover:bg-input`;
    return `${base} text-highlight cursor-pointer hover:bg-input`;
}

export const DatePicker = forwardRef<DatePickerRef, DatePickerProps>(
    (
        {
            id,
            value,
            onChange,
            label,
            disabled = false,
            minDate,
            maxDate,
            locale = "de-DE",
            error = false,
            description,
            className,
            ...props
        },
        ref
    ) => {
        const [state, dispatch] = useReducer(reducer, {
            currentMonth: value || new Date(),
            isOpen: false,
            view: "days" as CalendarView,
            flipUp: false
        });

        const [inputValue, setInputValue] = useState(() => formatDate(value, locale));
        const [animating, setAnimating] = useState(false);
        const inputRef = useRef<HTMLInputElement>(null);
        const containerRef = useRef<HTMLDivElement>(null);
        const yearListRef = useRef<HTMLDivElement>(null);

        useImperativeHandle(ref, () => ({
            focus: () => {
                if (inputRef.current && !disabled) inputRef.current.focus();
            }
        }));

        useEffect(() => {
            if (value) dispatch({type: "SET_MONTH", month: value});
            setInputValue(formatDate(value, locale));
        }, [value, locale]);

        const computeFlip = useCallback(() => {
            if (!inputRef.current) return false;
            const rect = inputRef.current.getBoundingClientRect();
            const spaceBelow = document.documentElement.clientHeight - rect.bottom;
            return spaceBelow < DROPDOWN_MIN_SPACE;
        }, []);

        const openCalendar = useCallback(() => {
            if (disabled) return;
            const flip = computeFlip();
            dispatch({type: "OPEN", flipUp: flip});
            requestAnimationFrame(() => setAnimating(true));
        }, [disabled, computeFlip]);

        const closeCalendar = useCallback(() => {
            setAnimating(false);
            setTimeout(() => dispatch({type: "CLOSE"}), 150);
        }, []);

        useEffect(() => {
            if (!state.isOpen) return;
            const handler = (e: MouseEvent) => {
                if (containerRef.current?.contains(e.target as HTMLElement)) return;
                closeCalendar();
            };
            document.addEventListener("mousedown", handler);
            return () => document.removeEventListener("mousedown", handler);
        }, [state.isOpen, closeCalendar]);

        useEffect(() => {
            if (!state.isOpen) return;
            const handler = (e: KeyboardEvent) => {
                if (e.key === "Escape") {
                    closeCalendar();
                    inputRef.current?.focus();
                    return;
                }
                if (e.key === "Enter" && state.view === "days") {
                    closeCalendar();
                    inputRef.current?.focus();
                    return;
                }
                if (!value || state.view !== "days") return;
                let newDate: Date | null = null;
                if (e.key === "ArrowLeft")
                    newDate = new Date(value.getFullYear(), value.getMonth(), value.getDate() - 1);
                if (e.key === "ArrowRight")
                    newDate = new Date(value.getFullYear(), value.getMonth(), value.getDate() + 1);
                if (e.key === "ArrowUp") newDate = new Date(value.getFullYear(), value.getMonth(), value.getDate() - 7);
                if (e.key === "ArrowDown")
                    newDate = new Date(value.getFullYear(), value.getMonth(), value.getDate() + 7);
                if (newDate && !(minDate && newDate < minDate) && !(maxDate && newDate > maxDate)) {
                    e.preventDefault();
                    onChange(newDate);
                    dispatch({type: "SET_MONTH", month: newDate});
                }
            };
            document.addEventListener("keydown", handler);
            return () => document.removeEventListener("keydown", handler);
        }, [state.isOpen, state.view, value, onChange, minDate, maxDate, closeCalendar]);

        useEffect(() => {
            if (state.view === "years" && yearListRef.current) {
                const activeEl = yearListRef.current.querySelector("[data-active=true]");
                if (activeEl) activeEl.scrollIntoView({block: "center"});
            }
        }, [state.view]);

        const isDateDisabled = useCallback(
            (date: Date) => {
                if (minDate && date < minDate) return true;
                if (maxDate && date > maxDate) return true;
                return false;
            },
            [minDate, maxDate]
        );

        const handleSelectDate = useCallback(
            (date: Date) => {
                if (isDateDisabled(date)) return;
                onChange(date);
                setTimeout(() => closeCalendar(), 120);
            },
            [onChange, isDateDisabled, closeCalendar]
        );

        const handleToggle = useCallback(() => {
            if (state.isOpen) closeCalendar();
            else openCalendar();
        }, [state.isOpen, closeCalendar, openCalendar]);

        const days = useMemo(() => {
            const year = state.currentMonth.getFullYear();
            const month = state.currentMonth.getMonth();
            const firstDay = new Date(year, month, 1).getDay();
            const weekStart = getWeekStart(locale);
            const adjustedFirst = (firstDay - weekStart + 7) % 7;
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const cells: Array<{day: number; date: Date} | null> = [];
            for (let i = 0; i < adjustedFirst; i++) cells.push(null);
            for (let i = 1; i <= daysInMonth; i++) cells.push({day: i, date: new Date(year, month, i)});
            return cells;
        }, [state.currentMonth, locale]);

        const monthLabel = state.currentMonth.toLocaleDateString(locale, {month: "long", year: "numeric"});
        const today = useMemo(() => new Date(), []);
        const years = useMemo(
            () => getYearRange(state.currentMonth.getFullYear(), minDate, maxDate),
            [state.currentMonth, minDate, maxDate]
        );
        const weekdays = useMemo(() => getWeekdays(locale), [locale]);

        const dropdown = state.isOpen ? (
            <div
                className={`absolute left-0 z-50 mt-1 rounded-card bg-card border border-subtile p-3 shadow-elevated transition-all duration-150 origin-top min-w-[280px] w-full ${state.flipUp ? "bottom-full mb-1" : "top-full"} ${animating ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                style={{maxHeight: 320, overflow: "hidden"}}
                role="dialog"
                aria-label={`Calendar for ${label}`}
            >
                <div className="flex items-center justify-between mb-2">
                    <button
                        type="button"
                        aria-label="Previous month"
                        className="flex items-center justify-center w-8 h-8 rounded-md border border-subtile bg-input text-highlight hover:border-highlight active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info"
                        onClick={() => dispatch({type: "PREV_MONTH"})}
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        type="button"
                        onClick={() => dispatch({type: state.view === "days" ? "SHOW_YEARS" : "SHOW_DAYS"})}
                        className="text-sm font-semibold text-highlight capitalize hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info focus-visible:rounded-sm px-2 py-0.5"
                    >
                        {monthLabel}{" "}
                        <svg
                            className="w-3 h-3 inline-block ml-1"
                            fill="none"
                            viewBox="0 0 12 12"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d={state.view === "days" ? "M3 4.5l3 3 3-3" : "M3 7.5l3-3 3 3"} />
                        </svg>
                    </button>
                    <button
                        type="button"
                        aria-label="Next month"
                        className="flex items-center justify-center w-8 h-8 rounded-md border border-subtile bg-input text-highlight hover:border-highlight active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info"
                        onClick={() => dispatch({type: "NEXT_MONTH"})}
                    >
                        <ChevronRight />
                    </button>
                </div>

                {state.view === "years" && (
                    <div ref={yearListRef} style={{height: "240px", overflowY: "auto"}} className="py-1 px-1">
                        <div className="grid grid-cols-3 gap-1.5">
                            {years.map(y => (
                                <button
                                    key={y}
                                    type="button"
                                    data-active={y === state.currentMonth.getFullYear()}
                                    onClick={() => dispatch({type: "SELECT_YEAR", year: y})}
                                    className={`text-sm py-1.5 px-2 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info flex items-center justify-center ${y === state.currentMonth.getFullYear() ? "bg-cta-primary text-cta-primary font-semibold" : "text-highlight hover:bg-input"}`}
                                >
                                    {y}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {state.view === "days" && (
                    <>
                        <div style={GRID_STYLE} className="mb-1">
                            {weekdays.map(day => (
                                <span
                                    key={day}
                                    className="flex items-center justify-center h-7 text-2xs font-medium text-subtile"
                                >
                                    {day}
                                </span>
                            ))}
                        </div>
                        <div style={GRID_STYLE} role="grid" aria-label={monthLabel}>
                            {days.map((cell, i) => {
                                if (!cell) return <span key={`empty-${i}`} aria-hidden="true" />;
                                const isSelected = !!(value && isSameDay(cell.date, value));
                                const isDisabledDay = isDateDisabled(cell.date);
                                const isToday = isSameDay(cell.date, today);
                                return (
                                    <button
                                        key={cell.day}
                                        type="button"
                                        role="gridcell"
                                        disabled={isDisabledDay}
                                        aria-selected={isSelected}
                                        aria-label={cell.date.toLocaleDateString(locale)}
                                        onClick={() => handleSelectDate(cell.date)}
                                        className={getDayClassName(isSelected, isToday, isDisabledDay)}
                                    >
                                        {cell.day}
                                    </button>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        ) : null;

        return (
            <div ref={containerRef} className={`input-field ${className ?? ""}`} {...props}>
                <div className="input-wrapper relative">
                    <label htmlFor={id} className="input-field-title">
                        {label}
                    </label>
                    <input
                        id={id}
                        ref={inputRef}
                        data-testid={id}
                        type="text"
                        value={inputValue}
                        disabled={disabled}
                        onChange={e => setInputValue(e.target.value)}
                        onFocus={() => openCalendar()}
                        onBlur={() => {
                            const parsed = parseDate(inputValue, locale);
                            if (parsed && !isDateDisabled(parsed)) onChange(parsed);
                            else setInputValue(formatDate(value, locale));
                        }}
                        className={`input pr-9 focus-visible:ring-2 focus-visible:ring-info focus-visible:ring-offset-0 ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${error ? "border-negative" : ""}`}
                        placeholder={getPlaceholder(locale)}
                        aria-label={label}
                        aria-invalid={error}
                        aria-describedby={description ? `${id}-description` : undefined}
                    />
                    <span className="input-icon text-subtile cursor-pointer" onClick={handleToggle}>
                        <CalendarIcon />
                    </span>
                    {dropdown}
                </div>
                {description && (
                    <span
                        id={`${id}-description`}
                        className={`input-field-description ${error ? "description-negative" : ""}`}
                    >
                        {description}
                    </span>
                )}
            </div>
        );
    }
);

DatePicker.displayName = "DatePicker";
