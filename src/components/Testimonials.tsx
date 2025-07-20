import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Daughter & Primary Caregiver",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    content: "ElderGuard has given me such peace of mind. The AI detection caught my mother's fall within seconds, and emergency services were notified immediately. It's like having a professional caregiver watching 24/7.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Son of Alzheimer's Patient", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The daily health check-ins have been incredible for tracking my father's medication adherence. The family dashboard keeps all of us siblings updated, and we can coordinate care much better now.",
    rating: 5,
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Geriatrician",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
    content: "As a healthcare professional, I'm impressed by the accuracy of ElderGuard's monitoring. The activity tracking helps me identify health changes early, leading to better patient outcomes.",
    rating: 5,
  },
  {
    name: "Robert Martinez",
    role: "Professional Caregiver",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    content: "Working with multiple clients, ElderGuard helps me provide better care to each one. The emergency response coaching feature has been invaluable during critical situations.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-trust-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Families
            <span className="text-primary block">Across the Country</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from real families, caregivers, and healthcare professionals who have experienced the peace of mind that ElderGuard provides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-soft transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/60" />
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: "800ms" }}>
            <h3 className="text-4xl font-bold text-primary mb-2">10,000+</h3>
            <p className="text-muted-foreground">Families Protected</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "1000ms" }}>
            <h3 className="text-4xl font-bold text-primary mb-2">99.9%</h3>
            <p className="text-muted-foreground">Uptime Reliability</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "1200ms" }}>
            <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
            <p className="text-muted-foreground">Monitoring Coverage</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "1400ms" }}>
            <h3 className="text-4xl font-bold text-primary mb-2">2min</h3>
            <p className="text-muted-foreground">Average Response Time</p>
          </div>
        </div>
      </div>
    </section>
  );
};