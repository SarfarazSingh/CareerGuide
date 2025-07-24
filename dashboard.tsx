"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { FilterPanel } from "./components/filter-panel"
import { KPIBar } from "./components/kpi-bar"
import { ResultsTable } from "./components/results-table"
import { CompanyDrawer } from "./components/company-drawer"
import { ShortlistModal } from "./components/shortlist-modal"
import { companies } from "./data/companies"
import type { Company, FilterState, KPIData } from "./types"

export default function Dashboard() {
  const [filters, setFilters] = useState<FilterState>({
    functionalAreas: [],
    industries: [],
    cities: [],
    search: "",
  })

  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)
  const [shortlistedIds, setShortlistedIds] = useState<string[]>([])
  const [showShortlistModal, setShowShortlistModal] = useState(false)

  // Filter companies based on current filters
  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        const matchesName = company.name.toLowerCase().includes(searchLower)
        const matchesRoles = company.roles.some((role) => role.toLowerCase().includes(searchLower))
        if (!matchesName && !matchesRoles) return false
      }

      // Industry filter
      if (filters.industries.length > 0) {
        if (!filters.industries.some((industry) => company.industrySector.includes(industry))) return false
      }

      // Cities filter
      if (filters.cities.length > 0) {
        if (!filters.cities.some((city) => company.keyCities.includes(city))) return false
      }

      // Functional areas filter (simplified matching)
      if (filters.functionalAreas.length > 0) {
        const hasMatchingRole = filters.functionalAreas.some((area) => {
          return company.roles.some((role) => {
            if (area === "Operations" && (role.includes("Ops") || role.includes("Manager"))) return true
            if (area === "Security" && role.includes("Security")) return true
            if (area === "Project Management" && role.includes("Project")) return true
            if (area === "Logistics" && (role.includes("Logistics") || role.includes("Supply"))) return true
            if (area === "IT & Cyber" && (role.includes("IT") || role.includes("Cyber"))) return true
            if (area === "Safety & EHS" && (role.includes("EHS") || role.includes("Safety"))) return true
            return false
          })
        })
        if (!hasMatchingRole) return false
      }

      return true
    })
  }, [filters])

  // Calculate KPI data
  const kpiData: KPIData = useMemo(() => {
    const uniqueRoles = new Set(filteredCompanies.flatMap((c) => c.roles))
    const uniqueCities = new Set(filteredCompanies.flatMap((c) => c.keyCities))

    return {
      companies: filteredCompanies.length,
      roleTypes: uniqueRoles.size,
      cities: uniqueCities.size,
    }
  }, [filteredCompanies])

  const shortlistedCompanies = companies.filter((c) => shortlistedIds.includes(c.id))

  const toggleShortlist = (companyId: string) => {
    setShortlistedIds((prev) =>
      prev.includes(companyId) ? prev.filter((id) => id !== companyId) : [...prev, companyId],
    )
  }

  const exportCSV = () => {
    const csvContent = [
      ["Company", "Industry", "Roles", "Cities", "Certifications", "Tips"].join(","),
      ...shortlistedCompanies.map((company) =>
        [
          company.name,
          company.industrySector,
          company.roles.join("; "),
          company.keyCities.join("; "),
          company.helpfulCertifications.join("; "),
          company.positioningTips,
        ]
          .map((field) => `"${field}"`)
          .join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "veteran-career-shortlist.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  const exportPDF = () => {
    // In a real implementation, you'd use a library like jsPDF
    alert("PDF export would be implemented with jsPDF library")
  }

  return (
    <div className="h-screen flex flex-col bg-[#f5f7fa]">
      {/* Header */}
      <header className="bg-[#00224e] text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-[#d1a040] rounded-full"></div>
            <h1 className="text-xl font-bold">Veteran Career Coach</h1>
          </div>

          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 relative"
            onClick={() => setShowShortlistModal(true)}
          >
            <Star className="h-5 w-5 mr-2" />
            Shortlist
            {shortlistedIds.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#d1a040] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {shortlistedIds.length}
              </span>
            )}
          </Button>
        </div>
      </header>

      {/* KPI Bar */}
      <KPIBar data={kpiData} onCertificationGuideClick={() => alert("Certification guide would open here")} />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        <FilterPanel filters={filters} onFiltersChange={setFilters} />
        <ResultsTable
          companies={filteredCompanies}
          shortlistedIds={shortlistedIds}
          onCompanyClick={setSelectedCompany}
          onToggleShortlist={toggleShortlist}
        />
      </div>

      {/* Company Drawer */}
      <CompanyDrawer
        company={selectedCompany}
        isOpen={!!selectedCompany}
        onClose={() => setSelectedCompany(null)}
        isShortlisted={selectedCompany ? shortlistedIds.includes(selectedCompany.id) : false}
        onToggleShortlist={() => selectedCompany && toggleShortlist(selectedCompany.id)}
      />

      {/* Shortlist Modal */}
      <ShortlistModal
        isOpen={showShortlistModal}
        onClose={() => setShowShortlistModal(false)}
        shortlistedCompanies={shortlistedCompanies}
        onClearShortlist={() => setShortlistedIds([])}
        onExportCSV={exportCSV}
        onExportPDF={exportPDF}
      />
    </div>
  )
}
