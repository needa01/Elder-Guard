import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Shield, Bot, Heart } from "lucide-react";
import heroElderCare from "@/assets/hero-elder-care.png";
import heroAiCoach from "@/assets/hero-ai-coach.jpg";
import heroHealthcareTeam from "@/assets/hero-healthcare-team.jpg";

const slides = [
  {
    id: 1,
    image: heroElderCare,
    icon: Shield,
    title: "Detect Falls, Abuse, Distress in Real Time",
    subtitle: "Get Alerts With AI",
    description: "Advanced AI monitoring system that watches over your loved ones 24/7, providing instant alerts when help is needed most.",
    ctaText: "Start Free Trial",
    ctaVariant: "hero" as const,
  },
  {
    id: 2,
    image: heroAiCoach,
    icon: Bot,
    title: "World's First AI Powered",
    subtitle: "Emergency Response Coach",
    description: "Intelligent guidance system that helps coordinate emergency responses, ensuring the fastest and most appropriate care.",
    ctaText: "Book a Demo",
    ctaVariant: "hero" as const,
  },
  {
    id: 3,
    image: heroHealthcareTeam,
    icon: Heart,
    title: "Built by HHA's, Nurses",
    subtitle: "And Doctors Who Care",
    description: "Created by healthcare professionals who understand the challenges of elder care and the importance of reliable monitoring.",
    ctaText: "Get Started Now",
    ctaVariant: "care" as const,
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="home" className="relative mt-16 h-screen overflow-hidden">
      {slides.map((slide, index) => {
        const IconComponent = slide.icon;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <div
                    className={`transition-all duration-1000 delay-300 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-3 bg-primary-foreground/20 rounded-lg backdrop-blur-sm">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <span className="text-primary-foreground/80 text-lg font-medium">
                        ElderGuard AI
                      </span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight hero-text-glow">
                      {slide.title}
                    </h1>
                    
                    <h2 className="text-3xl lg:text-4xl font-semibold text-primary-foreground/90 mb-6">
                      {slide.subtitle}
                    </h2>

                    <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant={slide.ctaVariant} size="xl">
                        {slide.ctaText}
                      </Button>
                      <Button variant="outline" size="xl" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary-foreground scale-125"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-foreground/20">
        <div
          className="h-full bg-primary-foreground transition-all duration-100 ease-linear"
          style={{
            width: isAutoPlaying ? "100%" : "0%",
            animation: isAutoPlaying ? "progress 6s linear infinite" : "none",
          }}
        />
      </div>

      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
};