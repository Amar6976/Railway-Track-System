import { 
  LayoutDashboard, 
  MapPin, 
  Brain, 
  Settings as SettingsIcon, 
  Play, 
  AlertCircle, 
  BarChart3,
  User,
  Shield,
  Bell,
  Moon,
  Sun,
  TrendingUp,
  TrendingDown,
  Zap,
  Clock,
  Activity
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";

export default function FigmaDesignShowcase() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="border-b bg-gradient-to-br from-card to-card/80 p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Railway Control System - Design Showcase
        </h1>

        {/* Header Components */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Header Components</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Light Mode Header */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Header - Light Mode</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Railway Control Center</div>
                        <div className="text-xs text-gray-600">Section A - Central District</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                        NORMAL OPERATION
                      </span>
                      <span className="px-2 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-medium flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        System Operational
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-right text-xs">
                      <div className="font-medium text-gray-900">Controller A</div>
                      <div className="text-gray-600">Day Shift</div>
                    </div>
                    <button className="p-1.5 border border-gray-300 rounded hover:bg-gray-50">
                      <Moon className="h-3 w-3" />
                    </button>
                    <button className="px-2 py-1.5 border border-gray-300 rounded text-xs flex items-center gap-1 hover:bg-gray-50">
                      <Shield className="h-3 w-3" />
                      <span>Supervisor</span>
                    </button>
                    <button className="p-1.5 bg-red-600 text-white rounded hover:bg-red-700 relative">
                      <Bell className="h-3 w-3" />
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-xs rounded-full flex items-center justify-center font-medium">
                        2
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Mode Header */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Header - Dark Mode</h3>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">Railway Control Center</div>
                        <div className="text-xs text-gray-400">Section A - Central District</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-gray-800 text-gray-200 rounded-full text-xs font-medium">
                        NORMAL OPERATION
                      </span>
                      <span className="px-2 py-1 bg-green-900 text-green-200 border border-green-800 rounded-full text-xs font-medium flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        System Operational
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-right text-xs">
                      <div className="font-medium text-white">Controller A</div>
                      <div className="text-gray-400">Day Shift</div>
                    </div>
                    <button className="p-1.5 border border-gray-600 text-gray-300 rounded hover:bg-gray-800">
                      <Sun className="h-3 w-3" />
                    </button>
                    <button className="px-2 py-1.5 border border-gray-600 text-gray-300 rounded text-xs flex items-center gap-1 hover:bg-gray-800">
                      <Shield className="h-3 w-3" />
                      <span>Supervisor</span>
                    </button>
                    <button className="p-1.5 bg-red-600 text-white rounded hover:bg-red-700 relative">
                      <Bell className="h-3 w-3" />
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-xs rounded-full flex items-center justify-center font-medium">
                        2
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Showcase */}
      <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Navigation Tabs</h2>
        <Card className="border-0 shadow-sm bg-gradient-to-br from-card to-card/80">
          <CardContent className="p-4">
            <div className="grid grid-cols-4 lg:grid-cols-8 gap-2">
              {[
                { label: "Dashboard", icon: LayoutDashboard, active: true },
                { label: "Live Tracking", icon: MapPin },
                { label: "AI Recommendations", icon: Brain },
                { label: "Manual Override", icon: SettingsIcon },
                { label: "Simulation", icon: Play },
                { label: "Alerts", icon: AlertCircle, badge: 2 },
                { label: "Analytics", icon: BarChart3 },
                { label: "Settings", icon: User }
              ].map((item, index) => (
                <div key={index} className={`flex flex-col items-center gap-1 p-3 rounded-lg border relative ${item.active ? 'bg-primary text-primary-foreground' : 'bg-card border-border'}`}>
                  <item.icon className="h-4 w-4" />
                  <span className="text-xs">{item.label}</span>
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dashboard Components */}
      <div className="p-6 space-y-6">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Key Dashboard Components
        </h2>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-0 shadow-sm bg-gradient-to-br from-card to-card/80">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Active Trains</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <div className="flex items-center text-sm text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" /> +12.5%
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-gradient-to-br from-card to-card/80">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">On-Time Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <div className="flex items-center text-sm text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" /> +2.1%
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-gradient-to-br from-card to-card/80">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Average Delay</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.3 min</div>
              <div className="flex items-center text-sm text-red-600 mt-1">
                <TrendingDown className="h-3 w-3 mr-1" /> +0.8 min
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-gradient-to-br from-card to-card/80">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">System Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <div className="flex items-center text-sm text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" /> +5.2%
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status Cards, AI Recommendations, System Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Trains Status */}
          <Card className="border-0 shadow-sm bg-gradient-to-br from-card to-card/80">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Active Trains
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { id: "EXP-001", status: "On Time", delay: null, color: "green" },
                { id: "REG-245", status: "Delayed", delay: "3 min", color: "yellow" },
                { id: "FRT-089", status: "Critical", delay: "12 min", color: "red" },
                { id: "EXP-034", status: "On Time", delay: null, color: "green" }
              ].map((train, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${train.color === 'green' ? 'bg-green-500' : train.color === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                    <span className="font-medium">{train.id}</span>
                  </div>
                  <div className="text-right text-sm">
                    <div className={`font-medium ${train.color === 'green' ? 'text-green-600' : train.color === 'yellow' ? 'text-yellow-600' : 'text-red-600'}`}>{train.status}</div>
                    {train.delay && <div className="text-xs text-gray-500">Delay: {train.delay}</div>}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card className="border-0 shadow-sm bg-gradient-to-br from-card to-card/80">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                AI Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-col gap-2">
                <span className="text-sm">Increase gap between Train EXP-001 and REG-245 by 2 min</span>
                <span className="text-sm">Optimize signal timing for Section C</span>
                <span className="text-sm">Schedule maintenance for Train FRT-089</span>
              </div>
            </CardContent>
          </Card>

          {/* System Alerts */}
          <Card className="border-0 shadow-sm bg-gradient-to-br from-card to-card/80">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                System Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-red-600" />
                <span className="text-sm font-medium text-red-600">Signal Failure - Section B</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-600">Minor Delay - Train REG-245</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-card p-4 mt-8">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>Last Update: 14:25:33</span>
            <span>Active Trains: 18</span>
            <span>System Load: 78%</span>
          </div>
          <div className="flex items-center gap-4">
            <span>AI Confidence: 94%</span>
            <span>Network Latency: 12ms</span>
            <span>Version 2.4.1</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
