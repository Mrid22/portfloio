"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

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
            <CommandItem
              onBeforeInput={() => router.prefetch("/projects/ui-design")}
              onSelect={() => router.push("/projects/ui-design")}
            >
              <span>UI Design</span>
              <CommandShortcut>My UI Design Projects</CommandShortcut>
            </CommandItem>
            <CommandItem
              onBeforeInput={() => router.push("/projects/python")}
              onSelect={() => router.push("/projects/python")}
            >
              <span>Python</span>
              <CommandShortcut>My Python Projects</CommandShortcut>
            </CommandItem>
            <CommandItem
              onBeforeInput={() => router.prefetch("/projects/web-development")}
              onSelect={() => router.push("/projects/web-development")}
            >
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
