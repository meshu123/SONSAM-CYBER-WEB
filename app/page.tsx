'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Printer, 
  Copy, 
  Layers, 
  Scan, 
  FileText, 
  GraduationCap, 
  Globe, 
  Briefcase, 
  Type, 
  Monitor, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Menu, 
  X, 
  Crown, 
  ArrowRight,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import Image from 'next/image';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Branches', href: '#branches' },
  { name: 'Royal Portal', href: '#royal' },
  { name: 'Contact', href: '#contact' },
];

const SERVICES = [
  { icon: <Printer size={32} />, title: 'Printing', desc: 'High-quality color and B&W document printing.' },
  { icon: <Copy size={32} />, title: 'Photocopying', desc: 'Fast and clear copies of all your documents.' },
  { icon: <Layers size={32} />, title: 'Lamination', desc: 'Durable protection for your important certificates.' },
  { icon: <Scan size={32} />, title: 'Scanning', desc: 'Digital conversion of physical documents to PDF/Image.' },
  { icon: <FileText size={32} />, title: 'KRA Returns Filing', desc: 'Professional assistance with tax compliance.' },
  { icon: <GraduationCap size={32} />, title: 'HELB Applications', desc: 'Secure student loan application assistance.' },
  { icon: <Globe size={32} />, title: 'Passport Applications', desc: 'Hassle-free e-Citizen passport portal guidance.' },
  { icon: <Briefcase size={32} />, title: 'Online Job Apps', desc: 'Expert help applying for local and international jobs.' },
  { icon: <Type size={32} />, title: 'Typing & CV Writing', desc: 'Professional document formatting and CV design.' },
  { icon: <Monitor size={32} />, title: 'Computer Training', desc: 'Basic to advanced computer literacy courses.' },
];

const BRANCHES = [
  { name: 'Stage Miwa Main Branch', location: 'Kisii', isMain: true },
  { name: 'Ufanisi Branch', location: 'Kisii', isMain: false },
  { name: 'Denmark Branch', location: 'Kisii', isMain: false },
  { name: 'Nyankongo Lazion Branch', location: 'Kisii', isMain: false },
];

