import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code2, Smartphone, Database, BrainCircuit, 
  Palette, Cloud, Link as LinkIcon, Megaphone, Shield,
  ArrowRight, Activity, Sparkles
} from 'lucide-react';
import { Reveal } from '../components/Reveal';

const INTERNSHIP_TRACKS = [
  // ... (keeping the same tracks data)
  {
    id: 'full-stack',
    title: 'Full Stack Web',
    tech: 'React • Node.js',
    icon: <Code2 className="h-8 w-8 text-indigo-600" />,
    color: 'indigo',
    tasks: 12
  },
  {
    id: 'ai-ml',
    title: 'AI & ML Engineer',
    tech: 'Python • TensorFlow',
    icon: <BrainCircuit className="h-8 w-8 text-rose-600" />,
    color: 'rose',
    tasks: 8
  },
  {
    id: 'app-dev',
    title: 'App Development',
    tech: 'Flutter • Kotlin',
    icon: <Smartphone className="h-8 w-8 text-emerald-600" />,
    color: 'emerald',
    tasks: 14
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    tech: 'Figma • Prototyping',
    icon: <Palette className="h-8 w-8 text-purple-600" />,
    color: 'purple',
    tasks: 6
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    tech: 'AWS • Docker',
    icon: <Cloud className="h-8 w-8 text-cyan-600" />,
    color: 'cyan',
    tasks: 5
  },
  {
    id: 'blockchain',
    title: 'Blockchain Dev',
    tech: 'Solidity • Web3',
    icon: <LinkIcon className="h-8 w-8 text-orange-600" />,
    color: 'orange',
    tasks: 4
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    tech: 'SEO • Content',
    icon: <Megaphone className="h-8 w-8 text-pink-600" />,
    color: 'pink',
    tasks: 20
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    tech: 'Ethical Hacking',
    icon: <Shield className="h-8 w-8 text-red-600" />,
    color: 'red',
    tasks: 7
  }
];

const Internships = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none animate-blob"></div>
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-2000"></div>

      <div className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <Reveal>
          <div className="text-center mb-24">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 mb-6">
              <Sparkles className="h-3 w-3 mr-1.5" /> 2026 Cohort Applications Open
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Career Path</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Select a specialized track to access real-world tasks. Build your portfolio, gain experience, and get certified.
            </p>
          </div>
        </Reveal>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTERNSHIP_TRACKS.map((track, index) => (
            <Reveal key={track.id} delay={index * 0.05}>
              <Link to={`/apply?track=${track.id}`} className="block h-full">
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                  className="relative h-full bg-white rounded-3xl p-8 border border-gray-100 hover:border-indigo-100 transition-all group shadow-sm"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-${track.color}-50 border border-${track.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-${track.color}-100 transition-all duration-300`}>
                    {track.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-900 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mb-8 uppercase tracking-wider">
                    {track.tech}
                  </p>

                  {/* Footer Stats */}
                  <div className="pt-6 border-t border-gray-50 flex justify-between items-center text-sm mt-auto">
                    <div className="flex items-center text-gray-400 font-medium group-hover:text-indigo-500 transition-colors">
                      <Activity className="h-4 w-4 mr-2" />
                      {track.tasks} Live Tasks
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.4}>
          <div className="mt-24 text-center">
             <p className="text-gray-500">
               Don't see your track? <Link to="/contact" className="text-indigo-600 font-semibold hover:text-indigo-800 hover:underline decoration-2 underline-offset-2 transition-colors">Contact us</Link> for custom opportunities.
             </p>
          </div>
        </Reveal>

      </div>
    </div>
  );
};

export default Internships;