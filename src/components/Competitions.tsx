import Lottie from "lottie-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Heart, Brain, CheckCircle, XCircle , X} from "lucide-react";
import radarAnimation from "@/assets/Radar.json";
// Radar animation JSON data


const competitors = [
  {
    name: "Life Alert",
    subtitle: "Leading traditional player",
    description: "Traditional medical alert system with basic fall detection",
    limitations: [
      "Outdated technology",
      "No AI capabilities",
      "Limited monitoring",
    ],
  },
  {
    name: "Philips HealthWatch",
    subtitle: "Healthcare giant",
    description: "Health monitoring with some smart features",
    limitations: ["Complex setup", "Limited AI insights", "Expensive hardware"],
  },
  {
    name: "CarePredict",
    subtitle: "Startup competitor",
    description: "Wearable device for senior care monitoring",
    limitations: [
      "Single device focus",
      "Limited ecosystem",
      "Basic analytics",
    ],
  },
];

const ourAdvantages = [
  {
    icon: Brain,
    title: "Advanced AI Technology",
    description:
      "Our proprietary AI learns individual patterns and predicts issues before they happen",
    comparison: "vs. Others use basic sensors without intelligent analysis",
  },
  {
    icon: Heart,
    title: "Holistic Care Approach",
    description:
      "Complete ecosystem covering physical, mental, and social wellbeing",
    comparison:
      "vs. Competitors focus on single aspects like fall detection only",
  },
  {
    icon: Zap,
    title: "Real-time Intelligence",
    description:
      "Instant analysis and response with 99.9% accuracy in emergency detection",
    comparison: "vs. Traditional systems have delays and false positives",
  },
  {
    icon: Shield,
    title: "Proactive Prevention",
    description:
      "Prevents emergencies through early intervention and health trend analysis",
    comparison:
      "vs. Others are reactive, only responding after incidents occur",
  },
];

export const Competitions = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-feature-accent">Competitions</span>
          </h2>
        </div>

        {/* Radar Animation */}
        <div className="flex justify-center mb-16">
          <div className="w-64 h-64">
            <Lottie
              animationData={radarAnimation}
              loop={true}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Competitor Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {competitors.map((competitor, index) => (
            <div
              key={index}
              className="bg-competitor-card border border-competitor-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {competitor.name}
                </h3>
                <p className="text-sm text-muted-foreground font-medium mb-3">
                  {competitor.subtitle}
                </p>
                <p className="text-muted-foreground text-sm">
                  {competitor.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-limitation-text font-semibold text-sm">
                  Limitations:
                </h4>
                {competitor.limitations.map((limitation, limIndex) => (
                  <div key={limIndex} className="flex items-center gap-3">
                    <X className="w-4 h-4 text-limitation-text flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      {limitation}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why We Lead Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why We <span className="text-feature-accent">Lead the Market</span>
          </h2>
        </div>

        {/* Our Advantages */}
        <div className="grid md:grid-cols-2 gap-8">
          {ourAdvantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-feature-card rounded-xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
              style={{ boxShadow: "var(--feature-glow)" }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-feature-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-8 h-8 text-feature-accent" />
                </div>

                <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {advantage.description}
                </p>

                <p className="text-feature-accent/80 text-sm italic">
                  {advantage.comparison}
                </p>
              </div>

              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-feature-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};