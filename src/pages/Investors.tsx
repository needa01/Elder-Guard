import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";

const Investors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation forceScrolledState />

      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Investor Relations</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join us in revolutionizing elder care with cutting-edge AI
              technology
            </p>
          </div>
        </div>
      </div>

      {/* Market Opportunity */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Market Opportunity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The global elder care market is experiencing unprecedented growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">
                  $461B
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Global Market Size
                </h3>
                <p className="text-gray-600">
                  Expected to reach $461 billion by 2030 with 7.9% CAGR
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">54M</div>
                <h3 className="text-lg font-semibold mb-2">US Seniors</h3>
                <p className="text-gray-600">
                  Adults 65+ in the US, projected to reach 95 million by 2060
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <h3 className="text-lg font-semibold mb-2">Aging in Place</h3>
                <p className="text-gray-600">
                  Percentage of seniors who prefer to age in their own homes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Investment Highlights */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Investment Highlights
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg
                    className="w-4 h-4 text-primary"
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
                  <h3 className="text-lg font-semibold mb-2">
                    Proven Technology
                  </h3>
                  <p className="text-gray-600">
                    AI models with 99.2% accuracy in fall detection and
                    comprehensive monitoring capabilities
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg
                    className="w-4 h-4 text-primary"
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
                  <h3 className="text-lg font-semibold mb-2">
                    Healthcare Expertise
                  </h3>
                  <p className="text-gray-600">
                    Founded and led by healthcare professionals with deep
                    industry knowledge
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg
                    className="w-4 h-4 text-primary"
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
                  <h3 className="text-lg font-semibold mb-2">
                    Scalable Platform
                  </h3>
                  <p className="text-gray-600">
                    Cloud-based infrastructure designed to scale globally with
                    enterprise-grade security
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg
                    className="w-4 h-4 text-primary"
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
                  <h3 className="text-lg font-semibold mb-2">
                    Strong Partnerships
                  </h3>
                  <p className="text-gray-600">
                    Strategic alliances with healthcare providers and emergency
                    services
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Funding Rounds
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-sm text-gray-500">Series A - 2024</div>
                  <div className="font-semibold">$15M Raised</div>
                  <div className="text-sm text-gray-600">
                    Led by Healthcare Ventures
                  </div>
                </div>
                <div className="border-l-4 border-gray-300 pl-4">
                  <div className="text-sm text-gray-500">Seed - 2023</div>
                  <div className="font-semibold">$3M Raised</div>
                  <div className="text-sm text-gray-600">
                    Angel investors and grants
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Investment Opportunities
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to be part of the future of elder care?
          </p>
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-lg font-semibold mb-4">
              Contact Our Investment Team
            </h3>
            <p className="text-gray-600 mb-6">
              For detailed financial projections, product demonstrations, and
              investment terms
            </p>
            <div className="space-y-2">
              <p className="font-medium">investors@elderguard.ai</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
