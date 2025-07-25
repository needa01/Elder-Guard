import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import {
  ArrowLeft,
  Camera,
  Cpu,
  Wifi,
  Monitor,
  Shield,
  Power,
} from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/dashboard">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-3xl font-bold mb-2">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground">
              Learn how our camera system and Raspberry Pi integration work for
              elder care monitoring.
            </p>
          </div>

          {/* Camera System Overview */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-primary" />
                How Our Camera System Works
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our elder care monitoring system uses advanced computer vision
                and AI technology to provide 24/7 safety monitoring for elderly
                individuals. Here's how it works:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Monitor className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Real-Time Detection</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our AI algorithms analyze video feeds in real-time to detect
                    falls, unusual behavior patterns, and emergency situations.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Privacy First</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    All processing happens locally on your devices. Video data
                    is not stored in the cloud, ensuring complete privacy for
                    your loved ones.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Raspberry Pi Integration */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" />
                Raspberry Pi Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our system seamlessly integrates with Raspberry Pi devices for
                an affordable, powerful monitoring solution:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Hardware Requirements</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Raspberry Pi 4 Model B (4GB RAM recommended)</li>
                    <li>• USB Camera or Raspberry Pi Camera Module</li>
                    <li>• MicroSD Card (32GB minimum)</li>
                    <li>• Stable internet connection (WiFi or Ethernet)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Setup Process</h3>
                  <ol className="text-sm text-muted-foreground space-y-1">
                    <li>
                      1. Flash our custom Raspberry Pi OS image to your SD card
                    </li>
                    <li>2. Connect your camera module and boot the system</li>
                    <li>
                      3. Follow the web-based setup wizard to configure WiFi
                    </li>
                    <li>
                      4. Register your device with our monitoring platform
                    </li>
                    <li>
                      5. Position cameras in key areas and test the system
                    </li>
                  </ol>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Wifi className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200">
                      Network Configuration
                    </h3>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    The Raspberry Pi creates a local mesh network for multiple
                    cameras, reducing bandwidth usage while maintaining
                    high-quality monitoring. Edge processing ensures minimal
                    delay in emergency detection.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Specifications */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
              <CardDescription>
                Detailed system requirements and capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Camera Specs</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 1080p HD resolution</li>
                    <li>• 30 FPS video processing</li>
                    <li>• Night vision support</li>
                    <li>• 110° field of view</li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Processing Power</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• AI inference on device</li>
                    <li>• Real-time analysis</li>
                    <li>• Low power consumption</li>
                    <li>• Fanless operation</li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Power className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Power & Storage</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 5V USB-C power</li>
                    <li>• Local storage only</li>
                    <li>• Automatic cleanup</li>
                    <li>• Battery backup option</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Questions */}
          <Card>
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="pb-4 border-b">
                  <h3 className="font-semibold mb-2">
                    How accurate is the fall detection?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI model achieves 95%+ accuracy in fall detection with
                    minimal false positives. The system continuously learns and
                    improves from usage patterns.
                  </p>
                </div>

                <div className="pb-4 border-b">
                  <h3 className="font-semibold mb-2">
                    Can I use regular webcams instead of Raspberry Pi?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! Our system supports standard USB webcams, laptops, and
                    mobile devices. Raspberry Pi is recommended for dedicated
                    24/7 monitoring installations.
                  </p>
                </div>

                <div className="pb-4 border-b">
                  <h3 className="font-semibold mb-2">
                    What happens during internet outages?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    The system continues monitoring locally and will alert via
                    stored emergency contacts when connection is restored.
                    Critical alerts can be sent via SMS backup.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">How do I get support?</h3>
                  <p className="text-sm text-muted-foreground">
                    Contact our 24/7 support team through the dashboard, email
                    support@eldercare.com, or call our emergency hotline for
                    urgent technical issues.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
