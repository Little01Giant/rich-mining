"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-rich-black pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10"></div>
                <img
                    src="/images/hero-truck.jpg"
                    alt="Mining Operations"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            {/* Gold Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rich-gold/10 rounded-full blur-[100px] pointer-events-none z-10"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-rich-dark-gray border border-rich-gold/20 text-rich-gold text-xs font-semibold tracking-wider uppercase mb-6">
                        Responsible Copper Production
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        <span className="text-rich-gold">Responsible</span> Copper Production<br />
                        <span className="text-white">Built for Long-Term Partnerships</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-rich-light-gray text-lg md:text-xl leading-relaxed mb-10">
                        Rich Mining LLC is a copper mining company in Mongolia operating at the production stage, committed to safety, sustainability, and transparent operations.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#partnerships"
                            className="group bg-rich-gold text-rich-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all transform hover:scale-105 flex items-center gap-2"
                        >
                            Partner With Us
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="#operations"
                            className="px-8 py-4 rounded-full font-semibold text-white border border-rich-dark-gray hover:bg-rich-dark-gray hover:border-rich-gold/30 transition-all"
                        >
                            View Operations
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-rich-dark-gray rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-rich-gold rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
}
