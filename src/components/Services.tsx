import React from 'react';
import { Server, Database, UserCheck, Settings, Shield, Lock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "CyberArk Implementation",
      description: "Full-scale CyberArk deployment, configuration, and optimization for your enterprise infrastructure.",
      features: ["Core PAS Installation", "Vault Configuration", "CPM Setup", "PSM Deployment"]
    },
    {
      icon: Database,
      title: "Vault Management",
      description: "Secure credential storage and management with advanced encryption and access controls.",
      features: ["Secure Storage", "Automated Rotation", "Access Logging", "Compliance Reports"]
    },
    {
      icon: UserCheck,
      title: "Identity Management",
      description: "Comprehensive identity lifecycle management and privileged access governance.",
      features: ["User Provisioning", "Access Reviews", "Role Management", "Approval Workflows"]
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "End-to-end protection for servers, applications, and network devices.",
      features: ["Server Protection", "Application Security", "Network Devices", "Cloud Integration"]
    },
    {
      icon: Settings,
      title: "PAM Consulting",
      description: "Strategic consulting to design and implement the optimal PAM architecture for your needs.",
      features: ["Security Assessment", "Architecture Design", "Implementation Planning", "Best Practices"]
    },
    {
      icon: Lock,
      title: "24/7 Support",
      description: "Round-the-clock support and monitoring to ensure your PAM solutions operate flawlessly.",
      features: ["Monitoring", "Incident Response", "Maintenance", "Training"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-blue-900/50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our PAM <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive Privileged Access Management solutions tailored for Cameroonian enterprises
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group hover:transform hover:scale-105">
              <service.icon className="h-12 w-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-white/60 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;