import { useForm } from 'react-hook-form';
import { useSearchParams, Link } from 'react-router-dom';

import { Github, Send, GraduationCap, ArrowLeft, Briefcase } from 'lucide-react';
import { Reveal } from '../components/Reveal';

type ApplicationForm = {
  fullName: string;
  email: string;
  college: string;
  githubUrl: string;
  coverLetter: string;
  track: string;
};

const DOMAINS = [
  { id: 'full-stack', label: 'Full Stack Web (React/Node)' },
  { id: 'ai-ml', label: 'AI & ML Engineer (Python/TensorFlow)' },
  { id: 'app-dev', label: 'App Development (Flutter/Kotlin)' },
  { id: 'ui-ux', label: 'UI/UX Design (Figma)' },
  { id: 'devops', label: 'DevOps & Cloud (AWS/Docker)' },
  { id: 'blockchain', label: 'Blockchain Dev (Solidity)' },
  { id: 'marketing', label: 'Digital Marketing (SEO/Content)' },
  { id: 'cybersecurity', label: 'Cybersecurity (Ethical Hacking)' },
];

const Apply = () => {
  const [searchParams] = useSearchParams();
  const urlTrack = searchParams.get('track') || '';

  const { register, handleSubmit, formState: { errors } } = useForm<ApplicationForm>({
    defaultValues: {
      track: urlTrack 
    }
  });

  const onSubmit = (data: ApplicationForm) => {
    console.log("Application Data:", data);
    alert(`Application for ${data.track} submitted successfully!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6 lg:px-8 flex items-center justify-center">
      <Reveal width="fit-content">
        <div className="max-w-xl w-full bg-white p-10 rounded-3xl border border-gray-200 shadow-sm relative">
          
          <Link 
            to="/internships" 
            className="absolute top-8 left-8 p-2 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-all"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <div className="text-center mt-6 mb-10">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-6 w-6 text-gray-900" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Join the <span className="text-black">Cohort</span>
            </h2>
            <p className="mt-2 text-gray-500">
              Submit your profile to start working on real-world projects.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            
            {/* Domain Selection Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Domain</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  {...register("track", { required: "Please select a domain" })}
                  className="block w-full pl-11 bg-gray-50 border border-gray-200 rounded-lg py-3 pr-10 text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none appearance-none transition-all cursor-pointer"
                >
                  <option value="">Select a Domain</option>
                  {DOMAINS.map((domain) => (
                    <option key={domain.id} value={domain.id}>
                      {domain.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
              {errors.track && <span className="text-red-500 text-xs mt-1 font-medium">{errors.track.message}</span>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  {...register("fullName", { required: "Full name is required" })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="Jane Doe"
                />
                {errors.fullName && <span className="text-red-500 text-xs mt-1 font-medium">Required</span>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="jane@college.edu"
                />
                {errors.email && <span className="text-red-500 text-xs mt-1 font-medium">Required</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">College / University</label>
              <input
                {...register("college", { required: "College is required" })}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                placeholder="Tech University"
              />
              {errors.college && <span className="text-red-500 text-xs mt-1 font-medium">{errors.college.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">GitHub / Portfolio URL</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Github className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register("githubUrl", { required: "GitHub/Portfolio URL is required" })}
                  className="block w-full pl-11 bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="https://github.com/janedoe"
                />
              </div>
              {errors.githubUrl && <span className="text-red-500 text-xs mt-1 font-medium">{errors.githubUrl.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Why should we hire you?</label>
              <textarea
                {...register("coverLetter", { required: "Please write a brief cover letter" })}
                rows={4}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your skills and projects..."
              />
              {errors.coverLetter && <span className="text-red-500 text-xs mt-1 font-medium">{errors.coverLetter.message}</span>}
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-6 border border-transparent text-base font-bold rounded-full text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all group"
            >
              <span className="flex items-center">
                Submit Application <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Apply;
