import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const accuracyData = [
  { bloodGroup: "A+", accuracy: 91, samples: 142 },
  { bloodGroup: "A-", accuracy: 87, samples: 98 },
  { bloodGroup: "B+", accuracy: 89, samples: 128 },
  { bloodGroup: "B-", accuracy: 85, samples: 76 },
  { bloodGroup: "AB+", accuracy: 88, samples: 54 },
  { bloodGroup: "AB-", accuracy: 84, samples: 42 },
  { bloodGroup: "O+", accuracy: 92, samples: 156 },
  { bloodGroup: "O-", accuracy: 86, samples: 104 },
];

const trainingProgress = [
  { epoch: 0, accuracy: 45, loss: 2.1 },
  { epoch: 10, accuracy: 62, loss: 1.5 },
  { epoch: 20, accuracy: 74, loss: 1.0 },
  { epoch: 30, accuracy: 81, loss: 0.7 },
  { epoch: 40, accuracy: 85, loss: 0.5 },
  { epoch: 50, accuracy: 88, loss: 0.3 },
  { epoch: 60, accuracy: 89, loss: 0.25 },
];

const featureImportance = [
  { name: "Ridge Density", value: 28 },
  { name: "Minutiae Points", value: 24 },
  { name: "Whorl Patterns", value: 18 },
  { name: "Loop Patterns", value: 15 },
  { name: "Arch Patterns", value: 15 },
];

const COLORS = ["hsl(346, 77%, 50%)", "hsl(199, 89%, 48%)", "hsl(222, 47%, 50%)", "hsl(280, 65%, 60%)", "hsl(142, 76%, 36%)"];

export const PerformanceCharts = () => {
  return (
    <div className="space-y-8">
      {/* Accuracy by Blood Group */}
      <Card>
        <CardHeader>
          <CardTitle>Model Accuracy by Blood Group</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={accuracyData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="bloodGroup" className="text-xs" />
              <YAxis domain={[0, 100]} className="text-xs" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Legend />
              <Bar dataKey="accuracy" fill="hsl(346, 77%, 50%)" name="Accuracy (%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Training Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Training Progress Over Epochs</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={trainingProgress}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="epoch" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="accuracy" stroke="hsl(346, 77%, 50%)" strokeWidth={2} name="Accuracy (%)" />
                <Line type="monotone" dataKey="loss" stroke="hsl(199, 89%, 48%)" strokeWidth={2} name="Loss" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Feature Importance */}
        <Card>
          <CardHeader>
            <CardTitle>Feature Importance Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={featureImportance}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {featureImportance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Dataset Sample Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Dataset Sample Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={accuracyData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="bloodGroup" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Legend />
              <Bar dataKey="samples" fill="hsl(199, 89%, 48%)" name="Number of Samples" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
