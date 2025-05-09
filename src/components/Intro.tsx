"use client";

import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
export default function Intro() {
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "Enter" && e.altKey) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Welcome to my computer!</DialogTitle>
            <DialogDescription>
              Or at least a portfolio inspired by it, my computer's the thing i
              customize the most, so i figured it's the best way to get to know
              me and my design language. Press <strong>Alt + R</strong> to open
              the menu, and <strong>Alt + Enter</strong> to go full screen. have
              fun poking around!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
