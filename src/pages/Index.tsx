import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="education">
          <EducationSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-section border-t border-border py-8">
        <div className="container mx-auto container-padding text-center">
          <p className="text-muted-foreground">
            © 2024 Sebastiano Oliani. Built with passion for robotics and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
