import profileImage from "@/assets/profile.jpg";

const AboutMe = () => {
  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Sobre Mí
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-20" />
              <img 
                src={profileImage} 
                alt="Lautaro Hernan Guardiano"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-elegant border-4 border-border"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy estudiante de Finanzas con una fuerte pasión por la tecnología y el análisis de datos. 
              Me especializo en combinar conocimientos financieros con herramientas de inteligencia artificial 
              y automatización para crear soluciones innovadoras.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mi objetivo es transformar datos complejos en insights accionables que impulsen decisiones 
              estratégicas. Constantemente busco aprender nuevas tecnologías y metodologías para mejorar 
              la eficiencia en los procesos financieros.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Actualmente, me enfoco en desarrollar proyectos que integren análisis cuantitativo, 
              machine learning y automatizaciones para resolver problemas del mundo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
