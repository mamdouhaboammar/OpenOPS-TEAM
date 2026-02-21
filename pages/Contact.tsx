
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaFacebookF, FaWhatsapp as FaWhatsappBrand } from 'react-icons/fa';
import { FiMail, FiMapPin, FiArrowUpRight, FiMessageCircle, FiRss } from 'react-icons/fi';
import { SEO } from '../components/SEO';

export const Contact: React.FC = () => {
  const whatsappMessage = encodeURIComponent("ممكن استفسار بخصوص الـ Packs");
  const whatsappLink = `https://wa.me/201092677269?text=${whatsappMessage}`;

  const contactMethods = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      description: 'للاستفسارات السريعة والدعم المباشر',
      link: whatsappLink,
      icon: <FaWhatsappBrand className="w-8 h-8" />,
      color: 'bg-green-500',
      hoverBorder: 'hover:border-green-500/50',
      bgConfig: 'bg-green-500/10',
      action: 'إرسال رسالة'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      description: 'للتواصل المهني ومتابعة التحديثات',
      link: 'https://www.linkedin.com/in/mamdouh-aboammar/',
      icon: <FaLinkedinIn className="w-8 h-8" />,
      color: 'bg-blue-600',
      hoverBorder: 'hover:border-blue-600/50',
      bgConfig: 'bg-blue-600/10',
      action: 'زيارة البروفايل'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      description: 'تابعنا على فيسبوك للمناقشات العامة',
      link: 'https://www.facebook.com/mamdouhboammar',
      icon: <FaFacebookF className="w-8 h-8" />,
      color: 'bg-blue-500',
      hoverBorder: 'hover:border-blue-500/50',
      bgConfig: 'bg-blue-500/10',
      action: 'متابعة'
    }
  ];

  return (
    <>
      <SEO 
        title="تواصل معنا | AG-Mart" 
        description="تواصل مع فريق AG-Mart عبر واتساب، لينكدإن أو فيسبوك." 
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20 relative overflow-hidden transition-colors duration-300">
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto px-4">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6"
            >
              خلينا نتكلم <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">بيزنس</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              عندك استفسار بخصوص الـ Packs؟ محتاج نصيحة إيه الأنسب لشركتك؟
              <br />
              فريقنا متاح للرد على كل استفساراتك.
            </motion.p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.id}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className={`group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 ${method.hoverBorder} shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden`}
              >
                {/* Hover Glow */}
                <div className={`absolute inset-0 ${method.bgConfig} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className={`w-20 h-20 rounded-2xl ${method.bgConfig} flex items-center justify-center ${method.color.replace('bg-', 'text-')} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{method.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-8 min-h-[3rem]">{method.description}</p>

                <div className={`mt-auto flex items-center gap-2 font-bold ${method.color.replace('bg-', 'text-')} group-hover:gap-3 transition-all`}>
                  <span>{method.action}</span>
                  <FiArrowUpRight className="text-lg" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Feeds Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-20"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                <FiRss className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                تابع الجديد (Community Updates)
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                عشان تكون سابق بخطوة، بنشارك تجارب حقيقية وتحديثات مستمرة على منصات التواصل.
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
              
              {/* Facebook Post */}
              <div className="flex flex-col items-center">
                 <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 w-full max-w-[500px]">
                    <div className="overflow-x-auto">
                      <iframe 
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmamdouhboammar%2Fposts%2Fpfbid035UYab3HQRRArSyuvAHnjzp3oWqr5L3MZCmGg1LWV8wWnTv5a3QhdnXWj5Uccs1SLl&show_text=true&width=500" 
                        width="500" 
                        height="162" 
                        style={{border:'none', overflow:'hidden'}} 
                        scrolling="no" 
                        frameBorder="0" 
                        allowFullScreen={true} 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                 </div>
                 <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                    <FaFacebookF className="text-[#1877F2]" />
                    <span>آخر الأخبار على فيسبوك</span>
                 </div>
              </div>

              {/* LinkedIn Post */}
              <div className="flex flex-col items-center">
                 <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 w-full max-w-[504px]">
                    <div className="overflow-x-auto">
                      <iframe 
                        src="https://www.linkedin.com/embed/feed/update/urn:li:share:7429216683598225408" 
                        height="922" 
                        width="504" 
                        frameBorder="0" 
                        allowFullScreen={true} 
                        title="منشور مضمن"
                      ></iframe>
                    </div>
                 </div>
                 <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                    <FaLinkedinIn className="text-[#0A66C2]" />
                    <span>تحديثات مهنية على لينكدإن</span>
                 </div>
              </div>

            </div>
          </motion.div>

          {/* Additional Info / FAQ Teaser */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center bg-slate-100 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800"
          >
            <div className="flex justify-center mb-4 text-cyan-500">
               <FiMessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">معلومة سريعة</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              أسرع طريقة للرد هي عبر <strong>الواتساب</strong>. بنحاول نرد في خلال ساعات العمل الرسمية (10 ص - 6 م) بتوقيت القاهرة.
            </p>
          </motion.div>

        </div>
      </div>
    </>
  );
};
