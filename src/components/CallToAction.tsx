import { Button } from "@/components/ui/button";
import { Shield, Clock, Heart } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-primary-foreground/20" />
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full border border-primary-foreground/20" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full border border-primary-foreground/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center space-x-6 mb-8">
              <div className="flex items-center space-x-2 text-primary-foreground/90">
                <Shield className="w-6 h-6" />
                <span className="font-medium">24/7 Protection</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/90">
                <Clock className="w-6 h-6" />
                <span className="font-medium">Instant Alerts</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/90">
                <Heart className="w-6 h-6" />
                <span className="font-medium">Peace of Mind</span>
              </div>
            </div>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight hero-text-glow">
            Ready to Protect Your
            <span className="block">Loved Ones?</span>
          </h2>

          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of families who trust ElderGuard to keep their loved ones safe. Start your free trial today and experience the peace of mind you deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="emergency" size="xl" className="text-lg px-12">
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-12"
            >
              Book a Demo
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-primary-foreground/80">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-care-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-care-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>30-Day Free Trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-care-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};