import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "@tipico/ui/Button";
import { Dialog, DialogHeader, DialogContent } from "@tipico/ui/Dialog";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: [],
  argTypes: {
    isOpen: { control: "boolean", description: "Controls dialog visibility" },
    closeable: { control: "boolean", description: "Whether the dialog can be closed by clicking overlay or X" },
    position: { control: "select", options: ["default", "bottom", "center"], description: "Dialog position on screen" },
    backdrop: { control: "boolean", description: "Show dark backdrop overlay" },
  },
  args: {
    isOpen: true,
    closeable: true,
    position: "default",
    backdrop: true,
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: function DialogDemo() {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <div style={{ padding: "24px" }}>
        <Button id="open-dialog" variant="primary" autoWidth onClick={() => setIsOpen(true)}>
          Open Dialog
        </Button>
        <Dialog id="demo-dialog" isOpen={isOpen} onCloseClick={() => setIsOpen(false)}>
          <DialogHeader title="Confirm Action" onCloseClick={() => setIsOpen(false)} />
          <DialogContent>
            <p style={{ marginBottom: "16px" }}>Are you sure you want to proceed with this action?</p>
            <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
              <Button id="cancel" variant="outline" autoWidth onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button id="confirm" variant="primary" autoWidth onClick={() => setIsOpen(false)}>Confirm</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

export const BottomSheet: Story = {
  render: function BottomSheetDemo() {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <div style={{ padding: "24px" }}>
        <Button id="open-bottom" variant="primary" autoWidth onClick={() => setIsOpen(true)}>
          Open Bottom Sheet
        </Button>
        <Dialog id="bottom-dialog" isOpen={isOpen} onCloseClick={() => setIsOpen(false)} position="bottom">
          <DialogHeader title="Select Payment Method" onCloseClick={() => setIsOpen(false)} />
          <DialogContent>
            <p>Choose how you'd like to deposit funds.</p>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

export const NonCloseable: Story = {
  render: function NonCloseableDemo() {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <div style={{ padding: "24px" }}>
        <Button id="open-locked" variant="warning" autoWidth onClick={() => setIsOpen(true)}>
          Open Mandatory Dialog
        </Button>
        <Dialog id="locked-dialog" isOpen={isOpen} closeable={false}>
          <DialogHeader title="Session Expired" />
          <DialogContent>
            <p style={{ marginBottom: "16px" }}>Your session has expired. Please log in again.</p>
            <Button id="relogin" variant="primary" onClick={() => setIsOpen(false)}>Log In</Button>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

export const CenteredDialog: Story = {
  render: function CenteredDemo() {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <div style={{ padding: "24px" }}>
        <Button id="open-center" variant="primary" autoWidth onClick={() => setIsOpen(true)}>
          Open Centered
        </Button>
        <Dialog id="center-dialog" isOpen={isOpen} onCloseClick={() => setIsOpen(false)} position="center">
          <DialogHeader title="Success" onCloseClick={() => setIsOpen(false)} />
          <DialogContent>
            <p>Your bet has been placed successfully!</p>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};
