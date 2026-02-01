import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Award, FileText, LogOut, CheckCircle, ExternalLink, ShieldCheck, X, Download, Share2 } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [selectedCert, setSelectedCert] = useState<any>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (!savedUser) {
      navigate('/login');
    } else {
      setUser(JSON.parse(savedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Profile Header */}
        <Reveal>
          <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-8 mb-6 md:mb-0">
              <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                <User className="h-10 w-10 text-gray-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{user.full_name}</h1>
                <p className="text-gray-500 font-medium">{user.email}</p>
                <div className="mt-3 inline-block px-4 py-1.5 bg-gray-100 rounded-full text-gray-600 text-xs font-bold uppercase tracking-widest border border-gray-200">
                  {user.role}
                </div>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="px-6 py-3 rounded-full border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 hover:text-red-600 hover:border-red-100 transition-all flex items-center"
            >
              <LogOut className="h-4 w-4 mr-2" /> Logout
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Left Column: Progress */}
          <div className="md:col-span-1 space-y-8">
            <Reveal delay={0.1}>
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm h-full">
                <h3 className="text-gray-900 font-bold mb-6 flex items-center text-lg">
                  <FileText className="h-5 w-5 mr-3 text-black" /> Your Stats
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-gray-500">Tasks Completed</span>
                    <span className="text-gray-900 font-bold text-lg">12</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-gray-500">Certificates Earned</span>
                    <span className="text-gray-900 font-bold text-lg">2</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 mt-2">
                    <div className="bg-black h-2.5 rounded-full w-[65%]"></div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Certificates */}
          <div className="md:col-span-2">
            <Reveal delay={0.2}>
              <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm min-h-[400px]">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-gray-900 font-bold flex items-center text-xl">
                    <Award className="h-6 w-6 mr-3 text-amber-500" /> Credentials
                  </h3>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Verified & Secured</span>
                </div>
                
                <div className="space-y-6">
                  {/* Certificate 1 */}
                  <motion.div 
                    whileHover={{ scale: 1.01, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                    onClick={() => setSelectedCert({ title: "Full Stack Web Development", date: "Oct 12, 2025", id: "DEV-2025-042", color: "emerald" })}
                    className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 overflow-hidden group transition-all cursor-pointer"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
                      <div className="flex items-start space-x-5">
                        <div className="h-16 w-16 bg-white rounded-xl flex items-center justify-center border border-gray-100 shadow-sm shrink-0">
                          <ShieldCheck className="h-8 w-8 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-bold text-lg tracking-tight">Full Stack Web Development</h4>
                          <p className="text-gray-500 text-sm mt-1 mb-3">Issued by DevAgency</p>
                          <div className="flex items-center space-x-3 text-xs text-gray-400 font-mono">
                            <span className="bg-white border border-gray-200 px-2 py-1 rounded">ID: DEV-2025-042</span>
                            <span>•</span>
                            <span>Oct 12, 2025</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 bg-white rounded-full shadow-sm border border-gray-100 text-gray-400 group-hover:text-black transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Certificate 2 */}
                  <motion.div 
                    whileHover={{ scale: 1.01, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                    onClick={() => setSelectedCert({ title: "UI/UX Design Masterclass", date: "Nov 05, 2025", id: "DES-2025-088", color: "indigo" })}
                    className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 overflow-hidden group transition-all cursor-pointer"
                  >
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"></div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
                      <div className="flex items-start space-x-5">
                        <div className="h-16 w-16 bg-white rounded-xl flex items-center justify-center border border-gray-100 shadow-sm shrink-0">
                          <ShieldCheck className="h-8 w-8 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-bold text-lg tracking-tight">UI/UX Design Masterclass</h4>
                          <p className="text-gray-500 text-sm mt-1 mb-3">Issued by DevAgency</p>
                          <div className="flex items-center space-x-3 text-xs text-gray-400 font-mono">
                            <span className="bg-white border border-gray-200 px-2 py-1 rounded">ID: DES-2025-088</span>
                            <span>•</span>
                            <span>Nov 05, 2025</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 bg-white rounded-full shadow-sm border border-gray-100 text-gray-400 group-hover:text-black transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative"
              >
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>

                <div className="p-12 text-center border-b border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                  <div className="mb-8 flex justify-center">
                    <div className="h-20 w-20 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                      <ShieldCheck className={`h-10 w-10 text-${selectedCert.color}-600`} />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedCert.title}</h2>
                  <p className="text-gray-500">Presented to <span className="font-semibold text-gray-900">{user.full_name}</span></p>
                  
                  <div className="mt-8 flex justify-center space-x-8 text-sm">
                    <div>
                      <p className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-1">Issue Date</p>
                      <p className="font-mono text-gray-700">{selectedCert.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-1">Credential ID</p>
                      <p className="font-mono text-gray-700">{selectedCert.id}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 flex justify-between items-center">
                  <div className="flex space-x-3">
                    <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all">
                      <Download className="h-4 w-4 mr-2" /> Download PDF
                    </button>
                    <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all">
                      <Share2 className="h-4 w-4 mr-2" /> Share
                    </button>
                  </div>
                  <button 
                    onClick={() => navigate(`/verify?id=${selectedCert.id}`)}
                    className="flex items-center px-6 py-2 bg-black text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-all shadow-md"
                  >
                    Verify Publicly <ExternalLink className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Profile;