'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Icon = dynamic(() => import('@iconify/react').then(mod => mod.Icon), {
    loading: () => <span />,
    ssr: false
});


export default function StepperProgress() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const stepsRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" });
  
  // Parallax effect for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'Laying the Foundation for Success. We analyze your vision and requirements to build a solid strategic roadmap.',
      icon: "pajamas:work-item-maintenance",
    },
    {
      number: '02',
      title: 'Design & Development',
      description: 'Bringing Your Ideas to Life. Our expert team crafts intuitive UI/UX designs and builds high quality code.',
      icon: "fluent:developer-board-lightning-toolbox-20-regular",
    },
    {
      number: '03',
      title: 'Testing & Deployment',
      description: 'Ensuring Perfection Before Launch. We conduct rigorous quality checks to deliver a bug free product ensure.',
      icon: "humbleicons:rocket",
    }
  ];

  return (
    <div ref={sectionRef} className="main-stepper-section bg-black py-16 md:py-20 px-6 md:px-28">
      <div className="w-full">

        {/* Header Section with Animations */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          className="stepper-header text-center relative"
        >
          {/* Top Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 text-xs md:text-sm text-white uppercase tracking-widest"
          >
            <span className="w-2 h-2 bg-[#3bbbfc] rounded-full shadow-[0_0_10px_rgba(59,187,252,0.8)] animate-pulse" />
            <span className="font-semibold">Working Steps</span>
            <div className="w-8 h-px bg-linear-to-r from-[#3bbbfc] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Main Title */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-6 md:mt-8 text-2xl md:text-3xl lg:text-[46px] font-bold leading-[1.1] relative"
          >
            <span className="text-white/95 hover:text-white transition-colors duration-300 mr-1 md:mr-2">
              Shaping the Future <br /> of Digital
            </span>
            <span className="bg-linear-to-r from-[#3bbbfc] via-[#01a8fc] to-[#3bbbfc] bg-clip-text text-transparent bg-size-[200%_auto]">
              Experiences
            </span>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={headerInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
              className="absolute -bottom-5 left-0 right-0 w-40 md:w-95 mx-auto h-px bg-linear-to-r from-transparent via-[#3bbbfc] to-transparent opacity-50"
            />
          </motion.div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 md:mt-12 w-full md:max-w-3xl mx-auto"
          >
            <p className="text-[13px] md:text-[17px] text-white/80">
              We don't just build products we create meaningful digital journeys by blending technical mastery with aesthetic precision, we help brands stand out in a crowded world.
            </p>
          </motion.div>
        </motion.div>

        {/* Stepper Section */}
        <motion.div 
          ref={stepsRef}
          className="stepper-section relative mt-10 md:mt-20"
        >
          {/* Top Line - Animated */}
          <div className="absolute -top-2 left-0 right-0 hidden lg:block z-0">
            <div className="relative w-full overflow-hidden">
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={stepsInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
                className="w-full h-px bg-linear-to-r from-transparent via-[#01a8fc] to-transparent origin-center"
              />
              
              {/* Animated glow traveling on the line */}
              {stepsInView && (
                <motion.div
                  initial={{ left: '-10%' }}
                  animate={{ left: '110%' }}
                  transition={{ 
                    delay: 1.7,
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  className="absolute top-0 w-20 h-px bg-linear-to-r from-transparent via-[#3bbbfc] to-transparent blur-sm"
                  style={{ boxShadow: '0 0 20px rgba(59, 187, 252, 0.8)' }}
                />
              )}
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 pt-4">
            {steps.map((step, index) => {
              const isActive = index === activeStep;

              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 60, rotateX: -15 }}
                  animate={stepsInView ? { 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0 
                  } : {}}
                  transition={{ 
                    delay: 0.6 + (index * 0.2), 
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="relative group cursor-pointer" 
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Badge */}
                  <motion.div 
                    initial={{ scale: 0, y: 20 }}
                    animate={stepsInView ? { scale: 1, y: 0 } : {}}
                    transition={{ 
                      delay: 0.8 + (index * 0.2),
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    className="absolute top-0 md:-top-9.5 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <motion.span 
                      animate={isActive ? {
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          '0 0 20px rgba(59,188,252,0.4)',
                          '0 0 30px rgba(59,188,252,0.6)',
                          '0 0 20px rgba(59,188,252,0.4)'
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`text-[13px] md:text-sm font-bold px-7 py-1.5 md:py-2 rounded-full border uppercase tracking-widest transition-all duration-500 backdrop-blur-md inline-block
                        ${isActive ? 'bg-[#01a8fc] border border-[#3bbbfc] text-white shadow-[0_0_20px_rgba(59,188,252,0.4)]'
                        : 'bg-[#212121] border-white/10 text-white/80'}`}
                    >
                      Step {step.number}
                    </motion.span>
                  </motion.div>

                  {/* Card */}
                  <motion.div 
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    animate={isActive ? {
                      scale: 1.03,
                    } : {
                      scale: 1
                    }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`relative mt-16 rounded-2xl md:rounded-3xl p-10 border transition-all duration-700 overflow-hidden
                       ${isActive
                      ? 'bg-linear-to-b from-[#3bbbfc]/15 to-transparent border-[#3bbbfc]/70 shadow-[0_40px_80px_-15px_rgba(59,188,252,0.15)]'
                      : 'bg-white/5 border-white/10 hover:border-white/15 hover:bg-white/8'}`}
                  >
                    {/* Animated background glow */}
                    {isActive && (
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute -top-24 -right-24 w-48 h-48 bg-[#3bbbfc]/10 blur-[80px] rounded-full" 
                      />
                    )}

                    {/* Icon */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={stepsInView ? { scale: 1 } : {}}
                      transition={{ 
                        delay: 1 + (index * 0.2),
                        type: "spring",
                        stiffness: 200
                      }}
                      className="flex justify-center mb-4 md:mb-6"
                    >
                      <motion.div 
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                        animate={isActive ? {
                          rotate: [0, 5, -5, 0],
                          transition: { duration: 2, repeat: Infinity }
                        } : {}}
                        className={`w-15 h-15 md:w-19 md:h-19 rounded-full flex items-center justify-center transition-all duration-200 relative
                           ${isActive ? 'bg-linear-to-br from-[#3bbbfc] to-[#0188fc] shadow-[0_5px_20px_rgba(59,188,252,0.3)]'
                          : 'bg-white/5 border border-white/10'}`}
                      >
                        <Icon 
                          icon={step.icon} 
                          className={`transition-all duration-700 w-5 h-5 md:w-7 md:h-7
                          ${isActive ? 'text-white scale-110' : 'text-[#3bbbfc]/60 group-hover:text-[#3bbbfc]'}`} 
                        />
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.1 + (index * 0.2), duration: 0.6 }}
                      className="text-center space-y-3 md:space-y-4 relative z-10"
                    >
                      <h3 className={`text-[19px] md:text-[23px] font-bold tracking-wide transition-colors duration-500 
                          ${isActive ? 'text-white' : 'text-white/70'}`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm md:text-[15px] leading-relaxed transition-colors duration-500 px-2
                         ${isActive ? 'text-white' : 'text-white/70'}`}>
                        {step.description}
                      </p>
                    </motion.div>

                    {/* Bottom Glow */}
                    {isActive && (
                      <motion.div 
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-linear-to-r from-transparent via-[#3bbbfc] to-transparent blur-sm" 
                      />
                    )}

                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl pointer-events-none">
                      <motion.div
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-1/2 bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-12"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}