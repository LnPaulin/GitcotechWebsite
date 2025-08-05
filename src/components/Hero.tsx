import React from 'react';
import { Shield, Lock, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Secure Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Digital Assets</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Cameroon's leading Privileged Access Management provider. We help enterprises secure their most critical systems with world-class PAM solutions including CyberArk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="backdrop-blur-lg bg-white/10 text-white px-8 py-4 rounded-full font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <Shield className="h-12 w-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-white/70">Comprehensive PAM solutions for enterprise-level security requirements.</p>
            </div>
            
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <Lock className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">CyberArk Expertise</h3>
              <p className="text-white/70">Certified specialists in CyberArk deployment and management.</p>
            </div>
            
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <Users className="h-12 w-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">Local Leadership</h3>
              <p className="text-white/70">Cameroon's #1 PAM provider since 2018, trusted by top companies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;