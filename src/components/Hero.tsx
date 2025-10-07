import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 gradient-subtle">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Analista Financiero
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Estudiante de Finanzas
          </p>
        </div>
        
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Especializado en análisis de datos, inteligencia artificial, 
            automatizaciones y economía. Transformando datos en decisiones estratégicas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="gradient-primary hover:opacity-90 transition-smooth shadow-medium"
          >
            Ver Proyectos
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="hover:bg-secondary transition-smooth"
          >
            Descargar CV
          </Button>
        </div>

        <button
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to projects"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
