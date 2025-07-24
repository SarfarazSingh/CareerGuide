"use client"

import { Heart, ExternalLink, MapPin, Users, Shield, Wifi, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import type { Company } from "../types"

interface EnhancedCompanyDrawerProps {
  company: Company | null
  isOpen: boolean
  onClose: () => void
  isShortlisted: boolean
  onToggleShortlist: () => void
}

// ... existing imports ...

export function EnhancedCompanyDrawer({
  company,
  isOpen,
  onClose,
  isShortlisted,
  onToggleShortlist,
}: EnhancedCompanyDrawerProps) {
  if (!company) return null

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Building2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <SheetTitle className="text-xl">{company.name}</SheetTitle>
                <SheetDescription>{company.industrySector}</SheetDescription>
              </div>
            </div>
          </div>
        </SheetHeader>

        <ScrollArea className="h-full pb-6">
          <div className="space-y-6 mt-6">
            {/* Quick Actions */}
            <div className="flex space-x-2">
              <Button onClick={onToggleShortlist} variant={isShortlisted ? "default" : "outline"} className="flex-1">
                <Heart className={`h-4 w-4 mr-2 ${isShortlisted ? "fill-current" : ""}`} />
                {isShortlisted ? "Remove from Shortlist" : "Add to Shortlist"}
              </Button>
              {company.website && (
                <Button variant="outline" onClick={() => window.open(company.website, "_blank")}>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Company Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Company Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">{company.operationsFocus}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{company.industrySector}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Locations */}
            {(company.keyCities?.length ?? 0) > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(company.keyCities || []).map((location) => (
                      <Badge key={location} variant="outline" className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{location}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Available Roles */}
            {(company.roles?.length ?? 0) > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Available Roles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {(company.roles || []).map((role) => (
                      <div key={role} className="p-2 bg-gray-50 dark:bg-gray-800 rounded-md">
                        <span className="text-sm font-medium">{role}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Helpful Certifications */}
            {(company.helpfulCertifications?.length ?? 0) > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Helpful Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(company.helpfulCertifications || []).map((cert) => (
                      <Badge key={cert} variant="secondary">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Positioning Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Positioning Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">{company.positioningTips}</p>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}