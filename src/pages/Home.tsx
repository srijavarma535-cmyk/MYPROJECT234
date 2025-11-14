import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Fingerprint, Zap, Shield, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-block">
              <div className="h-20 w-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg animate-pulse">
                <Fingerprint className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Blood Group Detection
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Using Fingerprint
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Revolutionary machine learning system that predicts blood groups through fingerprint analysis. 
              Fast, non-invasive, and accurate biometric identification.
            </p>
            
            <div className="flex gap-4 justify-center pt-4">
              <Link to="/detect">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
                  Try Detection
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="h-14 w-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Instant Results</h3>
                <p className="text-muted-foreground">
                  Get blood group predictions in seconds using advanced ML algorithms and fingerprint analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="h-14 w-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Non-Invasive</h3>
                <p className="text-muted-foreground">
                  No needles, no lab equipment. Just your fingerprint for safe and painless detection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="h-14 w-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">High Accuracy</h3>
                <p className="text-muted-foreground">
                  Powered by CNN and advanced feature extraction achieving 89% prediction accuracy.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { step: "1", title: "Upload Fingerprint", desc: "Capture or upload a clear fingerprint image" },
              { step: "2", title: "Image Processing", desc: "Advanced preprocessing extracts ridge patterns and minutiae features" },
              { step: "3", title: "ML Classification", desc: "CNN model analyzes features and predicts blood group" },
              { step: "4", title: "Get Results", desc: "Instant blood group prediction with confidence score" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="border-t mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 BloodScan. Advanced Biometric Blood Group Detection System.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
