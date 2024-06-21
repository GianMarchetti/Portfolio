"use client"

import { useTheme } from "next-themes"

import { Icons } from "./ui/icons"
import { Button } from "@nextui-org/react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      size="sm"
      className="w-fit p-2 ml-2 bg-zinc-500 dark:bg-zinc-800 sm:ml-0"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
