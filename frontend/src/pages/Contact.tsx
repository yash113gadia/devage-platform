import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare } from 'lucide-react';
import { Reveal } from '../components/Reveal';

type ContactForm = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log("Contact Form Data:", data);
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6 lg:px-8 flex items-center justify-center">
      <Reveal width="fit-content">
        <div className="max-w-xl w-full bg-white p-10 rounded-3xl border border-gray-200 shadow-sm">
          <div className="text-center mb-10">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-6 w-6 text-gray-900" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Get in touch
            </h2>
            <p className="mt-2 text-gray-500">
              Have a project in mind or just want to say hi? Send us a message.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  {...register("fullName", { required: "Required" })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="Jane Doe"
                />
                {errors.fullName && <span className="text-red-500 text-xs mt-1 block">Required</span>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Required" })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="jane@example.com"
                />
                {errors.email && <span className="text-red-500 text-xs mt-1 block">Required</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>
              <input
                {...register("subject", { required: "Required" })}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                {...register("message", { required: "Required" })}
                rows={4}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-6 border border-transparent text-base font-bold rounded-full text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
