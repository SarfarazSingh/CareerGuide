import type { Company, Filters, FilterCounts, KPIData } from "../types"

export function filterCompanies(companies: Company[], filters: Filters): Company[] {
  if (!companies || !Array.isArray(companies)) return []
  if (!filters) return companies

  return companies.filter((company) => {
    // Industry filter (using industrySector instead of industry)
    if (filters.industries?.length > 0 && !filters.industries.includes(company.industrySector)) {
      return false
    }

    // Company size filter
    if (filters.companySizes?.length > 0 && company.size && !filters.companySizes.includes(company.size)) {
      return false
    }

    // Location filter (using keyCities instead of locations)
    if (filters.locations?.length > 0) {
      const hasMatchingLocation = Array.isArray(company.keyCities) &&
        company.keyCities.some((location) => filters.locations.includes(location))
      if (!hasMatchingLocation) return false
    }

    // Functional Areas filter (using roles instead of functionalAreas)
    if (filters.functionalAreas?.length > 0) {
      const hasMatchingArea = Array.isArray(company.roles) &&
        company.roles.some((role) => filters.functionalAreas.includes(role))
      if (!hasMatchingArea) return false
    }

    // Preferences filters
    if (filters.veteranHiring && !company.veteranHiring) return false
    if (filters.remoteWork && !company.remoteWork) return false
    if (filters.securityClearance && !company.securityClearance) return false

    // Search filter
    if (filters.search?.trim()) {
      const searchTerm = filters.search.toLowerCase().trim()
      const searchableText = [
        company.name,
        company.industrySector,
        company.operationsFocus,
        ...(company.keyCities || []),
        ...(company.roles || []),
      ]
        .join(" ")
        .toLowerCase()

      if (!searchableText.includes(searchTerm)) {
        return false
      }
    }

    return true
  })
}

export function getFilterCounts(companies: Company[], currentFilters: Filters): FilterCounts {
  const counts: FilterCounts = {
    industries: {},
    companySizes: {},
    locations: {},
    functionalAreas: {},
  }

  const getFilteredCompaniesExcept = (excludeFilter: keyof Filters) => {
    const tempFilters = { ...currentFilters }
    if (Array.isArray(tempFilters[excludeFilter])) {
      (tempFilters[excludeFilter] as string[]) = []
    } else {
      (tempFilters[excludeFilter] as boolean) = false
    }
    return filterCompanies(companies, tempFilters)
  }

  // Industries (using industrySector)
  getFilteredCompaniesExcept("industries").forEach((company) => {
    if (company.industrySector) {
      counts.industries[company.industrySector] = (counts.industries[company.industrySector] || 0) + 1
    }
  })

  // Company Sizes
  getFilteredCompaniesExcept("companySizes").forEach((company) => {
    if (company.size) {
      counts.companySizes[company.size] = (counts.companySizes[company.size] || 0) + 1
    }
  })

  // Locations (using keyCities)
  getFilteredCompaniesExcept("locations").forEach((company) => {
    if (Array.isArray(company.keyCities)) {
      company.keyCities.forEach((location) => {
        counts.locations[location] = (counts.locations[location] || 0) + 1
      })
    }
  })

  // Functional Areas (using roles)
  getFilteredCompaniesExcept("functionalAreas").forEach((company) => {
    if (Array.isArray(company.roles)) {
      company.roles.forEach((role) => {
        counts.functionalAreas[role] = (counts.functionalAreas[role] || 0) + 1
      })
    }
  })

  return counts
}

export function calculateKPIData(companies: Company[]): KPIData {
  if (!companies || !Array.isArray(companies)) {
    return {
      companies: 0,
      roleTypes: 0,
      cities: 0,
      totalCompanies: 0,
      veteranFriendly: 0,
      remoteOpportunities: 0,
      clearanceRequired: 0,
    }
  }

  const uniqueCities = new Set<string>()
  const uniqueRoleTypes = new Set<string>()
  let veteranFriendlyCount = 0
  let remoteOpportunitiesCount = 0
  let clearanceRequiredCount = 0

  companies.forEach((company) => {
    if (Array.isArray(company.keyCities)) {
      company.keyCities.forEach((location) => uniqueCities.add(location))
    }

    if (Array.isArray(company.roles)) {
      company.roles.forEach((role) => uniqueRoleTypes.add(role))
    }

    if (company.veteranHiring) veteranFriendlyCount++
    if (company.remoteWork) remoteOpportunitiesCount++
    if (company.securityClearance) clearanceRequiredCount++
  })

  return {
    companies: companies.length,
    roleTypes: uniqueRoleTypes.size,
    cities: uniqueCities.size,
    totalCompanies: companies.length,
    veteranFriendly: veteranFriendlyCount,
    remoteOpportunities: remoteOpportunitiesCount,
    clearanceRequired: clearanceRequiredCount,
  }
}