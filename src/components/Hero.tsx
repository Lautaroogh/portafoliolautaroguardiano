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
    {/* Asegúrate de que esta sección no tenga un 'bg-background' que tape el gradiente */}
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* 🌐 Fondo dinámico tipo red neuronal */}
      <div className="absolute inset-0 -z-10">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          className="w-full h-full"
          initial={{ opacity: 0.8 }} // Base SVG más opaca
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id="neuralGradient" x1="0" y1="0" x2="1" y2="1">
              {/* ¡NUEVOS COLORES OSCUROS! */}
              <stop offset="0%" stopColor="hsl(217, 91%, 35%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(217, 91%, 50%)" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Líneas */}
          {[...Array(25)].map((_, i) => (
            <motion.line
              key={`line-${i}`}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke="url(#neuralGradient)"
              strokeWidth="1.2" // Ancho de línea un poco más grande
              initial={{
                opacity: 0.5, // ¡Opacidad Aumentada!
                pathLength: 0.4,
              }}
              animate={{
                opacity: [0.5, 0.8, 0.5], // Opacidad Aumentada!
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

          {/* Nodos (Círculos) */}
          {[...Array(30)].map((_, i) => (
            <motion.circle
              key={`dot-${i}`}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r={Math.random() * 2 + 1} // Radio un poco más grande
              fill="hsl(217, 91%, 30%)" // Color oscuro para los nodos
              initial={{ opacity: 0.6 }} // ¡Opacidad Aumentada!
              animate={{ opacity: [0.6, 1, 0.6], r: [1, 2, 1] }} // Opacidad Aumentada!
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
      {/* Si tu background es blanco, este gradiente debe ser muy sutil. */}
      {/* Lo cambié para que termine en transparente, pero si tu 'bg-background' es blanco, from-background/80 será blanco casi opaco y funcionará como base. */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-transparent -z-0" />

      {/* 🧠 Contenido principal */}
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 animate-fade-in">
        {/* ... (resto del contenido) ... */}
      </div>
    </section>
  );
};

export default Hero;
