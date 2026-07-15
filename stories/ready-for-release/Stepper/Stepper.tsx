import {type OlHTMLAttributes, type ReactElement, type ReactNode} from "react";

const CheckmarkIcon = "/icons/checkmark.svg";
import {Icon} from "@tipico/ui/Icon";

export type StepperItemStatus = "default" | "active" | "resolved" | "warning" | "error" | "pending";
export type StepperItemStyle = "text" | "point" | "icon";

export interface StepperItem {
    /** Only used when style is "text". */
    number?: string;
    headline?: ReactNode;
    description?: ReactNode;
    /** Convenience alias for `headline`. Use `headline` + `description` for richer content. */
    label?: ReactNode;
    status?: StepperItemStatus;
    style?: StepperItemStyle;
    /** Only used when style is "icon". */
    icon?: ReactElement;
}

export interface StepperProps extends Omit<OlHTMLAttributes<HTMLOListElement>, "children"> {
    id: string;
    items: StepperItem[];
    /** The last step never shows a connector. Defaults to `true`. */
    showConnector?: boolean;
    /** Defaults to `"Progress steps"`. */
    "aria-label"?: string;
    className?: string;
}

const statusClassNames: Record<StepperItemStatus, string> = {
    default: "stepper-indicator-default",
    active: "stepper-indicator-active",
    resolved: "stepper-indicator-resolved",
    warning: "stepper-indicator-warning",
    error: "stepper-indicator-error",
    pending: "stepper-indicator-pending"
};

function renderIndicatorContent(item: StepperItem, index: number) {
    const style = item.style ?? "text";

    if (style === "icon") {
        if (item.icon) {
            return item.icon;
        }
        return <Icon href={CheckmarkIcon} className="stepper-indicator-icon" width={14} height={14} />;
    }

    if (style === "point") {
        return <span className="stepper-indicator-dot" />;
    }

    return item.number ?? String(index + 1);
}

/**
 * Stepper renders a vertical list of steps with a status indicator per item and
 * an optional connector line between the indicators. It mirrors the
 * `Micro/Stepper` component from the Tipico Tailwind Design System.
 *
 * Each step can display a number (text), a dot (point), or a custom icon.
 * Use `style: "icon"` with `status: "resolved"` for a checkmark indicator.
 */
export function Stepper({
    id,
    items,
    showConnector = true,
    className,
    "aria-label": ariaLabel = "Progress steps",
    ...props
}: StepperProps) {
    return (
        <ol id={id} data-testid={id} aria-label={ariaLabel} className={`stepper ${className ?? ""}`.trim()} {...props}>
            {items.map((item, index) => {
                const status: StepperItemStatus = item.status ?? "default";
                const isLast = index === items.length - 1;
                const itemId = `${id}-item-${index}`;
                const displayHeadline = item.headline ?? item.label;

                return (
                    <li
                        key={itemId}
                        id={itemId}
                        data-testid={itemId}
                        data-status={status}
                        className="stepper-item"
                        aria-current={status === "active" ? "step" : undefined}
                    >
                        <div className="stepper-indicator-column">
                            <div
                                data-testid={`${itemId}-indicator`}
                                className={`stepper-indicator ${statusClassNames[status]}`}
                                aria-hidden="true"
                            >
                                {renderIndicatorContent(item, index)}
                            </div>
                            {showConnector && !isLast && (
                                <div
                                    data-testid={`${itemId}-connector`}
                                    className="stepper-connector"
                                    aria-hidden="true"
                                />
                            )}
                        </div>
                        {(displayHeadline || item.description) && (
                            <div className="stepper-content">
                                {displayHeadline && (
                                    <div data-testid={`${itemId}-label`} className="stepper-headline">
                                        {displayHeadline}
                                    </div>
                                )}
                                {item.description && (
                                    <div data-testid={`${itemId}-description`} className="stepper-description">
                                        {item.description}
                                    </div>
                                )}
                            </div>
                        )}
                    </li>
                );
            })}
        </ol>
    );
}
