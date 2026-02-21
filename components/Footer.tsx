import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiFacebook, FiGlobe, FiArrowLeft, FiHeart, FiActivity, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-slate-950 pt-16 pb-8 overflow-hidden border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 mt-auto">
      
      {/* Backgrounds - Toned down and hidden on mobile to prevent layout issues */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
      <div className="hidden md:block absolute -top-24 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Socials (Centers on mobile, right-aligned on desktop) */}
          <div className="w-full lg:w-4/12 flex flex-col items-center lg:items-start text-center lg:text-right space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <Logo className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">
                AG-Mart
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base max-w-xs md:max-w-md">
              أول سوبر ماركت للـ AI Agents في مصر والشرق الأوسط.
              <br />
              حول شغلك لـ <span className="text-cyan-600 dark:text-cyan-400 font-bold">Smart Work</span> ووفر وقتك ومجهودك للإبداع.
            </p>
            
            {/* Social Icons - Responsive Wrap & Center */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 max-w-[280px] md:max-w-none">
              {[
                { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/mamdouh-aboammar", label: "LinkedIn", hoverClass: "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white" },
                { icon: <FiFacebook />, href: "https://www.facebook.com/mamdouhboammar", label: "Facebook", hoverClass: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white" },
                { icon: <FiTwitter />, href: "https://x.com/Bo_ammarrr", label: "X (Twitter)", hoverClass: "hover:bg-slate-900 hover:border-slate-900 dark:hover:bg-slate-700 hover:text-white" },
                { icon: <FiInstagram />, href: "https://www.instagram.com/boammarrr/", label: "Instagram", hoverClass: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:border-transparent hover:text-white" },
                { icon: <SiThreads />, href: "https://www.threads.net/@boammarrr", label: "Threads", hoverClass: "hover:bg-black hover:border-black dark:hover:bg-slate-800 hover:text-white" },
                { icon: <FiGithub />, href: "https://github.com/Pixora-dev-ai", label: "GitHub", hoverClass: "hover:bg-[#333] hover:border-[#333] dark:hover:bg-slate-700 hover:text-white" },
                { icon: <FaWhatsapp />, href: "https://wa.me/201092677269", label: "WhatsApp", hoverClass: "hover:bg-[#25D366] hover:border-[#25D366] hover:text-white" },
                { icon: <FiMail />, href: "mailto:me@mamdouhaboammar.com", label: "Email", hoverClass: "hover:bg-red-500 hover:border-red-500 hover:text-white" },
                { icon: <FiGlobe />, href: "https://mamdouhaboammar.com/", label: "Personal Website", hoverClass: "hover:bg-cyan-500 hover:border-cyan-500 hover:text-white" },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 md:w-11 md:h-11 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 transition-all duration-300 shadow-sm ${social.hoverClass}`}
                >
                  {React.cloneElement(social.icon as React.ReactElement, { className: 'w-5 h-5' })}
                </a>
              ))}
            </div>
          </div>

          {/* Middle Links (Grid on mobile to save space) */}
          <div className="w-full lg:w-4/12 grid grid-cols-2 gap-6 md:gap-8 text-center lg:text-right">
            {/* Store Links */}
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 md:mb-5 text-sm md:text-base flex items-center justify-center lg:justify-start gap-2">
                <span className="hidden lg:block w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                أقسام المتجر
              </h4>
              <ul className="space-y-3 text-sm md:text-base">
                <li><Link to="/marketplace" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">كل العملاء</Link></li>
                <li><Link to="/marketplace" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">وكلاء النمو (Growth)</Link></li>
                <li><Link to="/marketplace" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">وكلاء المحتوى</Link></li>
                <li><Link to="/marketplace" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">وكلاء الاستراتيجية</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 md:mb-5 text-sm md:text-base flex items-center justify-center lg:justify-start gap-2">
                <span className="hidden lg:block w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                الشركة
              </h4>
              <ul className="space-y-3 text-sm md:text-base">
                <li><Link to="/about" className="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">عن AG-Mart</Link></li>
                <li><Link to="/contact" className="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">تواصل معنا</Link></li>
                <li><Link to="/terms" className="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">الشروط والأحكام</Link></li>
                <li><Link to="/privacy" className="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">سياسة الخصوصية</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-4/12">
             <div className="bg-slate-50 dark:bg-slate-900/50 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center lg:text-right">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-center lg:justify-start gap-2">
                  <FiMail className="text-cyan-500 w-5 h-5" />
                  النشرة البريدية
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  اشترك عشان يوصلك خصومات حصرية وتحديثات الـ Agents الجديدة قبل أي حد.
                </p>
                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="اكتب إيميلك هنا.." 
                    className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 text-center lg:text-right"
                  />
                  <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-all group shadow-md">
                    <span>اشتراك الآن</span>
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                  </button>
                </form>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Status */}
          <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/10 px-4 py-2 rounded-full border border-green-200 dark:border-green-900/30 order-2 md:order-1">
             <span className="relative flex h-2.5 w-2.5">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
             </span>
             <span className="text-xs font-mono font-bold text-green-700 dark:text-green-400 flex items-center gap-1.5">
               <FiActivity className="w-3.5 h-3.5" /> All Systems Operational
             </span>
          </div>

          {/* Copyright & Maker */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-slate-500 dark:text-slate-400 order-1 md:order-2 text-center">
             <span>&copy; {currentYear} AG-Mart. جميع الحقوق محفوظة.</span>
             <span className="hidden md:inline text-slate-300 dark:text-slate-700">|</span>
             <span className="flex items-center gap-1 group cursor-default">
               Made with <FiHeart className="text-red-500 fill-red-500 group-hover:scale-125 transition-transform" /> by Mamdouh
             </span>
          </div>

        </div>
      </div>
    </footer>
  );
};