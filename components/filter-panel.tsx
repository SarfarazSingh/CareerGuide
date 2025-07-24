"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { X, Search } from "lucide-react"
import type { FilterState } from "../types"
import { functionalAreas, industries, cities } from "../data/companies"

interface FilterPanelProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

export function FilterPanel({ filters, onFiltersChange }: FilterPanelProps) {
  const updateFilter = (key: keyof FilterState, value: any) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const toggleArrayFilter = (key: "functionalAreas" | "industries" | "cities", value: string) => {
    const current = filters[key]
    const updated = current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
    updateFilter(key, updated)
  }

  const clearAllFilters = () => {
    onFiltersChange({
      functionalAreas: [],
      industries: [],
      cities: [],
      search: "",
    })
  }

  const hasActiveFilters =
    filters.functionalAreas.length > 0 ||
    filters.industries.length > 0 ||
    filters.cities.length > 0 ||
    filters.search.length > 0

  return (
    <div className="w-80 bg-white border-r border-gray-200 p-6 overflow-y-auto">
      <div className="space-y-6">
        {/* Filter Summary */}
        {hasActiveFilters && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Active Filters</Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                Clear All
              </Button>
            </div>
            <div className="flex flex-wrap gap-1">
              {filters.functionalAreas.map((area) => (
                <Badge key={area} variant="secondary" className="text-xs">
                  {area}
                  <X
                    className="ml-1 h-3 w-3 cursor-pointer"
                    onClick={() => toggleArrayFilter("functionalAreas", area)}
                  />
                </Badge>
              ))}
              {filters.industries.map((industry) => (
                <Badge key={industry} variant="secondary" className="text-xs">
                  {industry}
                  <X
                    className="ml-1 h-3 w-3 cursor-pointer"
                    onClick={() => toggleArrayFilter("industries", industry)}
                  />
                </Badge>
              ))}
              {filters.cities.map((city) => (
                <Badge key={city} variant="secondary" className="text-xs">
                  {city}
                  <X className="ml-1 h-3 w-3 cursor-pointer" onClick={() => toggleArrayFilter("cities", city)} />
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search">Search Companies</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="search"
              placeholder="Company name or role..."
              value={filters.search}
              onChange={(e) => updateFilter("search", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Functional Areas */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Functional Area</Label>
          <div className="space-y-2">
            {functionalAreas.map((area) => (
              <div key={area.id} className="flex items-center space-x-2">
                <Checkbox
                  id={area.id}
                  checked={filters.functionalAreas.includes(area.label)}
                  onCheckedChange={() => toggleArrayFilter("functionalAreas", area.label)}
                />
                <Label htmlFor={area.id} className="text-sm flex items-center gap-2">
                  <span>{area.icon}</span>
                  {area.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Industry Sector</Label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {industries.map((industry) => (
              <div key={industry} className="flex items-center space-x-2">
                <Checkbox
                  id={industry}
                  checked={filters.industries.includes(industry)}
                  onCheckedChange={() => toggleArrayFilter("industries", industry)}
                />
                <Label htmlFor={industry} className="text-sm">
                  {industry}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Cities */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">City / Location</Label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {cities.map((city) => (
              <div key={city} className="flex items-center space-x-2">
                <Checkbox
                  id={city}
                  checked={filters.cities.includes(city)}
                  onCheckedChange={() => toggleArrayFilter("cities", city)}
                />
                <Label htmlFor={city} className="text-sm">
                  {city}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
