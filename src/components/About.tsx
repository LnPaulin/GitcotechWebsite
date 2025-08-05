import React from 'react';
import { Award, Calendar, MapPin, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, label: "Years of Excellence", value: "6+" },
    { icon: Users, label: "Clients Served", value: "50+" },
    { icon: Award, label: "Certifications", value: "15+" },
    { icon: MapPin, label: "Projects Completed", value: "100+" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg" 
              alt="Professional team"
              className="rounded-3xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-3xl"></div>
          </div>

          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Gitcotech</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Since 2018, Gitcotech has been Cameroon's premier Privileged Access Management provider, delivering world-class security solutions to enterprises across the region.
            </p>
            <p className="text-white/70 mb-8 leading-relaxed">
              Our team of certified experts specializes in implementing and managing comprehensive PAM solutions, with particular expertise in CyberArk deployments. We understand the unique security challenges facing African businesses and provide tailored solutions that meet international standards while addressing local requirements.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
                  <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;