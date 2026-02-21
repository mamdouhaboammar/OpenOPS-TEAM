import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiUploadCloud, FiPlayCircle, FiArrowLeft } from 'react-icons/fi';

export const InstallationSteps: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'حمل الملفات',
      desc: 'بمجرد الشراء، هينزلك ملف مضغوط فيه "عقل" الـ AI كامل.',
      icon: <FiDownload />,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20'
    },
    {
      id: 2,
      title: 'ارفعها على المنصة',
      desc: 'افتح Gemini Gems أو ChatGPT، وارفع الملفات في ثواني.',
      icon: <FiUploadCloud />,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20'
    },
    {
      id: 3,
      title: 'استلم الإدارة',
      desc: 'مبروك! الـ AI اتحول لمدير تسويق فاهم بيزنس وجاهز للشغل.',
      icon: <FiPlayCircle />,
      color: 'text-green-400',
      bg: 'bg-green-500/10 border-green-500/20'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 opacity-80" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              ركب "الدماغ" في 3 خطوات بس.. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                من غير سطر كود واحد!
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              أنت مش محتاج تكون مبرمج. السيستم مصمم عشان يشتغل "Plug & Play" فوراً.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              {/* Connector Line (Desktop) */}
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-l from-transparent via-slate-700 to-transparent -translate-x-1/2 z-0" />
              )}

              <div className={`relative z-10 h-full p-8 rounded-2xl border backdrop-blur-md transition-transform hover:-translate-y-2 duration-300 ${step.bg}`}>
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-black text-white shadow-lg">
                  {step.id}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-3xl ${step.bg} ${step.color}`}>
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};