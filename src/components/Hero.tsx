import { motion } from "framer-motion"; // Se mantiene por si se usa en otro lado, pero sus propiedades no se usan en el SVG
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // --- Función de generación de elementos estáticos ---
  // Generamos un conjunto fijo de puntos y líneas para asegurar que siempre aparezcan igual.
  const generateStaticElements = () => {
    const elements = [];
    const numLines = 25;
    const numDots = 30;

    // Generación de líneas estáticas (sin motion)
    for (let i = 0; i < numLines; i++) {
      elements.push(
        <line
          key={`line-${i}`}
          x1={i * (1000 / numLines)} 
          y1={i % 2 === 0 ? 50 : 950} 
          x2={(i + 1) * (1000 / numLines)} 
          y2={i % 2 === 0 ? 950 : 50}
          stroke="#333333" // Color gris muy oscuro
          strokeWidth="1.5" // Ancho visible
          opacity="0.8" // Opacidad alta y fija
        />
      );
    }

    // Generación de puntos estáticos (sin motion)
    for (let i = 0; i < numDots; i++) {
      elements.push(
        <circle
          key={`dot-${i}`}
          cx={(i * 1000) / numDots} 
          cy={Math.random() * 900 + 50} 
          r="3" // Radio visible
          fill="#000000" // Color negro
          opacity="1" // Opacidad máxima
        />
      );
    }
    return elements;
  };
  
  return (
    {/* 1. Asegúrate de que no hay 'bg-background' aquí para permitir que se vea el fondo. */}
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* 🌐 Fondo SVG estático de alto contraste */}
      {/* Nota: El SVG ahora no usa motion, sino una función estática */}
      <div className="absolute inset-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          className="w-full h-full"
        >
          {generateStaticElements()}
        </svg>
      </div>

      {/* 2. Elimina el gradiente por ahora para descartarlo como problema. */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 -z-0" /> */}

      {/* 🧠 Contenido principal */}
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Lautaro Hernan Guardiano
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Estudiante de Economía y Finanzas
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Especializado en análisis de datos, inteligencia artificial y
            automatizaciones de procesos. Transformando datos en decisiones
            estratégicas.
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
          <Button variant="outline" size="lg" className="hover:bg-secondary transition-smooth">
            Descargar CV
          </Button>
        </div>

        <button
          onClick={scrollToProjects}
          className="animate-bounce pt-8"
          aria-label="Scroll to projects"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
