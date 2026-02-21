import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiShoppingCart, FiStar, FiActivity, FiCheck, 
  FiChevronRight, FiChevronLeft, FiCpu, FiZap, 
  FiTarget, FiLayers 
} from 'react-icons/fi';
import { agents } from '../data/agents';
import { useCartStore } from '../store/cartStore';
import { useToastStore } from '../store/toastStore';

// Helper to generate mock stats for visual flair
const getAgentStats = (id: string) => {
  switch(id) {
    case 'egy-copywriter': 
      return [
        { label: 'إبداع', value: 95, color: 'bg-purple-500' },
        { label: 'سرعة', value: 90, color: 'bg-cyan-500' },
        { label: 'دقة', value: 85, color: 'bg-pink-500' }
      ];
    case 'saudi-strategist': 
      return [
        { label: 'تخطيط', value: 98, color: 'bg-blue-500' },
        { label: 'تحليل', value: 92, color: 'bg-indigo-500' },
        { label: 'رؤية', value: 88, color: 'bg-green-500' }
      ];
    case 'growth-hacker': 
      return [
        { label: 'نمو', value: 96, color: 'bg-green-500' },
        { label: 'تجارب', value: 94, color: 'bg-yellow-500' },
        { label: 'بيانات', value: 90, color: 'bg-red-500' }
      ];
    case 'seo-guru': 
      return [
        { label: 'تصدر', value: 99, color: 'bg-orange-500' },
        { label: 'تقني', value: 95, color: 'bg-slate-500' },
        { label: 'محتوى', value: 85, color: 'bg-teal-500' }
      ];
    default: 
      return [
        { label: 'كفاءة', value: 85, color: 'bg-cyan-500' },
        { label: 'سرعة', value: 85, color: 'bg-purple-500' },
        { label: 'جودة', value: 90, color: 'bg-blue-500' }
      ];
  }
};

export const FeaturedSlider: React.FC = () => {
  // Filter high-value agents
  const featuredAgents = agents.filter(a => ['egy-copywriter', 'saudi-strategist', 'growth-hacker', 'seo-guru'].includes(a.id));
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const addItem = useCartStore((state) => state.addItem);
  const addToast = useToastStore((state) => state.addToast);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % featuredAgents.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + featuredAgents.length) % featuredAgents.length);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000); // 8 seconds per slide
    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentAgent = featuredAgents[currentIndex];
  const stats = getAgentStats(currentAgent.id);
  
  const handleAddToCart = () => {
    addItem(currentAgent);
    addToast(`تم إضافة ${currentAgent.name} للسلة بنجاح!`, 'success');
  };

  // Animation Variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 20 : -20,
      opacity: 0,
    })
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto mb-20 px-4">
      
      {/* Dynamic Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[2.5rem] -z-10">
         <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[120%] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[550px] flex flex-col lg:flex-row">
        
        {/* Left Side (Visual Hologram) - Appears Right in RTL */}
        <div className="lg:w-[45%] relative bg-slate-50/50 dark:bg-slate-950/50 flex flex-col items-center justify-between p-8 overflow-hidden">
            
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]" 
                 style={{ 
                    backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', 
                    backgroundSize: '20px 20px' 
                 }}>
            </div>

            <div className="relative flex-grow flex items-center justify-center w-full">
                <AnimatePresence mode='wait' custom={direction}>
                    <motion.div
                        key={currentAgent.id}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="relative z-10 flex flex-col items-center"
                    >
                        {/* Holographic Container */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="relative w-64 h-64"
                        >
                            {/* Glowing Rings */}
                            <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-[spin_8s_linear_infinite]" />
                            <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-[spin_12s_linear_infinite_reverse]" />
                            
                            {/* Center Icon */}
                            <div className="absolute inset-8 bg-white dark:bg-slate-900 rounded-full shadow-lg flex items-center justify-center border border-slate-200 dark:border-slate-800 z-10">
                                {currentIndex === 0 && <FiZap className="w-24 h-24 text-purple-500" />}
                                {currentIndex === 1 && <FiTarget className="w-24 h-24 text-blue-500" />}
                                {currentIndex === 2 && <FiActivity className="w-24 h-24 text-green-500" />}
                                {currentIndex === 3 && <FiCpu className="w-24 h-24 text-orange-500" />}
                            </div>
                        </motion.div>

                        {/* Stats Bars */}
                        <div className="w-64 mt-8 space-y-3">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <span className="text-[10px] font-bold w-10 text-slate-500 dark:text-slate-400">{stat.label}</span>
                                    <div className="flex-grow h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: `${stat.value}%` }}
                                            transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1) }}
                                            className={`h-full rounded-full ${stat.color}`}
                                        />
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-400">{stat.value}%</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Controls (Moved Here) */}
            <div className="relative z-20 flex items-center gap-4 mt-8">
                <button 
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                    <FiChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </button>
                
                <div className="flex gap-1.5">
                    {featuredAgents.map((_, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                idx === currentIndex 
                                ? 'w-6 bg-cyan-500' 
                                : 'w-1.5 bg-slate-300 dark:bg-slate-700'
                            }`}
                        />
                    ))}
                </div>

                <button 
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                    <FiChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </button>
            </div>

        </div>

        {/* Right Side (Content) - Appears Left in RTL */}
        <div className="lg:w-[55%] p-8 lg:p-12 flex flex-col relative z-20">
            <AnimatePresence mode='wait' custom={direction}>
                <motion.div
                    key={currentAgent.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="flex-grow flex flex-col"
                >
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold border border-cyan-100 dark:border-cyan-800 flex items-center gap-1">
                           <FiLayers className="w-3 h-3" /> {currentAgent.category}
                        </span>
                        {currentAgent.badge && (
                            <span className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs font-bold border border-purple-100 dark:border-purple-800 flex items-center gap-1">
                               <FiStar className="w-3 h-3" /> {currentAgent.badge}
                            </span>
                        )}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                        {currentAgent.name}
                    </h2>
                    
                    <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-lg">
                        {currentAgent.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {currentAgent.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                                <FiCheck className="text-cyan-500 shrink-0" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-4 justify-between">
                        
                        <div>
                            <span className="text-xs text-slate-400 block mb-1">الاستثمار</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-black text-slate-900 dark:text-white">{currentAgent.price}</span>
                                <span className="text-sm text-slate-500">جنية</span>
                            </div>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="w-full sm:w-auto px-8 h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition-all"
                        >
                            <FiShoppingCart />
                            <span>إضافة للسلة</span>
                        </button>

                    </div>

                </motion.div>
            </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
