export interface Filters {
  industries: string[]
  companySizes: string[]
  locations: string[]
  functionalAreas: string[]
  veteranHiring: boolean
  remoteWork: boolean
  securityClearance: boolean
  search: string
}

export interface Company {
  id: string
  name: string
  industrySector: string
  roles: string[]
  operationsFocus: string
  keyCities: string[]
  helpfulCertifications: string[]
  positioningTips: string
  size?: string
  veteranHiring?: boolean
  remoteWork?: boolean
  securityClearance?: boolean
}