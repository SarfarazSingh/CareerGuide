"use client"

import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Filters } from "../types"

interface FilterChipsProps {
  filters: Filters
  onRemoveFilter: (type: keyof Filters, value: string | boolean) => void
  onClearAll: () => void
}

export function FilterChips({ filters, onRemoveFilter, onClearAll }: FilterChipsProps) {
  const activeFilters: Array<{ type: keyof Filters; value: string | boolean; label: string }> = []

  // Add search filter
  if (filters.search && filters.search.trim() !== "") {
    activeFilters.push({
      type: "search",
      value: filters.search,
      label: `Search: "${filters.search}"`,
    })
  }

  // Add array filters
  const arrayFilters: Array<{ key: keyof Filters; values: string[] }> = [
    { key: "industries", values: filters.industries || [] },
    { key: "companySizes", values: filters.companySizes || [] },
    { key: "locations", values: filters.locations || [] },
    { key: "functionalAreas", values: filters.functionalAreas || [] },
  ]

  arrayFilters.forEach(({ key, values }) => {
    values.forEach((value) => {
      activeFilters.push({
        type: key,
        value,
        label: formatFilterLabel(key, value),
      })
    })
  })

  // Add boolean filters
  const booleanFilters: Array<{ key: keyof Filters; value: boolean; label: string }> = [
    { key: "veteranHiring", value: filters.veteranHiring, label: "Veteran Hiring" },
    { key: "remoteWork", value: filters.remoteWork, label: "Remote Work" },
    { key: "securityClearance", value: filters.securityClearance, label: "Security Clearance" },
  ]

  booleanFilters.forEach(({ key, value, label }) => {
    if (value) {
      activeFilters.push({
        type: key,
        value: true,
        label,
      })
    }
  })

  if (activeFilters.length === 0) {
    return null
  }

  return (
    <div className="px-6 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Active Filters:</span>
        {activeFilters.map((filter, index) => (
          <Badge
            key={`${filter.type}-${filter.value}-${index}`}
            variant="secondary"
            className="flex items-center gap-1 px-2 py-1"
          >
            {filter.label}
            <Button
              variant="ghost"
              size="sm"
              className="h-4 w-4 p-0 hover:bg-transparent"
              onClick={() => onRemoveFilter(filter.type, filter.value)}
            >
              <X className="h-3 w-3" />
            </Button>
          </Badge>
        ))}
        {activeFilters.length > 1 && (
          <Button variant="outline" size="sm" onClick={onClearAll} className="ml-2 bg-transparent">
            Clear All
          </Button>
        )}
      </div>
    </div>
  )
}

function formatFilterLabel(key: keyof Filters, value: string): string {
  const labelMap: Record<string, string> = {
    industries: "Industry",
    companySizes: "Size",
    locations: "Location",
    functionalAreas: "Function",
  }

  const prefix = labelMap[key] || key
  return `${prefix}: ${value}`
}
