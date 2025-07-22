import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import fallDetectionImage from "@/assets/fall-detection.jpg";
import cameraSystemImage from "@/assets/camera-system.jpg";
import emergencyServicesImage from "@/assets/emergency-services.jpg";
import distressDetectionImage from "@/assets/distress-detection.jpg";
import abusePreventionImage from "@/assets/abuse-prevention.jpg";
import softwareModelsImage from "@/assets/software-models.jpg";
import physiotherapyToolsImage from "@/assets/physiotherapy-tools.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation forceScrolledState />

      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-br from-elderguard-blue to-elderguard-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">About ElderGuard AI</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Built by healthcare professionals who understand the challenges of
              elder care and the importance of reliable monitoring.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At ElderGuard AI, we believe that every senior deserves to live
                with dignity, independence, and peace of mind. Our mission is to
                bridge the gap between technology and compassionate care,
                ensuring that families stay connected and seniors remain safe in
                their homes.
              </p>
              <p className="text-lg text-gray-600">
                We leverage cutting-edge artificial intelligence to provide 24/7
                monitoring that respects privacy while delivering life-saving
                alerts when they matter most.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-elderguard-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Compassionate Technology
                </h3>
                <p className="text-gray-600">
                  Technology designed with empathy, built by those who
                  understand the unique needs of elder care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built by Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team consists of nurses, doctors, home health aides, and
              technology experts who have dedicated their careers to improving
              elder care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-elderguard-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-elderguard-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Registered Nurses
                </h3>
                <p className="text-gray-600">
                  Clinical expertise in patient assessment, emergency response,
                  and geriatric care protocols.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-elderguard-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-elderguard-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Medical Doctors</h3>
                <p className="text-gray-600">
                  Board-certified physicians specializing in geriatrics and
                  emergency medicine.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-elderguard-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-elderguard-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Specialists</h3>
                <p className="text-gray-600">
                  Machine learning engineers focused on healthcare applications
                  and privacy-preserving AI systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced AI-Powered Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology designed to protect what matters most
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Fall Detection */}
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={fallDetectionImage}
                  alt="AI Fall Detection System"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Intelligent Fall Detection
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Advanced AI algorithms analyze movement patterns to instantly
                  detect falls, automatically triggering emergency protocols
                  within seconds.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 99.2% accuracy rate</li>
                  <li>• Sub-5 second detection</li>
                  <li>• False alarm prevention</li>
                </ul>
              </CardContent>
            </Card>

            {/* Distress Detection */}
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={distressDetectionImage}
                  alt="AI Distress Recognition System"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-orange-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 14h14l-2-14M11 9v4m4-4v4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Distress Recognition
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Voice pattern analysis and behavioral monitoring to detect
                  signs of distress, confusion, or calls for help even when
                  conventional alerts aren't triggered.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Voice stress analysis</li>
                  <li>• Behavioral pattern changes</li>
                  <li>• 24/7 audio monitoring</li>
                </ul>
              </CardContent>
            </Card>

            {/* Abuse Detection */}
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={abusePreventionImage}
                  alt="AI Abuse Prevention System"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Abuse Prevention</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Sensitive monitoring for signs of physical or emotional abuse
                  through advanced pattern recognition while maintaining strict
                  privacy protocols.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Privacy-first approach</li>
                  <li>• Pattern recognition</li>
                  <li>• Confidential reporting</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Response */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Emergency Response Coordination
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  When emergencies are detected, our system automatically
                  coordinates with local emergency services, providing them with
                  critical information before they arrive.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-3 h-3 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Automatic 911 Dispatch
                      </h4>
                      <p className="text-gray-600">
                        Direct connection to emergency services with precise
                        location data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-3 h-3 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Medical History Sharing
                      </h4>
                      <p className="text-gray-600">
                        Critical health information provided to first responders
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-3 h-3 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Family Notification
                      </h4>
                      <p className="text-gray-600">
                        Immediate alerts to designated emergency contacts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-64 lg:h-auto">
                <img
                  src={emergencyServicesImage}
                  alt="Emergency Services Response"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Elder Care Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive hardware and software solutions designed
              specifically for elder care environments
            </p>
          </div>

          {/* Camera Ecosystem */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src={cameraSystemImage}
                alt="ElderGuard Camera System"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Smart Camera Ecosystem
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Indoor Monitoring Cameras
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Discreet, privacy-conscious cameras with advanced AI
                    processing for fall detection, behavioral analysis, and
                    emergency recognition.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• 4K resolution with night vision</li>
                    <li>• Local AI processing for privacy</li>
                    <li>• Two-way communication</li>
                    <li>• Motion tracking and alerts</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Outdoor Security Cameras
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Weather-resistant cameras for monitoring entrances, gardens,
                    and outdoor areas where seniors may spend time.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Weatherproof IP67 rating</li>
                    <li>• Motion detection and alerts</li>
                    <li>• Solar power option available</li>
                    <li>• Night vision up to 100ft</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    Wearable Devices
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Comfortable, water-resistant wearables with GPS tracking,
                    fall detection, and emergency buttons.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• 7-day battery life</li>
                    <li>• GPS and indoor positioning</li>
                    <li>• Medication reminders</li>
                    <li>• Heart rate monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Physiotherapy Tools */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Physiotherapy & Exercise Tools
              </h3>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    Smart Exercise Equipment
                  </h4>
                  <p className="text-gray-600 mb-3">
                    AI-powered exercise tools that adapt to individual
                    capabilities and track progress over time.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Resistance bands with sensors</li>
                    <li>• Balance training platforms</li>
                    <li>• Smart therapy balls</li>
                    <li>• Adaptive walking aids</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Progress Monitoring
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Real-time tracking of muscle strength, flexibility, and
                    rehabilitation progress with detailed analytics.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Range of motion tracking</li>
                    <li>• Strength measurement</li>
                    <li>• Progress reports</li>
                    <li>• Personalized exercise plans</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={physiotherapyToolsImage}
                alt="Physiotherapy Tools and Equipment"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Software Models */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={softwareModelsImage}
                alt="AI Software Models Dashboard"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Advanced AI Software Models
              </h3>
              <div className="space-y-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 text-red-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                    Fall Detection AI
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Machine learning models trained on thousands of fall
                    scenarios for accurate detection and minimal false alarms.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Computer vision analysis</li>
                    <li>• Real-time processing</li>
                    <li>• Pattern recognition</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 text-orange-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                    Abuse Prevention AI
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Sensitive monitoring algorithms that detect signs of abuse
                    while maintaining strict privacy protocols.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Behavioral analysis</li>
                    <li>• Voice stress detection</li>
                    <li>• Privacy-preserving monitoring</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 text-purple-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    Distress Recognition
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Natural language processing and voice analysis to detect
                    calls for help and emotional distress.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Voice pattern analysis</li>
                    <li>• Emotional state detection</li>
                    <li>• Contextual understanding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Intelligent AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Machine learning models trained specifically for elder care
              scenarios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Predictive Health Analysis
                </h3>
                <p className="text-gray-600">
                  AI algorithms analyze daily patterns to predict potential
                  health issues before they become emergencies.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Natural Language Processing
                </h3>
                <p className="text-gray-600">
                  Advanced voice recognition to understand calls for help,
                  confusion, or requests for assistance in natural conversation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Real-time Decision Engine
                </h3>
                <p className="text-gray-600">
                  Millisecond response times for critical decisions,
                  automatically escalating threats based on severity and
                  context.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-elderguard-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Privacy First</h3>
              <p className="text-gray-600">
                Your data stays secure and private, processed locally whenever
                possible.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-elderguard-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">
                99.9% uptime with redundant systems ensuring continuous
                monitoring.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-elderguard-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Compassion</h3>
              <p className="text-gray-600">
                Every feature designed with empathy and understanding of family
                needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-elderguard-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving through the latest AI research and user
                feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
