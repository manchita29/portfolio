import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container max-w-7xl flex items-center justify-between">
        <a 
          href="#home" 
          className="flex items-center text-xl md:text-2xl font-bold text-gradient"
        >
          <span className="mr-1 text-white">&lt;</span>
          Manchita
          <span className="ml-1 text-white">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-md border-l border-white/10">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <Link to="/" className="flex items-center gap-2">
                  <span className="text-xl font-bold">Portfolio</span>
                </Link>
              </div>
              <nav className="flex-1">
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/manchita29" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/manchitasharma/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
