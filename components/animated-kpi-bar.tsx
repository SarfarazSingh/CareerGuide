"use client"

import { motion } from "framer-motion"
import { Building2, Users, MapPin, Shield, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { KPIData } from "../types"

interface AnimatedKPIBarProps {
  data: KPIData
  onCertificationGuideClick: () => void
}

export function AnimatedKPIBar({ data, onCertificationGuideClick }: AnimatedKPIBarProps) {
  const kpis = [
    {
      icon: Building2,
      label: "Total Companies",
      value: data.totalCompanies,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Users,
      label: "Locations",
      value: "75+",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: MapPin,
      label: "Roles",
      value: "170+",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Shield,
      label: "Industries",
      value: "50+",
      color: "text-orange-600 dark:text-orange-400",
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <div className={`p-2 rounded-lg bg-gray-50 dark:bg-gray-700 ${kpi.color}`}>
                <kpi.icon className="h-5 w-5" />
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-2xl font-bold text-gray-900 dark:text-white"
                >
                  {kpi.value}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{kpi.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onCertificationGuideClick}
          className="flex items-center space-x-2 bg-transparent"
        >
          <BookOpen className="h-4 w-4" />
          <span>Certification Guide</span>
        </Button>
      </div>
    </div>
  )
}
