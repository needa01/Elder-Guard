import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">ElderGuard</span>
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              Protecting families with AI-powered elder care monitoring. Professional, reliable, and compassionate care technology.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">Our Story</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">Press</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">Installation Guide</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">Troubleshooting</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-background/80">24/7 Emergency</p>
                  <p className="font-semibold">1-800-ELDER-GUARD</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-background/80">Support Email</p>
                  <p className="font-semibold">support@elderguard.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-background/80">Headquarters</p>
                  <p className="font-semibold">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-background/80">
              <p>&copy; {currentYear} ElderGuard. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-primary transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors duration-200">Cookie Policy</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-background/80">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by healthcare professionals</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};