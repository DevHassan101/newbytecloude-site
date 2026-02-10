"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate, AnimatePresence, easeOut, easeInOut } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
const Icon = dynamic(() => import('@iconify/react').then(mod => mod.Icon), {
    loading: () => <span />,
    ssr: false
});

export default function AboutUs() {
    const texts = ["Our Expertise", "Our Passion", "Our Vision"];
    const [textIndex, setTextIndex] = useState(0);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        texts[textIndex].slice(0, latest)
    );

    useEffect(() => {
        const controls = animate(count, texts[textIndex].length, {
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
            repeat: 1,
            repeatType: "reverse",
            repeatDelay: 2,
            onComplete: () => {
                setTextIndex((prev) => (prev + 1) % texts.length);
                count.set(0);
            },
        });

        return () => controls.stop();
    }, [textIndex]);

    const skillData = [
        { label: "Strategy", value: 85 },
        { label: "User Experience", value: 95 },
        { label: "Development", value: 90 }
    ];

    // Animation variants for left section
    const leftSectionVariants = {
        hidden: {
            opacity: 0,
            x: -60,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: easeOut,
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    // Animation variants for right section (images)
    const rightSectionVariants = {
        hidden: {
            opacity: 0,
            x: 60,
            scale: 0.95,
            rotateY: -15
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.9,
                ease: easeOut,
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    // Child item animations
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: easeOut }
        }
    };

    // Progress bar animation
    const progressBarVariants = {
        hidden: { width: "0%" },
        visible: (value) => ({
            width: `${value}%`,
            transition: {
                duration: 1.5,
                ease: easeOut,
                delay: 0.3
            }
        })
    };

    // Image animation variants
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: easeOut
            }
        }
    };

    return (
        <section className="main-about-section bg-black relative pt-20 pb-8 md:py-22 px-6 md:px-28 overflow-hidden">
            {/* light1:center-glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#3bbbfc] opacity-15 blur-[120px] rounded-full"></div>
            {/* light2:top-corner-glow */}
            <div className="absolute -top-20 -right-20 w-100 h-100 bg-[#3bbbfc] opacity-5 blur-[100px] rounded-full"></div>

            {/* about-section-start */}
            <div className="about-section flex flex-wrap justify-between items-center relative z-10">

                {/* LEFT SECTION - ANIMATED */}
                <motion.div
                    className="about-left basis-full lg:basis-[56%]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={leftSectionVariants}
                >
                    <div className="about-content">
                        <motion.div className="about-title" variants={itemVariants}>
                            <div className="inline-flex items-center gap-3 text-[13px] md:text-sm text-white uppercase tracking-widest">
                                <span className="w-2 h-2 bg-[#3bbbfc] rounded-full shadow-[0_0_10px_rgba(59,187,252,0.8)] animate-pulse" />
                                <span className="font-semibold">Who we are</span>
                                <div className="w-8 h-px bg-linear-to-r from-[#3bbbfc] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <h1 className="mt-6 md:mt-6 text-4xl md:text-[50px] text-white font-bold leading-[1.1] tracking-tight">
                                Your Digital Future
                            </h1>
                            <div className="text-4xl md:text-[50px] font-bold leading-[1.1] tracking-tight h-[1.2em] flex items-center bg-linear-to-r from-[#3bbbfc] via-[#01a8fc] to-[#3bbbfc] bg-clip-text text-transparent bg-size-[200%_auto] overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.span key={textIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="inline-block">
                                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
                                            {displayText}
                                        </motion.span>
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        <motion.div className="about-desc mt-5 md:mt-5" variants={itemVariants}>
                            <p className="text-justify tracking-tight md:tracking-normal md:text-left pr-3 md:pr-0 max-w-xl text-white/80 text-[15px] md:text-lg">
                                Our mission is to empower startups and enterprises with innovative the solutions that boost online visibility, enhance lead generation and drive measurable growth in today's digital world.
                            </p>

                            {/* ABOUT INFO ICONS - STAGGERED */}
                            <motion.div
                                className="about-info grid grid-cols-2 gap-y-8 gap-x-4 mt-10 md:mt-12"
                                variants={itemVariants}
                            >
                                {[
                                    { id: 2, label: "Experience Team", icon: "fluent:people-community-48-filled" },
                                    { id: 1, label: "Proven Results", icon: "mingcute:target-fill" },
                                    { id: 3, label: "Fast Approach", icon: "mingcute:rocket-fill" },
                                    { id: 4, label: "Award Winnings", icon: "basil:award-solid" },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        className="flex items-center group cursor-default"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                    >
                                        {/* Icon Orb with Neon Glow */}
                                        <div className="relative flex items-center justify-center w-8.5 h-8.5 md:w-12 md:h-12 shrink-0 mr-3 md:mr-4 rounded-full bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] shadow-[0_0_15px_rgba(59,188,252,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#3bbbfc]/70 group-hover:rotate-6">
                                            <div className="absolute inset-0.5 rounded-full border-t border-white/40 bg-white/5 opacity-40"></div>
                                            <div className="relative z-10 text-white drop-shadow-md">
                                                <Icon icon={item.icon} className="w-4 h-4 md:w-5.5 md:h-5.5" />
                                            </div>
                                            <div className="absolute inset-0 rounded-full border border-white/20 scale-110 opacity-100 group-hover:opacity-100 transition-all duration-500"></div>
                                        </div>
                                        <small className="text-[12px] md:text-[16px] text-white/85 font-medium tracking-wide group-hover:text-[#3bbbfc] transition-colors duration-300 leading-tight">
                                            {item.label}
                                        </small>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* SKILL BARS - ANIMATED PROGRESS */}
                            <motion.div
                                className="about-bars w-full md:max-w-120 space-y-8 md:space-y-10 mt-10 md:mt-12"
                                variants={itemVariants}
                            >
                                {skillData.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="group"
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15, duration: 0.6 }}
                                    >
                                        <div className="flex justify-between items-end mb-2 md:mb-3">
                                            <span className="text-sm md:text-[17px] text-white/90 font-medium tracking-wide transition-colors duration-300 group-hover:text-[#3bbbfc]">
                                                {skill.label}
                                            </span>
                                            <motion.span
                                                className="text-[11px] md:text-sm font-bold text-white bg-[#3bbbfc]/10 px-2 md:px-3 py-1 rounded-md border border-[#3bbbfc]/20 shadow-[0_0_15px_rgba(59,188,252,0.1)]"
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                                            >
                                                {skill.value}%
                                            </motion.span>
                                        </div>
                                        <div className="relative w-full h-2 md:h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/10 backdrop-blur-sm">
                                            <motion.div
                                                className="h-full rounded-full relative"
                                                style={{
                                                    background: "linear-gradient(90deg, #3bbbfc 0%, #01a8fc 100%)",
                                                    boxShadow: "0 0 20px rgba(59, 188, 252, 0.6)"
                                                }}
                                                custom={skill.value}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                variants={progressBarVariants}
                                            >
                                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* BUTTON - ANIMATED */}
                            <motion.div
                                className="about-btn mt-10 md:mt-14"
                                variants={itemVariants}
                            >
                                <div className="flex justify-start items-center">
                                    <motion.button
                                        className="group/btn relative inline-flex items-center gap-4 bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] pl-1.5 pr-8 md:pr-10 py-1.5 rounded-full transition-all duration-700 shadow-[0_10px_20px_rgba(1,168,252,0.3)] hover:shadow-[0_0_12px_rgba(1,168,252,0.3),0_0_12px_rgba(1,168,252,0.3)] cursor-pointer active:scale-95 overflow-hidden"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="absolute top-1/2 left-8 md:left-10 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 rounded-full opacity-0 transition-all duration-700 ease-out group-hover/btn:w-125 group-hover/btn:h-125 group-hover/btn:opacity-100"></span>
                                        <div className="absolute inset-0 bg-linear-to-br from-[#01a8fc] to-[#0d7ac2] opacity-0 transition-opacity duration-700 group-hover/btn:opacity-100 rounded-full"></div>
                                        <span className="absolute bottom-0 left-0 h-full w-16 opacity-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-stretch" viewBox="0 0 487 487">
                                                <path fillRule="nonzero" fill="#FFF" d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"></path>
                                            </svg>
                                        </span>
                                        <span className="absolute top-0 right-0 h-full w-16 opacity-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover" viewBox="0 0 487 487">
                                                <path fillRule="nonzero" fill="#FFF" d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"></path>
                                            </svg>
                                        </span>
                                        <div className="relative z-10 flex items-center transition-all duration-700 group-hover/btn:gap-4 gap-3">
                                            <div className="bg-white w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center transition-all duration-700 ease-out shadow-lg -rotate-40 group-hover/btn:rotate-0">
                                                <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-5.5 md:h-5.5 fill-[#01a8fc] transition-all duration-700" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                                </svg>
                                            </div>
                                            <span className="text-white font-semibold tracking-wide text-sm md:text-[17px] whitespace-nowrap transition-all duration-700 drop-shadow-sm group-hover/btn:tracking-wider">
                                                Explore Now
                                            </span>
                                        </div>
                                        <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover/btn:translate-x-full"></span>
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* RIGHT SECTION - IMAGES ANIMATED */}
                <motion.div
                    className="about-right basis-full lg:basis-[44%] mt-14 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={rightSectionVariants}
                >
                    <div className="about-content relative">
                        {/* MAIN IMAGE */}
                        <motion.div
                            className="about-image relative w-full h-55 md:h-86 flex flex-col justify-center items-center group overflow-hidden rounded-[10px] md:rounded-2xl"
                            variants={imageVariants}
                        >
                            <Image
                                src="/images/about/aboutimage1.webp"
                                alt="AboutUsOurTeam"
                                fill
                                sizes="(max-width: 768px) 100vw, 44vw"
                                quality={75}
                                loading="lazy"
                                className="w-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                            />
                            <div
                                className="image-overlay absolute top-0 right-0 w-full h-full transition-all duration-500 ease-out"
                                style={{
                                    backgroundImage: "linear-gradient(-125deg, rgba(59, 188, 252, 0.600), transparent)"
                                }}
                            />
                        </motion.div>
                        {/* FLOATING BADGE */}
                        <motion.div
                            className="absolute top-45 md:-top-5 right-30 md:-left-10 w-20 h-20 md:w-30 md:h-30 rounded-xl md:rounded-3xl bg-linear-to-br from-[#3bbbfc] via-[#01a8fc] to-[#0086cc] flex flex-col justify-center items-center z-20 border border-white/40 backdrop-blur-md cursor-pointer transition-all duration-500 hover:scale-110 group shadow-2xl overflow-hidden"
                            style={{ boxShadow: "0 20px 40px -10px rgba(1, 168, 252, 0.5)" }}
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.4,
                                duration: 0.6,
                                type: "spring",
                                stiffness: 150
                            }}
                            whileHover={{
                                rotate: 5,
                                scale: 1.10,
                                transition: { duration: 0.1 }
                            }}
                        >
                            <div className="absolute inset-0.5 rounded-xl md:rounded-3xl border-t border-white/50 bg-linear-to-b from-white/10 to-transparent pointer-events-none"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <span className="text-xl md:text-3xl lg:text-4xl text-white font-black leading-none tracking-tighter drop-shadow-md group-hover:scale-110 transition-transform duration-500">
                                    5+
                                </span>
                                <p className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-wider leading-tight mt-1.5 md:mt-2 text-center opacity-90">
                                    Years of <br />
                                    <span className="text-white/80 font-medium lowercase italic">Experience</span>
                                </p>
                            </div>
                            <div className="absolute -inset-full w-[200%] h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg] transition-all duration-1000 group-hover:left-full -left-full"></div>
                            <div className="absolute -bottom-4 w-full h-1/2 bg-white/20 blur-xl opacity-50"></div>
                        </motion.div>

                        {/* BOTTOM IMAGES GRID */}
                        {/* BOTTOM IMAGES GRID */}
                        <motion.div
                            className="images-box relative flex flex-wrap justify-between items-start md:items-center mt-1.5 md:mt-2.5"
                            variants={itemVariants}
                        >
                            {/* Left Image */}
                            <motion.div
                                className="about-image basis-[49%] h-40 md:h-60 relative group/img overflow-hidden rounded-[10px] md:rounded-2xl shadow-lg transition-all duration-500"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                            >
                                <Image
                                    src="/images/about/aboutimage2.webp"
                                    alt="AboutUsOurVision"
                                    fill
                                    sizes="(max-width: 768px) 49vw, 22vw"
                                    quality={75}
                                    loading="lazy"
                                    className="w-full object-cover transition-all duration-500 ease-out group-hover/img:scale-110"
                                />
                                <div
                                    className="image-overlay absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-out group-hover/img:opacity-80"
                                    style={{ backgroundImage: "linear-gradient(125deg, rgba(59, 188, 252, 0.600), transparent)" }}
                                />
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-linear-to-tr from-[#3bbbfc]/80 to-transparent rounded-tl-2xl opacity-0 transition-all duration-500 ease-out group-hover/img:opacity-100" />
                            </motion.div>

                            {/* Right Image */}
                            <motion.div
                                className="about-image basis-[49%] h-40 md:h-60 relative group/img overflow-hidden rounded-[10px] md:rounded-2xl shadow-lg transition-all duration-500"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.75, duration: 0.7, ease: "easeOut" }}
                            >
                                <Image
                                    src="/images/about/aboutimage3.webp"
                                    alt="AboutUsOwner"
                                    fill
                                    sizes="(max-width: 768px) 49vw, 22vw"
                                    quality={75}
                                    loading="lazy"
                                    className="w-full object-cover transition-all duration-500 ease-out group-hover/img:scale-110"
                                />
                                <div
                                    className="image-overlay absolute top-0 right-0 w-full h-full transition-all duration-500 ease-out group-hover/img:opacity-80"
                                    style={{ backgroundImage: "linear-gradient(-125deg, rgba(59, 188, 252, 0.600), transparent)" }}
                                />
                                <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-bl from-[#3bbbfc]/80 to-transparent rounded-br-2xl opacity-0 transition-all duration-500 ease-out group-hover/img:opacity-100" />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
            {/* about-section-end */}
        </section>
    );
}