import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Rocket, Bot, Monitor, Check, 
  ShoppingBag, PenTool, Dumbbell, Utensils, Hotel, ArrowRight, 
  Code, Users, Zap, Sparkles
} from 'lucide-react';
import { Reveal } from '../components/Reveal';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <Reveal>
            <div className="text-left">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mb-6 bg-white/80 backdrop-blur-sm shadow-sm">
                <span className="font-semibold text-indigo-600 mr-2 flex items-center"><Sparkles className="h-3 w-3 mr-1" /> New</span> Modernizing workflows for 2026.
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 text-balance leading-tight">
                The proven platform for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">modern business.</span>
              </h1>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
                We combine elite engineering talent with automated AI workflows to build software that scales. Faster, smarter, and enterprise-ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/plans')}
                  className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-all hover:shadow-sm"
                >
                  Explore Platform
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative group perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-2xl bg-gray-900/5 p-4 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 transition-transform duration-500 hover:rotate-x-2 hover:rotate-y-2">
                <div className="relative rounded-xl bg-white shadow-2xl ring-1 ring-gray-900/10 overflow-hidden">
                  <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/50 px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-400/80" />
                      <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                      <div className="h-3 w-3 rounded-full bg-green-400/80" />
                    </div>
                    <div className="mx-auto text-xs font-medium text-gray-400 tracking-wide">dashboard.devagency.com</div>
                  </div>
                  <div className="p-6 grid grid-cols-3 gap-6 bg-gradient-to-b from-white to-gray-50/30">
                    <div className="col-span-1 space-y-4">
                      <div className="h-8 w-8 bg-gray-900 rounded-lg mb-6 shadow-sm"></div>
                      <div className="h-2 w-20 bg-gray-100 rounded-full"></div>
                      <div className="h-2 w-16 bg-gray-100 rounded-full"></div>
                      <div className="h-2 w-24 bg-gray-100 rounded-full"></div>
                      <div className="h-32 bg-indigo-50/50 rounded-xl mt-8 border border-dashed border-indigo-100"></div>
                    </div>
                    <div className="col-span-2 space-y-6">
                      <div className="flex justify-between items-end">
                        <div className="space-y-2">
                          <div className="h-8 w-32 bg-gray-900 rounded-lg shadow-sm"></div>
                          <div className="h-3 w-48 bg-gray-100 rounded-full"></div>
                        </div>
                        <div className="h-10 w-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 shadow-sm">
                          <Zap className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="h-40 bg-white rounded-xl border border-gray-100 relative overflow-hidden flex items-end justify-around px-4 pb-0 shadow-sm">
                        <div className="w-8 h-16 bg-indigo-100 rounded-t-sm mx-1"></div>
                        <div className="w-8 h-24 bg-indigo-200 rounded-t-sm mx-1"></div>
                        <div className="w-8 h-20 bg-indigo-100 rounded-t-sm mx-1"></div>
                        <div className="w-8 h-32 bg-gradient-to-t from-indigo-600 to-purple-600 rounded-t-sm mx-1 shadow-md"></div>
                        <div className="w-8 h-28 bg-indigo-200 rounded-t-sm mx-1"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex flex-col justify-between">
                          <div className="h-8 w-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                            <Users className="h-4 w-4" />
                          </div>
                          <div className="h-2 w-12 bg-gray-100 rounded-full"></div>
                        </div>
                        <div className="h-24 bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex flex-col justify-between">
                          <div className="h-8 w-8 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
                            <Code className="h-4 w-4" />
                          </div>
                          <div className="h-2 w-12 bg-gray-100 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 -bottom-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-20"
              >
                <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">System Optimal</div>
                  <div className="text-xs text-gray-500">Latency: 24ms</div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats Section with World Map Graphic */}
      <section className="border-y border-gray-100 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
           <svg viewBox="0 0 100 50" className="w-full h-full fill-current text-gray-900">
              <path d="M20,10 Q30,5 40,10 T60,10 T80,10 T100,10 V40 H0 V10" />
              {/* Simplified Abstract World Map Shapes would go here, using a placeholder curve for now */}
           </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 lg:px-8 relative z-10">
          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="p-4">
                <div className="text-5xl font-bold text-gray-900 mb-2 tracking-tight">99.9%</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Uptime Guarantee</div>
              </div>
              <div className="p-4">
                <div className="text-5xl font-bold text-gray-900 mb-2 tracking-tight">7k+</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Projects Delivered</div>
              </div>
              <div className="p-4">
                <div className="text-5xl font-bold text-gray-900 mb-2 tracking-tight">50+</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Countries Served</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features Grid with Hover Glow */}
      <section id="features" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Monitor className="h-6 w-6" />}
              title="Web Development"
              description="High-performance websites tailored for conversion and scalability."
            />
            <FeatureCard 
              icon={<Bot className="h-6 w-6" />}
              title="AI Integration"
              description="Automate complex workflows with custom AI agents and chatbots."
            />
            <FeatureCard 
              icon={<Rocket className="h-6 w-6" />}
              title="MVP Launch"
              description="From concept to market-ready product in weeks, not months."
            />
          </div>
        </Reveal>
      </section>

      {/* Specialized Solutions with Gradient Background */}
      <section className="py-28 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-100/40 to-purple-100/40 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="mb-20 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">Tailored for your <span className="relative inline-block">industry<span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200/50 -z-10 rounded-sm"></span></span>.</h2>
              <p className="text-lg text-gray-500 max-w-2xl">
                Specialized solutions designed to meet the unique challenges of your sector with precision engineering.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: <ShoppingBag />, title: "E-Commerce", delay: 0 },
              { icon: <PenTool />, title: "Publishing", delay: 0.1 },
              { icon: <Dumbbell />, title: "Fitness", delay: 0.2 },
              { icon: <Utensils />, title: "Hospitality", delay: 0.3 },
              { icon: <Hotel />, title: "Real Estate", delay: 0.4 }
            ].map((item, index) => (
              <Reveal key={index} delay={item.delay}>
                <IndustryCard icon={item.icon} title={item.title} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-lg text-gray-500">Simple plans that scale with your business.</p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reveal delay={0.1}>
            <PricingCard 
              id="website"
              title="Website" 
              label="Business Ready" 
              features={["Responsive Design", "SEO Ready", "Content Management", "Basic Analytics"]} 
            />
          </Reveal>
          <Reveal delay={0.2}>
            <PricingCard 
              id="app"
              title="Mobile App" 
              label="Mobile First" 
              features={["iOS & Android", "Real-time Sync", "Push Notifications", "App Store Setup"]} 
            />
          </Reveal>
          <Reveal delay={0.3}>
            <PricingCard 
              id="ai"
              title="AI Suite" 
              label="AI Powered" 
              features={["Custom Chatbots", "Process Automation", "Data Analysis", "Model Tuning"]} 
            />
          </Reveal>
          <Reveal delay={0.4}>
            <PricingCard 
              id="custom"
              title="Enterprise" 
              label="Fully Bespoke" 
              features={["Custom Architecture", "Dedicated Team", "SLA Support", "Security Audits"]} 
            />
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA with Mesh Gradient */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[2.5rem] relative overflow-hidden px-6 py-20 text-center shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          
          <Reveal>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Ready to transform your business?</h2>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">Join forward-thinking companies building the future with DevAgency's elite engineering and AI solutions.</p>
              <button 
                onClick={() => navigate('/plans')}
                className="px-10 py-5 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Start Your Project
              </button>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all h-full group relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
    <div className="relative z-10">
      <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center mb-6 text-gray-400 group-hover:text-black group-hover:border-gray-300 shadow-sm transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

const IndustryCard = ({ icon, title }: { icon: any, title: string }) => (
  <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-gray-200/60 text-center hover:border-indigo-300 hover:bg-white transition-all cursor-pointer group h-full shadow-sm hover:shadow-md hover:-translate-y-1">
    <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-4 text-gray-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 border border-gray-100 group-hover:border-indigo-100 transition-colors">
      {icon}
    </div>
    <h3 className="text-sm font-bold text-gray-900 group-hover:text-indigo-900 transition-colors">{title}</h3>
  </div>
);

const PricingCard = ({ id, title, label, features }: { id: string, title: string, label: string, features: string[] }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col h-full hover:shadow-xl hover:border-gray-300 transition-all duration-300 group">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 bg-gray-100 group-hover:bg-black group-hover:text-white transition-colors rounded-full text-xs font-bold text-gray-600 uppercase tracking-wide">
          {label}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">Starting from <span className="font-semibold text-gray-900">Custom</span></div>
      
      <div className="space-y-4 mb-8 flex-1">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start text-sm text-gray-600">
            <Check className="h-4 w-4 text-black mr-3 shrink-0 mt-0.5" />
            {feature}
          </div>
        ))}
      </div>
      
      <button 
        onClick={() => navigate(`/plans?type=${id}`)}
        className="w-full py-4 border border-gray-200 rounded-2xl font-semibold text-gray-900 hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center group-hover:shadow-md"
      >
        View Details <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default Home;
