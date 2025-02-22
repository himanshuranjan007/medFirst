"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StaticLineChart from "./Chart"

export function InsightsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Insights and Analytics</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Real-time data and analytics to help you make informed decisions
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Tabs defaultValue="distribution" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="distribution">Patient Distribution</TabsTrigger>
              <TabsTrigger value="flow">Patient Flow</TabsTrigger>
              <TabsTrigger value="category">Category Analysis</TabsTrigger>
              <TabsTrigger value="resources">Resource Allocation</TabsTrigger>
            </TabsList>
            <TabsContent value="distribution" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Patient Distribution by Time Slot</CardTitle>
                  <CardDescription>Analysis of patient arrivals and waiting times</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="relative h-[400px] w-full">
                    <StaticLineChart />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="flow" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Patient Flow Analysis</CardTitle>
                  <CardDescription>Real-time monitoring of patient flow and waiting times</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="relative h-[400px] w-full">
                    <StaticLineChart />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="category" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Patient Distribution by Category</CardTitle>
                  <CardDescription>Breakdown of patients by insurance and payment type</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="relative h-[400px] w-full">
                    <StaticLineChart />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="resources" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Resource Allocation</CardTitle>
                  <CardDescription>Analysis of resource utilization and efficiency</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-[400px] w-full">
                    <StaticLineChart />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

