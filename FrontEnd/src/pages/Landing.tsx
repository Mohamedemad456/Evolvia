import { Link } from 'react-router-dom';
import { Users, BarChart3, GraduationCap, Briefcase, TrendingUp, Award, Clock, CheckCircle2, ArrowRight, Quote, Star } from 'lucide-react';

const Landing = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#1e40af]/10 to-[#2563eb]/10 top-[10%] left-[10%] animate-float" style={{ animationDuration: '25s', animationDelay: '0s' }}></div>
          <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[#0ea5e9]/10 to-[#60a5fa]/10 top-[60%] right-[15%] animate-float" style={{ animationDuration: '30s', animationDelay: '2s' }}></div>
          <div className="absolute w-[150px] h-[150px] rounded-full bg-gradient-to-br from-[#2563eb]/10 to-[#3b82f6]/10 bottom-[20%] left-[20%] animate-float" style={{ animationDuration: '20s', animationDelay: '4s' }}></div>
          <div className="absolute w-[250px] h-[250px] rounded-full bg-gradient-to-br from-[#60a5fa]/10 to-[#0ea5e9]/10 top-[30%] right-[30%] animate-float" style={{ animationDuration: '35s', animationDelay: '1s' }}></div>
          <div className="absolute w-[180px] h-[180px] rounded-full bg-gradient-to-br from-[#1e40af]/10 to-[#1e3a8a]/10 bottom-[40%] right-[10%] animate-float" style={{ animationDuration: '28s', animationDelay: '3s' }}></div>
          <div className="absolute w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#2563eb]/10 to-[#0ea5e9]/10 top-[70%] left-[50%] animate-float" style={{ animationDuration: '22s', animationDelay: '5s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center py-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
              <span className="block bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent animate-fade-in-up">
                Transform Your HR
              </span>
              <span className="block bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                With Expert Consulting
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              We provide comprehensive HR services and consulting to help your business
              thrive. From talent acquisition to strategic HR planning, we've got you covered.
            </p>
            <div className="flex gap-6 justify-center flex-wrap animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/about" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl text-center transition-all duration-300 shadow-lg shadow-blue-900/10 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                <Users size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-[#1e40af] mb-4">Talent Acquisition</h3>
              <p className="text-slate-600 leading-relaxed">Find and attract the best talent for your organization</p>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl text-center transition-all duration-300 shadow-lg shadow-blue-900/10 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                <BarChart3 size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-[#1e40af] mb-4">HR Strategy</h3>
              <p className="text-slate-600 leading-relaxed">Develop strategic HR plans aligned with your business goals</p>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl text-center transition-all duration-300 shadow-lg shadow-blue-900/10 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                <GraduationCap size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-[#1e40af] mb-4">Training & Development</h3>
              <p className="text-slate-600 leading-relaxed">Enhance your team's skills with our training programs</p>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl text-center transition-all duration-300 shadow-lg shadow-blue-900/10 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                <Briefcase size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-[#1e40af] mb-4">HR Consulting</h3>
              <p className="text-slate-600 leading-relaxed">Expert advice on all aspects of human resources</p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e40af] mb-4">Our Impact</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">Numbers that speak for our excellence</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <TrendingUp size={40} strokeWidth={2} />
                </div>
                <div className="text-5xl font-bold text-[#1e40af] mb-2">500+</div>
                <p className="text-slate-600 text-lg">Companies Served</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <Award size={40} strokeWidth={2} />
                </div>
                <div className="text-5xl font-bold text-[#1e40af] mb-2">98%</div>
                <p className="text-slate-600 text-lg">Client Satisfaction</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <Users size={40} strokeWidth={2} />
                </div>
                <div className="text-5xl font-bold text-[#1e40af] mb-2">50K+</div>
                <p className="text-slate-600 text-lg">Talents Placed</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <Clock size={40} strokeWidth={2} />
                </div>
                <div className="text-5xl font-bold text-[#1e40af] mb-2">15+</div>
                <p className="text-slate-600 text-lg">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e40af] mb-4">Our Services</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">Comprehensive HR solutions tailored to your needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
                <div className="w-16 h-16 mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <Users size={32} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">Recruitment & Staffing</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  End-to-end recruitment solutions including candidate sourcing, screening, and placement to help you build high-performing teams.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    Executive Search
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    Temporary Staffing
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    Background Verification
                  </li>
                </ul>
              </div>
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <BarChart3 size={32} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">HR Strategy & Planning</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Develop strategic HR frameworks that align with your business objectives and drive organizational growth.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    Organizational Design
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    Workforce Planning
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    Performance Management
                  </li>
                </ul>
              </div>
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <GraduationCap size={32} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">Learning & Development</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Customized training programs to enhance employee skills, improve productivity, and foster professional growth.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    Leadership Training
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    Skill Development
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    Compliance Training
                  </li>
                </ul>
              </div>
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-16 h-16 mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <Briefcase size={32} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">HR Consulting</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Expert guidance on HR policies, procedures, and best practices to optimize your human resource operations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    Policy Development
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    Compensation & Benefits
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    Employee Relations
                  </li>
                </ul>
              </div>
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <TrendingUp size={32} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">Change Management</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Support your organization through transitions with strategic change management and communication planning.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    Organizational Transformation
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    M&A Support
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    Culture Integration
                  </li>
                </ul>
              </div>
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="w-16 h-16 mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <Award size={32} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">Compliance & Risk</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Ensure your HR practices comply with regulations and mitigate risks through comprehensive audits and guidance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    HR Audits
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    Legal Compliance
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 size={20} className="text-[#2563eb] mr-2 flex-shrink-0" strokeWidth={2} />
                    Risk Assessment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e40af] mb-4">How It Works</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">Our simple process to transform your HR</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#1e40af] bg-white flex items-center justify-center text-[#1e40af] relative">
                  <span className="text-2xl font-bold">1</span>
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <ArrowRight size={24} className="text-[#2563eb]" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1e40af] mb-4">Consultation</h3>
                <p className="text-slate-600 leading-relaxed">
                  We start with a comprehensive consultation to understand your business needs and HR challenges.
                </p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#1e40af] bg-white flex items-center justify-center text-[#1e40af] relative">
                  <span className="text-2xl font-bold">2</span>
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <ArrowRight size={24} className="text-[#2563eb]" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1e40af] mb-4">Strategy</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our experts develop a customized strategy and action plan tailored to your specific requirements.
                </p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#1e40af] bg-white flex items-center justify-center text-[#1e40af] relative">
                  <span className="text-2xl font-bold">3</span>
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <ArrowRight size={24} className="text-[#2563eb]" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1e40af] mb-4">Implementation</h3>
                <p className="text-slate-600 leading-relaxed">
                  We work closely with your team to implement the solutions and ensure smooth execution.
                </p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#1e40af] bg-white flex items-center justify-center text-[#1e40af]">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-[#1e40af] mb-4">Support</h3>
                <p className="text-slate-600 leading-relaxed">
                  Ongoing support and monitoring to ensure long-term success and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e40af] mb-4">What Our Clients Say</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">Trusted by leading organizations worldwide</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 animate-fade-in-up">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" strokeWidth={2} />
                  ))}
                </div>
                <Quote size={32} className="text-[#2563eb] mb-4" strokeWidth={2} />
                <p className="text-slate-600 leading-relaxed mb-6">
                  "Evolvia HR transformed our recruitment process. Their expertise and dedication helped us build an exceptional team that drives our success."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af] mr-4">
                    <Users size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-bold text-[#1e40af]">Sarah Johnson</div>
                    <div className="text-sm text-slate-600">CEO, Tech Innovations</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" strokeWidth={2} />
                  ))}
                </div>
                <Quote size={32} className="text-[#2563eb] mb-4" strokeWidth={2} />
                <p className="text-slate-600 leading-relaxed mb-6">
                  "The HR strategy consulting services provided by Evolvia HR were instrumental in restructuring our organization. Highly recommend their services!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af] mr-4">
                    <Users size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-bold text-[#1e40af]">Michael Chen</div>
                    <div className="text-sm text-slate-600">HR Director, Global Corp</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" strokeWidth={2} />
                  ))}
                </div>
                <Quote size={32} className="text-[#2563eb] mb-4" strokeWidth={2} />
                <p className="text-slate-600 leading-relaxed mb-6">
                  "Outstanding training programs! Our employees have significantly improved their skills, and the impact on our productivity has been remarkable."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af] mr-4">
                    <Users size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-bold text-[#1e40af]">Emily Rodriguez</div>
                    <div className="text-sm text-slate-600">Operations Manager, Growth Labs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#1e40af] to-[#2563eb] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Ready to Transform Your HR?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Let's discuss how we can help your organization achieve its HR goals and drive business success.
            </p>
            <div className="flex gap-6 justify-center flex-wrap animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/contact" className="btn bg-white text-[#1e40af] hover:bg-slate-100 hover:shadow-xl">
                Get Started Today
              </Link>
              <Link to="/about" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
