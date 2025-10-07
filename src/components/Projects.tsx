import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tools: string[];
  link?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Análisis de Mercados Financieros",
    description: "Dashboard interactivo para análisis de tendencias de mercado usando datos históricos y modelos predictivos de machine learning.",
    image: project1,
    tools: ["Python", "Pandas", "Google Colab", "TensorFlow", "Plotly"],
    category: "Análisis de Datos"
  },
  {
    id: 2,
    title: "Automatización de Reportes Financieros",
    description: "Sistema automatizado para generación de reportes financieros mensuales con integración de múltiples fuentes de datos.",
    image: project2,
    tools: ["Google Sheets", "Apps Script", "Power Query", "Excel"],
    category: "Automatización"
  },
  {
    id: 3,
    title: "Modelo de Predicción de Riesgo",
    description: "Implementación de modelo de ML para evaluación de riesgo crediticio con precisión del 87%.",
    image: project3,
    tools: ["Python", "Scikit-learn", "Jupyter", "XGBoost"],
    category: "Inteligencia Artificial"
  },
  {
    id: 4,
    title: "Dashboard Económico Interactivo",
    description: "Visualización en tiempo real de indicadores económicos clave y análisis comparativo entre países.",
    image: project4,
    tools: ["Google Sheets", "Data Studio", "APIs", "Google Colab"],
    category: "Economía"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Proyectos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis trabajos en análisis financiero, automatizaciones e IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover:shadow-medium transition-smooth cursor-pointer border-border bg-card group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-smooth" />
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-smooth">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-smooth flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="hover:bg-accent hover:text-accent-foreground transition-smooth"
          >
            Todos mis Proyectos
          </Button>
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl bg-card">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
              <DialogDescription className="text-base pt-2">
                {selectedProject?.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
                <img 
                  src={selectedProject?.image} 
                  alt={selectedProject?.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Herramientas utilizadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.tools.map((tool, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="bg-secondary border-border"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Categoría:</h4>
                <Badge className="gradient-accent">
                  {selectedProject?.category}
                </Badge>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
