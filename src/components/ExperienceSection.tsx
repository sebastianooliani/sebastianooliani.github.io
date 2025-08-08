import { Briefcase, Calendar, MapPin, Zap, Database, BarChart3, FileText, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const achievements = [
    {
      icon: Database,
      title: "Data Pipeline Optimization", 
      description: "Created data pipelines using Python to collect and merge data from different sources, speeding up (10x) the analysis of the production line of IGBT transistors."
    },
    {
      icon: BarChart3,
      title: "Database Enhancement",
      description: "Developed a new database on MS SQL to enhance data analysis of machines' failures."
    },
    {
      icon: FileText,
      title: "Process Improvement",
      description: "Presented reports to improve the efficiency of the production line to process, automation, and integration engineers."
    },
    {
      icon: Cpu,
      title: "Custom Visualizations",
      description: "Designed custom visualizations with Power BI."
    },
    {
      icon: Zap,
      title: "Documentation",
      description: "Authored internal software documentation."
    }
  ];

  return (
    <section className="section-padding bg-gradient-section">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg">Bridging robotics with real-world industrial applications</p>
            <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full mt-4"></div>
          </div>

          {/* Main Experience Card */}
          <Card className="glass-card hover-lift mb-12">
            <CardContent className="p-8">
              
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Data Engineer</h3>
                    <div className="text-primary font-semibold text-lg">Hitachi Energy</div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Lenzburg, Switzerland
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        March 2024 - August 2024
                      </div>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  6 months
                </Badge>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A transformative internship experience that I found <strong>very interesting, educational and stimulating</strong>. 
                  This role provided valuable exposure to industrial data engineering practices and enhanced my understanding 
                  of how robotics principles apply to large-scale manufacturing environments.
                </p>
              </div>

              {/* Achievements Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <achievement.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

            </CardContent>
          </Card>

          {/* Skills Gained */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-center">Technologies & Skills Applied</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Python", "SQL Server", "Power BI", "Data Pipelines", "Process Optimization", 
                  "Industrial Analytics", "Documentation", "Report Writing", "Automation"
                ].map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;