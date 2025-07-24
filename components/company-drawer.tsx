"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ExternalLink, Star, MapPin, Award, Lightbulb } from "lucide-react"
import type { Company } from "../types"

interface CompanyDrawerProps {
  company: Company | null
  isOpen: boolean
  onClose: () => void
  isShortlisted: boolean
  onToggleShortlist: () => void
}

export function CompanyDrawer({ company, isOpen, onClose, isShortlisted, onToggleShortlist }: CompanyDrawerProps) {
  if (!company) return null

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader className="sticky top-0 bg-white pb-4 border-b">
          <div className="flex items-start justify-between">
            <div>
              <SheetTitle className="text-xl font-bold text-[#00224e]">{company.name}</SheetTitle>
              <p className="text-sm text-gray-500 mt-1">{company.industrySector}</p>
            </div>
            <Button
              variant={isShortlisted ? "default" : "outline"}
              size="sm"
              onClick={onToggleShortlist}
              className="flex items-center gap-2"
            >
              <Star className={`h-4 w-4 ${isShortlisted ? "fill-white" : ""}`} />
              {isShortlisted ? "Shortlisted" : "Add to Shortlist"}
            </Button>
          </div>
        </SheetHeader>

        <div className="space-y-6 pt-6">
          {/* Where You Fit */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Award className="h-5 w-5 text-[#d1a040]" />
              Where You Fit
            </h3>
            <div className="space-y-2">
              {company.roles.map((role, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#d1a040] rounded-full"></div>
                  <span className="text-sm text-gray-700">{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Operations Focus */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <div className="text-lg">🏭</div>
              Operations Focus
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{company.operationsFocus}</p>
          </div>

          {/* Cities & Presence */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#d1a040]" />
              Cities & Presence
            </h3>
            <div className="flex flex-wrap gap-2">
              {company.keyCities.map((city, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {city}
                </Badge>
              ))}
            </div>
          </div>

          {/* Helpful Certifications */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Award className="h-5 w-5 text-[#d1a040]" />
              Helpful Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {company.helpfulCertifications.map((cert, index) => (
                <Badge key={index} variant="secondary" className="text-sm cursor-pointer hover:bg-gray-200">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>

          {/* How to Position Yourself */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-[#d1a040]" />
              How to Position Yourself
            </h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 leading-relaxed">{company.positioningTips}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 pt-4 border-t">
            <Button className="w-full bg-[#00224e] hover:bg-[#00224e]/90" size="lg">
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit Careers Page
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
