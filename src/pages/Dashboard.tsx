import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Upload,
  Video,
  Heart,
  Brain,
  Dumbbell,
  Eye,
  HelpCircle,
  Camera,
  X,
  Play,
  Square,
  RotateCcw,
  ArrowRight,
  Calendar as CalendarIcon,
  Plus,
  User,
  Clock,
  Download,
  FileVideo,
  ChevronDown,
} from "lucide-react";
import { useState, useRef, useCallback, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import Lottie from "lottie-react";
import coachAnimation from "@/assets/Coach.json";
import cameraAnimation from "@/assets/CCTV Camera.json";
import { Link } from "react-router-dom";
import networkAnimation from "@/assets/Technology Network.json";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import distress from '@/assets/distress.mp4';
import distress2 from '@/assets/distress2.mp4';
import distress3 from '@/assets/distress3.mp4';

interface VisitEntry {
  id: string;
  date: Date;
  relation: string;
  note: string;
  createdAt: Date;
}

interface ExampleVideo {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  fileSize: string;
}

const Dashboard = () => {
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isLiveMode, setIsLiveMode] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");
  const [isDetecting, setIsDetecting] = useState(false);
  const [activeTab, setActiveTab] = useState("live-detection");
  const [expandedVideoId, setExpandedVideoId] = useState<string | null>(null);

  // Calendar state
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [relation, setRelation] = useState("");
  const [note, setNote] = useState("");
  const [visits, setVisits] = useState<VisitEntry[]>([]);
  const [showAddVisit, setShowAddVisit] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Example videos for testing
  const exampleVideos: ExampleVideo[] = [
    {
      id: "1",
      title: "Elderly Fall - Kitchen",
      description: "Sample fall detection scenario in kitchen environment",
      duration: "0:45",
      thumbnail: "/placeholder.svg",
      videoUrl: distress,
      fileSize: "2.3 MB",
    },
    {
      id: "2",
      title: "Elderly Fall - Living Room",
      description: "Fall detection sample with multiple angles",
      duration: "1:12",
      thumbnail: "/placeholder.svg",
      videoUrl: distress2,
      fileSize: "3.1 MB",
    },
    {
      id: "3",
      title: "Normal Activity - Walking",
      description: "Normal movement for comparison and testing",
      duration: "0:38",
      thumbnail: "/placeholder.svg",
      videoUrl: distress3,
      fileSize: "1.8 MB",
    },
  ];

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

  const handleDownloadExample = async (video: ExampleVideo) => {
    try {
      const response = await fetch(video.videoUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `${video.title.replace(/\s+/g, "_")}.mp4`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading video:", error);
      alert("Failed to download video. Please try again.");
    }
  };

const startLiveVideo = useCallback(async () => {
  try {
    // Stop any existing stream
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }

    // Request new camera stream
    const constraints = {
      video: { facingMode, width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false,
    };
    const newStream = await navigator.mediaDevices.getUserMedia(constraints);
    setStream(newStream);
    setIsLiveMode(true);
    setUploadedVideo(null);
    if (videoUrl) {
      URL.revokeObjectURL(videoUrl);
      setVideoUrl(null);
    }

    // Wait for videoRef to mount
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
        videoRef.current.onloadedmetadata = async () => {
          try {
            await videoRef.current?.play();
            console.log("✅ Camera playback started");
          } catch (err) {
            console.warn("play() failed", err);
          }
        };
      }
    }, 200); // wait 200ms for React to finish rendering DOM
  } catch (error) {
    console.error("Camera init error:", error);
    alert("Unable to access camera. Check permissions.");
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

  const handleDateSelect = (date: Date | undefined) => {
    // Toggle selection if clicking the same date
    if (
      selectedDate &&
      date &&
      selectedDate.toDateString() === date.toDateString()
    ) {
      setSelectedDate(undefined);
      setShowAddVisit(false);
    } else {
      setSelectedDate(date);
      setShowAddVisit(!!date);
    }
  };

  const handleAddVisit = () => {
    if (!selectedDate || !relation.trim() || !note.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const newVisit: VisitEntry = {
      id: Date.now().toString(),
      date: selectedDate,
      relation: relation.trim(),
      note: note.trim(),
      createdAt: new Date(),
    };

    setVisits([...visits, newVisit]);
    setRelation("");
    setNote("");
    // Don't close the form, allow multiple visits to be added
  };

  const getVisitsForDate = (date: Date) => {
    return visits.filter(
      (visit) => format(visit.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
    );
  };

  const hasVisitOnDate = (date: Date) => {
    return getVisitsForDate(date).length > 0;
  };

  const handleRemoveVisit = (visitId: string) => {
    setVisits(visits.filter((visit) => visit.id !== visitId));
  };

  const toggleVideoExpansion = (videoId: string) => {
    setExpandedVideoId(expandedVideoId === videoId ? null : videoId);
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

      {/* Advanced Calendar */}
      <div className="container mx-auto px-4 py-8">
        {/* <Card className="mb-8"> */}
        {/* <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-primary" />
              Advanced Calendar
            </CardTitle>
            <CardDescription>
              Schedule visits and monitor alerts with our calendar
            </CardDescription>
          </CardHeader> */}
        {/* <CardContent> */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> */}
        {/* Calendar */}
        {/* <div>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  className={cn("rounded-md border pointer-events-auto")}
                  modifiers={{
                    hasVisit: (date) => hasVisitOnDate(date),
                  }}
                  modifiersStyles={{
                    hasVisit: {
                      backgroundColor: "hsl(var(--accent))",
                      color: "hsl(var(--accent-foreground))",
                      fontWeight: "bold",
                      borderRadius: "6px",
                      border: "2px solid hsl(var(--accent-foreground) / 0.3)",
                    },
                  }}
                  modifiersClassNames={{
                    selected:
                      "!bg-primary !text-primary-foreground hover:!bg-primary hover:!text-primary-foreground focus:!bg-primary focus:!text-primary-foreground",
                  }}
                />
              </div> */}

        {/* Visit Form and List */}
        {/* <div className="space-y-6"> */}
        {/* Add Visit Form */}
        {/* <div className="space-y-4">
                  <h3 className="font-semibold">Schedule a Visit</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Your relation to patient
                      </label>
                      <Input
                        placeholder="e.g., son, daughter, caregiver..."
                        value={relation}
                        onChange={(e) => setRelation(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Note
                      </label>
                      <Textarea
                        placeholder="Add any notes about your visit..."
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        rows={3}
                      />
                    </div>
                    <Button onClick={handleAddVisit} className="w-full">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      Schedule Visit for{" "}
                      {selectedDate
                        ? format(selectedDate, "PPP")
                        : "Selected Date"}
                    </Button>
                  </div>
                </div> */}

        {/* All Visits or Selected Date Visits */}
        {/* <div className="space-y-3">
                  <h3 className="font-semibold">
                    {selectedDate
                      ? `Visits for ${format(selectedDate, "PPP")}`
                      : "All Scheduled Visits"}
                  </h3>
                  {(selectedDate ? getVisitsForDate(selectedDate) : visits)
                    .length === 0 ? (
                    <p className="text-muted-foreground text-sm">
                      {selectedDate
                        ? "No visits scheduled for this date."
                        : "No visits scheduled yet."}
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {(selectedDate
                        ? getVisitsForDate(selectedDate)
                        : visits
                      ).map((visit) => (
                        <div
                          key={visit.id}
                          className="bg-muted/50 rounded-lg p-3"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-medium text-sm">
                                {visit.relation}
                              </p>
                              <p className="text-muted-foreground text-xs">
                                {visit.note}
                              </p>
                              {!selectedDate && (
                                <p className="text-muted-foreground text-xs mt-1">
                                  📅 {format(visit.date, "PPP")}
                                </p>
                              )}
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveVisit(visit.id)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </CardContent> */}
        {/* </Card> */}

        {/* Dashboard Content */}
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

          {/* Examples Section */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileVideo className="h-5 w-5 text-primary" />
                Examples
              </CardTitle>
              <CardDescription>
                Download sample videos to test fall detection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Download these example videos to test the upload functionality
                </p>

                {exampleVideos.map((video) => (
                  <div
                    key={video.id}
                    className="border rounded-lg overflow-hidden"
                  >
                    {/* Compact header with video name, size, and arrow */}
                    <div
                      className="flex items-center justify-between p-3 cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => toggleVideoExpansion(video.id)}
                    >
                      <div className="flex items-center gap-3">
                        <Video className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <h4 className="font-medium text-sm">{video.title}</h4>
                          <p className="text-xs text-muted-foreground">
                            {video.fileSize}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-muted-foreground transition-transform duration-200",
                          expandedVideoId === video.id && "rotate-180"
                        )}
                      />
                    </div>

                    {/* Expanded preview section */}
                    {expandedVideoId === video.id && (
                      <div className="border-t bg-muted/20 p-3 space-y-3">
                        {/* Video Player */}
                        <div className="relative">
                          <video
                            src={video.videoUrl}
                            controls
                            className="w-full max-h-60 rounded-lg bg-black"
                            preload="metadata"
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>

                        {/* Video Details */}
                        <div className="space-y-2">
                          <p className="text-sm text-foreground font-medium">
                            {video.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {video.description}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {video.duration}
                            </span>
                            <span>{video.fileSize}</span>
                          </div>
                        </div>

                        {/* Download Button */}
                        <Button
                          size="sm"
                          className="w-full"
                          onClick={() => handleDownloadExample(video)}
                        >
                          <Download className="h-3 w-3 mr-2" />
                          Download Video
                        </Button>
                      </div>
                    )}
                  </div>
                ))}

                <div className="bg-muted/50 rounded-lg p-3 text-center">
                  <p className="text-xs text-muted-foreground">
                    💡 After downloading, use the "Upload Video" tab to test
                    detection
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-primary" />
                Advanced Calendar
              </CardTitle>
              <CardDescription>
                Schedule visits and monitor alerts with our calendar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Calendar */}
                <div>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    className={cn("rounded-md border pointer-events-auto")}
                    modifiers={{
                      hasVisit: (date) => hasVisitOnDate(date),
                    }}
                    modifiersStyles={{
                      hasVisit: {
                        backgroundColor: "hsl(var(--accent))",
                        color: "hsl(var(--accent-foreground))",
                        fontWeight: "bold",
                        borderRadius: "6px",
                        border: "2px solid hsl(var(--accent-foreground) / 0.3)",
                      },
                    }}
                    modifiersClassNames={{
                      selected:
                        "!bg-primary !text-primary-foreground hover:!bg-primary hover:!text-primary-foreground focus:!bg-primary focus:!text-primary-foreground",
                    }}
                  />
                </div>

                {/* Visit Form and List */}
                <div className="space-y-6">
                  {/* Add Visit Form */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Schedule a Visit</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Your relation to patient
                        </label>
                        <Input
                          placeholder="e.g., son, daughter, caregiver..."
                          value={relation}
                          onChange={(e) => setRelation(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Note
                        </label>
                        <Textarea
                          placeholder="Add any notes about your visit..."
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          rows={3}
                        />
                      </div>
                      <Button onClick={handleAddVisit} className="w-full">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        Schedule Visit for{" "}
                        {selectedDate
                          ? format(selectedDate, "PPP")
                          : "Selected Date"}
                      </Button>
                    </div>
                  </div>

                  {/* All Visits or Selected Date Visits */}
                  <div className="space-y-3">
                    <h3 className="font-semibold">
                      {selectedDate
                        ? `Visits for ${format(selectedDate, "PPP")}`
                        : "All Scheduled Visits"}
                    </h3>
                    {(selectedDate ? getVisitsForDate(selectedDate) : visits)
                      .length === 0 ? (
                      <p className="text-muted-foreground text-sm">
                        {selectedDate
                          ? "No visits scheduled for this date."
                          : "No visits scheduled yet."}
                      </p>
                    ) : (
                      <div className="space-y-2">
                        {(selectedDate
                          ? getVisitsForDate(selectedDate)
                          : visits
                        ).map((visit) => (
                          <div
                            key={visit.id}
                            className="bg-muted/50 rounded-lg p-3"
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-medium text-sm">
                                  {visit.relation}
                                </p>
                                <p className="text-muted-foreground text-xs">
                                  {visit.note}
                                </p>
                                {!selectedDate && (
                                  <p className="text-muted-foreground text-xs mt-1">
                                    📅 {format(visit.date, "PPP")}
                                  </p>
                                )}
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveVisit(visit.id)}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
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
                    <p className="text-sm font-medium">Upper Back</p>
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
                <div className=" rounded-full p-2 -mt-4  mx-auto mb-4 flex items-center justify-center">
                  <div className=" h-44 w-44">
                    <Lottie
                      animationData={coachAnimation}
                      loop={true}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">In development</h3>
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
                <div className=" rounded-full p-2 -mt-4 mx-auto mb-4 flex items-center justify-center">
                  <div className=" h-44 w-44">
                    <Lottie
                      animationData={cameraAnimation}
                      loop={true}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">In development</h3>
                <p className="text-muted-foreground text-sm">
                  Camera integration and monitoring features in development
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Support & Installation */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Support & Installation
              </CardTitle>
              <CardDescription>
                Help with camera setup and Raspberry Pi integration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className=" rounded-full p-2 -mt-4 mx-auto mb-4 flex items-center justify-center">
                  <div className=" h-40 w-40">
                    <Lottie
                      animationData={networkAnimation}
                      loop={true}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">Need Help?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Learn about camera setup, Raspberry Pi integration, and system
                  requirements
                </p>
                <Link to="/faq">
                  <Button className="animate-fade-in hover-scale">
                    {/* <HelpCircle className="h-4 w-4 mr-2" /> */}
                    View FAQ
                    <HelpCircle className="h-4 w-4 mr-2" />
                    {/* <ArrowRight className="h-4 w-4 ml-2" /> */}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
