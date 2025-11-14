import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

const Detection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{
    bloodGroup: string;
    confidence: number;
    features: string[];
  } | null>(null);

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
      toast.success("Fingerprint image uploaded successfully");
    }
  };

  const simulateDetection = () => {
    setIsProcessing(true);
    setResult(null);

    // Simulate ML processing with realistic delays
    setTimeout(() => {
      const randomBloodGroup = bloodGroups[Math.floor(Math.random() * bloodGroups.length)];
      const confidence = 85 + Math.random() * 10; // 85-95%
      
      const features = [
        "Ridge density: High",
        "Minutiae points: 47 detected",
        "Whorl pattern identified",
        "Orientation map: Processed",
        "Texture features: Extracted (LBP)",
        "Edge detection: Completed"
      ];

      setResult({
        bloodGroup: randomBloodGroup,
        confidence: parseFloat(confidence.toFixed(2)),
        features
      });
      setIsProcessing(false);
      toast.success("Detection completed successfully!");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">Blood Group Detection</h1>
            <p className="text-muted-foreground">
              Upload a clear fingerprint image to detect blood group
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Upload Section */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Upload Fingerprint</h2>
                  
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      selectedImage ? "border-primary bg-primary/5" : "border-border hover:border-primary"
                    }`}
                  >
                    {selectedImage ? (
                      <div className="space-y-4">
                        <img
                          src={selectedImage}
                          alt="Uploaded fingerprint"
                          className="max-h-64 mx-auto rounded-lg shadow-lg"
                        />
                        <CheckCircle className="h-8 w-8 text-primary mx-auto" />
                        <p className="text-sm font-medium">Image uploaded successfully</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                        <div>
                          <p className="font-medium">Drop fingerprint image here</p>
                          <p className="text-sm text-muted-foreground">or click to browse</p>
                        </div>
                      </div>
                    )}
                    
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">Guidelines:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Use a clear, high-resolution image</li>
                      <li>• Ensure proper lighting</li>
                      <li>• File size should be less than 5MB</li>
                      <li>• Supported formats: JPG, PNG</li>
                    </ul>
                  </div>

                  <Button
                    onClick={simulateDetection}
                    disabled={!selectedImage || isProcessing}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    size="lg"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Detect Blood Group"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card className={result ? "border-2 border-primary" : ""}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Detection Results</h2>
                  
                  {isProcessing && (
                    <div className="text-center py-12 space-y-4">
                      <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
                      <div className="space-y-2">
                        <p className="font-medium">Processing fingerprint...</p>
                        <p className="text-sm text-muted-foreground">
                          Analyzing ridge patterns and extracting features
                        </p>
                      </div>
                    </div>
                  )}

                  {!isProcessing && !result && (
                    <div className="text-center py-12 text-muted-foreground">
                      <AlertCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Upload a fingerprint image to see results</p>
                    </div>
                  )}

                  {result && !isProcessing && (
                    <div className="space-y-6">
                      <div className="text-center py-6 bg-gradient-to-br from-primary to-accent rounded-lg text-white">
                        <p className="text-sm font-medium opacity-90 mb-2">Predicted Blood Group</p>
                        <p className="text-5xl font-bold">{result.bloodGroup}</p>
                        <p className="text-sm mt-2 opacity-90">
                          Confidence: {result.confidence}%
                        </p>
                      </div>

                      <div className="space-y-3">
                        <p className="font-semibold">Extracted Features:</p>
                        <div className="space-y-2">
                          {result.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm p-2 bg-secondary/50 rounded"
                            >
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Note:</strong> This is a demonstration. For actual medical purposes, 
                          please consult healthcare professionals and perform standard blood tests.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
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

export default Detection;
