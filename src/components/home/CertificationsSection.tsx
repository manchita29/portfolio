import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, FileText } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: 'award' | 'trophy' | 'certificate';
  image: string;
  link: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: 'Mastering Data Structures & Algorithms using C and C++',
      issuer: 'Udemy',
      date: 'Oct 23, 2023',
      description: 'Instructor: Abdul Bari | 58.5 total hours',
      icon: 'certificate',
      image: '/certificate-udemy.png',
      link: '/certificate-udemy.png',
    },
    {
      id: 2,
      title: 'Server side JavaScript with Node.js',
      issuer: 'NIIT / Coursera',
      date: 'Apr 23, 2024',
      description: '',
      icon: 'certificate',
      image: '/certificate-coursera.png',
      link: '/certificate-coursera.png',
    },
    {
      id: 3,
      title: 'Full-Stack Development Using MERN Stack',
      issuer: 'Cipher Schools',
      date: 'Jul 2024',
      description: 'Lovely Professional University',
      icon: 'certificate',
      image: '/cerificate-cipher.png',
      link: '/cerificate-cipher.png',
    },
  ];

  const achievements = [
    {
      id: 1,
      title: 'Volunteer at Abhika Dravyang Siksha Sansthan (Himachal Pradesh)',
      description: 'Contributed in rehabilitation programs, volunteered as part of the core team, and helped in the smooth campaign execution of the camp. Provided direct interaction with beneficiaries and assisted children during a health camp organized by the NGO.',
      year: 'Jan 23 – Jul 23'
    }
  ];

  const getIcon = (icon: Certification['icon']) => {
    switch (icon) {
      case 'award':
        return <Award className="h-6 w-6 text-primary" />;
      case 'trophy':
        return <Trophy className="h-6 w-6 text-primary" />;
      case 'certificate':
        return <FileText className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-background">
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
            Certifications & <span className="text-gradient">Co-Curricular</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl text-center">
            Professional certifications and notable achievements in my career journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Certifications</h3>
            <div className="space-y-10">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="glass border-white/10 group hover:border-primary/20 transition-colors flex flex-col items-center p-6 shadow-xl">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="rounded-xl shadow-2xl border border-white/10 w-full max-w-lg h-auto max-h-[340px] object-contain mx-auto mb-6 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-primary/40 group-hover:shadow-lg"
                      />
                    </a>
                    <CardContent className="w-full text-center p-0">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        {getIcon(cert.icon)}
                        <h4 className="text-lg font-semibold">{cert.title}</h4>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2 mb-2">
                        <span className="text-muted-foreground text-sm">{cert.issuer}</span>
                        <span className="text-muted-foreground text-sm">| {cert.date}</span>
                      </div>
                      {cert.description && (
                        <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                      )}
                      
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Co-Curricular</h3>
            <div className="space-y-6">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="glass border-white/10 group hover:border-primary/20 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Trophy className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold">{achievement.title}</h4>
                            <Badge variant="secondary" className="glass">
                              {achievement.year}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection; 
