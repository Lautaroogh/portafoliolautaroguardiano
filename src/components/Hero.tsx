import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* 🌐 Fondo tipo red neuronal */}
      <motion.div
        className="absolute inset-0 -z-10 bg-background"
        animate={{ backgroundPosition: ["0px 0px", "200px 200px"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, hsl(220 70% 45%) 1px, transparent 0),
            radial-gradient(circle at 100px 50px, hsl(220 70% 45%) 1px, transparent 0),
            radial-gradient(circle at 50px 100px, hsl(220 70% 45%) 1px, transparent 0)
          `,
          backgroundSize: "200px 200px",
          opacity: 0.25,
        }}
      />

      {/* 🌫️ Capa de gradiente para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90 -z-10" />

      {/* 🧠 Contenido principal */}
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
        {/* Título */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Lautaro Hernan Guardiano
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Estudiante de Economía y Finanzas
          </p>
        </div>

        {/* Descripción */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Especializado en análisis de datos, inteligencia artificial y
          automatización de procesos. Transformando datos en decisiones
          estratégicas.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="gradient-primary hover:opacity-90 transition-smooth shadow-medium"
          >
            Ver Proyectos
          </Button>

          <a href="/cv/Lautaro_Guardiano_CV.pdf" download>
            <Button variant="outline" size="lg" className="hover:bg-secondary transition-smooth">
              Descargar CV
            </Button>
          </a>
        </div>

        {/* Flecha de scroll */}
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
