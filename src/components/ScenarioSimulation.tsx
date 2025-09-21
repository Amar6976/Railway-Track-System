import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Skeleton } from "./ui/skeleton"; // Skeleton component import karein
import { Play, RotateCw, Clock, AlertTriangle, TrendingDown, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

// Types ko define karein
interface SimulationResult {
  scenarioName: string;
  delayImpact: number;
  affectedTrains: number;
  alternativeRoutes: number;
  estimatedCost: number;
  recommendations: string[];
}

interface SimulationParams {
  scenarioId: string;
  trainId: string;
  trackId: string;
  delayTime: string;
}

// Data ko component ke bahar rakhein
const PREDEFINED_SCENARIOS = [
  { id: "train_delay", name: "Train Delay", description: "Simulate delay for a specific train" },
  { id: "track_blockage", name: "Track Blockage", description: "Block a track section due to maintenance/incident" },
  { id: "signal_failure", name: "Signal Failure", description: "Simulate signal system failure" },
  { id: "weather_impact", name: "Weather Impact", description: "Reduced speeds due to weather conditions" },
  { id: "emergency_stop", name: "Emergency Stop", description: "Emergency stop scenario for safety" },
  { id: "peak_hour", name: "Peak Hour Load", description: "Increased traffic during rush hour" }
];

const TRAINS = [
  { id: "T001", name: "Express A" },
  { id: "T002", name: "Local B" },
  { id: "T003", name: "Freight C" },
];

const TRACKS = [
  { id: "TR001", name: "Track 1 - Main Line" },
  { id: "TR002", name: "Track 2 - Express Line" },
  { id: "TR003", name: "Track 3 - Freight Line" },
];

const INITIAL_PARAMS: SimulationParams = {
  scenarioId: "",
  trainId: "",
  trackId: "",
  delayTime: "15",
};

export function ScenarioSimulation() {
  const [activeTab, setActiveTab] = useState("predefined");
  const [simulationParams, setSimulationParams] = useState<SimulationParams>(INITIAL_PARAMS);
  const [simulationResults, setSimulationResults] = useState<SimulationResult | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  // Parameter update karne ke liye ek helper function
  const updateParam = (key: keyof SimulationParams, value: string) => {
    setSimulationParams(prev => ({ ...prev, [key]: value }));
  };

  const runSimulation = (scenarioId?: string) => {
    const finalScenarioId = scenarioId || simulationParams.scenarioId;
    if (!finalScenarioId && activeTab === 'predefined') return;
    if (activeTab === 'custom' && !finalScenarioId) { // Custom scenario ke liye logic
      // Yahan aap custom scenario ke liye state manage kar sakte hain
      // Abhi ke liye, hum ise "Custom Scenario" naam denge
      runSimulationLogic("Custom Scenario");
      return;
    }
    
    const scenario = PREDEFINED_SCENARIOS.find(s => s.id === finalScenarioId);
    if (!scenario) return;

    runSimulationLogic(scenario.name);
  };
  
  const runSimulationLogic = (scenarioName: string) => {
    setIsSimulating(true);
    setSimulationResults(null);

    setTimeout(() => {
      const mockResults: SimulationResult = {
        scenarioName: scenarioName,
        delayImpact: Math.floor(Math.random() * 30) + parseInt(simulationParams.delayTime) || 5,
        affectedTrains: Math.floor(Math.random() * 8) + 2,
        alternativeRoutes: Math.floor(Math.random() * 3) + 1,
        estimatedCost: Math.floor(Math.random() * 5000) + 1000,
        recommendations: [
          "Reroute affected trains via alternative tracks",
          "Deploy additional staff at key stations",
          "Activate backup signaling system if applicable",
          "Communicate delays to passengers promptly"
        ]
      };
      setSimulationResults(mockResults);
      setIsSimulating(false);
    }, 2000);
  };

  const handleQuickScenario = (params: Partial<SimulationParams>) => {
    const fullParams = { ...INITIAL_PARAMS, ...params };
    setSimulationParams(fullParams);
    setActiveTab("predefined");
    // useEffect ka istemal karke runSimulation call karein taaki state update ho jaye
    // Lekin simple banane ke liye, hum yahan direct scenarioId se call kar rahe hain
    const scenario = PREDEFINED_SCENARIOS.find(s => s.id === params.scenarioId);
    if (scenario) {
        runSimulationLogic(scenario.name);
    }
  };

  const resetSimulation = () => {
    setSimulationResults(null);
    setSimulationParams(INITIAL_PARAMS);
    setActiveTab("predefined");
  };

  const isRunDisabled = isSimulating || (activeTab === 'predefined' && !simulationParams.scenarioId);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Play className="h-5 w-5" />
          Scenario Simulation & What-If Analysis
        </h2>
        <p className="text-muted-foreground">Test different scenarios and analyze their impact on operations</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Simulation Setup */}
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Simulation Setup</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="predefined">Predefined Scenarios</TabsTrigger>
                <TabsTrigger value="custom">Custom Scenario</TabsTrigger>
              </TabsList>

              <TabsContent value="predefined" className="space-y-4 pt-4">
                <div>
                  <Label>Select Scenario</Label>
                  <Select value={simulationParams.scenarioId} onValueChange={(value) => updateParam("scenarioId", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a scenario to simulate" />
                    </SelectTrigger>
                    <SelectContent>
                      {PREDEFINED_SCENARIOS.map((scenario) => (
                        <SelectItem key={scenario.id} value={scenario.id}>{scenario.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {simulationParams.scenarioId && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {PREDEFINED_SCENARIOS.find(s => s.id === simulationParams.scenarioId)?.description}
                    </p>
                  )}
                </div>

                {simulationParams.scenarioId === "train_delay" && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Select Train</Label>
                      <Select value={simulationParams.trainId} onValueChange={(value) => updateParam("trainId", value)}>
                        <SelectTrigger><SelectValue placeholder="Choose train" /></SelectTrigger>
                        <SelectContent>
                          {TRAINS.map((train) => <SelectItem key={train.id} value={train.id}>{train.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Delay Time (minutes)</Label>
                      <Input
                        type="number"
                        value={simulationParams.delayTime}
                        onChange={(e) => updateParam("delayTime", e.target.value)}
                        placeholder="15"
                      />
                    </div>
                  </div>
                )}

                {simulationParams.scenarioId === "track_blockage" && (
                  <div>
                    <Label>Select Track</Label>
                    <Select value={simulationParams.trackId} onValueChange={(value) => updateParam("trackId", value)}>
                      <SelectTrigger><SelectValue placeholder="Choose track to block" /></SelectTrigger>
                      <SelectContent>
                        {TRACKS.map((track) => <SelectItem key={track.id} value={track.id}>{track.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="custom" className="space-y-4 pt-4">
                 <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                    <p>Custom scenario feature is under development.</p>
                 </div>
              </TabsContent>
            </Tabs>

            <div className="flex gap-2 mt-6">
              <Button onClick={() => runSimulation()} disabled={isRunDisabled} className="flex-1">
                {isSimulating ? (
                  <><RotateCw className="h-4 w-4 mr-2 animate-spin" /> Simulating...</>
                ) : (
                  <><Play className="h-4 w-4 mr-2" /> Run Simulation</>
                )}
              </Button>
              <Button variant="outline" onClick={resetSimulation} disabled={isSimulating}>
                <RotateCw className="h-4 w-4 mr-2" /> Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Scenarios */}
        <Card>
          <CardHeader><CardTitle>Quick Scenarios</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start" onClick={() => handleQuickScenario({ scenarioId: 'train_delay', trainId: 'T001', delayTime: '10' })}>
              <Clock className="h-4 w-4 mr-2" /> +10 min delay on Express A
            </Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => handleQuickScenario({ scenarioId: 'track_blockage', trackId: 'TR002' })}>
              <AlertTriangle className="h-4 w-4 mr-2" /> Block Track 2 for 30 min
            </Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => handleQuickScenario({ scenarioId: 'weather_impact' })}>
              <TrendingDown className="h-4 w-4 mr-2" /> Reduce speeds by 20%
            </Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => handleQuickScenario({ scenarioId: 'peak_hour' })}>
              <TrendingUp className="h-4 w-4 mr-2" /> Peak hour simulation
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Simulation Results Section */}
      {(isSimulating || simulationResults) && (
        <Card>
          <CardHeader>
            <CardTitle>Simulation Results {simulationResults ? `- ${simulationResults.scenarioName}`: ''}</CardTitle>
          </CardHeader>
          <CardContent>
            {isSimulating ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                </div>
                <Skeleton className="h-8 w-1/3" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            ) : simulationResults && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-500">+{simulationResults.delayImpact}min</div>
                    <div className="text-sm text-muted-foreground">Average Delay Impact</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500">{simulationResults.affectedTrains}</div>
                    <div className="text-sm text-muted-foreground">Affected Trains</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-500">{simulationResults.alternativeRoutes}</div>
                    <div className="text-sm text-muted-foreground">Alternative Routes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-500">${simulationResults.estimatedCost.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Estimated Cost</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">AI Recommendations:</h4>
                  <div className="space-y-2">
                    {simulationResults.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                        <Badge variant="secondary">{index + 1}</Badge>
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}