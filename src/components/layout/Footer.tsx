
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-4 border-t border-white/10 bg-[#0c1324]">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#home" 
              className="flex items-center text-xl font-bold text-gradient"
            >
              <span className="mr-1 text-white">&lt;</span>
              Manchita
              <span className="ml-1 text-white">/&gt;</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Building exceptional digital experiences
            </p>
          </div>
          
          <div className="flex gap-4 items-center">
            <a href="https://github.com/manchita29" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/manchitasharma/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
       
            <a href="mailto:manchita.sharma2005@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {year} Manchita Sharma. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
