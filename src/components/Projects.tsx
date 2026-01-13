import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Community Lost & Found Platform',
    description:
      'Full-stack MERN application with RESTful API architecture featuring 15+ endpoints for lost and found item management, achieving 99.5% API reliability and <200ms average response time.',
    highlights: [
      'Normalized MySQL database with 8 relational tables',
      'Reduced data retrieval time by 60%',
      'JWT-based authentication with refresh token rotation',
      'Cloudinary integration for image management',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Redux Toolkit', 'Cloudinary', 'JWT'],
    github: 'https://github.com/yeagererenelys-netizen',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Campus Movement Tracker System',
    description:
      'Scalable QR-based tracking system processing 1000+ daily entries, reducing manual attendance processing by 90% and eliminating human error in record-keeping.',
    highlights: [
      'Real-time monitoring dashboard with AJAX',
      'Live insights into campus movement patterns',
      '<1 second scan-to-log time',
      '95% scan success rate',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5-QRCode', 'XAMPP', 'Apache'],
    github: 'https://github.com/yeagererenelys-netizen',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Will-Power-School',
    description:
      'Comprehensive school management system with features for attendance tracking, student management, and automated report generation.',
    highlights: [
      'Student attendance management',
      'Automated report generation',
      'User-friendly admin dashboard',
      'Secure data handling',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/yeagererenelys-netizen/Will-Power-School-',
    color: 'from-green-500 to-emerald-500',
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            A selection of projects that showcase my skills in building full-stack applications with modern technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              {/* Project header with gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                  <Folder size={64} className="text-foreground/20 group-hover:text-foreground/30 transition-colors" />
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1 mb-4">
                  {project.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded bg-secondary/50 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 rounded bg-secondary/50 text-xs text-muted-foreground">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="https://github.com/yeagererenelys-netizen" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
