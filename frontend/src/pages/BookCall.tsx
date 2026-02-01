import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Calendar, Monitor, Smartphone, Bot, CheckCircle, ChevronRight, ChevronLeft, Settings } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const services = [
  { id: 'website', title: 'Website Development', icon: <Monitor className="h-6 w-6" />, desc: 'Custom websites & web apps' },
  { id: 'app', title: 'Mobile App Dev', icon: <Smartphone className="h-6 w-6" />, desc: 'iOS & Android solutions' },
  { id: 'ai', title: 'AI Integration', icon: <Bot className="h-6 w-6" />, desc: 'Chatbots & automation' },
  { id: 'custom', title: 'Custom Solution', icon: <Settings className="h-6 w-6" />, desc: 'Bespoke software architecture' },
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM", "05:00 PM"
];

// Generate next 5 days for demo
const getNextDays = () => {
  const dates = [];
  const today = new Date();
  for (let i = 1; i <= 5; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push(d);
  }
  return dates;
};

const BookCall = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const urlService = searchParams.get('service');
  
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(urlService);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', notes: '' });

  const nextDays = getNextDays();

  // Sync with URL param if it changes
  useEffect(() => {
    if (urlService && services.some(s => s.id === urlService)) {
      setSelectedService(urlService);
    }
  }, [urlService]);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
    console.log("Booking Confirmed:", { selectedService, selectedDate, selectedTime, formData });
  };

  const getServiceTitle = () => {
    const service = services.find(s => s.id === selectedService);
    return service ? service.title : 'Not Selected';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6 lg:px-8 flex items-center justify-center">
      <Reveal width="100%">
        <div className="max-w-4xl mx-auto w-full bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          
          {/* Sidebar / Progress */}
          <div className="bg-gray-50 p-10 md:w-1/3 border-r border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-10">Schedule a Meeting</h2>
            <div className="space-y-8">
              {[
                { label: 'Service', stepNum: 1 },
                { label: 'Date & Time', stepNum: 2 },
                { label: 'Details', stepNum: 3 }
              ].map((item) => (
                <div key={item.stepNum} className={`flex items-center space-x-4 ${step >= item.stepNum ? 'text-black' : 'text-gray-400'}`}>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${step >= item.stepNum ? 'border-black bg-black text-white' : 'border-gray-300'}`}>
                    {item.stepNum}
                  </div>
                  <span className="font-semibold text-sm tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
            
            {step === 4 && (
               <div className="mt-12 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <p className="text-emerald-700 text-sm font-bold flex items-center">
                     <CheckCircle className="h-5 w-5 mr-2" /> Booking Confirmed
                  </p>
               </div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="p-10 md:w-2/3 flex flex-col">
            
            {/* STEP 1: SELECT SERVICE */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Select a Service</h3>
                <div className="grid grid-cols-1 gap-4 flex-1">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`p-5 rounded-xl border-2 text-left transition-all flex items-center space-x-5 group ${
                        selectedService === s.id 
                          ? 'bg-gray-50 border-black ring-1 ring-black' 
                          : 'bg-white border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <div className={`${selectedService === s.id ? 'text-black' : 'text-gray-400 group-hover:text-gray-600'}`}>{s.icon}</div>
                      <div>
                        <div className={`font-bold ${selectedService === s.id ? 'text-black' : 'text-gray-900'}`}>{s.title}</div>
                        <div className="text-sm text-gray-500 mt-1">{s.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    disabled={!selectedService}
                    onClick={() => setStep(2)}
                    className="bg-black text-white px-8 py-3 rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-all flex items-center"
                  >
                    Next <ChevronRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: DATE & TIME */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Choose a Date & Time</h3>
                
                <div className="mb-8">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Available Dates</label>
                  <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
                    {nextDays.map((date, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedDate(date)}
                        className={`flex-shrink-0 w-20 h-24 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
                          selectedDate?.toDateString() === date.toDateString()
                            ? 'bg-black border-black text-white'
                            : 'bg-white border-gray-100 text-gray-500 hover:border-gray-300'
                        }`}
                      >
                        <span className="text-xs font-bold uppercase mb-1">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                        <span className="text-2xl font-bold">{date.getDate()}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {selectedDate && (
                  <div className="mb-8 flex-1">
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Available Slots</label>
                     <div className="grid grid-cols-3 gap-3">
                       {timeSlots.map((time) => (
                         <button
                           key={time}
                           onClick={() => setSelectedTime(time)}
                           className={`py-3 px-2 rounded-lg text-sm font-bold border-2 transition-all ${
                             selectedTime === time
                               ? 'bg-black border-black text-white'
                               : 'bg-white border-gray-100 text-gray-600 hover:border-gray-300'
                           }`}
                         >
                           {time}
                         </button>
                       ))}
                     </div>
                  </div>
                )}

                <div className="mt-auto flex justify-between pt-6 border-t border-gray-100">
                  <button onClick={() => setStep(1)} className="text-gray-500 hover:text-black font-semibold flex items-center px-4">
                    <ChevronLeft className="h-4 w-4 mr-1" /> Back
                  </button>
                  <button
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => setStep(3)}
                    className="bg-black text-white px-8 py-3 rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-all flex items-center"
                  >
                    Next <ChevronRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: DETAILS */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Your Details</h3>
                <form onSubmit={handleBooking} className="space-y-6 flex-1">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input 
                      required
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Project Brief (Optional)</label>
                    <textarea 
                      rows={3}
                      value={formData.notes}
                      onChange={e => setFormData({...formData, notes: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us a bit about your needs..."
                    />
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex justify-between items-center mt-auto">
                    <button type="button" onClick={() => setStep(2)} className="text-gray-500 hover:text-black font-semibold flex items-center px-4">
                      <ChevronLeft className="h-4 w-4 mr-1" /> Back
                    </button>
                    <button
                      type="submit"
                      className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 4: SUCCESS */}
            {step === 4 && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle className="h-10 w-10 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Meeting Scheduled!</h2>
                <p className="text-gray-500 mb-10 max-w-sm">
                  We have sent a calendar invitation to <span className="text-gray-900 font-semibold">{formData.email}</span>.
                </p>
                
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 w-full max-w-sm text-left mb-10">
                  <div className="flex items-start mb-6">
                    <Monitor className="h-5 w-5 text-gray-400 mr-4 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Service</p>
                      <p className="text-gray-900 font-bold">{getServiceTitle()}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-gray-400 mr-4 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Date & Time</p>
                      <p className="text-gray-900 font-bold">
                        {selectedDate?.toLocaleDateString()} at {selectedTime}
                      </p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/')} 
                  className="text-gray-900 hover:text-black font-bold border-b-2 border-gray-200 hover:border-black transition-all pb-1"
                >
                  Return to Home
                </button>
              </motion.div>
            )}

          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default BookCall;
