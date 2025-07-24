"use client"

import { useState } from "react"
import {
  BookOpen,
  Award,
  Cloud,
  Brain,
  Truck,
  Settings,
  Shield,
  BarChart3,
  ChevronRight,
  DollarSign,
  Clock,
  Users,
  CheckCircle,
  Star,
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CertificationGuideModalProps {
  isOpen: boolean
  onClose: () => void
}

const certificationCategories = [
  {
    id: "pmp",
    title: "Project Management",
    icon: Award,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
    description: "Perfect for veterans with leadership and mission planning experience",
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    icon: Cloud,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400",
    description: "High-demand field with excellent remote work opportunities",
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: Brain,
    color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400",
    description: "Ideal for veterans with intelligence analysis backgrounds",
  },
  {
    id: "supply",
    title: "Supply Chain & Logistics",
    icon: Truck,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400",
    description: "Direct translation from military logistics experience",
  },
  {
    id: "operations",
    title: "Operations Excellence",
    icon: Settings,
    color: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400",
    description: "Lean Six Sigma and continuous improvement methodologies",
  },
  {
    id: "security",
    title: "Security",
    icon: Shield,
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400",
    description: "Entry-level security certifications for career changers",
  },
  {
    id: "cybersecurity",
    title: "Advanced Cybersecurity",
    icon: Shield,
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400",
    description: "Senior-level certifications for experienced professionals",
  },
  {
    id: "data",
    title: "Data Analytics",
    icon: BarChart3,
    color: "bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-400",
    description: "Perfect for veterans with analytical and reporting backgrounds",
  },
]

const certificationDetails = {
  pmp: {
    title: "Project Management Professional (PMP)",
    overview: {
      provider: "Project Management Institute (PMI)",
      cost: "$405 (PMI Member) / $555 (Non-member)",
      duration: "4 hours, 180 questions",
      difficulty: "Intermediate to Advanced",
      salary: "$115,000 - $135,000",
    },
    whyPerfect: [
      "Military service provides unparalleled experience in mission planning and resource management",
      "Veterans earn 25% more during civilian transition with PMP certification",
      "Direct translation of leadership and team management skills",
    ],
    militaryTranslation: [
      "Mission planning → Project initiation and planning",
      "Resource allocation → Budget and resource management",
      "Team leadership → Stakeholder management",
      "Risk assessment → Risk management",
      "After-action reviews → Lessons learned processes",
    ],
    veteranPrograms: [
      {
        name: "Vets2PM",
        description: "Specialized PMP training for veterans with $200 discount",
        features: ["Military experience application assistance", "DoD SkillBridge internship opportunities"],
      },
      {
        name: "Project Management Academy",
        description: "$200 veteran discount with DD214",
        features: ["Comprehensive training materials", "Expert instructor support"],
      },
    ],
    studyPlan: [
      {
        phase: "Foundation (Weeks 1-2)",
        tasks: [
          "Complete 35-hour education requirement",
          "Review PMBOK Guide 7th Edition",
          "Understand project lifecycles",
        ],
      },
      {
        phase: "Application (Week 3)",
        tasks: ["Submit PMI application with military experience", "Get application approved (5-7 days)"],
      },
      {
        phase: "Study Plan (Weeks 4-10)",
        tasks: ["Daily 2-3 hours study schedule", "Practice exams (target 80%+)", "Focus on situational questions"],
      },
      {
        phase: "Exam Preparation (Weeks 11-12)",
        tasks: ["Final review and mock exams", "Schedule exam appointment", "Take exam with confidence"],
      },
    ],
    careerPaths: [
      { role: "Project Manager", salary: "$95,000-125,000" },
      { role: "Program Manager", salary: "$115,000-145,000" },
      { role: "Operations Manager", salary: "$85,000-115,000" },
      { role: "Scrum Master", salary: "$90,000-120,000" },
    ],
  },
  cloud: {
    title: "Cloud Computing Certifications",
    overview: {
      provider: "AWS, Microsoft Azure, Google Cloud",
      cost: "$99 - $300 per exam",
      duration: "60-180 minutes per exam",
      difficulty: "Beginner to Advanced",
      salary: "$70,000 - $160,000",
    },
    whyPerfect: [
      "Fastest-growing IT sector with high demand",
      "Veterans uniquely positioned with systems administration backgrounds",
      "Excellent remote work opportunities",
      "Security clearance highly valued for government cloud projects",
    ],
    topCertifications: [
      {
        name: "AWS Certified Cloud Practitioner",
        cost: "$100 (50% discount available)",
        duration: "90 minutes, 65 questions",
        level: "Foundational",
        salary: "$70,000-90,000",
      },
      {
        name: "AWS Solutions Architect - Associate",
        cost: "$150",
        duration: "130 minutes, 65 questions",
        level: "Associate",
        salary: "$95,000-125,000",
      },
      {
        name: "Azure Fundamentals (AZ-900)",
        cost: "$99",
        duration: "60 minutes, 40-60 questions",
        level: "Foundational",
        salary: "$70,000-95,000",
      },
    ],
    veteranPrograms: [
      {
        name: "Cloud Veterans",
        description: "100% FREE for honorably discharged veterans",
        features: ["Free cloud training and certification prep", "Exam reimbursement", "Job placement services"],
      },
      {
        name: "Google Cloud Launchpad for Veterans",
        description: "No-cost 3-week training program",
        features: ["Virtual training", "Free exam voucher for first 500 participants"],
      },
      {
        name: "Microsoft MSSA",
        description: "17-week intensive programs",
        features: ["Cloud and cybersecurity focus", "Full-time commitment", "Job placement assistance"],
      },
    ],
    studyPlan: [
      {
        phase: "Choose Your Cloud (Week 1)",
        tasks: ["AWS: Largest market share", "Azure: Strong enterprise presence", "GCP: Innovative services"],
      },
      {
        phase: "Foundation Learning (Weeks 2-8)",
        tasks: [
          "Start with foundational certification",
          "Complete free tier hands-on labs",
          "Practice with sample questions",
        ],
      },
      {
        phase: "Hands-on Experience (Weeks 9-12)",
        tasks: [
          "Build projects in chosen cloud platform",
          "Document achievements in portfolio",
          "Network with cloud professionals",
        ],
      },
      {
        phase: "Certification (Weeks 13-16)",
        tasks: ["Schedule certification exam", "Complete final review", "Take exam and celebrate success!"],
      },
    ],
    militaryTranslation: [
      "Systems Administration → Cloud infrastructure management",
      "Network Operations → Cloud networking and security",
      "Security Clearance → Government cloud projects",
      "Technical Leadership → Cloud architecture decisions",
    ],
    careerPaths: [
      { role: "Cloud Engineer", salary: "$85,000-115,000" },
      { role: "Cloud Architect", salary: "$120,000-160,000" },
      { role: "DevOps Engineer", salary: "$95,000-135,000" },
      { role: "Site Reliability Engineer", salary: "$110,000-150,000" },
    ],
  },
  ai: {
    title: "AI & Machine Learning Certifications",
    overview: {
      provider: "Google, AWS, Microsoft",
      cost: "$200 - $300 per exam",
      duration: "2-3 hours per exam",
      difficulty: "Intermediate to Advanced",
      salary: "$120,000 - $160,000",
    },
    whyPerfect: [
      "Veterans with intelligence analysis backgrounds have direct transferable skills",
      "Military experience in pattern recognition and data-driven decision making",
      "Strong foundations in analytical thinking and problem-solving",
    ],
    veteranPrograms: [
      {
        name: "Southern Illinois University AI Program",
        description: "Free online AI training for veterans",
        features: ["Micro-credential certificates", "Research participation opportunities"],
      },
      {
        name: "Noble Desktop AI Training",
        description: "VA-approved AI training programs",
        features: ["GI Bill eligible", "Hands-on project-based learning"],
      },
    ],
    studyPlan: [
      {
        phase: "Mathematics Foundation (Weeks 1-4)",
        tasks: ["Statistics and probability", "Linear algebra basics", "Calculus fundamentals"],
      },
      {
        phase: "Programming Skills (Weeks 5-8)",
        tasks: ["Python programming", "Data structures", "Algorithm basics"],
      },
      {
        phase: "Core ML Concepts (Weeks 9-16)",
        tasks: ["Supervised learning", "Unsupervised learning", "Deep learning fundamentals"],
      },
      {
        phase: "Specialization (Weeks 17-24)",
        tasks: ["Choose focus area", "Build portfolio projects", "Prepare for certification exams"],
      },
    ],
    militaryTranslation: [
      "Intelligence Analysis → Pattern recognition and data interpretation",
      "Signal Processing → Feature extraction and analysis",
      "Mission Planning → Algorithm optimization",
      "Quality Assurance → Model validation and testing",
    ],
    careerPaths: [
      { role: "Machine Learning Engineer", salary: "$120,000-160,000" },
      { role: "Data Scientist", salary: "$110,000-150,000" },
      { role: "AI Research Scientist", salary: "$140,000-200,000" },
      { role: "ML Operations Engineer", salary: "$105,000-135,000" },
    ],
  },
  supply: {
    title: "Supply Chain Management & Logistics",
    overview: {
      provider: "CSCMP, APICS/ASCM",
      cost: "$625 - $895 per exam",
      duration: "3 hours, 150 questions",
      difficulty: "Intermediate",
      salary: "$80,000 - $115,000",
    },
    whyPerfect: [
      "Military logistics experience provides direct translation to civilian supply chain roles",
      "Veterans understand complex operations and resource constraints",
      "Multi-stakeholder coordination skills essential for modern supply chains",
    ],
    veteranPrograms: [
      {
        name: "Georgia Tech VET² Supply Chain Program",
        description: "Comprehensive supply chain and logistics management",
        features: ["Project management integration", "Optional 3-week internship placement"],
      },
      {
        name: "CSCMP Military Membership",
        description: "Free 1-year membership with exam purchase",
        features: ["Military-specific networking", "Supply Chain Quarterly magazine"],
      },
    ],
    studyPlan: [
      {
        phase: "Foundation Knowledge (Weeks 1-4)",
        tasks: ["Supply chain fundamentals", "Logistics basics", "Procurement principles"],
      },
      {
        phase: "Advanced Concepts (Weeks 5-8)",
        tasks: ["Demand planning", "Quality management", "Technology integration"],
      },
      {
        phase: "Practical Application (Weeks 9-12)",
        tasks: ["Case study analysis", "Process mapping", "Performance metrics"],
      },
      {
        phase: "Certification Preparation (Weeks 13-16)",
        tasks: ["Practice exams", "Focus on weak areas", "Final review and exam"],
      },
    ],
    militaryTranslation: [
      "Military Logistics → Supply chain operations",
      "Resource Planning → Demand and supply planning",
      "Vendor Management → Supplier relationship management",
      "Quality Control → Quality assurance processes",
    ],
    careerPaths: [
      { role: "Supply Chain Manager", salary: "$95,000-125,000" },
      { role: "Logistics Coordinator", salary: "$55,000-75,000" },
      { role: "Procurement Specialist", salary: "$65,000-85,000" },
      { role: "Operations Analyst", salary: "$70,000-95,000" },
    ],
  },
  operations: {
    title: "Operations Excellence (Lean Six Sigma)",
    overview: {
      provider: "ASQ, IASSC, Council for Six Sigma",
      cost: "$250 - $800 per exam",
      duration: "3-4 hours per exam",
      difficulty: "Intermediate to Advanced",
      salary: "$75,000 - $125,000",
    },
    whyPerfect: [
      "Military experience emphasizes continuous improvement and process optimization",
      "Veterans understand disciplined approaches to problem-solving",
      "Quality standards and performance improvement are core military principles",
    ],
    veteranPrograms: [
      {
        name: "Georgia Tech VET² Lean Six Sigma Black Belt Program",
        description: "Deep understanding of proven methodologies",
        features: ["Military transition integration", "World-renowned institution certification"],
      },
      {
        name: "VA Providence Training",
        description: "100% success rate for Lean Six Sigma Green Belt",
        features: ["Mentorship and guided instruction", "Free for all veterans"],
      },
    ],
    studyPlan: [
      {
        phase: "Quality Foundations (Weeks 1-3)",
        tasks: ["Quality management principles", "Process thinking", "Basic statistics"],
      },
      {
        phase: "Lean Principles (Weeks 4-6)",
        tasks: ["Waste identification", "Value stream mapping", "5S methodology"],
      },
      {
        phase: "Six Sigma Methodology (Weeks 7-12)",
        tasks: ["DMAIC process", "Statistical tools", "Measurement systems"],
      },
      {
        phase: "Certification Preparation (Weeks 13-16)",
        tasks: ["Practice exams", "Case studies", "Tools proficiency"],
      },
    ],
    militaryTranslation: [
      "Quality Assurance Programs → Six Sigma quality focus",
      "Standard Operating Procedures → Process standardization",
      "After Action Reviews → Continuous improvement cycles",
      "Resource Optimization → Waste elimination techniques",
    ],
    careerPaths: [
      { role: "Process Improvement Manager", salary: "$85,000-115,000" },
      { role: "Quality Manager", salary: "$80,000-110,000" },
      { role: "Operations Manager", salary: "$90,000-120,000" },
      { role: "Lean Six Sigma Consultant", salary: "$95,000-135,000" },
    ],
  },
  security: {
    title: "Security Certifications (CompTIA Security+)",
    overview: {
      provider: "CompTIA",
      cost: "$404",
      duration: "90 minutes, up to 90 questions",
      difficulty: "Entry Level",
      salary: "$80,000 - $105,000",
    },
    whyPerfect: [
      "DoD 8570 Compliant - required for many government positions",
      "Entry-level friendly - perfect for career changers",
      "Vendor-neutral - applicable across all security platforms",
      "High demand - consistently top-requested certification",
    ],
    veteranPrograms: [
      {
        name: "Vets2PM Security+ Training",
        description: "Hybrid self-paced and live mentorship model",
        features: ["CompTIA Training Partner approved", "DoD compliance focus"],
      },
      {
        name: "Free Training Programs",
        description: "Multiple free options available",
        features: ["ACT Now Education", "Boots to Books scholarships", "VET TEC coverage"],
      },
    ],
    studyPlan: [
      {
        phase: "IT Fundamentals (Weeks 1-2)",
        tasks: ["Basic Networking: TCP/IP, subnetting", "Operating Systems: Windows and Linux", "Hardware Concepts"],
      },
      {
        phase: "Security Concepts (Weeks 3-6)",
        tasks: ["Threats and Vulnerabilities", "Risk Management", "Cryptography basics"],
      },
      {
        phase: "Implementation (Weeks 7-10)",
        tasks: ["Network Security", "Identity Management", "Security Assessment"],
      },
      {
        phase: "Operations and Governance (Weeks 11-12)",
        tasks: ["Incident Response", "Compliance", "Final Review and Practice Exams"],
      },
    ],
    militaryTranslation: [
      "Communications Security → Network security implementation",
      "Information Assurance → Compliance and governance",
      "Physical Security → Defense in depth strategies",
      "Security Clearance Process → Risk assessment methodologies",
    ],
    careerPaths: [
      { role: "Security Analyst", salary: "$65,000-85,000" },
      { role: "Security Administrator", salary: "$75,000-95,000" },
      { role: "Security Engineer", salary: "$95,000-125,000" },
      { role: "Security Architect", salary: "$120,000-160,000" },
    ],
  },
  cybersecurity: {
    title: "Advanced Cybersecurity (CISSP)",
    overview: {
      provider: "ISC2",
      cost: "$749 + $125 annual membership",
      duration: "3-6 hours, 100-150 adaptive questions",
      difficulty: "Advanced",
      salary: "$125,000 - $160,000",
    },
    whyPerfect: [
      "World's premier cybersecurity certification - globally recognized gold standard",
      "Leadership focus - designed for managers and executives",
      "High salary impact - significant earning potential",
      "Security clearance advantage - DoD approved certification",
    ],
    veteranPrograms: [
      {
        name: "ISC2 Official Training",
        description: "Direct from certification body",
        features: ["Comprehensive curriculum", "Expert instructors"],
      },
      {
        name: "SANS Training",
        description: "Premium cybersecurity education",
        features: ["Hands-on labs", "Real-world scenarios"],
      },
    ],
    studyPlan: [
      {
        phase: "Experience Validation (Week 1)",
        tasks: ["Document 5 years experience", "Plan endorsement process", "Set study timeline"],
      },
      {
        phase: "Domain Study (Weeks 2-16)",
        tasks: ["Focus on 1-2 domains per 2 weeks", "Read official guide", "Relate to military experience"],
      },
      {
        phase: "Practice and Review (Weeks 17-20)",
        tasks: ["Practice exams (80%+ scores)", "Focus on weak areas", "Exam strategies"],
      },
      {
        phase: "Certification and Maintenance (Weeks 21+)",
        tasks: ["Book exam", "Endorsement process", "CPE requirements planning"],
      },
    ],
    militaryTranslation: [
      "Security Clearance Investigations → Risk management processes",
      "Information Systems Security → Technical security controls",
      "Physical Security Programs → Comprehensive security governance",
      "Incident Response → Security operations and management",
    ],
    careerPaths: [
      { role: "Chief Information Security Officer", salary: "$180,000-250,000" },
      { role: "Security Manager", salary: "$120,000-160,000" },
      { role: "Security Architect", salary: "$130,000-170,000" },
      { role: "Risk Manager", salary: "$110,000-145,000" },
    ],
  },
  data: {
    title: "Data Analytics Certifications",
    overview: {
      provider: "Google, IBM, Microsoft",
      cost: "$59/month - $4,865",
      duration: "6-11 months self-paced",
      difficulty: "Beginner to Intermediate",
      salary: "$55,000 - $95,000",
    },
    whyPerfect: [
      "Veterans with intelligence analysis backgrounds have direct transferable skills",
      "Military experience in pattern recognition and data-driven decision making",
      "Strong foundations in report writing and analytical thinking",
    ],
    topCertifications: [
      {
        name: "Google Data Analytics Professional Certificate",
        cost: "$59/month (typically 6 months = $354)",
        duration: "Self-paced, approximately 6 months",
        level: "Beginner",
        salary: "$65,000-85,000",
      },
      {
        name: "IBM Data Analyst Professional Certificate",
        duration: "11 months to complete 8 courses",
        skills: "Python, SQL, Excel, IBM Cognos Analytics",
        level: "Beginner",
      },
      {
        name: "Microsoft Power BI Data Analyst Associate",
        cost: "₹4,865 (approximately $60)",
        exam: "PL-300: Microsoft Power BI Data Analyst",
        level: "Associate",
      },
    ],
    veteranPrograms: [
      {
        name: "Noble Desktop Data Analytics Training",
        description: "VA-approved programs with GI Bill coverage",
        features: ["Project-based learning approach", "Data Analytics Certificate available"],
      },
      {
        name: "Alteryx SparkED Military Program",
        description: "Free 90-day license to Alteryx Designer",
        features: ["Over 200,000 learners served", "DoD SkillBridge partnership"],
      },
    ],
    studyPlan: [
      {
        phase: "Foundation Tools (Weeks 1-4)",
        tasks: ["Excel/Google Sheets basics", "SQL fundamentals", "Statistics overview"],
      },
      {
        phase: "Data Processing (Weeks 5-8)",
        tasks: ["Data cleaning techniques", "Data transformation", "Exploratory analysis"],
      },
      {
        phase: "Visualization and Analysis (Weeks 9-16)",
        tasks: ["Tableau/Power BI", "Python/R basics", "Business intelligence"],
      },
      {
        phase: "Specialization and Portfolio (Weeks 17-24)",
        tasks: ["Domain focus", "Portfolio projects", "Job preparation"],
      },
    ],
    militaryTranslation: [
      "Intelligence Reports → Data storytelling and visualization",
      "Trend Analysis → Pattern recognition in data",
      "Briefing Skills → Presenting analytical findings",
      "Attention to Detail → Data quality and accuracy",
      "Mission Analysis → Business problem solving",
    ],
    careerPaths: [
      { role: "Data Analyst", salary: "$55,000-75,000" },
      { role: "Business Intelligence Analyst", salary: "$65,000-85,000" },
      { role: "Marketing Analyst", salary: "$60,000-80,000" },
      { role: "Operations Research Analyst", salary: "$75,000-95,000" },
    ],
  },
}

export function CertificationGuideModal({ isOpen, onClose }: CertificationGuideModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("pmp")

  const selectedCert = certificationDetails[selectedCategory as keyof typeof certificationDetails]

  if (!selectedCert) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl h-[90vh] p-0 flex flex-col">
        <DialogHeader className="p-6 pb-0 flex-shrink-0">
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-blue-600" />
            Comprehensive Veteran Certification Guide
          </DialogTitle>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Your pathway to civilian career success through industry-recognized certifications
          </p>
        </DialogHeader>

        <div className="flex flex-1 overflow-hidden min-h-0">
          {/* Sidebar Navigation */}
          <div className="w-80 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <ScrollArea className="h-full p-4">
              <div className="space-y-2">
                {certificationCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "ghost"}
                    className="w-full justify-start h-auto p-4 text-left"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <category.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{category.title}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                          {category.description}
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <ScrollArea className="flex-1">
              <div className="p-6 space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{selectedCert.title}</h2>

                  {/* Overview Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                        <div className="text-sm font-medium">Cost</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{selectedCert.overview.cost}</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <div className="text-sm font-medium">Duration</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{selectedCert.overview.duration}</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Star className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                        <div className="text-sm font-medium">Difficulty</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {selectedCert.overview.difficulty}
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                        <div className="text-sm font-medium">Provider</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{selectedCert.overview.provider}</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                        <div className="text-sm font-medium">Avg Salary</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{selectedCert.overview.salary}</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Tabs defaultValue="overview" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="programs">Veteran Programs</TabsTrigger>
                    <TabsTrigger value="study">Study Plan</TabsTrigger>
                    <TabsTrigger value="translation">Military Skills</TabsTrigger>
                    <TabsTrigger value="careers">Career Paths</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    {/* Why Perfect for Veterans */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          Why This Certification is Perfect for Veterans
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="max-h-48">
                          <ul className="space-y-2 pr-4">
                            {(selectedCert.whyPerfect || []).map((reason, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{reason}</span>
                              </li>
                            ))}
                          </ul>
                        </ScrollArea>
                      </CardContent>
                    </Card>

                    {/* Top Certifications (for categories that have them) */}
                    {selectedCert.topCertifications && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Top Certifications in This Category</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ScrollArea className="max-h-64">
                            <div className="space-y-4 pr-4">
                              {selectedCert.topCertifications.map((cert, index) => (
                                <div key={index} className="border rounded-lg p-4">
                                  <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-semibold">{cert.name}</h4>
                                    <Badge variant="outline">{cert.level}</Badge>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                                    <div>Cost: {cert.cost}</div>
                                    <div>Duration: {cert.duration}</div>
                                    {cert.salary && <div>Salary: {cert.salary}</div>}
                                    {cert.skills && <div>Skills: {cert.skills}</div>}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </ScrollArea>
                        </CardContent>
                      </Card>
                    )}
                  </TabsContent>

                  <TabsContent value="programs" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-blue-600" />
                          Veteran-Specific Training Programs
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="max-h-96">
                          <div className="space-y-6 pr-4">
                            {(selectedCert.veteranPrograms || []).map((program, index) => (
                              <div key={index} className="border rounded-lg p-4">
                                <h4 className="font-semibold text-lg mb-2">{program.name}</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-3">{program.description}</p>
                                {program.features && (
                                  <ul className="space-y-1">
                                    {program.features.map((feature, fIndex) => (
                                      <li key={fIndex} className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="study" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-purple-600" />
                          Ready Reckoner Study Plan
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="max-h-96">
                          <div className="space-y-6 pr-4">
                            {(selectedCert.studyPlan || []).map((phase, index) => (
                              <div key={index} className="border-l-4 border-blue-500 pl-4">
                                <h4 className="font-semibold text-lg mb-2">{phase.phase}</h4>
                                <ul className="space-y-2">
                                  {(phase.tasks || []).map((task, tIndex) => (
                                    <li key={tIndex} className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                      <span className="text-sm">{task}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="translation" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-yellow-600" />
                          Military Experience Translation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="max-h-64">
                          <div className="space-y-3 pr-4">
                            {(selectedCert.militaryTranslation || []).map((translation, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                              >
                                <ChevronRight className="h-4 w-4 text-blue-600" />
                                <span className="text-sm">{translation}</span>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="careers" className="space-y-6">
                    {selectedCert.careerPaths && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-green-600" />
                            Career Progression Paths
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ScrollArea className="max-h-64">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-4">
                              {selectedCert.careerPaths.map((career, index) => (
                                <div key={index} className="border rounded-lg p-4">
                                  <h4 className="font-semibold text-lg">{career.role}</h4>
                                  <div className="text-green-600 font-medium">{career.salary}</div>
                                </div>
                              ))}
                            </div>
                          </ScrollArea>
                        </CardContent>
                      </Card>
                    )}
                  </TabsContent>
                </Tabs>

                {/* Funding Options */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      Veteran Funding Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">GI Bill Benefits</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Exam costs covered under GI Bill for approved certifications
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">VET TEC Program</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Full coverage for technology-focused certifications
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Military Discounts</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Up to $200 savings with veteran status verification
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
