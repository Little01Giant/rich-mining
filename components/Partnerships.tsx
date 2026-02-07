"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Partnerships() {
    return (
        <section id="partnerships" className="py-24 bg-gradient-to-b from-rich-dark-gray to-rich-black">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-rich-black border border-rich-gold/30 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    {/* Gold Glow */}
                    <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-rich-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Partnership Opportunities</h2>
                        <p className="text-rich-light-gray text-lg mb-8 max-w-2xl mx-auto">
                            We are actively seeking strategic partners for long-term operational collaboration, expansion, and investment. Join us in shaping the future of responsible copper production.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
                            <div className="bg-rich-dark-gray/50 p-4 rounded-lg border border-white/5">
                                <h4 className="text-rich-gold font-bold mb-2">Operational</h4>
                                <p className="text-sm text-rich-light-gray">Long-term collaboration for mining operations.</p>
                            </div>
                            <div className="bg-rich-dark-gray/50 p-4 rounded-lg border border-white/5">
                                <h4 className="text-rich-gold font-bold mb-2">Development</h4>
                                <p className="text-sm text-rich-light-gray">Expansion of existing assets and new projects.</p>
                            </div>
                            <div className="bg-rich-dark-gray/50 p-4 rounded-lg border border-white/5">
                                <h4 className="text-rich-gold font-bold mb-2">Investment</h4>
                                <p className="text-sm text-rich-light-gray">Strategic partnerships for mutual growth.</p>
                            </div>
                        </div>

                        <motion.a
                            href="mailto:info@richmining.mn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-rich-gold text-rich-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors shadow-lg shadow-rich-gold/20"
                        >
                            <Mail className="w-5 h-5" />
                            Contact Us to Explore Opportunities
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}
