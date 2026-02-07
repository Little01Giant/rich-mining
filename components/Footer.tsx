import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-black py-16 border-t border-rich-dark-gray">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white block mb-6">
                            RICH <span className="text-rich-gold">MINING</span> LLC
                        </Link>
                        <p className="text-rich-light-gray/60 text-sm max-w-xs">
                            Responsible copper production built for long-term partnerships and sustainable growth in Mongolia.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="#about" className="text-rich-light-gray hover:text-rich-gold text-sm transition-colors">About Us</Link></li>
                            <li><Link href="#operations" className="text-rich-light-gray hover:text-rich-gold text-sm transition-colors">Operations</Link></li>
                            <li><Link href="#safety" className="text-rich-light-gray hover:text-rich-gold text-sm transition-colors">Safety & Sustainability</Link></li>
                            <li><Link href="#partnerships" className="text-rich-light-gray hover:text-rich-gold text-sm transition-colors">Partnerships</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-rich-light-gray">
                                <MapPin className="text-rich-gold w-5 h-5 shrink-0" />
                                <span>Ulaanbaatar, Mongolia</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-rich-light-gray">
                                <Mail className="text-rich-gold w-5 h-5 shrink-0" />
                                <a href="mailto:info@richmining.mn" className="hover:text-white transition-colors">info@richmining.mn</a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-rich-light-gray">
                                <Phone className="text-rich-gold w-5 h-5 shrink-0" />
                                <span>+976 9999 9999</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-rich-dark-gray/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-rich-light-gray/40 text-xs text-center md:text-left">
                        &copy; {new Date().getFullYear()} Rich Mining LLC. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-rich-light-gray/40 hover:text-rich-gold text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="text-rich-light-gray/40 hover:text-rich-gold text-xs transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
