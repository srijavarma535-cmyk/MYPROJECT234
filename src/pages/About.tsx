import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import { Brain, Camera, Database, Cpu } from "lucide-react";
import { PerformanceCharts } from "@/components/PerformanceCharts";
import { DatasetInfo } from "@/components/DatasetInfo";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">About the Project</h1>
            <p className="text-xl text-muted-foreground">
              A multidisciplinary approach combining Image Processing, Machine Learning, and Biometrics
            </p>
          </div>

          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Developed a machine-learning based system that predicts a person's blood group using fingerprint 
                image features by applying image processing, feature extraction, and classification algorithms.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Healthcare Automation</Badge>
                <Badge variant="secondary">Emergency Identification</Badge>
                <Badge variant="secondary">Non-Invasive Testing</Badge>
                <Badge variant="secondary">Low-Cost Detection</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card>
            <CardHeader>
              <CardTitle>Technologies Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Machine Learning</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                    <li>• Convolutional Neural Networks (CNN)</li>
                    <li>• Support Vector Machines (SVM)</li>
                    <li>• Random Forest Classifier</li>
                    <li>• TensorFlow / PyTorch</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Camera className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold">Image Processing</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                    <li>• OpenCV for preprocessing</li>
                    <li>• Gabor Filters (ridge detection)</li>
                    <li>• Minutiae extraction</li>
                    <li>• Edge detection (Canny/Sobel)</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Data & Features</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                    <li>• Custom dermatoglyphics dataset</li>
                    <li>• Ridge density analysis</li>
                    <li>• Texture features (LBP)</li>
                    <li>• Orientation mapping</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold">Development Stack</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                    <li>• React + TypeScript</li>
                    <li>• Python backend</li>
                    <li>• NumPy / Pandas</li>
                    <li>• Scikit-learn</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Architecture */}
          <Card>
            <CardHeader>
              <CardTitle>System Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Input Fingerprint</h4>
                    <p className="text-sm text-muted-foreground">Upload or capture fingerprint image</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Preprocessing</h4>
                    <p className="text-sm text-muted-foreground">Noise removal, enhancement, normalization</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Feature Extraction</h4>
                    <p className="text-sm text-muted-foreground">Ridge patterns, minutiae points, texture analysis</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Classification</h4>
                    <p className="text-sm text-muted-foreground">CNN model predicts blood group</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary to-accent rounded-lg text-white">
                  <div className="h-10 w-10 rounded-full bg-white text-primary flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Result</h4>
                    <p className="text-sm opacity-90">Predicted blood group with confidence score</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">89.2%</div>
                  <p className="text-sm text-muted-foreground">Overall Accuracy</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-accent">0.87</div>
                  <p className="text-sm text-muted-foreground">Precision</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">0.88</div>
                  <p className="text-sm text-muted-foreground">Recall</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-accent">0.875</div>
                  <p className="text-sm text-muted-foreground">F1-Score</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Information Tabs */}
          <Tabs defaultValue="performance" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="performance">Performance Analysis</TabsTrigger>
              <TabsTrigger value="dataset">Dataset & Training</TabsTrigger>
            </TabsList>
            
            <TabsContent value="performance" className="space-y-6 mt-6">
              <PerformanceCharts />
            </TabsContent>
            
            <TabsContent value="dataset" className="space-y-6 mt-6">
              <DatasetInfo />
            </TabsContent>
          </Tabs>

          {/* Research Background */}
          <Card>
            <CardHeader>
              <CardTitle>Scientific Background</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This project is based on research in <strong>dermatoglyphics</strong> - the scientific study of 
                fingerprint patterns and their correlation with genetic markers including blood groups.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Key Research Findings:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>Studies show correlation between fingerprint patterns (loops, whorls, arches) and ABO blood group systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>Ridge density and minutiae distribution vary significantly across different blood groups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>Machine learning improves prediction accuracy by identifying complex non-linear relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>CNN models excel at extracting hierarchical features from fingerprint images</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg mt-4">
                <p className="text-sm">
                  <strong>Clinical Relevance:</strong> While traditional blood typing remains the gold standard, 
                  fingerprint-based prediction offers potential for rapid screening in emergency situations, 
                  blood bank management, and mass casualty scenarios where immediate preliminary identification is valuable.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <footer className="border-t mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 BloodScan. Advanced Biometric Blood Group Detection System.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
