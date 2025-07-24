"use client"

import { useState } from "react"
import { Heart, ExternalLink, MapPin, Users, Shield, Wifi, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Company } from "../types"

interface ResultsTableProps {
  companies: Company[]
  shortlistedIds: string[]
  onCompanyClick: (company: Company) => void
  onToggleShortlist: (companyId: string) => void
  loading?: boolean
}

export function ResultsTable({
  companies,
  shortlistedIds,
  onCompanyClick,
  onToggleShortlist,
  loading,
}: ResultsTableProps) {
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null)

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center py-20">
        <p>Loading companies...</p>
      </div>
    )
  }

  if (!companies.length) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-600 dark:text-gray-400 py-12">
        <div className="text-center">
          <Building2 className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium">No companies found</h3>
          <p>Try adjusting your filters to see more results.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{companies.length} Companies Found</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {companies.map((company) => (
          <Card
            key={company.id}
            className={`cursor-pointer transition shadow-sm hover:shadow-md ${
              hoveredCompany === company.id ? "ring-2 ring-blue-500" : ""
            }`}
            onMouseEnter={() => setHoveredCompany(company.id)}
            onMouseLeave={() => setHoveredCompany(null)}
            onClick={() => onCompanyClick(company)}
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold">{company.name}</h3>
                    {company.industry && <Badge variant="outline">{company.industry}</Badge>}
                    {company.size && <Badge variant="secondary">{company.size}</Badge>}
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">{company.description}</p>

                  <div className="text-sm mb-2">
                    {(company.locations || []).slice(0, 2).join(", ")}
                    {company.locations?.length > 2 && ` +${company.locations.length - 2} more`}
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {company.veteranHiring && <Badge variant="outline">Veteran Friendly</Badge>}
                    {company.remoteWork && <Badge variant="outline"><Wifi className="h-3 w-3 mr-1" />Remote</Badge>}
                    {company.securityClearance && <Badge variant="outline"><Shield className="h-3 w-3 mr-1" />Clearance</Badge>}
                  </div>

                  <div className="mt-3">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-300">Functional Areas:</p>
                    <div className="flex flex-wrap gap-1">
                      {(company.functionalAreas || []).slice(0, 4).map((area) => (
                        <Badge key={area} variant="outline" className="text-xs">{area}</Badge>
                      ))}
                      {company.functionalAreas?.length > 4 && (
                        <Badge variant="outline" className="text-xs">+{company.functionalAreas.length - 4} more</Badge>
                      )}
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-300">Available Roles:</p>
                    <div className="flex flex-wrap gap-1">
                      {(company.roles || []).slice(0, 3).map((role) => (
                        <Badge key={role} variant="secondary" className="text-xs">{role}</Badge>
                      ))}
                      {company.roles?.length > 3 && (
                        <Badge variant="secondary" className="text-xs">+{company.roles.length - 3} more</Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-2 ml-4">
                  <Button
                    variant={shortlistedIds.includes(company.id) ? "default" : "outline"}
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      onToggleShortlist(company.id)
                    }}
                  >
                    <Heart className={`h-4 w-4 mr-1 ${shortlistedIds.includes(company.id) ? "fill-red-500" : ""}`} />
                    {shortlistedIds.includes(company.id) ? "Shortlisted" : "Shortlist"}
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(company.website, "_blank")
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Visit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
