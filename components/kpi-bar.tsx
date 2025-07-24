"use client"
import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"
import type { KPIData } from "../types"

interface KPIBarProps {
  data: KPIData
  onCertificationGuideClick: () => void
}

export function KPIBar({ data, onCertificationGuideClick }: KPIBarProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#00224e]">{data.companies}</span>
            <span className="text-gray-600">Companies</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#00224e]">{data.roleTypes}</span>
            <span className="text-gray-600">Role Types</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#00224e]">{data.cities}</span>
            <span className="text-gray-600">Cities</span>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onCertificationGuideClick}
          className="flex items-center gap-2 bg-transparent"
        >
          <GraduationCap className="h-4 w-4" />
          Certification Guide
        </Button>
      </div>
    </div>
  )
}
