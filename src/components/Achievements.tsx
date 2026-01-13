import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Target, Award, Zap } from 'lucide-react';

const achievements = [
  {
    icon: Target,
    title: 'Competitive Programming Excellence',
    description:
      'Solved 550+ algorithmic problems across LeetCode, CodeChef, and Codeforces platforms.',
    highlights: ['Pupil rating on Codeforces', '3-Star (1611) on CodeChef', 'Advanced problem-solving skills'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Trophy,
    title: 'JEE Main 2024 Achievement',
    description:
      'Secured All India Rank 7708 with 99.60 percentile among 1.2 million candidates.',
    highlights: ['Top 0.4% nationally', 'Exceptional analytical aptitude', "India's most competitive exam"],
    color: 'from-blue-500 to-purple-500',
  },
  {
    icon: Award,
    title: 'CodePlus Long Contest',
    description:
      'Achieved Rank 65 among 500+ participants from multiple institutes.',
    highlights: ['Complex algorithmic challenges', 'Time-constrained solving', 'Multi-institute competition'],
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'CodeChef Starters 182',
    description:
      'Secured Global Rank 222 out of 3000+ participants in competitive programming contest.',
    highlights: ['Advanced data structures', 'Optimal time complexity', 'Global ranking'],
    color: 'from-pink-500 to-rose-500',
  },
];

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Achievements & <span className="text-primary">Certifications</span>
          </h2>
          <p className="section-subheading mx-auto">
            Recognition and milestones in competitive programming and academics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {achievement.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {achievement.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: '550+', label: 'Problems Solved' },
            { value: '7708', label: 'JEE AIR' },
            { value: '99.60%', label: 'JEE Percentile' },
            { value: '3★', label: 'CodeChef Rating' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
