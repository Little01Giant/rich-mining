"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Leaf, FileCheck, Zap } from "lucide-react";

export default function Safety() {
    const values = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-rich-black" />,
            title: "Zero-Compromise Safety",
            description: "Our safety culture is absolute. We implement rigorous protocols to ensure the well-being of every team member."
        },
        {
            icon: <Leaf className="w-8 h-8 text-rich-black" />,
            title: "Environmentally Responsible",
            description: "Sustainable mining practices that respect the land and minimize our ecological footprint."
        },
        {
            icon: <FileCheck className="w-8 h-8 text-rich-black" />,
            title: "Transparent Reporting",
            description: "We maintain open lines of communication with stakeholders through clear, accurate, and timely reporting."
        },
        {
            icon: <Zap className="w-8 h-8 text-rich-black" />,
            title: "Operational Efficiency",
            description: "Leveraging innovation to optimize production while adhering to the highest standards of quality."
        }
    ];

    return (
        <section id="safety" className="py-24 bg-rich-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-rich-dark-gray/20 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Safety & Sustainability</h2>
                    <div className="w-24 h-1 bg-rich-gold mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-rich-dark-gray p-6 rounded-lg border-t-4 border-rich-gold hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="bg-rich-gold w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                            <p className="text-rich-light-gray text-sm leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
