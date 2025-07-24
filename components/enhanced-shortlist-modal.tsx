"use client"

import { Download, Trash2, ExternalLink, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Company } from "../types"

interface EnhancedShortlistModalProps {
  isOpen: boolean
  onClose: () => void
  shortlistedCompanies: Company[]
  onClearShortlist: () => void
  onExportPDF: () => void
}

export function EnhancedShortlistModal({
  isOpen,
  onClose,
  shortlistedCompanies,
  onClearShortlist,
  onExportPDF,
}: EnhancedShortlistModalProps) {
  const handleExportPDF = async () => {
    try {
      const response = await fetch("/api/export/pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ companies: shortlistedCompanies }),
      })

      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.style.display = "none"
        a.href = url
        a.download = "shortlisted-companies.pdf"
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
      } else {
        console.error("Failed to export PDF")
        onExportPDF() // Fallback to the original handler
      }
    } catch (error) {
      console.error("Error exporting PDF:", error)
      onExportPDF() // Fallback to the original handler
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-xl flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span>Your Shortlist</span>
              </DialogTitle>
              <DialogDescription>{shortlistedCompanies.length} companies saved for review</DialogDescription>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportPDF}
                disabled={shortlistedCompanies.length === 0}
              >
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onClearShortlist}
                disabled={shortlistedCompanies.length === 0}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            </div>
          </div>
        </DialogHeader>

        {shortlistedCompanies.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No companies shortlisted yet</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Start adding companies to your shortlist to compare them here.
            </p>
          </div>
        ) : (
          <ScrollArea className="max-h-[60vh]">
            <div className="space-y-4">
              {shortlistedCompanies.map((company) => (
                <Card key={company.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{company.name}</h3>
                          <Badge variant="outline">{company.industry}</Badge>
                          <Badge variant="secondary">{company.size}</Badge>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                          {company.description}
                        </p>

                        <div className="flex items-center space-x-2 mb-3">
                          {company.veteranHiring && (
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              Veteran Friendly
                            </Badge>
                          )}
                          {company.remoteWork && (
                            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                              Remote Work
                            </Badge>
                          )}
                          {company.securityClearance && (
                            <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                              Security Clearance
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {company.roles?.slice(0, 3).map((role) => (
                            <Badge key={role} variant="outline" className="text-xs">
                              {role}
                            </Badge>
                          ))}
                          {(company.roles?.length ?? 0) > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{company.roles.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(company.website, "_blank")}
                        className="ml-4"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  )
}
