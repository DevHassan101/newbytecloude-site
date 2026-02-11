'use client';

import OurPortfolio from "../components/OurPortfolio";
import styles from "./portfolio.module.css"
import { motion } from "framer-motion";

export default function PortfolioPage() {
    return (
        <>
            <section className={`${styles.portfolioBanner} py-28 px-12 md:px-0`}>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>
                <div className={styles.portfolioOverlayBanner}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice"
                        style={{ width: '100%', height: '100%', opacity: 0.3 }}>
                        <defs>
                            <radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
                                <stop offset="15%" stopColor="white" stopOpacity="0.2" />
                                <stop offset="75%" stopColor="white" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="white" stopOpacity="0.2" />
                            </radialGradient>
                        </defs>
                        <g fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.1">
                            <circle r="100" cx="400" cy="400" />
                            <circle r="200" cx="400" cy="400" />
                            <circle r="300" cx="400" cy="400" />
                            <circle r="400" cx="400" cy="400" />
                            <circle r="500" cx="400" cy="400" />
                            <circle r="600" cx="400" cy="400" />
                        </g>
                        <circle r="400" cx="400" cy="400" fill="url(#cccircular-grad)" opacity="0.5" />
                    </svg>
                </div>
                <motion.div className="relative text-center mt-6 max-w-5xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
                    <div className="border border-white/20 rounded-[18px] py-10 md:px-20.5 shadow-2xl relative overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                            willChange: 'transform', transform: 'translateZ(0)'
                        }}>
                        {/* Top accent line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-cyan-400 to-transparent"></div>
                        {/* Corner decorations */}
                        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-cyan-400/40 rounded-tl-2xl"></div>
                        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-cyan-400/40 rounded-tr-2xl"></div>
                        {/* Floating particles */}
                        <div className="absolute top-8 left-1/2 w-2 h-2 bg-cyan-400/40 rounded-full animate-float"></div>
                        <div className="absolute top-16 right-1/3 w-2.5 h-2.5 bg-blue-400/30 rounded-full animate-float"></div>
                        <div className="absolute bottom-12 left-1/3 w-2.5 h-2.5 bg-cyan-300/30 rounded-full animate-float"></div>
                        {/* Content */}
                        <div className="relative z-10">
                            <motion.h1 className="text-[28px] md:text-6xl lg:text-[54px] font-bold mb-4 lg:mb-3 text-white" initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                                Our Portfolio
                            </motion.h1>
                            <motion.p className="text-[17px] max-w-2xl mx-auto text-white/90 leading-relaxed font-light" initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                                We are a collective of developers, designers, and strategists who obsess over the smallest "bytes" of data to ensure your "cloud" presence is nothing short of legendary.
                            </motion.p>
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-linear-to-t from-cyan-500/10 to-transparent blur-2xl"></div>
                    </div>
                </motion.div>
            </section>
            <section className="bg-black pb-12 md:pb-50">
                <OurPortfolio />
            </section>
        </>
    )
}