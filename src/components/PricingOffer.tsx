import { Button } from "@/components/ui/button";
import { Check, Clock, Star } from "lucide-react";

const PricingOffer = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Early Pass Special
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get lifetime access to ElderGuard AI at an exclusive early adopter
            price. Secure your family's peace of mind today.
          </p>

          <div className="bg-card border rounded-2xl p-8 md:p-12 shadow-lg max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-primary">
                Most Popular
              </span>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl md:text-4xl font-bold">$39.99</span>
                <span className="text-lg text-muted-foreground">one time</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="line-through">Usually $50/month</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                <span>24/7 AI monitoring and alerts</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                <span>Fall detection technology</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                <span>Emergency response system</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                <span>Family notifications</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                <span>Health trend analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                <span>Lifetime updates</span>
              </div>
            </div>

            <Button size="lg" className="w-full text-lg py-6">
              Claim Your Early Pass
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              30-day money-back guarantee • Cancel anytime
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                10,000+
              </div>
              <div className="text-muted-foreground">Seniors Protected</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PricingOffer };