export default function SonsamCyber() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const WHATSAPP_LINK = "https://wa.me/254706910757?text=hello%20i%20want%20to%20join%20the%20sonsam%20vvip%20circle";

  return (
    <div className="min-h-screen bg-deep-bg text-[#E0E6ED] selection:bg-gold selection:text-navy">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-navy/95 backdrop-blur-md py-3 shadow-xl border-b-2 border-gold' : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-light-gold">SONSAM CYBER</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#8892B0]">Your Trusted Cyber Services Partner</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-semibold uppercase tracking-wider hover:text-light-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK} 
              className="gold-gradient text-navy px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(197,160,89,0.3)] hover:scale-105 transition-all flex items-center gap-2"
            >
              <MessageSquare size={14} /> Royal Portal
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-[#d4af37]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-[#06101f] border-b border-[#d4af37]/20 p-6 flex flex-col space-y-4 shadow-2xl"
            >
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-semibold hover:text-[#d4af37]"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK}
                className="bg-[#d4af37] text-[#0a192f] p-4 rounded-xl text-center font-bold"
              >
                Join VVIP Circle 👑
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0F203D,#050C1A)]" />
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1] text-light-gold">
                Precision Services <br />
                <span className="text-white opacity-90">for a Digital Kenya</span>
              </h1>
              <p className="text-lg text-[#8892B0] mb-12 leading-relaxed max-w-2xl font-medium">
                From KRA filing to Passport applications, we bridge the gap between technology and your needs across Kisii County. Reliable, fast, and professional.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#services"
                  className="px-10 py-5 gold-gradient text-navy rounded-full font-black text-sm uppercase tracking-widest shadow-[0_0_25px_rgba(197,160,89,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  Explore Services <ArrowRight size={18} />
                </motion.a>
                
                <div className="glass-card p-6 flex flex-col justify-center max-w-sm">
                  <h3 className="text-gold font-bold text-sm uppercase tracking-widest mb-2">Our Mission</h3>
                  <p className="text-xs text-[#8892B0]">To empower every Kenyan citizen with seamless access to essential e-government and digital services through excellence and integrity.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-deep-bg">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-2">Professional Services</h2>
              <p className="text-[#8892B0] text-sm uppercase tracking-widest">10+ Specialized Categories</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ backgroundColor: 'rgba(197, 160, 89, 0.1)', borderColor: '#C5A059' }}
                className="glass-card p-6 flex flex-col items-center text-center group cursor-default transition-all border border-white/5"
              >
                <div className="text-light-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#CCD6F6]">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-black text-gold uppercase tracking-tighter flex items-center gap-2">
              <MapPin size={24} /> Find Us Near You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRANCHES.map((branch, index) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl transition-all border-l-4 ${
                  branch.isMain ? 'bg-gold/5 border-gold shadow-[0_0_20px_rgba(197,160,89,0.1)]' : 'bg-white/5 border-transparent'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-light-gold leading-tight">{branch.name}</h3>
                  {branch.isMain && (
                    <span className="bg-gold text-navy text-[8px] font-black uppercase px-2 py-1 rounded">MAIN</span>
                  )}
                </div>
                <div className="text-[#8892B0] text-xs font-semibold uppercase tracking-wider mb-2">Kisii • Visit Us</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Royal Portal Section */}
      <section id="royal" className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-[#0F203D] to-[#050C1A] border-2 border-gold rounded-[2rem] p-12 text-center shadow-[0_0_40px_rgba(197,160,89,0.2)]">
            <h2 className="text-3xl md:text-5xl font-black text-light-gold mb-4">👑 SONSAM VVIP Royal Circle</h2>
            <p className="text-[#CCD6F6] text-sm mb-10 max-w-lg mx-auto uppercase tracking-widest">Access special offers and priority service across all branches.</p>
            
            <div className="flex flex-wrap justify-center gap-8 text-[#8892B0] text-xs font-bold uppercase tracking-widest mb-12">
              <span>• Early Offer Access</span>
              <span>• Priority Service</span>
              <span>• Member Discounts</span>
              <span>• Holiday Deals</span>
              <span>• Loyalty Points</span>
            </div>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_LINK}
              className="w-full md:w-auto inline-flex px-16 py-5 gold-gradient text-navy rounded-full font-black text-sm uppercase tracking-widest shadow-lg"
            >
              JOIN NOW 👑
            </motion.a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-columns-[1fr_1.5fr] gap-12 items-center">
            <div className="glass-card p-12 text-center border-gold/20 shadow-2xl">
               <Monitor size={100} className="mx-auto mb-6 text-light-gold" />
               <h3 className="text-2xl font-black mb-2 whitespace-nowrap text-white">SONSAM CYBER</h3>
               <p className="text-gold font-bold text-xs tracking-[0.3em] uppercase">EST. 2020</p>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-light-gold">Our Mission</h2>
              <p className="text-lg text-[#8892B0] leading-relaxed font-medium">
                SONSAM CYBER was founded with a singular purpose: to bridge the digital divide in Kisii County by providing fast, professional, and accessible cyber services. We understand that in today&apos;s world, digital compliance is critical.
              </p>
              <p className="text-lg text-[#8892B0] leading-relaxed font-medium">
                Whether you&apos;re a student applying for HELB, a job seeker polishing their CV, or a taxpayer filing returns, we are here to ensure your experience is seamless. Currently serving across four strategic branches, we are proud to be your neighborhood digital partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-deep-bg/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-light-gold">Get In Touch</h2>
              
              <div className="glass-card p-10 border-gold/10">
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-navy rounded-xl border border-gold/30 text-light-gold">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#8892B0] uppercase tracking-[0.2em] font-bold mb-1">Phone Number</p>
                      <p className="text-lg font-bold">+254 706 910 757</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-navy rounded-xl border border-gold/30 text-light-gold">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#8892B0] uppercase tracking-[0.2em] font-bold mb-1">Email Address</p>
                      <p className="text-lg font-bold underline decoration-gold/30 decoration-2 underline-offset-4">sonsamcyber@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-navy rounded-xl border border-gold/30 text-light-gold">
                      <Monitor size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#8892B0] uppercase tracking-[0.2em] font-bold mb-1">Support Hours</p>
                      <p className="text-lg font-bold text-white">Mon-Sat • 8AM-8PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="glass-card p-10 border-gold/30 shadow-[0_0_40px_rgba(197,160,89,0.1)]">
                <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-tight">Rapid Support</h3>
                <p className="text-[#8892B0] text-sm leading-relaxed mb-10 font-medium">Have a query about our services or want to join the VVIP circle? Reach out to us directly on WhatsApp for instant assistance.</p>
                
                <motion.a
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(37,211,102,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  href={WHATSAPP_LINK}
                  className="w-full flex items-center justify-center gap-3 bg-[rgb(37,211,102)] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl transition-all"
                >
                  <MessageSquare size={20} /> Chat on WhatsApp
                </motion.a>
                
                <p className="mt-8 text-[10px] text-[#8892B0] uppercase tracking-[0.3em] font-bold text-center">Fast Response Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-navy border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[11px] text-[#8892B0] font-medium uppercase tracking-widest">
             © 2026 <span className="text-light-gold font-black">SONSAM CYBER</span>. All Rights Reserved.
          </div>
          <div className="text-[11px] text-[#8892B0] font-medium uppercase tracking-[0.2em]">
            Serving Kisii — One Branch at a Time
          </div>
        </div>
      </footer>

      {/* Sticky Bottom VVIP Trigger for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          href={WHATSAPP_LINK}
          className="w-16 h-16 gold-gradient text-navy rounded-full flex items-center justify-center shadow-2xl border-2 border-gold"
        >
          <Crown size={32} />
        </motion.a>
      </div>
    </div>
  );
}
