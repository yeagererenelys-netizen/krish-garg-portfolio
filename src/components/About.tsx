import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code2, Database, Wrench } from 'lucide-react';

const education = [
  {
    institution: 'IIIT Allahabad',
    degree: 'B.Tech in Information Technology',
    minor: 'Minor in Indian Economics',
    period: 'Aug 2024 - Aug 2028',
    grade: 'CGPA: 8.31',
  },
  {
    institution: 'A.V.M. Convent School, Dhaulpur',
    degree: 'Class 12 (CBSE)',
    period: 'Apr 2023 - Apr 2024',
    grade: '90.20%',
  },
  {
    institution: 'A.V.M. Convent School, Dhaulpur',
    degree: 'Class 10 (CBSE)',
    period: 'Apr 2021 - Apr 2022',
    grade: '93.20%',
  },
];

const skills = [
  {
    category: 'Programming',
    icon: Code2,
    items: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: Code2,
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5'],
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['Node.js', 'Express.js', 'REST APIs', 'WebSocket', 'JWT Auth'],
  },
  {
    category: 'Databases & Cloud',
    icon: Database,
    items: ['MongoDB', 'MySQL', 'Firebase', 'Supabase', 'Cloudinary'],
  },
  {
    category: 'Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'FlutterFlow', 'Linux'],
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="section-subheading mx-auto">
            A passionate developer with a strong foundation in computer science and a drive to create impactful solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass glass-hover rounded-xl p-6"
                >
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h4 className="font-display font-semibold text-lg">{edu.institution}</h4>
                    <span className="text-sm text-primary font-medium">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-1">{edu.degree}</p>
                  {edu.minor && <p className="text-muted-foreground text-sm mb-1">{edu.minor}</p>}
                  <p className="text-primary font-semibold">{edu.grade}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Code2 size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold">Technical Skills</h3>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass glass-hover rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <skill.icon size={18} className="text-primary" />
                    <h4 className="font-semibold">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-secondary/50 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
