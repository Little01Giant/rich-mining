"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MoveRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Operations", href: "#operations" },
        { name: "Safety", href: "#safety" },
        { name: "Partnerships", href: "#partnerships" },
        { name: "Contact", href: "#contact" },
    ];

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);

        if (element) {
            setIsMobileMenuOpen(false); // Close menu first

            // Small timeout to allow menu closing animation to start/layout to settle
            setTimeout(() => {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 100);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-rich-black/90 backdrop-blur-md py-4 shadow-lg border-b border-rich-gold/10"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    RICH <span className="text-rich-gold">MINING</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className="text-sm font-medium text-rich-light-gray hover:text-rich-gold transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rich-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="#partnerships"
                        onClick={(e) => handleScrollTo(e, "#partnerships")}
                        className="bg-rich-gold text-rich-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-yellow-500 transition-colors flex items-center gap-2 shadow-lg shadow-rich-gold/20"
                    >
                        Partner With Us
                        <MoveRight size={16} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-rich-light-gray hover:text-rich-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-rich-black border-t border-rich-dark-gray overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScrollTo(e, link.href)}
                                    className="text-rich-light-gray hover:text-rich-gold text-lg font-medium border-b border-rich-dark-gray pb-2"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#partnerships"
                                onClick={(e) => handleScrollTo(e, "#partnerships")}
                                className="bg-rich-gold text-rich-black px-6 py-3 rounded-full font-semibold text-center hover:bg-yellow-500 transition-colors mt-4 block"
                            >
                                Partner With Us
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
