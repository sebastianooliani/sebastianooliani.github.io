import { GraduationCap, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const educationData = [
    {
      degree: "Master's Degree in Robotics, Systems and Control",
      institution: "ETH Zürich",
      location: "Zürich, Switzerland",
      period: "September 2022 - April 2025",
      description: "Multidisciplinary Master's degree focused on robotics, control and AI.",
      highlights: [
        {
          title: "Semester Project at Soft Robotics Lab",
          description: "Learning a Policy for a Biomimetic Tendon-Driven Hand combined with a Robotic Arm",
          link: "#"
        },
        {
          title: "Teaching and Research Assistant",
          description: "At Soft Robotics Lab",
          link: "#"
        },
        {
          title: "Master Thesis at Computational Robotics Lab",
          description: "Two Arms, One Goal: Learning Dual-Robot Manipulation for Material Handling with online Reinforcement Learning",
          link: "#"
        }
      ],
      type: "current"
    },
    {
      degree: "Bachelor's Degree in Automation Engineering",
      institution: "Università di Bologna",
      location: "Bologna, Italy", 
      period: "September 2019 - July 2022",
      description: "Bachelor's degree focused on mechanical design, automation technologies, and control theory.",
      highlights: [
        {
          title: "Thesis Project",
          description: "Simulation of a sensorless SPMSM drive with I-f starting method",
          link: "#"
        },
        {
          title: "Merit Recognition",
          description: "Resident at Fondazione RUI Torleone, Residential College of Merit (10% acceptance rate)",
          link: "#"
        }
      ],
      type: "completed"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-muted-foreground text-lg">Academic journey in robotics and engineering</p>
            <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full mt-4"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-hero"></div>

            {educationData.map((education, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-hero rounded-full border-4 border-background shadow-card z-10"></div>
                
                {/* Content Card */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="glass-card hover-lift">
                    <CardContent className="p-6">
                      
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant={education.type === 'current' ? 'default' : 'secondary'} className="mb-2">
                            {education.type === 'current' ? 'Current' : 'Completed'}
                          </Badge>
                          <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                        </div>
                        <h3 className="font-bold text-lg text-foreground mb-2">{education.degree}</h3>
                        <div className="text-primary font-semibold text-lg mb-1">{education.institution}</div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {education.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {education.period}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">{education.description}</p>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Key Projects & Achievements</h4>
                        {education.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="border-l-2 border-primary/20 pl-4 py-2">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                <h5 className="font-medium text-foreground">{highlight.title}</h5>
                                <p className="text-sm text-muted-foreground mt-1">{highlight.description}</p>
                              </div>
                              {highlight.link && (
                                <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer flex-shrink-0" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                    </CardContent>
                  </Card>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;