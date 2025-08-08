import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "sebastiano.oliani@gmail.com",
      href: "mailto:sebastiano.oliani@gmail.com",
      description: "Best way to reach me for professional inquiries"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "sebastianooliani",
      href: "https://github.com/sebastianooliani",
      description: "Check out my code and projects"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Sebastiano Oliani",
      href: "https://www.linkedin.com/in/sebastiano-oliani-332a52209/",
      description: "Connect with me professionally"
    }
  ];

  return (
    <section className="section-padding bg-gradient-section">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Interested in robotics, AI research, or potential collaborations? 
              I'd love to hear from you and discuss exciting opportunities.
            </p>
            <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full mt-4"></div>
          </div>

          {/* Location Card */}
          <Card className="glass-card hover-lift mb-12">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Currently Based In</h3>
              <p className="text-2xl font-bold gradient-text">Zürich, Switzerland</p>
              <p className="text-muted-foreground mt-2">Open to opportunities in Europe and beyond</p>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="glass-card hover-lift group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-primary font-medium mb-2">{method.value}</p>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      <Send className="w-3 h-3 mr-2" />
                      Connect
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <Card className="glass-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Let's Collaborate</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're interested in robotics research, AI applications, or have an exciting project in mind, 
                I'm always open to meaningful conversations and collaboration opportunities.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark shadow-hero hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="mailto:sebastiano.oliani@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </a>
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;