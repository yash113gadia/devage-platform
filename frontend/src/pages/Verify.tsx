import { useState, useEffect } from 'react';
import { Search, Award, CheckCircle, XCircle, Calendar, User } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

// Mock Type
type Certificate = {
  id: string;
  intern_name: string;
  project_name: string;
  issued_at: string;
};

const Verify = () => {
  const [searchParams] = useSearchParams();
  const urlId = searchParams.get('id') || '';
  
  const [certId, setCertId] = useState(urlId);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<'initial' | 'valid' | 'invalid'>('initial');
  const [data, setData] = useState<Certificate | null>(null);

  useEffect(() => {
    if (urlId) {
      performSearch(urlId);
    }
  }, [urlId]);

  const performSearch = async (id: string) => {
    if (!id.trim()) return;

    setIsLoading(true);
    setResult('initial');
    setData(null);

    try {
      const response = await axios.get(`http://127.0.0.1:8000/certificates/${id}`);
      setData(response.data);
      setResult('valid');
    } catch (error) {
      console.error(error);
      setResult('invalid');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(certId);
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-2xl w-full text-center space-y-8">
        
        {/* Header */}
        <div>
          <div className="mx-auto h-16 w-16 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 shadow-lg mb-6">
            <Award className="h-8 w-8 text-indigo-500" />
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Certificate Verification
          </h1>
          <p className="mt-2 text-lg text-slate-400">
            Verify the authenticity of DevAgency internship completions.
          </p>
        </div>

        {/* Search Box */}
        <form onSubmit={handleSearch} className="relative max-w-lg mx-auto w-full">
          <input
            type="text"
            value={certId}
            onChange={(e) => setCertId(e.target.value)}
            placeholder="Enter Certificate ID (e.g., DEV-2026-001)"
            className="w-full bg-slate-800 border border-slate-700 text-white text-lg rounded-full py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xl placeholder-slate-500 transition-all"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="absolute right-2 top-2 p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Search className="h-6 w-6" />
            )}
          </button>
        </form>

        {/* Results Area */}
        <div className="max-w-md mx-auto w-full min-h-[200px] flex items-center justify-center">
          
          {result === 'valid' && data && (
            <div className="w-full bg-slate-800 rounded-2xl border border-emerald-500/30 shadow-2xl overflow-hidden animate-fade-in-up">
              <div className="bg-emerald-500/10 p-4 border-b border-emerald-500/20 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-emerald-500 mr-2" />
                <span className="text-emerald-500 font-bold tracking-wide uppercase">Verified Certificate</span>
              </div>
              <div className="p-8 text-left space-y-6">
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Issued To</p>
                  <div className="flex items-center text-white text-xl font-bold">
                    <User className="h-5 w-5 mr-2 text-indigo-400" />
                    {data.intern_name}
                  </div>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Project Completed</p>
                  <p className="text-slate-300">{data.project_name}</p>
                </div>
                <div className="pt-4 border-t border-slate-700 flex justify-between items-center">
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Issue Date</p>
                    <div className="flex items-center text-slate-300 text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-slate-500" />
                      {new Date(data.issued_at).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">ID</p>
                    <p className="font-mono text-slate-400 text-sm">{data.id}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {result === 'invalid' && (
            <div className="w-full bg-slate-800 rounded-2xl border border-rose-500/30 shadow-2xl p-8 animate-shake">
              <div className="flex flex-col items-center text-center">
                <XCircle className="h-16 w-16 text-rose-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Invalid Certificate</h3>
                <p className="text-slate-400 text-sm">
                  We could not find a certificate with the ID <span className="font-mono text-white bg-slate-700 px-2 py-0.5 rounded">{certId}</span>.
                </p>
                <p className="text-slate-500 text-xs mt-4">
                  Please check for typos or contact support@devagency.com.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verify;
