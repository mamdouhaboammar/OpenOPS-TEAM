import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiUnlock, FiArrowLeft, FiXCircle } from 'react-icons/fi';
import { FaFish, FaMagic, FaUserSecret, FaBatteryQuarter, FaGlobeAmericas, FaLayerGroup } from 'react-icons/fa';
import { CreativeAgitation } from './CreativeAgitation';

export const WhySpecializedAI: React.FC = () => {
  const navigate = useNavigate();

  const reasons = [
    {
      title: '1. أزمة "ذاكرة السمكة" (Context Amnesia)',
      desc: 'الـ AI الخام بيفهمك في اللحظة، بس بينساك في الجملة اللي بعدها. لو بتكتب سلسلة إيميلات أو بتبني حملة طويلة، هتقضي نص وقتك تفكره "إحنا مين وبنبيع لمين". لكن الـ Code-based AI معاه ملفات (Knowledge Base) ثابتة؛ ده "هارد ديسك" مش بينسى استراتيجيتك ولا نبرة صوت براندك مهما طال الحوار.',
      icon: <FaFish className="w-8 h-8 text-blue-500" />,
      color: "border-blue-500/30 bg-blue-900/20"
    },
    {
      title: '2. فخ "الهبد الشيك" (Confident Hallucinations)',
      desc: 'الـ AI العادي متصمم عشان "يكمل الجملة" مش عشان "يقول معلومة صح". لو سألته عن حاجة مش عارفها، هيألف إجابة مقنعة جدًا بس غلط كارثي. نظام AG-Mart محكوم بملفات (Grounding Files) بتشتغل كـ "حواجز أمان" تمنعه يألف، وتجبره يلتزم بالحقائق أو يقول "معرفش" لو المعلومة مش عنده.',
      icon: <FaMagic className="w-8 h-8 text-purple-500" />,
      color: "border-purple-500/30 bg-purple-900/20"
    },
    {
      title: '3. كلام "خواجة" مياكلش عيش معانا',
      desc: 'الـ Vanilla AI مدرب على محتوى أجنبي غالباً، فلما يكتب عربي بيبقى "مترجم" وكلامه تقيل وميتفهمش. النظام المتخصص (زي اللي بنقدمه) معاه ملفات Lexicon & Dialects بتخليه يكتب "مصري ابن بلد" أو "سعودي رزين" بيفهم إفيهات السوق والمصطلحات الدارجة اللي بتبيع فعلاً.',
      icon: <FaGlobeAmericas className="w-8 h-8 text-green-500" />,
      color: "border-green-500/30 bg-green-900/20"
    },
    {
      title: '4. غياب المنهجية (No Frameworks = No Strategy)',
      desc: 'لو طلبت من AI عادي خطة تسويق، هيرص لك كلام إنشا (اعمل فيسبوك، نزل صور حلوة). لكن الـ Code-based AI اللي بنبيعه محمل بملفات JSON فيها أطر عمل عالمية (زي AARRR Funnel, Jobs To Be Done). هو مش "بيخمن" الخطة، هو "بيستدعي" معادلات نجاح متجربة وبيطبقها على بيزنسك.',
      icon: <FaLayerGroup className="w-8 h-8 text-orange-500" />,
      color: "border-orange-500/30 bg-orange-900/20"
    },
    {
      title: '5. توفير "طاقة التوجيه" (Prompt Fatigue)',
      desc: 'أكبر كذبة هي إنك محتاج تتعلم "Prompt Engineering" معقد. مع الأنظمة المتخصصة، الـ "Prompt" موجود بالفعل داخل كود النظام (System Instructions). أنت مش محتاج تكتب مقال عشان توصف له المهمة، أنت محتاج تدوس "Start" وهو عارف دوره كـ Senior Marketer أو SEO Expert من غير ما تشرح له البديهيات.',
      icon: <FaBatteryQuarter className="w-8 h-8 text-red-500" />,
      color: "border-red-500/30 bg-red-900/20"
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-300 border border-red-500/30 rounded-full mb-6 font-bold text-sm uppercase tracking-wide"
          >
             <FiAlertTriangle />
             <span>Warning: Do not use Vanilla AI</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            ليه مينفعش تعتمد على AI خام ولازم يكون معاك <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Specilized AI</span> مخصص لمهام معينة؟
          </h2>

          {/* New Creative Agitation Component */}
          <CreativeAgitation />

        </div>

        {/* The Missing Piece Reveal (CONTRAST FIXED) */}
        <div className="max-w-5xl mx-auto mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-slate-800 -z-10"></div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Added bg-slate-800 and removed opacity-50 for better visibility */}
            <div className="bg-slate-800 p-6 border border-slate-700 rounded-2xl transition-all hover:border-red-500/50">
                <FiXCircle className="w-10 h-10 mx-auto text-red-500 mb-4" />
                <h3 className="font-bold text-slate-300 line-through decoration-red-500 decoration-2">مش برومبت تكتبه صح</h3>
            </div>
            <div className="bg-slate-800 p-6 border border-slate-700 rounded-2xl transition-all hover:border-red-500/50">
                <FiXCircle className="w-10 h-10 mx-auto text-red-500 mb-4" />
                <h3 className="font-bold text-slate-300 line-through decoration-red-500 decoration-2">ولا Prompt Engineering</h3>
            </div>
            <div className="bg-slate-800 p-6 border border-slate-700 rounded-2xl transition-all hover:border-red-500/50">
                <FiXCircle className="w-10 h-10 mx-auto text-red-500 mb-4" />
                <h3 className="font-bold text-slate-300 line-through decoration-red-500 decoration-2">ولا انك كل مرة تعيد ليه نفس الكلام</h3>
            </div>
          </div>
        </div>

        {/* The Secret Reveal Box */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-3xl p-8 md:p-12 text-center mb-24 relative overflow-hidden shadow-2xl shadow-cyan-900/20"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <FaUserSecret className="text-9xl text-white" />
          </div>

          <p className="text-lg text-slate-400 mb-4">حاجة واحدة انت عارفها بس عمرك ما استغليتها في شغل بشكلها الصحيح</p>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-8">
            وهي الـ <span className="text-cyan-400">Gemini Gems</span> و <span className="text-green-400">ChatGPT Custom GPTs</span>
          </h3>
          
          <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
             <p>الميزة دي موجودة عشان المتخصصين يوظفوها في شغلهم</p>
             <p>وبالمناسبة الخبراء والشركات الكبيرة والناس اللي بتستخدم الـ AI صح بيسخدموها عشا عشان يوفروا فلووووس وتكاليف كتير والفريلانسرز عشان يقدروا ياخدوا شغل كتير ويعملوه بجودة أعلى وأسرع</p>
             <p className="font-bold text-red-400">بس عمرهم ما هيجوا يقولوا ليك .. عشان يفضلوا هما فقط اللي بيستفيدوا منه</p>
             <div className="pt-6 border-t border-slate-700/50 mt-6">
                <p className="text-white font-bold flex items-center justify-center gap-2">
                   <FiUnlock className="text-cyan-400" />
                   لكن فريق AG-Mart قرر يوفر الأسرار دي لكل الناس بأسعار بسيطة عمرها ما تتقارن ما حجم المكاسب اللي هتحققها وانت شغال صح بالـ AI
                </p>
             </div>
          </div>
        </motion.div>

        {/* The 5 Reasons Grid (CONTRAST FIXED) */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold">
              ليه الـ <span className="text-slate-500 decoration-slate-600 line-through mx-1">Vanilla AI</span> (الخام) خطر على شغلك،<br className="md:hidden"/> وليه الـ <span className="text-cyan-400">Code-based AI</span> هو الحل الوحيد؟
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border ${reason.color} backdrop-blur-sm group hover:scale-[1.02] transition-transform duration-300 ${idx === reasons.length - 1 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl flex-shrink-0 group-hover:rotate-6 transition-transform">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-white">{reason.title}</h4>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/marketplace')}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white text-xl md:text-2xl font-bold py-6 px-12 rounded-full shadow-lg shadow-purple-900/40 transition-all flex flex-col items-center justify-center gap-1 mx-auto w-full md:w-auto"
            >
              <span>غير الطريقة اللي بتتعامل بيها مع الـ AI</span>
              <span className="text-sm font-normal bg-black/20 px-3 py-1 rounded-full flex items-center gap-2">
                استفيد بخصم 30% حالاً <FiArrowLeft />
              </span>
            </motion.button>
        </div>

      </div>
    </section>
  );
};