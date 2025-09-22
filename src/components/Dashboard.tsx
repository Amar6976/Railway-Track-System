import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Activity, Clock, TrendingUp, Users, Zap, AlertTriangle, Train, MapPin, Signal, Gauge } from "lucide-react";

interface KPI {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "stable";
  icon: React.ReactNode;
}

export function Dashboard() {
  const kpis: KPI[] = [
    {
      title: "Throughput",
      value: "142 trains/hr",
      change: "+12%",
      trend: "up",
      icon: <Train className="h-4 w-4 text-blue-600" />
    },
    {
      title: "Average Delay",
      value: "2.3 min",
      change: "-15%",
      trend: "down",
      icon: <Clock className="h-4 w-4 text-orange-600" />
    },
    {
      title: "Punctuality",
      value: "94.2%",
      change: "+3%",
      trend: "up",
      icon: <TrendingUp className="h-4 w-4 text-green-600" />
    },
    {
      title: "Track Utilization",
      value: "78%",
      change: "+5%",
      trend: "up",
      icon: <Signal className="h-4 w-4 text-purple-600" />
    }
  ];

  const systemStatus = {
    operational: 23,
    warning: 3,
    critical: 1,
    total: 27
  };

  return (
    <div className="space-y-6 relative z-10">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-xl railway-card shadow-lg">
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 20% 10%, hsl(var(--primary)/0.12), transparent 40%), radial-gradient(circle at 80% 0%, hsl(var(--accent)/0.08), transparent 40%)'
        }} />
        <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative">
          <div>
            <h2 className="text-2xl font-bold railway-heading mb-2">Railway Control Center</h2>
            <p className="text-muted-foreground flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-600" />
              Live monitoring across Central District - Section A
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="status-operational border">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 signal-light"></div>
              All Systems Operational
            </Badge>
            <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
              <Activity className="h-3 w-3 mr-1" />
              Live • 12s ago
            </Badge>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <Card key={index} className="railway-card hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-xs">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 shadow-sm">
                {kpi.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold railway-heading">
                {kpi.value}
              </div>
              <p className="text-xs text-muted-foreground">
                <span className={
                  kpi.trend === "up" ? "text-green-600 font-semibold" : kpi.trend === "down" ? "text-red-600 font-semibold" : "text-muted-foreground"
                }>
                  {kpi.change}
                </span>
                {" "}from last hour
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="railway-card hover:shadow-xl transition-all duration-300 backdrop-blur-xs">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-green-500" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
              <span>Operational</span>
              <Badge className="status-operational">
                {systemStatus.operational}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800">
              <span>Warning</span>
              <Badge className="status-warning">
                {systemStatus.warning}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
              <span>Critical</span>
              <Badge className="status-critical">
                {systemStatus.critical}
              </Badge>
            </div>
            <div className="pt-2">
              <div className="flex justify-between text-sm mb-2">
                <span>Overall Health</span>
                <span className="font-bold text-green-600">85%</span>
              </div>
              <Progress value={85} className="h-4 bg-gradient-to-r from-green-200 to-green-100" />
            </div>
          </CardContent>
        </Card>

        <Card className="railway-card hover:shadow-xl transition-all duration-300 backdrop-blur-xs">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Train className="h-5 w-5 text-blue-500" />
              Active Operations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all">
              <span className="flex items-center gap-2">
                <Train className="h-4 w-4 text-blue-600" />
                Trains in Motion
              </span>
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-bold">18</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 hover:shadow-md transition-all">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-green-600" />
                Trains at Stations
              </span>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 font-bold">9</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 hover:shadow-md transition-all">
              <span className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                Maintenance Windows
              </span>
              <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 font-bold">2</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border hover:shadow-md transition-all">
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-muted-foreground" />
                Emergency Holds
              </span>
              <Badge className="bg-muted text-foreground font-bold">0</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}