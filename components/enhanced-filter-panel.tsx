"use client"

import { useState } from "react"
import { Search, Filter, ChevronDown, ChevronUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import type { Company, Filters } from "../types"

interface EnhancedFilterPanelProps {
  filters: Filters
  onFiltersChange: (filters: Filters) => void
  companies: Company[]
  filterCounts: any
}

export function EnhancedFilterPanel({ filters, onFiltersChange, companies, filterCounts }: EnhancedFilterPanelProps) {
  // Ensure filters has default values to prevent undefined errors
  const safeFilters: Filters = {
    industries: filters?.industries || [],
    companySizes: filters?.companySizes || [],
    locations: filters?.locations || [],
    functionalAreas: filters?.functionalAreas || [],
    veteranHiring: filters?.veteranHiring || false,
    remoteWork: filters?.remoteWork || false,
    securityClearance: filters?.securityClearance || false,
    search: filters?.search || "",
  }

  // Ensure companies is an array
  const safeCompanies = companies || []

  // Ensure filterCounts has default values
  const safeFilterCounts = filterCounts || {
    industries: {},
    companySizes: {},
    locations: {},
    functionalAreas: {},
    veteranHiring: 0,
    remoteWork: 0,
    securityClearance: 0,
  }

  const [openSections, setOpenSections] = useState({
    search: true,
    industry: true,
    size: false,
    location: false,
    functional: false,
    preferences: true,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const updateFilter = (key: keyof Filters, value: any) => {
    onFiltersChange({ ...safeFilters, [key]: value })
  }

  const toggleArrayFilter = (key: keyof Filters, value: string) => {
    const currentValues = safeFilters[key] as string[]
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value]
    updateFilter(key, newValues)
  }

  const getUniqueValues = (field: string): string[] => {
    const values = new Set<string>()
    safeCompanies.forEach((company: any) => {
      const value = company[field]
      if (Array.isArray(value)) {
        value.forEach((v) => values.add(v))
      } else if (typeof value === "string") {
        values.add(value)
      }
    })
    return Array.from(values).sort()
  }

  const industries = getUniqueValues("industrySector")
  const companySizes = getUniqueValues("size")
  const locations = getUniqueValues("keyCities")
  const functionalAreas = getUniqueValues("roles")

  return (
    <div className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col h-full">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-4">
          {/* Search */}
          <Collapsible open={openSections.search} onOpenChange={() => toggleSection("search")}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                <span className="font-medium">Search</span>
                {openSections.search ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search companies, roles, or keywords..."
                  value={safeFilters.search}
                  onChange={(e) => updateFilter("search", e.target.value)}
                  className="pl-10"
                />
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Separator />

          {/* Industry */}
          <Collapsible open={openSections.industry} onOpenChange={() => toggleSection("industry")}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Industry</span>
                  {safeFilters.industries.length > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {safeFilters.industries.length}
                    </Badge>
                  )}
                </div>
                {openSections.industry ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              {industries.map((industry) => (
                <div key={industry} className="flex items-center space-x-2">
                  <Checkbox
                    id={`industry-${industry}`}
                    checked={safeFilters.industries.includes(industry as Industry)}
                    onCheckedChange={() => toggleArrayFilter("industries", industry)}
                  />
                  <Label htmlFor={`industry-${industry}`} className="text-sm flex-1 cursor-pointer">
                    {industry}
                  </Label>
                  <span className="text-xs text-gray-500">({safeFilterCounts.industries[industry] || 0})</span>
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>

          <Separator />

          {/* Location */}
          <Collapsible open={openSections.location} onOpenChange={() => toggleSection("location")}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Location</span>
                  {safeFilters.locations.length > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {safeFilters.locations.length}
                    </Badge>
                  )}
                </div>
                {openSections.location ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              <ScrollArea className="h-48">
                {locations.map((location) => (
                  <div key={location} className="flex items-center space-x-2 py-1">
                    <Checkbox
                      id={`location-${location}`}
                      checked={safeFilters.locations.includes(location)}
                      onCheckedChange={() => toggleArrayFilter("locations", location)}
                    />
                    <Label htmlFor={`location-${location}`} className="text-sm flex-1 cursor-pointer">
                      {location}
                    </Label>
                    <span className="text-xs text-gray-500">({safeFilterCounts.locations[location] || 0})</span>
                  </div>
                ))}
              </ScrollArea>
            </CollapsibleContent>
          </Collapsible>

          <Separator />

          {/* Functional Area */}
          <Collapsible open={openSections.functional} onOpenChange={() => toggleSection("functional")}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Roles</span>
                  {safeFilters.functionalAreas.length > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {safeFilters.functionalAreas.length}
                    </Badge>
                  )}
                </div>
                {openSections.functional ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              <ScrollArea className="h-48">
                {functionalAreas.map((area) => (
                  <div key={area} className="flex items-center space-x-2 py-1">
                    <Checkbox
                      id={`area-${area}`}
                      checked={safeFilters.functionalAreas.includes(area)}
                      onCheckedChange={() => toggleArrayFilter("functionalAreas", area)}
                    />
                    <Label htmlFor={`area-${area}`} className="text-sm flex-1 cursor-pointer">
                      {area}
                    </Label>
                    <span className="text-xs text-gray-500">({safeFilterCounts.functionalAreas[area] || 0})</span>
                  </div>
                ))}
              </ScrollArea>
            </CollapsibleContent>
          </Collapsible>

          <Separator />
        </div>
      </div>
    </div>
  )
}
