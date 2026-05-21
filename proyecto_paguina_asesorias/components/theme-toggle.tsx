"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-[#f8d67d] hover:text-white" 
        disabled
      >
        <span className="sr-only">Toggle theme</span>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
      </Button>
    )
  }

  // Determine if active theme is dark
  const currentTheme = theme === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : theme
  const isDark = currentTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative text-[#f8d67d] hover:text-white hover:bg-white/10 rounded-full transition-all flex items-center justify-center shrink-0 cursor-pointer"
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      aria-label="Alternar tema de color"
    >
      <span className="sr-only">Toggle theme</span>
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 absolute ${
        isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
      }`} />
      <Moon className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 absolute ${
        isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
      }`} />
    </Button>
  )
}
