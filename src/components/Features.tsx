import { AlertTriangle, Heart, Users, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: AlertTriangle,
    title: "Emergency Alerts",
    description: "Instant notifications for falls, distress calls, and emergency situations with AI-powered detection that never sleeps.",
    gradient: "gradient-hero",
  },
  {
    icon: Heart,
    title: "Daily Health Check-ins",
    description: "Automated health monitoring and medication reminders to ensure your loved one maintains their daily wellness routine.",
    gradient: "gradient-care",
  },
  {
    icon: Users,
    title: "Family Dashboard",
    description: "Real-time updates and comprehensive reports for family members to stay connected and informed about their loved one's wellbeing.",
    gradient: "gradient-trust",
  },
  {
    icon: Activity,
    title: "Activity Monitoring",
    description: "Track daily activities, sleep patterns, and mobility to identify changes in behavior and health trends early.",
    gradient: "gradient-hero",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Elder Care
            <span className="text-primary block">Monitoring Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform combines cutting-edge AI technology with compassionate care to provide complete peace of mind for families and caregivers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative p-8 rounded-2xl shadow-card hover:shadow-soft transition-all duration-500 animate-fade-in-up bg-card ${feature.gradient}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 rounded-2xl opacity-5 bg-gradient-to-br from-foreground to-transparent" />
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-semibold"
                  >
                    Learn More →
                  </Button> */}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="xl">
            <Link to="/about">
            View All Features
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};