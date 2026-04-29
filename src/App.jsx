import React, { useState } from 'react';
import { Scissors, Phone, Clock, MapPin, Menu, X, Star, ChevronRight, Award, Sparkles } from 'lucide-react';
import logo from './assets/logo.jpg';
import heroImg from './assets/hero.png';
import galleryFade from './assets/gallery_fade.png';
import galleryBeard from './assets/gallery_beard.png';
import aboutImg from './assets/IMG.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    service: 'Haircut',
    barber: 'Any',
    time: ''
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setBookingData({
      name: '',
      phone: '',
      service: 'Haircut',
      barber: 'Any',
      time: ''
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Book', href: '#book' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="bg-dark text-white min-h-screen font-sans selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img src={logo} alt="Clapper Logo" className="h-12 w-12 object-cover rounded-full border border-gold/50 shadow-[0_0_15px_rgba(197,160,89,0.3)]" />
              <div className="flex flex-col">
                <span className="font-bold text-xl md:text-2xl tracking-[0.2em] text-gold font-serif uppercase leading-none">CLAPPER</span>
                <span className="text-[7px] md:text-[9px] tracking-[0.3em] text-white/50 uppercase mt-1 font-medium">Men's Barber Shop</span>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-widest font-medium">
                  {link.name}
                </a>
              ))}
              <a href="#book" className="bg-gold text-black px-6 py-2 rounded-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors">
                Book Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gold hover:text-white">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-b border-gold/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gold hover:bg-dark-gray uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Barbershop" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight uppercase leading-tight">
            Clean Cuts.<br/>
            <span className="text-gold-gradient">Sharp Style.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light tracking-wide">
            Experience the pinnacle of professional grooming. Where precision meets passion in a luxury environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#book" className="bg-gold text-black px-10 py-5 rounded-sm font-bold uppercase tracking-[0.2em] hover:bg-gold-light transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(197,160,89,0.2)] flex items-center justify-center gap-2">
              Book Now <ChevronRight size={20} />
            </a>
            <a href="tel:+251933023131" className="border-2 border-gold text-gold px-10 py-5 rounded-sm font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <Phone size={20} /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-dark border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-widest font-serif">About <span className="text-gold-gradient">Us</span></h2>
              <div className="w-16 h-1 bg-gold mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Clapper Men’s Barber Shop is a modern grooming destination located in the <span className="text-gold font-bold">Bole Ambassador Hotel</span> area of Addis Ababa, with a second branch in the <span className="text-gold font-bold">Semit Ferde Bet</span> area.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                We are dedicated to providing high-quality grooming services in a clean, professional, and welcoming environment. Our focus is simple — delivering consistent, precise haircuts and grooming tailored to each client’s style and preference.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                By combining proven barbering techniques with modern trends, we ensure every cut is clean, sharp, and suited to the individual.
              </p>
              

              <p className="text-gray-400 leading-relaxed mb-6">
                We take pride in our attention to detail, hygiene standards, and overall client experience. Whether it’s a routine haircut or preparation for a special occasion, every visit is handled with care and professionalism.
              </p>
              <p className="text-gray-300 font-medium italic">
                At Clapper Men’s Barber Shop, our goal is to ensure every client leaves looking sharp and feeling confident.
              </p>
            </div>
            <div className="relative group">
              <div className="aspect-[4/5] bg-dark-gray border border-white/5 relative z-10 overflow-hidden">
                 <img src={aboutImg} alt="About Us" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gold/20 mix-blend-overlay"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-gold/30 -z-10 group-hover:border-gold/60 transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Cards Section */}
      <section className="py-20 bg-dark -mt-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-[0.2em] font-serif">
              Our <span className="text-gold-gradient">Specializations</span>
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Precision Haircuts & Fades', icon: <Scissors className="text-gold" size={32} /> },
              { title: 'Beard Shaping & Grooming', icon: <Sparkles className="text-gold" size={32} /> },
              { title: 'Modern & Classic Styles', icon: <Award className="text-gold" size={32} /> },
              { title: 'Personalized Experience', icon: <Star className="text-gold" size={32} /> }
            ].map((spec, i) => (
              <div key={i} className="bg-black/50 border border-gold/10 p-8 rounded-sm text-center hover:border-gold/40 transition-all duration-300 group hover:-translate-y-2">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {spec.icon}
                </div>
                <h3 className="text-white font-bold uppercase tracking-widest text-sm leading-relaxed">
                  {spec.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-[0.3em] font-serif">
              Our <span className="text-gold-gradient">Services</span>
            </h2>
            <div className="w-32 h-1 bg-gold mx-auto relative">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-darker px-4 text-gold">
                <Scissors size={16} />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div className="space-y-10">
              <div className="group flex justify-between items-end border-b border-white/10 pb-6 hover:border-gold/50 transition-colors">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">Classic Haircut</h3>
                  <p className="text-gray-400 text-sm italic">Precision cutting tailored to your style</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gold block">400 ETB</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">45 Minutes</span>
                </div>
              </div>
              <div className="group flex justify-between items-end border-b border-white/10 pb-6 hover:border-gold/50 transition-colors">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">Beard Sculpting</h3>
                  <p className="text-gray-400 text-sm italic">Detailed shaping with straight razor finish</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gold block">200 ETB</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">30 Minutes</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <div className="group relative flex justify-between items-end border-b border-gold/30 bg-gold/5 p-6 rounded-t-sm hover:bg-gold/10 transition-colors">
                <div className="absolute -top-3 left-6 bg-gold text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest flex items-center gap-1 shadow-lg">
                  <Star size={10} fill="currentColor" /> Premium Choice
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">The Royal Treatment</h3>
                  <p className="text-gray-400 text-sm italic">Full haircut, beard trim & hot towel shave</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gold block">550 ETB</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">75 Minutes</span>
                </div>
              </div>
              <div className="group flex justify-between items-end border-b border-white/10 pb-6 hover:border-gold/50 transition-colors">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">Kids Grooming</h3>
                  <p className="text-gray-400 text-sm italic">Stylish cuts for the younger gentlemen</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gold block">250 ETB</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">30 Minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-widest font-serif">
                Book Your <span className="text-gold-gradient">Appointment</span>
              </h2>
              <div className="w-20 h-1 bg-gold mb-8"></div>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Secure your slot for the ultimate grooming experience. Fill out the form, and our team will contact you shortly to confirm your visit.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                    <Star size={20} />
                  </div>
                  <span>Premium grooming services tailored to you</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                    <Clock size={20} />
                  </div>
                  <span>Flexible scheduling from 7 AM to 8 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-darker p-8 md:p-12 border border-gold/20 shadow-2xl relative overflow-hidden group min-h-[400px] flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -rotate-45 translate-x-16 -translate-y-16"></div>
              
              {isSubmitted ? (
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/20">
                    <Star className="text-gold" size={40} fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest font-serif">Request <span className="text-gold">Received</span></h3>
                  <p className="text-gray-400 mb-10 leading-relaxed">
                    Thank you! Your grooming request has been sent. Our team will contact you shortly to confirm your appointment.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gold/10 border border-gold/50 text-gold px-8 py-3 font-bold uppercase tracking-widest text-[10px] hover:bg-gold hover:text-black transition-all"
                  >
                    New Booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={bookingData.name}
                        placeholder="Enter your name"
                        className="w-full bg-dark border-b border-white/10 py-4 px-0 focus:border-gold focus:outline-none transition-colors text-white placeholder:text-gray-700"
                        onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={bookingData.phone}
                        placeholder="09..."
                        className="w-full bg-dark border-b border-white/10 py-4 px-0 focus:border-gold focus:outline-none transition-colors text-white placeholder:text-gray-700"
                        onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">Select Service</label>
                    <div className="relative">
                      <select 
                        value={bookingData.service}
                        className="w-full bg-dark border-b border-white/10 py-4 px-0 focus:border-gold focus:outline-none transition-colors text-white appearance-none cursor-pointer"
                        onChange={(e) => setBookingData({...bookingData, service: e.target.value})}
                      >
                        <option value="Haircut">Classic Haircut</option>
                        <option value="Beard">Beard Sculpting</option>
                        <option value="Royal">The Royal Treatment</option>
                        <option value="Kids">Kids Grooming</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                        <ChevronRight size={16} className="rotate-90" />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-gold text-black py-5 font-bold uppercase tracking-[0.3em] hover:bg-gold-light transition-all transform hover:-translate-y-1 shadow-lg mt-4">
                    Request Appointment
                  </button>
                  <p className="text-[10px] text-center text-gray-600 uppercase tracking-widest mt-4">
                    Or call directly: 093 302 3131
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-darker overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-[0.3em] font-serif">
              Photo <span className="text-gold-gradient">Gallery</span>
            </h2>
            <div className="w-32 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative aspect-[3/4] overflow-hidden border border-white/5">
              <img src={galleryFade} alt="Haircut Fade" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-gold font-bold uppercase tracking-widest">Precision Fade</p>
              </div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden border border-white/5">
              <img src={galleryBeard} alt="Beard Grooming" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-gold font-bold uppercase tracking-widest">Master Beard Shaping</p>
              </div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden border border-white/5">
              <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200" alt="Barber at Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-gold font-bold uppercase tracking-widest">The Craft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="py-32 bg-darker border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Visit Us Column */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-10 uppercase tracking-widest flex items-center gap-4">
                  Visit <span className="text-gold">Us</span>
                  <span className="h-[1px] flex-grow bg-gold/20"></span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Bole Branch */}
                  <div className="bg-dark p-8 border border-white/5 group hover:border-gold/30 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-dark-gray p-3 text-gold">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-gold text-[10px] font-bold uppercase tracking-widest">Main Branch</p>
                        <h3 className="text-white font-bold uppercase">Bole Ambassador</h3>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      Ambassador Hotel 1st floor,<br/>Addis Ababa, Ethiopia
                    </p>
                    <a href="https://www.google.com/maps/dir//CLAPPER+MEN'S+BARBER+SHOP,+Ambassador+Hotel+1st+floor,+Addis+Ababa/@9.0046464,38.7650662,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x164b85579dc68c09:0xa7408eeffc530d71!2m2!1d38.7881973!2d8.9916512?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="text-gold text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2">
                      Get Directions <ChevronRight size={14} />
                    </a>
                  </div>

                  {/* Semit Branch */}
                  <div className="bg-dark p-8 border border-white/5 group hover:border-gold/30 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-dark-gray p-3 text-gold">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-gold text-[10px] font-bold uppercase tracking-widest">Second Branch</p>
                        <h3 className="text-white font-bold uppercase">Semit Ferde Bet</h3>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      Semit Ferde Bet area,<br/>Addis Ababa, Ethiopia
                    </p>
                    <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">Directions coming soon</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center gap-6 bg-dark/50 p-6 border border-white/5">
                  <div className="text-gold">
                    <Clock size={32} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Business Hours</h4>
                    <p className="text-white font-medium uppercase tracking-wider text-sm">Mon - Sun: 7:00 AM – 8:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 bg-dark/50 p-6 border border-white/5">
                  <div className="text-gold">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Direct Lines</h4>
                    <p className="text-white font-medium tracking-wider text-sm">093 302 3131 / +251 963 755 101</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Us Column */}
            <div className="relative">
              <div className="bg-gold p-10 h-full flex flex-col justify-between group overflow-hidden">
                <div className="absolute top-0 right-0 text-black/10 -mr-8 -mt-8 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                  <Scissors size={200} />
                </div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-black mb-6 uppercase tracking-widest">Get in <span className="text-white">Touch</span></h2>
                  <p className="text-black/80 font-medium mb-10 leading-relaxed">
                    Ready for a change? Call us now or visit any of our branches. We're here to help you look your best.
                  </p>
                </div>

                <div className="space-y-4 relative z-10">
                  <a href="tel:+251933023131" className="w-full bg-black text-white py-5 flex justify-center items-center gap-3 font-bold uppercase tracking-widest hover:bg-dark-gray transition-colors shadow-xl">
                    <Phone size={20} /> Call Main Line
                  </a>
                  <a href="tel:+251963755101" className="w-full border-2 border-black text-black py-5 flex justify-center items-center gap-3 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                    <Phone size={20} /> Secondary Line
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darker py-16 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gold/50"></div>
              <Scissors className="text-gold" size={32} />
              <div className="w-12 h-[1px] bg-gold/50"></div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-serif text-3xl tracking-[0.2em] text-white uppercase leading-none mb-2">CLAPPER</h3>
              <p className="text-gold text-[10px] tracking-[0.5em] uppercase font-bold">Men's Barber Shop</p>
            </div>
            <div className="flex gap-8 text-gray-500 uppercase tracking-widest text-[10px]">
              <a href="#home" className="hover:text-gold transition-colors">Home</a>
              <a href="#about" className="hover:text-gold transition-colors">About</a>
              <a href="#services" className="hover:text-gold transition-colors">Services</a>
              <a href="#book" className="hover:text-gold transition-colors">Book</a>
              <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white/5 mb-10"></div>
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} CLAPPER MENS Addis. Excellence in grooming.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
