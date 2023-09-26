'use client'

import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button";
import { Moon, Sun, SunMoon } from 'lucide-react';
import { useEffect, useState, useTransition } from 'react';

export function ToggleTheme() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()
  const [_, startTransition] = useTransition()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        startTransition(() => {
          setTheme(theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system')
        })
      }}
    >
      {theme === 'system' && <SunMoon className="transition-all"/>}
      {theme === 'dark' && <Moon className="transition-all"/>}
      {theme === 'light' && <Sun className="transition-all"/>}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
