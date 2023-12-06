"use client"

import { Toaster } from "./components/ui/toaster"
import { ThemeProvider } from "./components/theme-provider"
import {NextUIProvider} from '@nextui-org/react'

interface Props {
  children: React.ReactNode
}

export function  Providers({ children }: Props) {
  return <>
  <NextUIProvider>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Toaster />
    {children}
    </ThemeProvider>
  </NextUIProvider>
  </>
}
