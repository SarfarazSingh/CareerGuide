export enum Industry {
  TECHNOLOGY = "Technology",
  DEFENSE = "Defense",
  HEALTHCARE = "Healthcare",
  FINANCE = "Finance",
  CONSULTING = "Consulting",
  MANUFACTURING = "Manufacturing",
  ENERGY = "Energy",
  TELECOMMUNICATIONS = "Telecommunications",
  AEROSPACE = "Aerospace",
  LOGISTICS = "Logistics",
  RETAIL = "Retail",
  EDUCATION = "Education",
  GOVERNMENT = "Government",
  NONPROFIT = "Nonprofit",
  AUTOMOTIVE = "Automotive",
  CONSTRUCTION = "Construction",
  REAL_ESTATE = "Real Estate",
  MEDIA = "Media",
  TRANSPORTATION = "Transportation",
  HOSPITALITY = "Hospitality",
}

export enum CompanySize {
  STARTUP = "1-50",
  SMALL = "51-200",
  MEDIUM = "201-1000",
  LARGE = "1001-5000",
  ENTERPRISE = "5000+",
}

export enum Location {
  WASHINGTON_DC = "Washington, DC",
  NEW_YORK = "New York, NY",
  SAN_FRANCISCO = "San Francisco, CA",
  LOS_ANGELES = "Los Angeles, CA",
  CHICAGO = "Chicago, IL",
  BOSTON = "Boston, MA",
  SEATTLE = "Seattle, WA",
  AUSTIN = "Austin, TX",
  DENVER = "Denver, CO",
  ATLANTA = "Atlanta, GA",
  DALLAS = "Dallas, TX",
  PHOENIX = "Phoenix, AZ",
  SAN_DIEGO = "San Diego, CA",
  MIAMI = "Miami, FL",
  PHILADELPHIA = "Philadelphia, PA",
  HOUSTON = "Houston, TX",
  DETROIT = "Detroit, MI",
  MINNEAPOLIS = "Minneapolis, MN",
  PORTLAND = "Portland, OR",
  RALEIGH = "Raleigh, NC",
  REMOTE = "Remote",
}

export enum FunctionalArea {
  ENGINEERING = "Engineering",
  CYBERSECURITY = "Cybersecurity",
  PROJECT_MANAGEMENT = "Project Management",
  OPERATIONS = "Operations",
  SALES = "Sales",
  MARKETING = "Marketing",
  HUMAN_RESOURCES = "Human Resources",
  FINANCE = "Finance",
  LOGISTICS = "Logistics",
  CONSULTING = "Consulting",
  RESEARCH = "Research",
  QUALITY_ASSURANCE = "Quality Assurance",
  BUSINESS_DEVELOPMENT = "Business Development",
  CUSTOMER_SUCCESS = "Customer Success",
  DATA_ANALYTICS = "Data Analytics",
  PRODUCT_MANAGEMENT = "Product Management",
  DESIGN = "Design",
  LEGAL = "Legal",
  COMPLIANCE = "Compliance",
  TRAINING = "Training",
}

export interface Company {
  id: string
  name: string
  industry: Industry
  size: CompanySize
  locations: Location[]
  description: string
  veteranHiring: boolean
  remoteWork: boolean
  securityClearance: boolean
  functionalAreas: FunctionalArea[]
  roles: string[]
  benefits: string[]
  website: string
}

export interface Filters {
  industries: Industry[]
  companySizes: CompanySize[]
  locations: Location[]
  functionalAreas: FunctionalArea[]
  veteranHiring: boolean
  remoteWork: boolean
  securityClearance: boolean
  search: string
}

export interface FilterState extends Filters {}

export interface KPIData {
  totalCompanies: number
  veteranFriendly: number
  remoteOpportunities: number
  clearanceRequired: number
}
