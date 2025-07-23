import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import {
  TrendingUp,
  Users,
  Shield,
  Globe,
  Mail,
  Phone,
  CheckCircle,
} from "lucide-react";

const Investors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation forceScrolledState />

      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Investment Opportunity</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Looking for investors, if you are interested you can invest in
              revolutionizing elder care with cutting-edge AI technology
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Get Investment Details
            </Button>
          </div>
        </div>
      </div>

      {/* Market Opportunity */}
      <div className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Market Opportunity
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The global elder care market is experiencing unprecedented growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-border">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-4xl font-bold text-primary mb-2">
                  $461B
                </CardTitle>
                <h3 className="text-lg font-semibold text-foreground">
                  Global Market Size
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expected to reach $461 billion by 2030 with 7.9% CAGR
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-4xl font-bold text-primary mb-2">
                  54M
                </CardTitle>
                <h3 className="text-lg font-semibold text-foreground">
                  US Seniors
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Adults 65+ in the US, projected to reach 95 million by 2060
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-4xl font-bold text-primary mb-2">
                  90%
                </CardTitle>
                <h3 className="text-lg font-semibold text-foreground">
                  Aging in Place
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Percentage of seniors who prefer to age in their own homes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Investment Highlights */}
      <div className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Invest in ElderGuard AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionary technology meets massive market opportunity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Proven Technology
                  </h3>
                  <p className="text-muted-foreground">
                    AI models with 99.2% accuracy in fall detection and
                    comprehensive monitoring capabilities
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Healthcare Expertise
                  </h3>
                  <p className="text-muted-foreground">
                    Founded and led by healthcare professionals with deep
                    industry knowledge
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Scalable Platform
                  </h3>
                  <p className="text-muted-foreground">
                    Cloud-based infrastructure designed to scale globally with
                    enterprise-grade security
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Strong Partnerships
                  </h3>
                  <p className="text-muted-foreground">
                    Strategic alliances with healthcare providers and emergency
                    services
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl text-foreground">
                  Investment Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">
                    Seeking Strategic Partners
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We are looking for investors who share our vision of
                    transforming elder care through innovative AI technology.
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">
                    Growth Potential
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Massive addressable market with proven product-market fit
                    and scalable technology platform.
                  </p>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">
                    Impact Investment
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Join us in making a meaningful difference in millions of
                    lives while generating strong returns.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Invest?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us in revolutionizing the future of elder care
          </p>
          <Card className="bg-muted/30 border-border">
            <CardContent className="p-8">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Contact Our Investment Team
              </h3>
              <p className="text-muted-foreground mb-6">
                For detailed business plans, financial projections, product
                demonstrations, and investment terms
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">
                    investors@elderguard.ai
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    +1 (555) 123-4567
                  </span>
                </div>
              </div>
              <Button className="mt-6" size="lg">
                Schedule Investment Meeting
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Investors;
