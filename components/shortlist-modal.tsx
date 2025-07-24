"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Download, FileText, Trash2 } from "lucide-react"
import type { Company } from "../types"

interface ShortlistModalProps {
  isOpen: boolean
  onClose: () => void
  shortlistedCompanies: Company[]
  onClearShortlist: () => void
  onExportCSV: () => void
  onExportPDF: () => void
}

export function ShortlistModal({
  isOpen,
  onClose,
  shortlistedCompanies,
  onClearShortlist,
  onExportCSV,
  onExportPDF,
}: ShortlistModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Your Shortlist ({shortlistedCompanies.length} companies)</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={onExportCSV}>
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
              <Button variant="outline" size="sm" onClick={onExportPDF}>
                <FileText className="h-4 w-4 mr-2" />
                Export PDF Kit
              </Button>
              <Button variant="destructive" size="sm" onClick={onClearShortlist}>
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            </div>
          </DialogTitle>
        </DialogHeader>

        {shortlistedCompanies.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No companies shortlisted yet</h3>
            <p className="text-gray-500">Start exploring companies and add them to your shortlist</p>
          </div>
        ) : (
          <div className="space-y-4">
            {shortlistedCompanies.map((company) => (
              <div key={company.id} className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{company.name}</h3>
                  <Badge variant="outline">{company.industrySector}</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Key Roles:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {company.roles.slice(0, 3).map((role, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-medium text-gray-700">Cities:</span>
                    <p className="text-gray-600 mt-1">{company.keyCities.join(", ")}</p>
                  </div>
                </div>

                <div className="mt-3">
                  <span className="font-medium text-gray-700">Positioning Tip:</span>
                  <p className="text-gray-600 text-sm mt-1">{company.positioningTips}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
