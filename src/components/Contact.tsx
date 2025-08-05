import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_3p1ta99', // Your service ID
        'template_z4e1zvd', // Your template ID
        formData,
        'jqDaIhD5cAM4gpWbG' // Your public key
      );
      
      setSubmitStatus('success');
      setFormData({
        from_name: '',
        from_email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-purple-900/50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-white/80">Ready to secure your enterprise? Let's discuss your PAM requirements.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center group hover:bg-white/10 p-4 rounded-xl transition-colors">
                <Phone className="h-6 w-6 text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-white/70">+237 670 169 123</div>
                </div>
              </div>

              <div className="flex items-center group hover:bg-white/10 p-4 rounded-xl transition-colors">
                <Mail className="h-6 w-6 text-purple-400 mr-4 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-white/70">info@gitcotech.net</div>
                </div>
              </div>

              <div className="flex items-center group hover:bg-white/10 p-4 rounded-xl transition-colors">
                <MapPin className="h-6 w-6 text-green-400 mr-4 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-white font-medium">Location</div>
                  <div className="text-white/70">Douala, Cameroon</div>
                </div>
              </div>

              <div className="flex items-center group hover:bg-white/10 p-4 rounded-xl transition-colors">
                <Clock className="h-6 w-6 text-yellow-400 mr-4 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-white font-medium">Business Hours</div>
                  <div className="text-white/70">Mon - Fri: 8:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/20">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-400 mr-3" />
                <span className="text-white font-semibold">Trusted Since 2018</span>
              </div>
              <p className="text-white/80 text-sm">
                Cameroon's leading PAM provider with certified expertise in CyberArk and enterprise security solutions.
              </p>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 backdrop-blur-sm bg-green-500/20 border border-green-400/30 rounded-xl">
                <p className="text-green-300 font-medium">✓ Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 backdrop-blur-sm bg-red-500/20 border border-red-400/30 rounded-xl">
                <p className="text-red-300 font-medium">✗ Failed to send message. Please try again or contact us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/80 mb-2">Name</label>
                <input 
                  type="text" 
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2">Email</label>
                <input 
                  type="email" 
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2">Company</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-4 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Tell us about your PAM requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;