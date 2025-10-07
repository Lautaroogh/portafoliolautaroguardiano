import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Geometric network background */}
      <div className="absolute inset-0 bg-background">
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Dots */}
              <circle cx="0" cy="0" r="2" fill="hsl(220 70% 25%)" />
              <circle cx="100" cy="50" r="2" fill="hsl(220 70% 25%)" />
              <circle cx="200" cy="0" r="2" fill="hsl(220 70% 25%)" />
              <circle cx="50" cy="100" r="2" fill="hsl(220 70% 25%)" />
              <circle cx="150" cy="150" r="2" fill="hsl(220 70% 25%)" />
              <circle cx="0" cy="200" r="2" fill="hsl(220 70% 25%)" />
              <circle cx="200" cy="200" r="2" fill="hsl(220 70% 25%)" />
              <circle cx="75" cy="25" r="1.5" fill="hsl(220 70% 25%)" opacity="0.6" />
              <circle cx="125" cy="75" r="1.5" fill="hsl(220 70% 25%)" opacity="0.6" />
              <circle cx="175" cy="100" r="1.5" fill="hsl(220 70% 25%)" opacity="0.6" />
              <circle cx="25" cy="150" r="1.5" fill="hsl(220 70% 25%)" opacity="0.6" />
              
              {/* Lines */}
              <line x1="0" y1="0" x2="100" y2="50" stroke="hsl(220 70% 25%)" strokeWidth="0.5" opacity="0.3" />
              <line x1="100" y1="50" x2="150" y2="150" stroke="hsl(220 70% 25%)" strokeWidth="0.5" opacity="0.3" />
              <line x1="0" y1="0" x2="75" y2="25" stroke="hsl(220 70% 25%)" strokeWidth="0.5" opacity="0.2" />
              <line x1="100" y1="50" x2="125" y2="75" stroke="hsl(220 70% 25%)" strokeWidth="0.5" opacity="0.2" />
              <line x1="50" y1="100" x2="150" y2="150" stroke="hsl(220 70% 25%)" strokeWidth="0.5" opacity="0.3" />
              <line x1="75" y1="25" x2="125" y2="75" stroke="hsl(220 70% 25%)" strokeWidth="0.5" opacity="0.2" />
              <line x1="150" y1="150" x2="175" y2="100" stroke="hsl(220 70% 25%)" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-pattern)" />
        </svg>
      </div>
      
      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Lautaro Hernan Guardiano
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">Estudiante de Economía y Finanzas</p>
        </div>
        
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Especializado en análisis de datos, inteligencia artificial y 
            automatizaciones de procesos. Transformando datos en decisiones estratégicas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button onClick={scrollToProjects} size="lg" className="gradient-primary hover:opacity-90 transition-smooth shadow-medium mx-0">
            Ver Proyectos
          </Button>
          <Button variant="outline" size="lg" className="hover:bg-secondary transition-smooth">
            Descargar CV
          </Button>
        </div>

        <button onClick={scrollToProjects} className="animate-bounce pt-8" aria-label="Scroll to projects">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>;
};
export default Hero;