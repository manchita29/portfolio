
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SkillsSection = () => {
  const frontendSkills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Framer Motion', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Redux', level: 85 },
    { name: 'React Query', level: 80 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 85 },
    { name: 'REST APIs', level: 90 },
    { name: 'Firebase', level: 75 },
    { name: 'GraphQL', level: 70 },
  ];

  const otherSkills = [
    { name: 'Git & GitHub', level: 90 },
    { name: 'DevOps', level: 65 },
    { name: 'Testing', level: 75 },
    { name: 'UI/UX Design', level: 70 },
    { name: 'Performance Optimization', level: 80 },
    { name: 'Responsive Design', level: 95 },
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-sm">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-primary to-blue-500 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding bg-[#0c1324]">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl text-center">
            A showcase of my technical expertise and proficiency in various technologies
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="glass">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="other">Other Skills</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="frontend">
            <Card className="glass border-white/10">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    {frontendSkills.slice(0, Math.ceil(frontendSkills.length / 2)).map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                  <div>
                    {frontendSkills.slice(Math.ceil(frontendSkills.length / 2)).map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="backend">
            <Card className="glass border-white/10">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    {backendSkills.slice(0, Math.ceil(backendSkills.length / 2)).map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                  <div>
                    {backendSkills.slice(Math.ceil(backendSkills.length / 2)).map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="other">
            <Card className="glass border-white/10">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    {otherSkills.slice(0, Math.ceil(otherSkills.length / 2)).map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                  <div>
                    {otherSkills.slice(Math.ceil(otherSkills.length / 2)).map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
