"use client"

import Image from "next/image"
import { Search, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Guided Ambitions - Find Your Next Career Opportunity</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover veteran-friendly companies that value your military experience and offer the career growth you
          deserve.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart Search</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Filter by industry, location, security clearance requirements, and more to find your perfect match.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Veteran-Friendly</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                All companies in our database actively recruit veterans and understand military experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Career Growth</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Find companies that offer clear advancement paths and professional development opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
