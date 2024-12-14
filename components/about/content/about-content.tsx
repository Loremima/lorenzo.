'use client';

import { motion } from 'framer-motion';
import { ProfileSection } from './profile-section';
import { SkillsSection } from './skills-section';

export function AboutContent() {
  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-5 flex justify-center"
      >
        <ProfileSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7 flex flex-col justify-center space-y-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-base md:text-lg leading-relaxed text-muted-foreground"
        >
          Armed with a Master's in Data Science and 8+ years of expertise, I turn complex data challenges into business advantages. I build cutting-edge AI solutions and automation systems that help companies reduce costs, increase efficiency, and unlock hidden opportunities in their data.
        </motion.p>
        <SkillsSection />
      </motion.div>
    </div>
  );
}