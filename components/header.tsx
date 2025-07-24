"use client"

import { useState } from "react"
import { Menu, X, Heart, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useStore } from "../lib/store"
import { useTheme } from "./theme-provider"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { shortlistedIds, setShowShortlistModal, darkMode, toggleDarkMode } = useStore()
  const { theme, setTheme } = useTheme()

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Guided Ambitions</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Veteran Career Coach</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowShortlistModal(true)}
              className="flex items-center space-x-2"
            >
              <Heart className="h-4 w-4" />
              <span>Shortlist ({shortlistedIds.length})</span>
            </Button>

            <Button variant="ghost" size="sm" onClick={handleThemeToggle} className="flex items-center space-x-2">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setShowShortlistModal(true)
                  setMobileMenuOpen(false)
                }}
                className="flex items-center justify-center space-x-2"
              >
                <Heart className="h-4 w-4" />
                <span>Shortlist ({shortlistedIds.length})</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  handleThemeToggle()
                  setMobileMenuOpen(false)
                }}
                className="flex items-center justify-center space-x-2"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4" />
                    <span>Dark Mode</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
