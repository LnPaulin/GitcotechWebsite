import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jean-Baptiste Mbeki",
      role: "IT Director, Cameroonian Bank",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      content: "Gitcotech transformed our security posture with their CyberArk implementation. Their expertise and local understanding made all the difference.",
      rating: 5
    },
    {
      name: "Amina Douala",
      role: "CISO, Telecom Cameroon",
      image: "https://images.pexels.com/photos/3184336/pexels-photo-3184336.jpeg",
      content: "Outstanding PAM solutions and exceptional support. Gitcotech has been our trusted security partner for over 3 years.",
      rating: 5
    },
    {
      name: "Paul Nyong",
      role: "Security Manager, Mining Corp",
      image: "https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg",
      content: "The most professional PAM implementation we've experienced. Their team's dedication to excellence is unmatched in Cameroon.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-blue-900/50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-white/80">Trusted by leading enterprises across Cameroon</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <Quote className="h-8 w-8 text-blue-400 mb-4" />
              <p className="text-white/80 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;