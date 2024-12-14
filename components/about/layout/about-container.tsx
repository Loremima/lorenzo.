'use client';

import { motion } from 'framer-motion';
import { AboutHeader } from './about-header';
import { AboutContent } from '../content/about-content';

export function AboutContainer() {
  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center -mt-16">
      <div className="w-full max-w-[1200px] mx-auto">
        <AboutHeader />
        <AboutContent />
      </div>
    </div>
  );
}