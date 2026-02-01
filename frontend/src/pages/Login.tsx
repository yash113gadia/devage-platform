import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import axios from 'axios';
import { Reveal } from '../components/Reveal';

const Login = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setError('');
    
    const params = new URLSearchParams();
    params.append('username', data.email);
    params.append('password', data.password);

    try {
      const response = await axios.post('http://127.0.0.1:8000/token', params);
      localStorage.setItem('token', response.data.access_token);
      
      const userRes = await axios.get('http://127.0.0.1:8000/me', {
        headers: { Authorization: `Bearer ${response.data.access_token}` }
      });
      localStorage.setItem('user', JSON.stringify(userRes.data));
      
      navigate('/profile');
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6 flex items-center justify-center">
      <Reveal width="fit-content">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl border border-gray-200 shadow-sm">
          <div className="text-center mb-10">
            <div className="mx-auto h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="h-6 w-6 text-gray-900" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Welcome Back</h2>
            <p className="text-gray-500 mt-2">Access your certificates and internship dashboard.</p>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('email', { required: 'Email is required' })}
                  type="email"
                  className="block w-full pl-11 bg-gray-50 border border-gray-200 rounded-lg py-3 text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="intern@college.edu"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message as string}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('password', { required: 'Password is required' })}
                  type="password"
                  className="block w-full pl-11 bg-gray-50 border border-gray-200 rounded-lg py-3 text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1 font-medium">{errors.password.message as string}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-full transition-all flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
              {!isLoading && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm">
              New here? <Link to="/register" className="text-black font-semibold hover:underline decoration-2">Create an account</Link>
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Login;