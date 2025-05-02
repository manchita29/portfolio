import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Travel Website',
      description: 'Built a travel booking app using React and TypeScript, styled with Tailwind CSS and ShadCN components. Integrated third-party APIs for real-time travel details and used Framer Motion for smooth animations. A state management library manages user authentication and session handling efficiently.',
      image: '/project3.png',
      tags: ['React', 'TypeScript']
    },
    {
      id: 2,
      title: 'ToDo List Website',
      description: 'Developed a web application that enables users to add, edit, delete, and mark tasks as completed. Aimed to improve productivity with an intuitive interface for efficient daily task management. Integrated backend services for task storage and implemented CRUD operations.',
      image: '/project2.png',
      tags: ['React', 'MongoDB', 'Express.js']
    },
    {
      id: 3,
      title: 'Book Store Website',
      description: 'Developed a responsive web application for browsing and purchasing books online. Implemented dynamic user interfaces using AngularJS and styled components with Bootstrap for a modern look.',
      image: '/project1.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'AngularJS', 'Bootstrap']
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl text-center">
            A showcase of my most impactful work and the technologies I've mastered
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={item} className="relative">
              <div className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                <div className="lg:w-1/2 relative group">
                  <div className="glass overflow-hidden rounded-xl border border-white/10">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-70"></div>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl blur-xl -z-10 group-hover:blur-2xl transition-all duration-500"></div>
                </div>
                
                <div className="lg:w-1/2">
                  <Card className="glass border-white/10">
                    <CardHeader>
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="glass">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
