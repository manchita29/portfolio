import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const uiuxProjects = [
  {
    title: 'Dreamer UI',
    description:
      'A comprehensive travel app UI designed from scratch, focusing on seamless user journeys, accessibility, and delightful micro-interactions. Every screen is crafted with attention to detail, ensuring a visually engaging and intuitive experience.',
    image: '/dreamer.png',
    link: 'https://www.figma.com/design/bgqFNoLuTAzlgquc6buDa6/dreamer?node-id=0-1&p=f&t=QCs5MNq7oNzNee1z-0',
    tags: ['Figma', 'Mobile App', 'UI/UX', 'Travel'],
  },
  {
    title: 'Netflix Redesign',
    description:
      'A bold redesign of the Netflix web experience, emphasizing clarity, hierarchy, and immersive visuals. The project demonstrates my ability to rethink established products and elevate them with modern UI/UX best practices.',
    image: '/Netflix1.png',
    link: 'https://www.figma.com/design/CCCNzTMRnqgChzkC6Z4Z0A/netflix-redesgin?node-id=0-1&p=f&t=YqhwYVY9IQ2FjRGh-0',
    tags: ['Figma', 'Web App', 'UI/UX', 'Redesign'],
  },
];

const UiUxPassionSection = () => {
  return (
    <section id="uiux-passion" className="section-padding relative overflow-hidden bg-background">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">UI/UX Passion</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl text-center">
            I am deeply passionate about crafting beautiful, intuitive, and impactful user experiences. My approach to UI/UX is rooted in empathy, attention to detail, and a relentless pursuit of pixel-perfect design. Here are a few Figma projects that showcase my dedication to design excellence and user-centric thinking.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          {uiuxProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Card className="glass border-white/10 group hover:border-primary/20 transition-colors flex flex-col h-full shadow-xl">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl shadow-2xl border border-white/10 w-full h-72 object-cover mb-6 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-primary/40 group-hover:shadow-lg"
                  />
                  <span className="absolute top-4 right-4 bg-primary/80 text-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={18} />
                  </span>
                </a>
                <CardContent className="flex-1 flex flex-col items-center text-center p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gradient">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center mt-auto">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="glass">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UiUxPassionSection; 