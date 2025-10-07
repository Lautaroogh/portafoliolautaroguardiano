import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contacto</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contacto@ejemplo.com
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Enlaces</h3>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground transition-smooth"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground transition-smooth"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground transition-smooth"
              >
                <FileText className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Disponibilidad</h3>
            <p className="text-sm text-muted-foreground">
              Abierto a colaboraciones y oportunidades profesionales
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Lautaro Hernan Guardiano. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
