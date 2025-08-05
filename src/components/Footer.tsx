import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-white/20">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Gitcotech</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Cameroon's premier Privileged Access Management provider, delivering enterprise-grade security solutions since 2018.
            </p>
            <div className="text-white/60 text-sm">
              <p>&copy; 2024 Gitcotech. All rights reserved.</p>
              <p className="mt-2">Leading PAM solutions in Cameroon</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li>CyberArk Implementation</li>
              <li>Vault Management</li>
              <li>Identity Management</li>
              <li>Infrastructure Security</li>
              <li>PAM Consulting</li>
              <li>24/7 Support</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-white/70">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+237 670 169 123</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@gitcotech.net</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Douala, Cameroon</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60">
            Trusted by leading enterprises across Cameroon • Certified PAM specialists • Operating since 2018
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;