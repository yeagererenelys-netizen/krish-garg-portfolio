import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/yeagererenelys-netizen',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/krishgarg5550',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:krishgarg5550@gmail.com',
    label: 'Email',
  },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="#" className="font-display text-2xl font-bold">
              <span className="text-primary">K</span>rish Garg
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            © 2026 Krish Garg. Built with <Heart size={14} className="text-primary" /> in India
          </motion.p>
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-border/50 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
        >
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#achievements" className="hover:text-primary transition-colors">Achievements</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </motion.div>
      </div>
    </footer>
  );
};
