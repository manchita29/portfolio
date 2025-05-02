
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const HeroSection = () => {
  const skills = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Full Stack Developer'];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentSkill) {
      typingSpeed = 1500; // pause before deleting
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
      return;
    }

    typingIntervalRef.current = setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setDisplayText(currentSkill.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText.length + 1 === currentSkill.length) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), typingSpeed);
      }
    }, typingSpeed);

    return () => {
      if (typingIntervalRef.current) {
        clearTimeout(typingIntervalRef.current);
      }
    };
  }, [displayText, isDeleting, currentSkillIndex, skills]);

  return (
    <section id="home" className="min-h-screen flex items-center hero-grid section-padding">
      <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-gradient">Manchita Sharma</span>
          </h1>
          
          <div className="h-16">
            <h2 className="text-3xl sm:text-4xl font-medium text-muted-foreground">
              <span className="text-white">{displayText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            I specialize in building exceptional digital experiences with modern web technologies.
            Passionate about creating responsive, accessible, and performant web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="group">
              <a href="#projects">View Projects</a>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
          
          <div className="flex gap-6 pt-6">
            <a href="https://github.com/manchita29" target="_blank" rel="noreferrer" className="hover:text-primary text-muted-foreground transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/manchitasharma/" target="_blank" rel="noreferrer" className="hover:text-primary text-muted-foreground transition-colors">
              <Linkedin size={24} />
            </a>

          </div>
        </div>
        
        <div className="relative order-1 lg:order-2 flex justify-center">
          <div className="glass w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-white/10 relative z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-blue-500/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <img 
                src="/mannu.png" 
                alt="Manchita Sharma" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-primary/20 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
