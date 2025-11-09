import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-[calc(100vh-200px)] bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1e40af] to-[#2563eb] text-white py-16 px-6 text-center overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-radial-gradient from-white/10 to-transparent animate-rotate" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 relative z-10 animate-fade-in-up">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 leading-relaxed relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Get in touch with us to discuss how we can help transform your HR processes.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-[#1e40af] mb-6">Let's Work Together</h2>
            <p className="text-slate-700 leading-relaxed mb-12 text-lg">
              Have questions about our services? Want to discuss a project?
              We're here to help! Reach out to us using the form or contact
              information below.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-md shadow-blue-900/10 transition-all duration-300 hover:translate-x-1 hover:shadow-lg hover:shadow-blue-900/20">
                <div className="w-12 h-12 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af] flex-shrink-0">
                  <Mail size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1e40af] mb-2">Email</h3>
                  <p className="text-slate-700">info@evolviahr.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-md shadow-blue-900/10 transition-all duration-300 hover:translate-x-1 hover:shadow-lg hover:shadow-blue-900/20">
                <div className="w-12 h-12 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af] flex-shrink-0">
                  <Phone size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1e40af] mb-2">Phone</h3>
                  <p className="text-slate-700">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-md shadow-blue-900/10 transition-all duration-300 hover:translate-x-1 hover:shadow-lg hover:shadow-blue-900/20">
                <div className="w-12 h-12 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af] flex-shrink-0">
                  <MapPin size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1e40af] mb-2">Address</h3>
                  <p className="text-slate-700">
                    123 Business Street<br />Suite 100<br />City, State 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <form className="bg-white p-8 rounded-2xl shadow-lg shadow-blue-900/10" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-[#1e40af] font-semibold text-sm">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-slate-900 focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-[#1e40af] font-semibold text-sm">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-slate-900 focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 text-[#1e40af] font-semibold text-sm">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-slate-900 focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-[#1e40af] font-semibold text-sm">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your needs..."
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-slate-900 focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 resize-y min-h-[120px]"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full py-4 text-lg mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

