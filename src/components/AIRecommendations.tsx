import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Brain, CheckCircle, XCircle, Clock, AlertTriangle, TrendingUp, Sparkles, Zap, Bot, Activity } from "lucide-react";
import { useState } from "react";

interface Recommendation {
  id: string;
  type: "priority" | "hold" | "reroute" | "speed_adjustment";
  title: string;
  description: string;
  train: string;
  reasoning: string;
  confidence: number;
  impact: "high" | "medium" | "low";
  timeToExecute: string;
  benefits: string[];
}

export function AIRecommendations() {
  const recommendations: Recommendation[] = [
    {
      id: "R001",
      type: "priority",
      title: "Prioritize Express A",
      description: "Give priority to Express A at Junction 2 to maintain schedule",
      train: "Express A (T001)",
      reasoning: "Express A is carrying 340 passengers and has a tight connection at Central Station. Delaying it would cascade to 3 other services.",
      confidence: 92,
      impact: "high",
      timeToExecute: "Immediate",
      benefits: ["Maintains on-time performance", "Prevents passenger delays", "Optimizes network flow"]
    },
    {
      id: "R002",
      type: "hold",
      title: "Hold Local B at North Station",
      description: "Keep Local B at platform for 3 minutes to optimize traffic flow",
      train: "Local B (T002)",
      reasoning: "Freight C is approaching from the opposite direction. A brief hold will prevent conflicts and reduce overall delay.",
      confidence: 87,
      impact: "medium",
      timeToExecute: "3 minutes",
      benefits: ["Prevents track conflicts", "Reduces system-wide delays"]
    },
    {
      id: "R003",
      type: "reroute",
      title: "Reroute Regional E via Track 4",
      description: "Redirect Regional E to Track 4 due to maintenance on Track 2",
      train: "Regional E (T005)",
      reasoning: "Track 2 maintenance window starting in 15 minutes. Rerouting now prevents service disruption.",
      confidence: 95,
      impact: "low",
      timeToExecute: "Next signal",
      benefits: ["Avoids maintenance conflicts", "Maintains service continuity"]
    },
    {
      id: "R004",
      type: "speed_adjustment",
      title: "Reduce Speed for Freight C",
      description: "Decrease speed to 40 km/h to improve following distance",
      train: "Freight C (T003)",
      reasoning: "Current speed profile is creating bunching effect. Speed reduction will improve traffic flow and safety margins.",
      confidence: 78,
      impact: "low",
      timeToExecute: "Next kilometer",
      benefits: ["Improves safety margins", "Reduces energy consumption", "Smooths traffic flow"]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "priority": return <TrendingUp className="h-4 w-4" />;
      case "hold": return <Clock className="h-4 w-4" />;
      case "reroute": return <AlertTriangle className="h-4 w-4" />;
      case "speed_adjustment": return <Brain className="h-4 w-4" />;
      default: return <Brain className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "priority": return "bg-blue-100 text-blue-800";
      case "hold": return "bg-yellow-100 text-yellow-800";
      case "reroute": return "bg-orange-100 text-orange-800";
      case "speed_adjustment": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high": return "text-red-600";
      case "medium": return "text-yellow-600";
      case "low": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  const [approved, setApproved] = useState<string[]>([]);
  const [rejected, setRejected] = useState<string[]>([]);

  const toggleApprove = (id: string) => {
    setApproved((prev) => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
    setRejected((prev) => prev.filter(x => x !== id));
  };

  const toggleReject = (id: string) => {
    setRejected((prev) => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
    setApproved((prev) => prev.filter(x => x !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="flex items-center gap-2 railway-heading text-2xl font-bold mb-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg">
              <Bot className="h-6 w-6 text-white" />
            </div>
            AI Decision Recommendations
          </h2>
          <p className="text-muted-foreground flex items-center gap-2">
            <Brain className="h-4 w-4 text-purple-500" />
            Intelligent suggestions powered by machine learning to optimize operations
          </p>
        </div>
        <Badge className="status-operational">
          <Activity className="h-3 w-3 mr-1 animate-pulse" />
          AI Engine Active
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {recommendations.map((rec) => (
          <Card key={rec.id} className={`relative railway-card hover:shadow-xl transition-all duration-300 hover:scale-102 ${approved.includes(rec.id) ? 'ring-2 ring-green-500/60 bg-green-50/50 dark:bg-green-950/50' : rejected.includes(rec.id) ? 'ring-2 ring-red-500/60 bg-red-50/50 dark:bg-red-950/50' : ''}`}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${getTypeColor(rec.type)} shadow-sm`}>
                    {getTypeIcon(rec.type)}
                  </div>
                  <CardTitle className="text-base font-bold">{rec.title}</CardTitle>
                </div>
                <Badge className={`${getTypeColor(rec.type)} shadow-sm font-semibold`}>
                  {rec.type.replace('_', ' ')}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground font-medium">{rec.description}</p>
              {(approved.includes(rec.id) || rejected.includes(rec.id)) && (
                <div className={`mt-2 flex items-center gap-1 text-xs font-bold ${approved.includes(rec.id) ? 'text-green-600' : 'text-red-600'}`}>
                  {approved.includes(rec.id) ? (
                    <>
                      <CheckCircle className="h-3 w-3" />
                      Approved & Implemented
                    </>
                  ) : (
                    <>
                      <XCircle className="h-3 w-3" />
                      Rejected by Operator
                    </>
                  )}
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm p-2 rounded bg-slate-50 dark:bg-slate-800">
                  <span>Affected Train:</span>
                  <span className="font-bold text-blue-600">{rec.train}</span>
                </div>
                <div className="flex items-center justify-between text-sm p-2 rounded bg-slate-50 dark:bg-slate-800">
                  <span>Confidence:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300"
                        style={{ width: `${rec.confidence}%` }}
                      ></div>
                    </div>
                    <span className="font-bold text-green-600">{rec.confidence}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm p-2 rounded bg-slate-50 dark:bg-slate-800">
                  <span>Impact Level:</span>
                  <span className={`font-bold ${getImpactColor(rec.impact)}`}>
                    {rec.impact.charAt(0).toUpperCase() + rec.impact.slice(1)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm p-2 rounded bg-slate-50 dark:bg-slate-800">
                  <span>Execute:</span>
                  <span className="font-bold text-orange-600">{rec.timeToExecute}</span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                <h4 className="text-sm font-bold mb-2 flex items-center gap-2 text-blue-800 dark:text-blue-200">
                  <Brain className="h-4 w-4" />
                  AI Analysis:
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">{rec.reasoning}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                  Expected Benefits:
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {rec.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 p-2 rounded bg-green-50 dark:bg-green-950">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2 pt-4">
                <Button size="sm" className="flex-1 btn-railway hover:scale-105 transition-transform font-semibold" variant={approved.includes(rec.id) ? 'secondary' : 'default'} onClick={() => toggleApprove(rec.id)}>
                  <CheckCircle className="h-4 w-4 mr-1" />
                  {approved.includes(rec.id) ? 'Undo' : 'Approve'}
                </Button>
                <Button size="sm" variant={rejected.includes(rec.id) ? 'secondary' : 'outline'} className="flex-1 hover:scale-105 transition-transform font-semibold" onClick={() => toggleReject(rec.id)}>
                  <XCircle className="h-4 w-4 mr-1" />
                  {rejected.includes(rec.id) ? 'Undo' : 'Reject'}
                </Button>
                <Button size="sm" variant="secondary" className="hover:scale-105 transition-transform">
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Performance Stats */}
      <Card className="railway-card hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            AI Performance Today
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 hover:scale-105 transition-transform border-2 border-green-200 dark:border-green-800">
              <div className="text-3xl font-bold text-green-600 flex items-center justify-center gap-2 mb-2">
                <Zap className="h-6 w-6" />
                127
              </div>
              <div className="text-sm font-semibold text-green-700 dark:text-green-300">Recommendations</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 hover:scale-105 transition-transform border-2 border-blue-200 dark:border-blue-800">
              <div className="text-3xl font-bold text-blue-600 mb-2">89%</div>
              <div className="text-sm font-semibold text-blue-700 dark:text-blue-300">Acceptance Rate</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 hover:scale-105 transition-transform border-2 border-purple-200 dark:border-purple-800">
              <div className="text-3xl font-bold text-purple-600 mb-2">12.3%</div>
              <div className="text-sm font-semibold text-purple-700 dark:text-purple-300">Delay Reduction</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 hover:scale-105 transition-transform border-2 border-orange-200 dark:border-orange-800">
              <div className="text-3xl font-bold text-orange-600 mb-2">€1,240</div>
              <div className="text-sm font-semibold text-orange-700 dark:text-orange-300">Cost Savings</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}