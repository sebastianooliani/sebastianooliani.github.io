import { Mail, MapPin, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-sebastiano.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-primary-glow/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Profile Image */}
          <div className="mb-8 animate-slide-up">
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-hero ring-4 ring-primary/20">
                <img 
                  src={profileImage} 
                  alt="Sebastiano Oliani - Robotics Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-accent">
                <div className="w-3 h-3 bg-accent-foreground rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text">Sebastiano</span>{" "}
              <span className="text-foreground">Oliani</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Robotics Engineer & AI Researcher
            </p>
          </div>

          {/* Location & Contact */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-wrap justify-center items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Zürich, Switzerland</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:sebastiano.oliani@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  sebastiano.oliani@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-10 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about <span className="text-primary font-semibold">robotics, artificial intelligence, and control systems</span>. 
              Currently pursuing Master's at ETH Zürich, specializing in robotic manipulation and dual-arm setups.
            </p>
          </div>

          {/* Social Links & CTA */}
          <div className="flex flex-wrap justify-center items-center gap-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary-dark shadow-hero hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                asChild
              >
                <a href="https://github.com/sebastianooliani" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                asChild
              >
                <a href="https://www.linkedin.com/in/sebastiano-oliani-332a52209/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;