"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../components/ui/command";

export default function Menu() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "r" && e.altKey) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Projects">
            <CommandItem>
              <span>UI Design</span>
              <CommandShortcut>My UI Design Projects</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>Python</span>
              <CommandShortcut>My Python Projects</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>Web Development</span>
              <CommandShortcut>My Web Dev Projects</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="About me">
            <CommandItem>
              <span>Resume (WIP)</span>
              <CommandShortcut>My Resume</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
