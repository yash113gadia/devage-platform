import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Users, FileCode, DollarSign, Check, X, Eye, ExternalLink } from 'lucide-react';

// Mock Data Types
type Applicant = {
  id: number;
  name: string;
  email: string;
  college: string;
  github: string;
  status: 'pending' | 'accepted' | 'rejected';
};

type Submission = {
  id: number;
  taskTitle: string;
  internName: string;
  prLink: string;
  liveLink?: string;
  bounty: string;
  submittedAt: string;
};

const Admin = () => {
  // TODO: Replace with real Auth Context
  const user = { role: 'admin', name: 'Admin User' }; 
  
  const [activeTab, setActiveTab] = useState<'applicants' | 'reviews'>('reviews');

  // Mock Data
  const [applicants, setApplicants] = useState<Applicant[]>([
    { id: 1, name: "Alice Student", email: "alice@univ.edu", college: "MIT", github: "github.com/alice", status: 'pending' },
    { id: 2, name: "Bob Coder", email: "bob@tech.edu", college: "Stanford", github: "github.com/bob", status: 'pending' },
  ]);

  const [submissions, setSubmissions] = useState<Submission[]>([
    { id: 101, taskTitle: "Fix Navbar Responsiveness", internName: "Dave Developer", prLink: "github.com/devage/repo/pull/42", bounty: "₹200", submittedAt: "2 hours ago" },
    { id: 102, taskTitle: "Create Dark Mode Toggle", internName: "Eve Engineer", prLink: "github.com/devage/repo/pull/43", liveLink: "vercel.app/preview", bounty: "₹300", submittedAt: "5 hours ago" },
  ]);

  // Route Protection
  if (user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  const handleApplicantAction = (id: number, action: 'accepted' | 'rejected') => {
    console.log(`Applicant ${id} ${action}`);
    setApplicants(prev => prev.filter(a => a.id !== id)); // Remove from list for demo
  };

  const handleReviewAction = (id: number, action: 'approve' | 'reject') => {
    console.log(`Submission ${id} ${action}`);
    setSubmissions(prev => prev.filter(s => s.id !== id)); // Remove from list for demo
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-slate-400">Manage your agency, interns, and payouts.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg flex items-center">
            <div className="bg-indigo-500/10 p-3 rounded-lg mr-4">
              <Users className="h-8 w-8 text-indigo-500" />
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium">Active Interns</p>
              <p className="text-2xl font-bold text-white">12</p>
            </div>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg flex items-center">
            <div className="bg-amber-500/10 p-3 rounded-lg mr-4">
              <FileCode className="h-8 w-8 text-amber-500" />
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium">Pending Reviews</p>
              <p className="text-2xl font-bold text-white">{submissions.length}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-slate-800/50 p-1 rounded-xl w-fit mb-6">
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'reviews' 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Code Reviews
          </button>
          <button
            onClick={() => setActiveTab('applicants')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'applicants' 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            New Applicants
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          
          {/* Code Reviews Table */}
          {activeTab === 'reviews' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-slate-300">
                <thead className="bg-slate-900/50 text-slate-400 uppercase text-xs font-semibold">
                  <tr>
                    <th className="px-6 py-4">Task</th>
                    <th className="px-6 py-4">Intern</th>
                    <th className="px-6 py-4">Proof</th>
                    <th className="px-6 py-4">Submitted</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {submissions.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                        No pending reviews. Good job!
                      </td>
                    </tr>
                  ) : (
                    submissions.map((sub) => (
                      <tr key={sub.id} className="hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium text-white">{sub.taskTitle}</div>
                        </td>
                        <td className="px-6 py-4">{sub.internName}</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <a href={`https://${sub.prLink}`} target="_blank" rel="noreferrer" className="flex items-center text-indigo-400 hover:text-indigo-300 text-sm">
                              <ExternalLink className="h-3 w-3 mr-1" /> PR
                            </a>
                            {sub.liveLink && (
                              <a href={`https://${sub.liveLink}`} target="_blank" rel="noreferrer" className="flex items-center text-cyan-400 hover:text-cyan-300 text-sm">
                                <Eye className="h-3 w-3 mr-1" /> Live
                              </a>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">{sub.submittedAt}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end space-x-2">
                            <button 
                              onClick={() => handleReviewAction(sub.id, 'reject')}
                              className="p-2 bg-rose-500/10 text-rose-500 rounded-lg hover:bg-rose-500/20 transition-colors" title="Reject / Request Changes"
                            >
                              <X className="h-4 w-4" />
                            </button>
                            <button 
                              onClick={() => handleReviewAction(sub.id, 'approve')}
                              className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg hover:bg-emerald-500/20 transition-colors" title="Approve"
                            >
                              <Check className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Applicants Table */}
          {activeTab === 'applicants' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-slate-300">
                <thead className="bg-slate-900/50 text-slate-400 uppercase text-xs font-semibold">
                  <tr>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">College</th>
                    <th className="px-6 py-4">Links</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {applicants.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                        No new applicants.
                      </td>
                    </tr>
                  ) : (
                    applicants.map((app) => (
                      <tr key={app.id} className="hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium text-white">{app.name}</div>
                          <div className="text-slate-500 text-xs">{app.email}</div>
                        </td>
                        <td className="px-6 py-4">{app.college}</td>
                        <td className="px-6 py-4">
                          <a href={`https://${app.github}`} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300 text-sm flex items-center w-fit">
                            <ExternalLink className="h-3 w-3 mr-1" /> GitHub
                          </a>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end space-x-2">
                            <button 
                              onClick={() => handleApplicantAction(app.id, 'rejected')}
                              className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-lg hover:bg-slate-600 transition-colors"
                            >
                              Reject
                            </button>
                            <button 
                              onClick={() => handleApplicantAction(app.id, 'accepted')}
                              className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                              Accept
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
