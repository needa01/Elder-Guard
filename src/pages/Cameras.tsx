import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import sensorAnimation from "@/assets/CCTV Camera.json";

const Cameras = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      <div className="container mx-auto px-4 py-16">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Coming Soon Content */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
          <Card className="p-12 w-full backdrop-blur-sm border-border/50">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24">
                <Lottie
                  animationData={sensorAnimation}
                  loop={true}
                  className="w-full h-full"
                />
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Camera Store
            </h1>

            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Coming Soon
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're working hard to bring you the best selection of indoor and
              outdoor Wi-Fi cameras for elderly care and home monitoring. Our
              camera store will feature premium devices designed specifically
              for keeping your loved ones safe and secure.
            </p>

            <div className="space-y-4 text-left bg-muted/30 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-foreground">What to expect:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Indoor Wi-Fi cameras with HD video quality
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Weatherproof outdoor security cameras
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Easy setup and user-friendly mobile apps
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  24/7 monitoring capabilities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Special pricing for ElderGuard customers
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Our Services
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Notify Me When Available
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cameras;
