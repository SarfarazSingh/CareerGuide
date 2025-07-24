"use client"

import { useMemo } from "react"
import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { EnhancedFilterPanel } from "./components/enhanced-filter-panel"
import { AnimatedKPIBar } from "./components/animated-kpi-bar"
import { ResultsTable } from "./components/results-table"
import { EnhancedCompanyDrawer } from "./components/enhanced-company-drawer"
import { EnhancedShortlistModal } from "./components/enhanced-shortlist-modal"
import { FilterChips } from "./components/filter-chips"
import { ErrorBoundary } from "./components/error-boundary"
import { ThemeProvider } from "./components/theme-provider"
import { useStore } from "./lib/store"
import { companies } from "./data/companies"
import { filterCompanies, getFilterCounts, calculateKPIData } from "./lib/filter"
import type { Filters } from "./types"
import { CertificationGuideModal } from "./components/certification-guide-modal"

function DashboardContent() {
  const {
    filters,
    setFilters,
    updateFilter,
    clearFilters,
    shortlistedIds,
    toggleShortlist,
    clearShortlist,
    selectedCompany,
    setSelectedCompany,
    showShortlistModal,
    setShowShortlistModal,
    showCertificationGuide,
    setShowCertificationGuide,
  } = useStore()

  const safeFilters = filters || {
    industries: [],
    companySizes: [],
    locations: [],
    functionalAreas: [],
    veteranHiring: false,
    remoteWork: false,
    securityClearance: false,
    search: "",
  }

  const safeShortlistedIds = shortlistedIds || []

  const filteredCompanies = useMemo(() => {
    if (!companies || !Array.isArray(companies)) return []
    return filterCompanies(companies, safeFilters)
  }, [safeFilters])

  const kpiData = useMemo(() => calculateKPIData(filteredCompanies), [filteredCompanies])

  const shortlistedCompanies = useMemo(() => {
    if (!companies || !Array.isArray(companies) || !safeShortlistedIds) return []
    return companies.filter((c) => safeShortlistedIds.includes(c.id))
  }, [safeShortlistedIds])

  const handleRemoveFilter = (type: keyof Filters, value: string | boolean) => {
    if (!safeFilters) return
    if (type === "search") {
      updateFilter("search", "")
    } else if (Array.isArray(safeFilters[type])) {
      const currentValues = (safeFilters[type] as string[]) || []
      const updatedValues = currentValues.filter((item) => item !== value)
      updateFilter(type, updatedValues as any)
    } else {
      updateFilter(type, false as any)
    }
  }

  const filterCounts = useMemo(() => {
    if (!companies || !Array.isArray(companies)) {
      return {
        industries: {},
        companySizes: {},
        locations: {},
        functionalAreas: {},
      }
    }
    return getFilterCounts(companies, safeFilters)
  }, [safeFilters])

  const hasActiveFilters = useMemo(() => {
    if (!safeFilters) return false
    return Object.entries(safeFilters).some(([_, value]) => {
      if (Array.isArray(value)) return value.length > 0
      if (typeof value === "boolean") return value
      if (typeof value === "string") return value.length > 0
      return false
    })
  }, [safeFilters])

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f7fa] dark:bg-gray-900">
      <Header />

      {!hasActiveFilters && <HeroSection />}

      <main className="flex-grow overflow-y-auto px-4 md:px-8 py-6 space-y-6">
        <AnimatedKPIBar data={kpiData} onCertificationGuideClick={() => setShowCertificationGuide(true)} />
        <FilterChips filters={safeFilters} onRemoveFilter={handleRemoveFilter} onClearAll={clearFilters} />

        <div className="flex flex-col lg:flex-row gap-6">
          <EnhancedFilterPanel
            filters={safeFilters}
            onFiltersChange={setFilters}
            companies={companies || []}
            filterCounts={filterCounts}
          />
          <ResultsTable
            companies={filteredCompanies}
            shortlistedIds={safeShortlistedIds}
            onCompanyClick={setSelectedCompany}
            onToggleShortlist={toggleShortlist}
          />
        </div>
      </main>

      <EnhancedCompanyDrawer
        company={selectedCompany}
        isOpen={!!selectedCompany}
        onClose={() => setSelectedCompany(null)}
        isShortlisted={selectedCompany ? safeShortlistedIds.includes(selectedCompany.id) : false}
        onToggleShortlist={() => selectedCompany && toggleShortlist(selectedCompany.id)}
      />

      <EnhancedShortlistModal
        isOpen={showShortlistModal || false}
        onClose={() => setShowShortlistModal(false)}
        shortlistedCompanies={shortlistedCompanies}
        onClearShortlist={clearShortlist}
        onExportPDF={() => alert("PDF Export functionality will be implemented here.")}
      />

      <CertificationGuideModal
        isOpen={showCertificationGuide || false}
        onClose={() => setShowCertificationGuide(false)}
      />
    </div>
  )
}

export default function EnhancedDashboard() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <DashboardContent />
      </ThemeProvider>
    </ErrorBoundary>
  )
}
