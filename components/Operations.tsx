"use client";

import { motion } from "framer-motion";
import { Pickaxe, Factory, Truck } from "lucide-react";

export default function Operations() {
    const operations = [
        {
            icon: <Pickaxe className="w-12 h-12 text-rich-gold" />,
            title: "Mining Operations",
            description: "Implementing advanced extraction techniques to maximize yield while minimizing environmental footprint."
        },
        {
            icon: <Factory className="w-12 h-12 text-rich-gold" />,
            title: "Copper Production",
            description: "State-of-the-art processing facilities ensuring high-grade copper output for global markets."
        },
        {
            icon: <Truck className="w-12 h-12 text-rich-gold" />,
            title: "Processing & Logistics",
            description: "Efficient supply chain management and logistics network for reliable delivery and distribution."
        }
    ];

    return (
        <section id="operations" className="py-24 bg-rich-dark-gray relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img
                    src="/images/copper-production.jpg"
                    alt="Copper Production"
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-rich-black/80"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-rich-gold text-sm font-semibold tracking-widest uppercase mb-2 block">Our Expertise</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Operations</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {operations.map((op, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-rich-black p-8 rounded-xl border border-rich-gold/10 hover:border-rich-gold/50 transition-colors group"
                        >
                            <div className="bg-rich-dark-gray w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {op.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{op.title}</h3>
                            <p className="text-rich-light-gray leading-relaxed">{op.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
