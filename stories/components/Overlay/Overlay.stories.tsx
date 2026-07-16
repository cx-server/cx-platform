import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Overlay } from "@tipico/ui/Overlay";

const meta: Meta<typeof Overlay> = {
  title: "Components/Overlay",
  component: Overlay,
  tags: [],
  argTypes: {
    isVisible: { control: "boolean", description: "Controls fade-in/out animation" },
    backdrop: { control: "boolean", description: "Show dark backdrop (true) or transparent (false)" },
    addAnimation: { control: "boolean", description: "Enable animation" },
  },
  args: {
    isVisible: true,
    backdrop: true,
    addAnimation: false,
  },
  parameters: {
    docs: {
      description: {
        component: "Full-screen overlay with optional dark backdrop and fade animation. Foundation for modals and sheets.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const WithBackdrop: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <button className="text-interaction text-sm font-medium" onClick={() => setOpen(true)}>
          Open Overlay
        </button>
        {open && (
          <Overlay isVisible backdrop addAnimation>
            <div className="flex items-center justify-center h-full">
              <div className="bg-card rounded-lg p-6 flex flex-col gap-3">
                <span className="text-highlight font-semibold">Overlay Content</span>
                <button className="text-interaction text-sm" onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </Overlay>
        )}
      </div>
    );
  },
};

export const Transparent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <button className="text-interaction text-sm font-medium" onClick={() => setOpen(true)}>
          Open Transparent Overlay
        </button>
        {open && (
          <Overlay isVisible backdrop={false} addAnimation>
            <div className="flex items-end justify-center h-full p-4">
              <div className="bg-card rounded-lg p-4 shadow-lg">
                <span className="text-highlight text-sm">Floating panel</span>
                <button className="ml-4 text-interaction text-sm" onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </Overlay>
        )}
      </div>
    );
  },
};
