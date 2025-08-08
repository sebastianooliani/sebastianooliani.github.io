import { MapPin, Heart, Brain, Cog } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Robotics",
      description: "Specialized in robotic manipulation using dexterous hands and dual-arm setups"
    },
    {
      icon: Cog,
      title: "Control Systems",
      description: "Deep expertise in engineering control systems and automation technologies"
    },
    {
      icon: Heart,
      title: "Research Passion",
      description: "Following philosophical and political discussions around AI and robotics implications"
    }
  ];

  return (
    <section className="section-padding bg-gradient-section">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <Card className="glass-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Journey from Italy to Switzerland</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Born in a small village in Northern <strong>Italy</strong> (very small indeed - check{" "}
                        <a 
                          href="https://www.google.it/maps/place/46020+Carbonara+di+Po+MN/@45.0335496,11.218208,15z" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-dark underline"
                        >
                          Carbonara di Po
                        </a>
                        ), where I lived until 19. Then moved to Bologna for my Bachelor's, and finally to Zürich for my Master's at ETH.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Professional Experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Completed a six-month internship at <strong>Hitachi Energy</strong> as a Data Engineer, 
                    which I found very interesting, educational and stimulating. The experience bridged my 
                    robotics background with real-world industrial applications.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="glass-card hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Language Skills</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Italian</span>
                      <span className="text-sm text-muted-foreground">Native</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-gradient-hero h-2 rounded-full w-full"></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="font-medium">English</span>
                      <span className="text-sm text-muted-foreground">Fluent</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-gradient-hero h-2 rounded-full w-4/5"></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="font-medium">German</span>
                      <span className="text-sm text-muted-foreground">Ein bisschen</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-gradient-hero h-2 rounded-full w-2/5"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Philosophy & Ethics</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    While engineering is my forte, I actively follow philosophical and political 
                    discussions around the aspects and consequences of AI and robotics, understanding 
                    the broader impact of our technological advances.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="glass-card hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;