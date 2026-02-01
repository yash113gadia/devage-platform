import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Monitor, Smartphone, Bot, Settings } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const PLAN_DETAILS = [
  {
    id: 'website',
    title: 'Website Development',
    icon: <Monitor className="h-8 w-8 text-indigo-600" />,
    description: 'Professional, high-performance websites built for conversion.',
    features: [
      'Responsive Design (Desktop/Mobile)',
      'SEO Optimization & Fast Loading',
      'CMS Integration (Blog/News)',
      'Custom Animations & Interactions',
      'Domain & Hosting Setup',
      'Ongoing Monthly Maintenance'
    ]
  },
  {
    id: 'app',
    title: 'Mobile App Development',
    icon: <Smartphone className="h-8 w-8 text-emerald-600" />,
    description: 'Feature-rich iOS and Android applications.',
    features: [
      'Cross-Platform Development (React Native/Flutter)',
      'User Authentication & Profiles',
      'Push Notifications & Cloud Sync',
      'App Store & Play Store Publishing',
      'Seamless API Integrations',
      'Performance Monitoring & Updates'
    ]
  },
  {
    id: 'ai',
    title: 'AI Integration',
    icon: <Bot className="h-8 w-8 text-rose-600" />,
    description: 'Automate your business with cutting-edge AI agents.',
    features: [
      'Custom GPT & Chatbot Deployment',
      'Data Analysis & Visualization',
      'Process Automation Workflows',
      'Vector Database Integration',
      'Fine-tuned LLM Solutions',
      'Scalable AI Infrastructure'
    ]
  },
  {
    id: 'custom',
    title: 'Custom Solutions',
    icon: <Settings className="h-8 w-8 text-amber-600" />,
    description: 'Bespoke software architecture for complex needs.',
    features: [
      'Enterprise Software Architecture',
      'Dedicated Engineering Team',
      'Legacy System Modernization',
      'White-label Product Development',
      'Advanced Security Hardening',
      '24/7 Priority VIP Support'
    ]
  }
];

const Plans = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedType = searchParams.get('type');

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Service Details
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Choose the path that fits your business goals. All our plans include a one-time development fee and ongoing support.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PLAN_DETAILS.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.1}>
              <div
                className={`bg-white rounded-3xl p-10 border-2 transition-all h-full flex flex-col ${
                  selectedType === plan.id ? 'border-black ring-1 ring-black shadow-lg' : 'border-gray-100 hover:border-gray-200 hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center space-x-5">
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      {plan.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{plan.title}</h2>
                      <p className="text-gray-500 font-medium text-sm mt-1">Bespoke Solution</p>
                    </div>
                  </div>
                  {selectedType === plan.id && (
                    <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                      SELECTED
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                  {plan.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 flex-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 h-5 w-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span className="text-gray-600 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-left">
                    <p className="text-gray-400 text-xs uppercase font-bold tracking-widest mb-1">Pricing Model</p>
                    <p className="text-gray-900 font-semibold">Upfront + Monthly Support</p>
                  </div>
                  <button
                    onClick={() => navigate(`/book?service=${plan.id}`)}
                    className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-full transition-all"
                  >
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
