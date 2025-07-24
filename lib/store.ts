"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Company, Filters } from "../types"

interface StoreState {
  // Filters
  filters: Filters
  setFilters: (filters: Filters) => void
  updateFilter: <K extends keyof Filters>(key: K, value: Filters[K]) => void
  clearFilters: () => void

  // Shortlist
  shortlistedIds: string[]
  toggleShortlist: (id: string) => void
  clearShortlist: () => void

  // UI State
  selectedCompany: Company | null
  setSelectedCompany: (company: Company | null) => void
  showShortlistModal: boolean
  setShowShortlistModal: (show: boolean) => void
  showCertificationGuide: boolean
  setShowCertificationGuide: (show: boolean) => void
}

const defaultFilters: Filters = {
  industries: [],
  companySizes: [],
  locations: [],
  functionalAreas: [],
  veteranHiring: false,
  remoteWork: false,
  securityClearance: false,
  search: "",
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Initial state
      filters: defaultFilters,
      shortlistedIds: [],
      selectedCompany: null,
      showShortlistModal: false,
      showCertificationGuide: false,

      // Filter actions
      setFilters: (filters) => set({ filters }),
      updateFilter: (key, value) =>
        set((state) => ({
          filters: { ...state.filters, [key]: value },
        })),
      clearFilters: () => set({ filters: defaultFilters }),

      // Shortlist actions
      toggleShortlist: (id) =>
        set((state) => ({
          shortlistedIds: state.shortlistedIds.includes(id)
            ? state.shortlistedIds.filter((shortlistId) => shortlistId !== id)
            : [...state.shortlistedIds, id],
        })),
      clearShortlist: () => set({ shortlistedIds: [] }),

      // UI actions
      setSelectedCompany: (company) => set({ selectedCompany: company }),
      setShowShortlistModal: (show) => set({ showShortlistModal: show }),
      setShowCertificationGuide: (show) => set({ showCertificationGuide: show }),
    }),
    {
      name: "veteran-career-coach-storage",
      partialize: (state) => ({
        filters: state.filters,
        shortlistedIds: state.shortlistedIds,
      }),
    },
  ),
)
