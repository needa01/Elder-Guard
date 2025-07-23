import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Upload,
  Video,
  Heart,
  Brain,
  Dumbbell,
  Eye,
  Camera,
  X,
  Play,
  Square,
  RotateCcw,
} from "lucide-react";
import { useState, useRef, useCallback, useEffect } from "react";
import { Navigation } from "@/components/Navigation";

const Dashboard = () => {
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isLiveMode, setIsLiveMode] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");
  const [isDetecting, setIsDetecting] = useState(false);
  const [activeTab, setActiveTab] = useState("live-detection");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      setUploadedVideo(file);
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setIsLiveMode(false);
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        setStream(null);
      }
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const startLiveVideo = useCallback(async () => {
    try {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

      const constraints = {
        video: {
          facingMode,
          width: { min: 640, ideal: 1280, max: 1920 },
          height: { min: 480, ideal: 720, max: 1080 },
        },
        audio: false,
      };

      console.log("Requesting camera with constraints:", constraints);
      const newStream = await navigator.mediaDevices.getUserMedia(constraints);
      console.log("Camera stream obtained:", newStream);

      setStream(newStream);
      setIsLiveMode(true);
      setUploadedVideo(null);
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
        setVideoUrl(null);
      }

      // Wait for video element to be ready
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
        try {
          await videoRef.current.play();
          console.log("Video playback started successfully");
        } catch (playError) {
          console.warn("Autoplay failed, trying manual play:", playError);
          // Fallback: try to play after user interaction
          setTimeout(() => {
            if (videoRef.current) {
              videoRef.current.play().catch(console.error);
            }
          }, 100);
        }
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert(
        "Unable to access camera. Please ensure you have granted camera permissions and your device has a camera."
      );
    }
  }, [facingMode, stream, videoUrl]);

  const stopLiveVideo = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    setIsLiveMode(false);
    setIsDetecting(false);
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, [stream]);

  const switchCamera = useCallback(async () => {
    const newFacingMode = facingMode === "user" ? "environment" : "user";
    setFacingMode(newFacingMode);

    if (isLiveMode && stream) {
      // Stop current stream
      stream.getTracks().forEach((track) => track.stop());

      try {
        const constraints = {
          video: {
            facingMode: newFacingMode,
            width: { min: 640, ideal: 1280, max: 1920 },
            height: { min: 480, ideal: 720, max: 1080 },
          },
          audio: false,
        };

        console.log("Switching camera with constraints:", constraints);
        const newStream = await navigator.mediaDevices.getUserMedia(
          constraints
        );
        setStream(newStream);

        if (videoRef.current) {
          videoRef.current.srcObject = newStream;
          try {
            await videoRef.current.play();
            console.log("Camera switched successfully");
          } catch (playError) {
            console.warn("Autoplay failed after camera switch:", playError);
            setTimeout(() => {
              if (videoRef.current) {
                videoRef.current.play().catch(console.error);
              }
            }, 100);
          }
        }
      } catch (error) {
        console.error("Error switching camera:", error);
        alert("Unable to switch camera. Please try again.");
      }
    }
  }, [facingMode, isLiveMode, stream]);

  const startDetection = () => {
    setIsDetecting(true);
  };

  const stopDetection = () => {
    setIsDetecting(false);
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

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [stream, videoUrl]);

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
          {/* Live Feed with Tabs */}
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
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger
                    value="live-detection"
                    className="flex items-center gap-2"
                  >
                    <Camera className="h-4 w-4" />
                    LIVE DETECTION
                  </TabsTrigger>
                  <TabsTrigger
                    value="upload-video"
                    className="flex items-center gap-2"
                  >
                    <Video className="h-4 w-4" />
                    UPLOAD VIDEO
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="live-detection" className="mt-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      Real-Time Fall Detection with Webcam
                    </h3>

                    {!isLiveMode ? (
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                        <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-4">
                          Start live camera feed for real-time detection
                        </p>
                        <Button
                          onClick={startLiveVideo}
                          className="flex items-center gap-2"
                        >
                          <Play className="h-4 w-4" />
                          Start Camera
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="relative">
                          <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="w-full max-h-80 rounded-lg bg-black"
                          />

                          {/* Camera Controls */}
                          <div className="absolute top-2 right-2 flex gap-2">
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={switchCamera}
                              title="Switch Camera"
                            >
                              <RotateCcw className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={stopLiveVideo}
                              title="Stop Camera"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Live Indicator */}
                          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                            ● LIVE
                          </div>

                          {/* Detection Status */}
                          {isDetecting && (
                            <div className="absolute bottom-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                              🔍 DETECTING
                            </div>
                          )}
                        </div>

                        {/* Detection Controls */}
                        <div className="flex gap-2">
                          {!isDetecting ? (
                            <Button
                              onClick={startDetection}
                              className="flex-1 bg-blue-600 hover:bg-blue-700"
                            >
                              <Play className="h-4 w-4 mr-2" />
                              START DETECTION
                            </Button>
                          ) : (
                            <Button
                              onClick={stopDetection}
                              variant="outline"
                              className="flex-1"
                            >
                              <Square className="h-4 w-4 mr-2" />
                              STOP DETECTION
                            </Button>
                          )}
                        </div>

                        <p className="text-sm text-muted-foreground text-center">
                          Camera: {facingMode === "user" ? "Front" : "Back"} |
                          Status: {isDetecting ? "Monitoring" : "Standby"}
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="upload-video" className="mt-4">
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
                        Upload video file for analysis
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
                          Size: {(uploadedVideo.size / 1024 / 1024).toFixed(2)}{" "}
                          MB
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
                </TabsContent>
              </Tabs>
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
