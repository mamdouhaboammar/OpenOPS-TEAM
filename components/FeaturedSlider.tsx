import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiShoppingCart, FiCheck, FiChevronRight, FiChevronLeft, 
  FiTrendingUp, FiPenTool, FiTarget, FiZap, FiArrowRight
} from 'react-icons/fi';
import { useCartStore } from '../store/cartStore';
import { useToastStore } from '../store/toastStore';
import { agents } from '../data/agents';

// Selling Hooks Data
const SLIDES = [
  {
    agentId: 'egy-copywriter',
    hook: "محتوى يبيع لوحده.. حرفياً!",
    subHook: "وفر مصاريف الوكالات واعتمد على كاتب محترف شغال 24/7.",
    benefits: [
      "بيكتب بوستات فيرال (Viral) تجيب تفاعل",
      "مقالات متوافقة مع SEO تمسك تريند",
      "سكريبتات إعلانات مقنعة تزود مبيعاتك"
    ],
    color: "bg-purple-600",
    gradient: "from-purple-600 to-indigo-700",
    icon: <FiPenTool className="w-8 h-8" />,
    stat: "3x تفاعل"
  },
  {
    agentId: 'growth-hacker',
    hook: "ضاعف مبيعاتك بذكاء البيانات",
    subHook: "استراتيجيات نمو مجربة بالأرقام، مش بالتوقعات.",
    benefits: [
      "تحليل دقيق لسلوك العملاء",
      "تحسين معدل التحويل (CRO) في موقعك",
      "أتمتة حملات الريتارجتنج (Retargeting)"
    ],
    color: "bg-emerald-600",
    gradient: "from-emerald-600 to-teal-700",
    icon: <FiTrendingUp className="w-8 h-8" />,
    stat: "+150% نمو"
  },
  {
    agentId: 'saudi-strategist',
    hook: "خطة تسويق كاملة في دقايق",
    subHook: "بدل ما تضيع أسابيع في التخطيط، ابدأ التنفيذ فوراً.",
    benefits: [
      "دراسة منافسين شاملة وتحديد نقاط الضعف",
      "تحديد دقيق للجمهور المستهدف (Persona)",
      "جدول محتوى شهري جاهز للنشر"
    ],
    color: "bg-blue-600",
    gradient: "from-blue-600 to-cyan-700",
    icon: <FiTarget className="w-8 h-8" />,
    stat: "وفر 40 ساعة"
  }
];

export const FeaturedSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const addItem = useCartStore((state) => state.addItem);
  const addToast = useToastStore((state) => state.addToast);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slide = SLIDES[currentIndex];
  const agent = agents.find(a => a.id === slide.agentId);

  const handleAddToCart = () => {
    if (agent) {
      addItem(agent);
      addToast(`تم إضافة ${agent.name} للسلة بنجاح!`, 'success');
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <div className="w-full max-w-6xl mx-auto mb-16 px-4">
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 min-h-[500px] md:min-h-[450px] flex">
        
        {/* Navigation Arrows */}
        <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all">
            <FiChevronLeft size={24} />
        </button>
        <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all">
            <FiChevronRight size={24} />
        </button>

        <AnimatePresence mode='wait' custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full flex flex-col md:flex-row h-full"
          >
            
            {/* Right Side: Content (RTL: Right is first visually) */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10 bg-white dark:bg-slate-900">
                
                {/* Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold w-fit mb-6 ${slide.color.replace('bg-', 'text-')} bg-opacity-10`}
                >
                    {slide.icon}
                    <span>{agent?.category || 'Specialized Agent'}</span>
                </motion.div>

                {/* Hook Headline */}
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight"
                >
                    {slide.hook}
                </motion.h2>

                {/* Sub Hook */}
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
                >
                    {slide.subHook}
                </motion.p>

                {/* Benefits List */}
                <div className="space-y-3 mb-8">
                    {slide.benefits.map((benefit, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + (idx * 0.1) }}
                            className="flex items-center gap-3"
                        >
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${slide.color} text-white text-xs shrink-0`}>
                                <FiCheck />
                            </div>
                            <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-4"
                >
                    <button 
                        onClick={handleAddToCart}
                        className={`px-8 py-3 rounded-xl font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 bg-gradient-to-r ${slide.gradient}`}
                    >
                        <FiShoppingCart />
                        <span>احصل عليه الآن بـ {agent?.price}ج</span>
                    </button>
                    <button className="px-6 py-3 rounded-xl font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                        تفاصيل أكتر
                    </button>
                </motion.div>
            </div>

            {/* Left Side: Visual (RTL: Left is second visually) */}
            <div className={`w-full md:w-1/2 relative overflow-hidden flex items-center justify-center bg-gradient-to-br ${slide.gradient}`}>
                
                {/* Abstract Shapes Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                </div>

                {/* Main Visual Card */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                    className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl max-w-xs text-center text-white"
                >
                    <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg text-4xl text-slate-900">
                        {slide.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{agent?.name}</h3>
                    <div className="text-white/80 text-sm mb-6">{agent?.description?.slice(0, 60)}...</div>
                    
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                        <div className="text-xs uppercase tracking-wider opacity-70 mb-1">النتيجة المتوقعة</div>
                        <div className="text-3xl font-black">{slide.stat}</div>
                    </div>
                </motion.div>

            </div>

          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {SLIDES.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                />
            ))}
        </div>

      </div>
    </div>
  );
};
