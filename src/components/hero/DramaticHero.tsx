import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';

const DramaticHero: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-[95vh] flex items-center justify-center overflow-hidden px-6">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
      </motion.div>

      <div className="relative text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-sc-blue via-sc-violet to-sc-mint"
        >
          SoulCloude
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-xl sm:text-2xl text-gray-300"
        >
          A rebellion against boring software. One brand. Infinite launches.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex gap-3 justify-center"
        >
          <Button className="bg-sc-blue text-black hover:bg-sc-blue/80">Start Building</Button>
          <Button variant="outline" className="border-sc-violet/50 text-sc-violet hover:bg-sc-violet/10">Explore the Portfolio</Button>
        </motion.div>
      </div>

      {/* Massive floating rings */}
      <motion.div className="absolute -top-24 -left-24 h-80 w-80 rounded-full border border-sc-blue/30" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: 'linear' }} />
      <motion.div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full border border-sc-violet/30" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 80, ease: 'linear' }} />
    </section>
  );
};

export default DramaticHero;