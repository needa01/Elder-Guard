import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Upload,
  Video,
  Heart,
  Brain,
  Dumbbell,
  Eye,
  Camera,
  X,
} from "lucide-react";
import { useState, useRef } from "react";
import { Navigation } from "@/components/Navigation";

const Dashboard = () => {
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      setUploadedVideo(file);
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveVideo = () => {
    if (videoUrl) {
      URL.revokeObjectURL(videoUrl);
    }
    setUploadedVideo(null);
    setVideoUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation forceScrolledState />
      {/* Header */}
      <div className="border-b bg-card pt-16">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Monitor and manage your elder care activities
          </p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Live Feed - Upload Video */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                Live Feed
              </CardTitle>
              <CardDescription>
                Fall detection, Hit detection, Stress detection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="hidden"
              />
              {!uploadedVideo ? (
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Upload video file or connect live stream
                  </p>
                  <Button onClick={handleUploadClick}>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Video
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative">
                    <video
                      src={videoUrl || undefined}
                      controls
                      className="w-full max-h-80 rounded-lg"
                    >
                      Your browser does not support the video tag.
                    </video>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={handleRemoveVideo}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>File: {uploadedVideo.name}</span>
                    <span>
                      Size: {(uploadedVideo.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </div>
                  <Button
                    onClick={handleUploadClick}
                    variant="outline"
                    className="w-full"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Different Video
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Physiotherapy & Mental Health */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Physiotherapy & Mental Health
              </CardTitle>
              <CardDescription>
                Monitor key muscle groups and mental wellness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Muscle Groups */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Dumbbell className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">Biceps</p>
                    <p className="text-xs text-muted-foreground">Active</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Heart className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">Chest</p>
                    <p className="text-xs text-muted-foreground">Monitoring</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Dumbbell className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">Back</p>
                    <p className="text-xs text-muted-foreground">Normal</p>
                  </div>
                </div>

                {/* Mental Health */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="h-5 w-5 text-primary" />
                    <span className="font-medium">Mental Health Status</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Current mood: Stable
                  </p>
                  <div className="mt-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Powered Response Coach */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-muted-foreground" />
                AI Powered Response Coach
              </CardTitle>
              <CardDescription>
                Intelligent coaching and response system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="bg-muted/50 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Coming Soon</h3>
                <p className="text-muted-foreground text-sm">
                  Advanced AI coaching features are in development
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cameras */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-muted-foreground" />
                Cameras
              </CardTitle>
              <CardDescription>Security and monitoring cameras</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="bg-muted/50 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Eye className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Coming Soon</h3>
                <p className="text-muted-foreground text-sm">
                  Camera integration and monitoring features in development
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
