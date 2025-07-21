import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navigation } from "@/components/Navigation";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-br from-elderguard-blue to-elderguard-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out to our team of
              healthcare professionals and technology experts.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your needs..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-elderguard-blue hover:bg-elderguard-blue-dark">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our team is available 24/7 for emergency support and during
                  business hours for general inquiries and technical assistance.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-elderguard-blue/10 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-elderguard-blue"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">
                          24/7 Emergency Line
                        </h3>
                        <p className="text-gray-600 mb-2">
                          For immediate assistance and emergencies
                        </p>
                        <p className="text-elderguard-blue font-semibold">
                          (800) 555-GUARD
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-elderguard-blue/10 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-elderguard-blue"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">
                          Email Support
                        </h3>
                        <p className="text-gray-600 mb-2">
                          General inquiries and support
                        </p>
                        <p className="text-elderguard-blue font-semibold">
                          support@elderguardai.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-elderguard-blue/10 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-elderguard-blue"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">
                          Office Location
                        </h3>
                        <p className="text-gray-600 mb-2">Main headquarters</p>
                        <p className="text-gray-700">
                          123 Healthcare Plaza
                          <br />
                          Suite 456
                          <br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-elderguard-blue/10 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-elderguard-blue"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">
                          Business Hours
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Customer support availability
                        </p>
                        <div className="text-gray-700">
                          <p>Monday - Friday: 8:00 AM - 8:00 PM PST</p>
                          <p>Saturday: 9:00 AM - 5:00 PM PST</p>
                          <p>Sunday: 10:00 AM - 4:00 PM PST</p>
                          <p className="text-elderguard-blue font-semibold mt-2">
                            Emergency support: 24/7
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about ElderGuard AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  How quickly do you respond to emergencies?
                </h3>
                <p className="text-gray-600">
                  Our AI system detects emergencies in real-time and sends
                  alerts within 30 seconds. Our response team is available 24/7
                  to coordinate with emergency services when needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Is my data secure and private?
                </h3>
                <p className="text-gray-600">
                  Yes, we use end-to-end encryption and process data locally
                  whenever possible. We're HIPAA compliant and never share
                  personal information without explicit consent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  What equipment do I need?
                </h3>
                <p className="text-gray-600">
                  Our system works with standard Wi-Fi cameras and wearable
                  devices. We provide a starter kit with everything needed for
                  basic monitoring, and can recommend additional devices based
                  on specific needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Do you offer technical support?
                </h3>
                <p className="text-gray-600">
                  Yes, our technical support team includes healthcare IT
                  specialists who can help with setup, troubleshooting, and
                  ongoing maintenance. Support is available during business
                  hours with 24/7 emergency assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
