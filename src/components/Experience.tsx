import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Shield, Clock, Star } from 'lucide-react';

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Trophy,
      title: 'Winner',
      description: 'Among 50+ teams',
    },
    {
      icon: Shield,
      title: '100% Security',
      description: 'AES-256 encryption',
    },
    {
      icon: Clock,
      title: '99.9% Uptime',
      description: 'Reliable deployment',
    },
    {
      icon: Star,
      title: '4.8/5 Rating',
      description: 'User satisfaction',
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="section-subheading mx-auto">
            Building impactful solutions through competitive programming and hackathons.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-glow-secondary" />
            
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                    🏆 Winner
                  </span>
                  <span className="text-muted-foreground text-sm">Mar 2025</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                  FlutterFlow Developer Hackathon
                </h3>
                <p className="text-primary font-medium">Full Stack Developer</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                <p className="text-muted-foreground">
                  Architected and deployed <span className="text-foreground font-medium">HOPE</span>, a real-time women's safety application, recognized as winner among 50+ competing teams by implementing critical safety features with 99.9% uptime using FlutterFlow and Google Maps API.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                <p className="text-muted-foreground">
                  Engineered secure backend infrastructure using <span className="text-foreground font-medium">Firebase Authentication and Supabase</span>, implementing AES-256 encryption for user data, role-based access control (RBAC), and protected emergency contact storage.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                <p className="text-muted-foreground">
                  Developed mission-critical features including one-touch SOS alerts, real-time location sharing with <span className="text-foreground font-medium">&lt;2 second latency</span>, and fake call simulation, improving emergency response time by 65%.
                </p>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-secondary/30 rounded-xl p-4 text-center hover:bg-primary/10 transition-colors duration-300"
                >
                  <item.icon className="mx-auto mb-2 text-primary" size={24} />
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Technologies Used:</p>
              <div className="flex flex-wrap gap-2">
                {['FlutterFlow', 'Firebase', 'Supabase', 'Google Maps API', 'AES-256'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
