import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {

  const scrollToProjects = () => {

    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-background">
      {/* 🌐 Fondo dinámico tipo red neuronal */}
      <div className="absolute inset-0 -z-10">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          className="w-full h-full"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >

          <defs>
            <linearGradient id="neuralGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(217, 91%, 70%)" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          {[...Array(25)].map((_, i) => (

            <motion.line
              key={`line-${i}`}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke="url(#neuralGradient)"
              strokeWidth="0.8"
              initial={{
                opacity: 0.15,
                pathLength: 0.4,
              }}
              
              animate={{
                opacity: [0.15, 0.4, 0.15],
                pathLength: [0.3, 0.8, 0.3],
              }}

              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
          
          {[...Array(30)].map((_, i) => (
            <motion.circle
              key={`dot-${i}`}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r={Math.random() * 2 + 0.5}
              fill="hsl(217, 91%, 60%)"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.6, 0.2], r: [1, 2, 1] }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.svg>
      </div>

      {/* ✨ Gradiente sutil encima del fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 -z-0" />
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
