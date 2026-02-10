'use client'
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { motion, easeOut } from 'framer-motion';
const Icon = dynamic(() => import('@iconify/react').then(mod => mod.Icon), {
    loading: () => <span />,
    ssr: false
});

export default function OurServices() {

    const services = [
        {
            iconName: ({ className }) => (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
                    <g fill="none">
                        <rect width="40" height="32" x="4" y="8" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" rx="3" />
                        <path stroke="currentColor" strokeWidth="2" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z" />
                        <circle r="2" fill="currentColor" transform="matrix(0 -1 -1 0 10 14)" />
                        <circle r="2" fill="currentColor" transform="matrix(0 -1 -1 0 16 14)" />
                    </g>
                </svg>
            ),
            number: "01",
            title: 'Web Designing',
            slug: 'webDesigning',
            description: 'Crafting visually stunning and user-centric designs that capture your brand identity and engage your audience.',
            features: [
                'User Experience (UX) Design',
                'Visual Brand Identity',
                'Interactive Prototypes',
                'Design Systems'
            ]
        },
        {
            iconName: ({ className }) => (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
                    <g fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinejoin="round" d="M3 24a21 21 0 1 0 42 0a21 21 0 1 0-42 0" />
                        <path strokeLinejoin="round" d="M15 24a9 21 0 1 1 18 0a9 21 0 1 1-18 0" />
                        <path strokeLinecap="round" d="M4.5 31h39m-39-14h39" />
                    </g>
                </svg>
            ),
            number: "02",
            title: 'Web Development',
            slug: 'webDevelopment',
            description: 'Building high-performance, scalable websites using the latest web technologies and best coding practices.',
            features: [
                'Responsive Web Design',
                'Modern Frameworks (React/Next.js)',
                'SEO-Friendly Code',
                'Performance Optimization'
            ]
        },
        {
            iconName: ({ className }) => (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={className}
                >
                    <path fill="currentColor" stroke="currentColor" strokeWidth="0.5"
                        d="M7 21V3zm5.039-14.692q.328 0 .548-.22t.22-.55t-.22-.549t-.549-.22t-.549.22t-.22.55t.22.548t.55.22M7.615 22q-.672 0-1.144-.472T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.846q.67 0 1.143.472q.472.472.472 1.144V6.83q.373.04.648.31q.275.269.275.648v1.769q0 .379-.275.648t-.648.31v2.118q0 .214-.143.357t-.357.143t-.357-.143t-.143-.357V3.616q0-.27-.173-.443T16.462 3H7.616q-.27 0-.443.173T7 3.616v16.769q0 .269.173.442t.443.173h1.961q.214 0 .357.143t.143.357t-.143.357t-.357.143zm6.248-3.5l1.84 1.84q.14.14.14.342t-.14.347q-.146.165-.357.155q-.21-.009-.356-.155l-1.964-1.964q-.242-.242-.242-.565t.242-.565l1.97-1.97q.145-.146.353-.153t.354.16q.14.145.134.353t-.153.354zm6.734 0l-1.84-1.84q-.14-.14-.14-.342t.14-.347q.146-.165.357-.155q.21.009.356.155l1.964 1.964q.242.242.242.565t-.242.566l-1.97 1.969q-.146.146-.353.153t-.354-.16q-.14-.145-.134-.353t.153-.354z" />
                </svg>
            ),
            number: "03",
            title: 'App Development',
            slug: 'appDevelopment',
            description: 'Developing intuitive mobile applications for iOS and Android that provide seamless user experiences on the go.',
            features: [
                'iOS & Android Apps',
                'Cross-Platform (Flutter/React Native)',
                'Native Performance',
                'App Store Deployment'
            ]
        },
        {
            iconName: ({ className }) => (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
                    <path fill="currentColor" stroke="currentColor" strokeWidth="0.4"
                        d="M8 3a7 7 0 0 0 0 14h1.07a7 7 0 0 1 0-2H8A5 5 0 0 1 8 5h8a5 5 0 0 1 4.9 6a7 7 0 0 1 1.426 2A7 7 0 0 0 16 3zm8 10a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 9.172 2.757l2.535 2.536l-1.414 1.414l-2.536-2.535A5 5 0 0 1 11 16" />
                </svg>
            ),
            number: "04",
            title: 'SEO Optimization',
            slug: 'seoOptimization',
            description: 'Enhancing your online visibility and search rankings through data-driven strategies and technical excellence.',
            features: [
                'On-Page & Off-Page SEO',
                'Keyword Research & Strategy',
                'Technical SEO Audits',
                'Monthly Analytics Reporting'
            ]

        },
        {
            iconName: ({ className }) => (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                        <path d="M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3m0 6a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0" />
                        <path d="M12 12a3.001 3.001 0 0 1 5.121-2.121A3.001 3.001 0 1 1 12.001 12" />
                        <path d="M12 3h3a3 3 0 0 1 0 6h-3zM6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3" />
                    </g>
                </svg>
            ),
            number: "05",
            title: 'UI/UX Design',
            slug: 'uiuxDesign',
            description: 'Creating high-fidelity wireframes and interactive prototypes in Figma to streamline the development process.',
            features: [
                'Component-Based Design',
                'Collaborative Workflows',
                'High-Fidelity Prototyping',
                'Developer Handoff Ready'
            ]
        },
        {
            iconName: ({ className }) => (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8"
                        d="M39 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10M9 44a5 5 0 1 0 0-10a5 5 0 0 0 0 10m5-40H4v10h10zm30 30H34v10h10zM34 9H14m20 30H14m-5-5V14m30 20V14" />
                </svg>
            ),
            number: "06",
            title: 'Graphic Designing',
            slug: 'graphicDesigning',
            description: 'Producing creative visual assets ranging from logos to marketing materials that make your brand stand out.',
            features: [
                'Logo & Branding',
                'Social Media Graphics',
                'Print & Digital Assets',
                'Illustration & Typography'
            ]
        },
    ];
    // Container animation - stagger effect ke liye
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // har card 0.15s baad animate hoga
                delayChildren: 0.1
            }
        }
    };

    // Individual card animation
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9,
            rotateX: -15
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 100,
                duration: 0.6
            }
        }
    };

    // Header animations
    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: easeOut
            }
        }
    };

    return (
        <section className="main-services-section bg-black relative py-16 md:py-20 px-6 md:px-26 overflow-hidden">

            {/* light1:top-right-glow */}
            <div className="absolute top-12 -right-24 w-100 h-100 bg-[#3bbbfc] opacity-10 blur-[120px] rounded-full"></div>
            {/* light2:bottom-left-glow */}
            <div className="absolute bottom-12 -left-24 w-100 h-100 bg-[#3bbbfc] opacity-10 blur-[120px] rounded-full"></div>

            {/* services-section-start */}
            <div className="services-section w-full relative z-10">

                {/* services-header-start - ANIMATED */}
                <motion.div
                    className="services-header text-center relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={headerVariants}
                >
                    <motion.div
                        className="inline-flex items-center gap-3 text-xs md:text-sm text-white uppercase tracking-widest"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="w-2 h-2 bg-[#3bbbfc] rounded-full shadow-[0_0_10px_rgba(59,187,252,0.8)] animate-pulse" />
                        <span className="font-semibold">What we do</span>
                        <div className="w-8 h-px bg-linear-to-r from-[#3bbbfc] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    <motion.div
                        className="mt-6 md:mt-8 text-2xl md:text-3xl lg:text-[46px] font-bold leading-[1.1] relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <span className="text-white/95 inline-block hover:text-white transition-colors duration-300 mr-3">
                            Smart Services For
                        </span>
                        <br />
                        <span className="bg-linear-to-r from-[#3bbbfc] via-[#01a8fc] to-[#3bbbfc] bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                            Digital Transformation
                        </span>
                        <div className="absolute -bottom-5 left-0 right-0 w-40 md:w-95 mx-auto h-px bg-linear-to-r from-transparent via-[#3bbbfc] to-transparent opacity-50" />
                    </motion.div>

                    <motion.div
                        className="mt-10 md:mt-12 w-full md:max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <p className="text-[13px] md:text-[17px] text-white/80">
                            We combine technical expertise with bold design to build products that matter crafting seamless interactions that connect brands with people.
                        </p>
                    </motion.div>
                </motion.div>
                {/* services-header-end */}

                {/* services-cards-start - ANIMATED WITH STAGGER */}
                <motion.div
                    className="services-grid grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-16 px-0 md:px-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                                transition: { duration: 0.3 }
                            }}
                            className="service-card group relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#3bbbfc]/55 
                                 transition-all duration-400 hover:shadow-[0_20px_60px_rgba(59,187,252,0.25)] hover:border-[#3bbbfc] cursor-pointer"
                        >
                            {/* Animated glow corner */}
                            <div className="absolute -bottom-24 right-0 w-50 h-54 bg-[#01a8fc]/25 rounded-br-xl blur-[80px] transition-all duration-700 group-hover:bg-[#01a8fc]/40 group-hover:blur-[100px]" />

                            {/* Top edge glow on hover */}
                            <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-all duration-700"
                                style={{ background: 'linear-gradient(90deg, transparent 0%, #3bbbfc 50%, transparent 100%)' }} />

                            {/* Bottom edge glow */}
                            <div className="absolute bottom-0 left-0 right-0 w-50 mx-auto h-0.5 opacity-60 group-hover:opacity-100 transition-all duration-500"
                                style={{ background: 'linear-gradient(90deg, transparent 0%, #3bbbfc 50%, transparent 100%)' }} />

                            <div className="relative p-8 h-full flex flex-col">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="relative">
                                        <motion.div
                                            className="relative w-15 h-15 md:w-17 md:h-17 rounded-[10px] md:rounded-[13px] flex items-center justify-center 
                                             transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                                            style={{ background: 'linear-gradient(135deg, #3bbbfc 0%, #0188fc 100%)' }}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <div className="absolute inset-0 rounded-[10px] md:rounded-[15px] border-2 border-[#3bbbfc]/80 opacity-0 scale-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110" />

                                            {typeof service.iconName === 'string' ? (
                                                <Icon icon={service.iconName} className="w-8 h-8 md:w-10 md:h-10 text-white relative z-10" />
                                            ) : (
                                                <service.iconName className="w-8 h-8 md:w-9 md:h-9 text-white relative z-10" />
                                            )}
                                        </motion.div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="h-px w-12 opacity-50 group-hover:w-16 group-hover:opacity-100 transition-all duration-500"
                                            style={{ background: 'linear-gradient(90deg, transparent 0%, #3bbbfc 100%)' }} />
                                        <span className="text-4xl md:text-5xl font-bold tracking-tight transition-all duration-500 group-hover:scale-110"
                                            style={{
                                                background: 'linear-gradient(135deg, #3bbbfc 0%, #0188fc 100%)', WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                                filter: 'drop-shadow(0 0 20px rgba(59, 187, 252, 0.3))'
                                            }}>
                                            {service.number}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 transition-colors duration-300 group-hover:text-[#3bbbfc]">
                                    {service.title}
                                </h3>

                                <div className="h-0.5 rounded-full mb-6 transition-all duration-500 group-hover:w-24"
                                    style={{ width: '50px', background: 'linear-gradient(90deg, #3bbbfc 0%, rgba(59, 187, 252, 0.2) 100%)' }} />

                                <ul className="space-y-3 mb-8 grow">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-white/90 text-[12.5px] md:text-sm leading-relaxed 
                                        transition-all duration-300 group-hover:text-gray-300 group-hover:translate-x-1">
                                            <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 transition-all duration-300 group-hover:scale-125"
                                                style={{ background: 'linear-gradient(135deg, #3bbbfc 0%, #0188fc 100%)', boxShadow: '0 0 8px rgba(59, 187, 252, 0.6)' }} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href={`/services/${service.slug}`} aria-label={`Learn more about ${service.title || service.number}`} className="block">
                                    <div className="mt-auto pt-4">
                                        <div className="group/readmore inline-flex items-center gap-3 cursor-pointer">
                                            <span className="relative text-[#ffffff] font-semibold text-sm md:text-[16.5px] tracking-wide transition-all duration-500 group-hover/readmore:tracking-wider group-hover/readmore:text-[#3bbbfc]">
                                                Read More
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#3bbbfc] to-[#0188fc] transition-all duration-500 group-hover/readmore:w-full"></span>
                                            </span>

                                            <div className="relative">
                                                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-all duration-700 ease-out -rotate-35 group-hover/readmore:rotate-0 group-hover/readmore:translate-x-2 overflow-hidden"
                                                    style={{ background: 'linear-gradient(135deg, #3bbbfc 0%, #0188fc 100%)', boxShadow: '0 2px 8px rgba(59, 187, 252, 0.3)' }}>
                                                    <span className="absolute inset-0 rounded-full border-2 border-[#3bbbfc] opacity-0 scale-100 transition-all duration-700 group-hover/readmore:scale-150 group-hover/readmore:opacity-0"></span>
                                                    <ArrowRight size={15} className="text-white relative z-10 transition-all duration-500" strokeWidth={3} aria-hidden="true" />
                                                </div>
                                                <div className="absolute top-0 left-0 w-8 h-8 md:w-9 md:h-9 rounded-full opacity-0 scale-50 transition-all duration-700 group-hover/readmore:opacity-30 group-hover/readmore:scale-100 group-hover/readmore:-translate-x-1"
                                                    style={{ background: 'linear-gradient(135deg, #3bbbfc 0%, #0188fc 100%)' }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
                {/* services-cards-end */}

            </div>
        </section>
    );
}