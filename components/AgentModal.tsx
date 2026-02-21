import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, FiShoppingCart, FiCheck, FiCpu, FiStar, 
  FiZap, FiTarget, FiActivity, FiLayers, FiShield 
} from 'react-icons/fi';
import { SiOpenai, SiGooglegemini, SiAnthropic } from 'react-icons/si';
import { FaStar as FaStarSolid } from 'react-icons/fa';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';
import { useToastStore } from '../store/toastStore';

interface AgentModalProps {
  agent: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

// Helper for dynamic psychological stats
const getDetailedStats = (category?: string) => {
  switch(category) {
    case 'Content': 
      return [
        { label: 'إبداع لغوي', value: 98, color: 'bg-purple-500' },
        { label: 'فهم الجمهور', value: 95, color: 'bg-pink-500' },
        { label: 'سرعة الإنتاج', value: 99, color: 'bg-cyan-500' }
      ];
    case 'Strategy': 
      return [
        { label: 'تفكير تحليلي', value: 99, color: 'bg-blue-500' },
        { label: 'رؤية بعيدة', value: 94, color: 'bg-indigo-500' },
        { label: 'دقة التخطيط', value: 96, color: 'bg-emerald-500' }
      ];
    case 'Growth': 
      return [
        { label: 'تحويل (CRO)', value: 97, color: 'bg-green-500' },
        { label: 'تحليل بيانات', value: 95, color: 'bg-yellow-500' },
        { label: 'ابتكار تجارب', value: 92, color: 'bg-red-500' }
      ];
    default: 
      return [
        { label: 'كفاءة تقنية', value: 96, color: 'bg-cyan-500' },
        { label: 'دقة التنفيذ', value: 98, color: 'bg-purple-500' },
        { label: 'توفير الوقت', value: 99, color: 'bg-blue-500' }
      ];
  }
};

export const AgentModal: React.FC<AgentModalProps> = ({ agent, isOpen, onClose }) => {
  const addItem = useCartStore((state) => state.addItem);
  const addToast = useToastStore((state) => state.addToast);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!agent) return null;

  const stats = getDetailedStats(agent.category);
  const hasDiscount = agent.originalPrice && agent.originalPrice > agent.price;

  const handleAddToCart = () => {
    addItem(agent);
    addToast(`تم إضافة ${agent.name} للسلة بنجاح!`, 'success');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-slate-100 dark:bg-slate-800 hover:bg-red-100 hover:text-red-500 dark:hover:bg-red-500/20 text-slate-500 dark:text-slate-400 rounded-full flex items-center justify-center transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Right Side / Top (Visuals & Stats) */}
            <div className="md:w-2/5 bg-slate-50 dark:bg-slate-950 p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-l border-slate-200 dark:border-slate-800">
              {/* Background ambient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />
              
              <div className="relative z-10 w-full flex flex-col items-center">
                
                {/* Visual Identity */}
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl flex items-center justify-center mb-8 relative group">
                  <div className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-[2rem] animate-[spin_10s_linear_infinite]" />
                  {agent.category === 'Growth' && <FiActivity className="w-16 h-16 text-green-500" />}
                  {agent.category === 'Content' && <FiLayers className="w-16 h-16 text-purple-500" />}
                  {agent.category === 'Strategy' && <FiTarget className="w-16 h-16 text-blue-500" />}
                  {agent.category === 'Tech' && <FiCpu className="w-16 h-16 text-cyan-500" />}
                  {agent.category === 'Specialized' && <FiZap className="w-16 h-16 text-orange-500" />}
                  {(!agent.category) && <FiCpu className="w-16 h-16 text-slate-500" />}
                </div>

                <div className="w-full space-y-5">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center mb-2">مؤشرات الكفاءة (Capabilities)</h4>
                  {stats.map((stat, idx) => (
                    <div key={idx} className="w-full">
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-bold text-slate-700 dark:text-slate-300">{stat.label}</span>
                        <span className="font-mono text-slate-500">{stat.value}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.value}%` }}
                          transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                          className={`h-full rounded-full ${stat.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Compatibility Badges */}
                {agent.compatibility && (
                  <div className="mt-8 w-full border-t border-slate-200 dark:border-slate-800 pt-6">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center mb-3">متوافق مع (Works With)</h4>
                    <div className="flex justify-center gap-4">
                      {agent.compatibility.includes('ChatGPT') && (
                        <div className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity" title="ChatGPT">
                           <SiOpenai className="text-[#10A37F] w-6 h-6" />
                           <span className="text-[10px] text-slate-500">ChatGPT</span>
                        </div>
                      )}
                      {agent.compatibility.includes('Claude') && (
                        <div className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity" title="Claude">
                           <SiAnthropic className="text-[#d97757] w-6 h-6" />
                           <span className="text-[10px] text-slate-500">Claude</span>
                        </div>
                      )}
                      {agent.compatibility.includes('Gemini') && (
                        <div className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity" title="Gemini">
                           <SiGooglegemini className="text-[#4E88D4] w-6 h-6" />
                           <span className="text-[10px] text-slate-500">Gemini</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Trust Badges */}
                <div className="mt-6 flex gap-2">
                    <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                        <FiCheck /> جاهز للعمل
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                        <FiShield /> ملفات آمنة
                    </span>
                </div>
              </div>
            </div>

            {/* Left Side / Bottom (Content & Action) */}
            <div className="md:w-3/5 p-8 md:p-10 flex flex-col overflow-y-auto">
              
              <div className="flex flex-wrap items-center justify-between mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  {agent.badge && (
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      <FiStar className="inline-block w-3 h-3 ml-1" />
                      {agent.badge}
                    </span>
                  )}
                  {agent.category && (
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold px-3 py-1 rounded-full">
                      {agent.category}
                    </span>
                  )}
                </div>

                {agent.rating && (
                  <div className="flex items-center gap-1.5 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-900/50 px-3 py-1 rounded-full">
                    <FaStarSolid className="text-yellow-400 w-3.5 h-3.5" />
                    <span className="text-sm font-bold text-yellow-700 dark:text-yellow-500">{agent.rating}</span>
                    <span className="text-xs text-yellow-600/70 dark:text-yellow-500/70">({agent.reviewsCount} مراجعة)</span>
                  </div>
                )}
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                {agent.name}
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                {agent.description}
              </p>

              {/* Psychological Hook: Value Presentation */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  القدرات الأساسية (What you get)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {agent.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-slate-50 dark:bg-slate-950/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                      <FiCheck className="text-cyan-500 mt-0.5 shrink-0" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Area */}
              <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                
                {/* Price Anchoring */}
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 mb-1">الاستثمار المطلوب</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-slate-900 dark:text-white">
                      {agent.price.toLocaleString()}
                    </span>
                    <span className="text-slate-500 font-medium">EGP</span>
                  </div>
                  {hasDiscount && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-slate-400 line-through decoration-red-500/50">
                        {agent.originalPrice?.toLocaleString()}
                      </span>
                      <span className="text-[10px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded font-bold">
                        توفير {Math.round(((agent.originalPrice! - agent.price) / agent.originalPrice!) * 100)}%
                      </span>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full sm:w-auto px-8 h-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 active:scale-95 group"
                >
                  <FiShoppingCart className="group-hover:-rotate-12 transition-transform" />
                  <span>تأكيد الإضافة للسلة</span>
                </button>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};