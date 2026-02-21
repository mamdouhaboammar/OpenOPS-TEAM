import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiTarget, FiCpu, FiUsers, FiAward, FiTrendingUp, FiGlobe, FiArrowLeft, FiZap } from 'react-icons/fi';
import { SEO } from '../components/SEO';
import { Logo } from '../components/Logo';

export const About: React.FC = () => {
  const stats = [
    { value: "+25", label: "عميل رقمي (AI Agent)" },
    { value: "100%", label: "هندسة برمجية واستراتيجية" },
    { value: "+10,000", label: "ساعة تم توفيرها للعملاء" },
    { value: "24/7", label: "دعم وتطوير مستمر" }
  ];

  const values = [
    {
      icon: <FiGlobe />,
      title: "ثقافة ولهجة محلية",
      desc: "نرفض الـ AI المُترجم الركيك. أنظمتنا مصممة لتتحدث وتفكر بعقلية وثقافة السوق المصري والخليجي والعربي، لضمان أعلى معدلات إقناع."
    },
    {
      icon: <FiTarget />,
      title: "تفكير استراتيجي",
      desc: "نحن لا نبيع 'Prompts'. نحن نبني 'عقول' رقمية مُحملة بأطر عمل (Frameworks) عالمية في التسويق والمبيعات لتكون شريكاً استراتيجياً لك."
    },
    {
      icon: <FiZap />,
      title: "جاهزية فورية (Plug & Play)",
      desc: "لا مزيد من إضاعة الوقت في تدريب الذكاء الاصطناعي. منتجاتنا تعمل من اللحظة الأولى لتوفير مئات الساعات من العمل والمحاولات الفاشلة."
    },
    {
      icon: <FiUsers />,
      title: "تمكين البشر، لا استبدالهم",
      desc: "هدفنا هو أن نجعلك 'المايسترو' الذي يدير فريقاً من الخبراء الرقميين، لتضاعف إنتاجيتك وقيمتك في السوق."
    }
  ];

  return (
    <>
      <SEO 
        title="عن AG-Mart | ثورة الذكاء الاصطناعي التسويقي" 
        description="تعرف على قصة AG-Mart وكيف نهدف إلى تغيير طريقة عمل المسوقين والشركات في الشرق الأوسط من خلال أنظمة الذكاء الاصطناعي المتخصصة."
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20 relative overflow-hidden transition-colors duration-300">
        
        {/* Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-4">
          
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-cyan-500/20 border border-slate-200 dark:border-slate-800 mb-8"
            >
              <Logo className="w-14 h-14" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-tight"
            >
              نحن لا نبيع أدوات، <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                نحن نوظف لك الخبراء!
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto"
            >
              AG-Mart هو أول "سوبر ماركت" للموظفين الرقميين (AI Agents) في العالم العربي. مهمتنا هي تحويل الذكاء الاصطناعي "الخام" إلى فريق عمل احترافي يضاعف أرباحك.
            </motion.p>
          </div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto mb-24"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center shadow-sm dark:shadow-none hover:border-cyan-500/30 transition-colors">
                <div className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Our Story / The Problem We Solve */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-900 aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                 <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 mix-blend-overlay"></div>
                 
                 <div className="relative z-10 text-center p-8">
                    <FiCpu className="w-24 h-24 mx-auto text-slate-300 dark:text-slate-700 mb-6" />
                    <p className="font-mono text-xl font-bold text-slate-400 dark:text-slate-500">System_Architecture_v2.0</p>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">القصة: ليه بدأنا AG-Mart؟</h2>
              
              <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  مع انطلاق ثورة الذكاء الاصطناعي (ChatGPT, Claude, Gemini)، لاحظنا مشكلة ضخمة: الجميع يستخدم نفس الأدوات، لكن القليل جداً يحصل على <strong>نتائج أعمال حقيقية</strong>.
                </p>
                <p>
                  الـ AI "الخام" مصمم ليكون كل شيء لكل الناس. إذا سألته كمسوق، سيرد بأسلوب عام، وسطحي، وبلهجة تبدو كـ "روبوت مترجم". لإصلاح ذلك، كان المسوقون يضيعون ساعات يومياً في كتابة "Prompts" طويلة ومعقدة، ويصححون أخطاء الـ AI باستمرار.
                </p>
                <p className="font-bold text-slate-900 dark:text-white border-r-4 border-cyan-500 pr-4 py-2 bg-cyan-50 dark:bg-cyan-900/10 rounded-l-lg">
                  هنا جاءت الفكرة: ماذا لو قمنا ببرمجة "عقل" الخبير داخل الـ AI؟ ماذا لو حولنا سنوات من الخبرة في بناء الاستراتيجيات، والـ Copywriting، وتحليل البيانات إلى كود برمجي (System Instructions) يمكن تركيبه في ثوانٍ؟
                </p>
                <p>
                  وهكذا وُلد <strong>AG-Mart</strong>. ليكون الجسر بين التكنولوجيا الخام، وبين احتياجات السوق العملي في الشرق الأوسط.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">المبادئ التي تحركنا</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                نحن لا نتبع التريندات، بل نبني أنظمة مستدامة ترتكز على القيمة الحقيقية.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl hover:border-cyan-500/50 transition-colors group">
                  <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-2xl mb-6 group-hover:scale-110 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-900/30 transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{value.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-10 md:p-16 text-center border border-slate-700 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <FiAward className="w-16 h-16 mx-auto text-yellow-400 mb-6" />
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                مستعد لتغيير طريقة عملك للأبد؟
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                انضم إلى المئات من رواد الأعمال والمسوقين الذين ضاعفوا إنتاجيتهم باستخدام عملاء AG-Mart.
              </p>
              
              <Link 
                to="/marketplace"
                className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 font-bold text-xl px-10 py-5 rounded-full hover:bg-cyan-50 hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-900/20"
              >
                تصفح المتجر الآن
                <FiArrowLeft />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};