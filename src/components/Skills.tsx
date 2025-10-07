import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BarChart3, Brain, Zap, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    icon: BarChart3,
    title: "Análisis de Datos",
    skills: [
      "Python (Pandas, NumPy)",
      "SQL",
      "Excel Avanzado",
      "Power BI",
      "Google Sheets",
      "Estadística Aplicada"
    ]
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    skills: [
      "Machine Learning",
      "Scikit-learn",
      "Modelos Predictivos",
      "Google Colab",
      "Jupyter Notebooks"
    ]
  },
  {
    icon: Zap,
    title: "Automatizaciones",
    skills: [
      "Google Apps Script",
      "Python Scripts",
      "APIs REST",
      "Web Scraping",
      "ETL Processes"
    ]
  },
  {
    icon: TrendingUp,
    title: "Finanzas & Economía",
    skills: [
      "Análisis Financiero",
      "Modelado Financiero",
      "Valoración de Activos",
      "Análisis de Riesgo",
      "Econometría",
      "Mercados de Capitales"
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Habilidades & Conocimientos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conjunto de competencias técnicas y conocimientos especializados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="border-border bg-card hover:shadow-medium transition-smooth"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg gradient-accent">
                      <Icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary hover:bg-accent hover:text-accent-foreground transition-smooth cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
