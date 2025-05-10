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

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hi I'm Mridul Agarwal</DialogTitle>
            <DialogDescription>
              Welcome to my computer! Or at least a portfolio inspired by it, my
              computer's the thing i customize the most, so i figured it's the
              best way to get to know me and my design language. Press{" "}
              <strong>Alt + Space</strong> to open the menu, and{" "}
              <strong>Alt + Enter</strong> to go full screen. Have fun poking
              around!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
