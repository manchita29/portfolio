import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const handleResumeDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/manchita_General_cv.pdf';
    link.download = 'manchita_General_cv.pdf'; // This will force download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-background">
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
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl text-center">
            I am a passionate Full Stack Developer with hands-on experience in building dynamic and responsive web applications. My expertise includes C++, JavaScript, React, Node.js, Express.js, Angular, and MongoDB. I thrive in collaborative environments and excel at problem-solving, time management, and adapting to new challenges. I am committed to delivering high-quality solutions and continuously expanding my technical and soft skills.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Skills Overview</h3>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <h4 className="font-semibold mb-1">Languages</h4>
                <ul className="text-muted-foreground text-sm list-disc list-inside">
                  <li>C++</li>
                  <li>C</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Frameworks</h4>
                <ul className="text-muted-foreground text-sm list-disc list-inside">
                  <li>HTML &amp; CSS</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Angular</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Tools/Platforms</h4>
                <ul className="text-muted-foreground text-sm list-disc list-inside">
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Soft Skills</h4>
                <ul className="text-muted-foreground text-sm list-disc list-inside">
                  <li>Team work</li>
                  <li>Communication</li>
                  <li>Time Management</li>
                  <li>Adaptability</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
            </div>
            <Button onClick={handleResumeDownload} className="gap-2 group mt-6">
              <Download size={16} className="transition-transform group-hover:translate-y-1" />
              Download Resume
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <Card className="glass transition-transform hover:-translate-y-2 duration-300 mb-6">
              <CardContent className="p-6 text-center">
                <h4 className="text-4xl font-bold text-gradient mb-2">3rd Year B.Tech Student</h4>
                <p className="text-muted-foreground">Specializing in React, Node.js, Express.js, and modern web technologies. Experienced in building scalable, maintainable, and user-friendly applications.</p>
              </CardContent>
            </Card>
            <Card className="glass transition-transform hover:-translate-y-2 duration-300">
              <CardContent className="p-6 text-center">
                <h4 className="text-2xl font-bold text-gradient mb-2">Looking for new opportunities!</h4>
                <p className="text-muted-foreground">Open to roles in web development, software engineering, and collaborative tech projects.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
