"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-rich-black relative">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            Built only for <span className="text-rich-gold">Greatness</span>
                        </h2>
                        <div className="w-20 h-1 bg-rich-gold mb-8"></div>

                        <p className="text-rich-light-gray text-lg mb-6 leading-relaxed">
                            Rich Mining LLC operates copper mining assets in Mongolia with a focus on efficient production and responsible resource management.
                        </p>

                        <p className="text-rich-light-gray text-lg leading-relaxed">
                            We align our operations with international standards while maintaining transparency and long-term value creation for our partners. Our commitment goes beyond extraction; we are building a legacy of sustainable industrial excellence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-lg border border-rich-gold/20 relative overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 bg-rich-gold/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img
                                src="/images/mining-site.jpg"
                                alt="Mining Site View"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-rich-dark-gray border border-rich-gold/30 rounded-lg -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-rich-gold/5 rounded-full blur-xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
