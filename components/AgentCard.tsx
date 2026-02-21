import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiCpu, FiCheck, FiArrowUpLeft } from 'react-icons/fi';
import { SiOpenai, SiGooglegemini, SiAnthropic } from 'react-icons/si';
import { FaStar } from 'react-icons/fa';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';
import { useToastStore } from '../store/toastStore';

interface AgentCardProps {
  product: Product;
  onViewDetails?: () => void;
}

export const AgentCard: React.FC<AgentCardProps> = ({ product, onViewDetails }) => {
  const addItem = useCartStore((state) => state.addItem);
  const addToast = useToastStore((state) => state.addToast);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent modal from opening when adding to cart
    addItem(product);
    addToast(`تم إضافة ${product.name} للسلة بنجاح!`, 'success');
  };

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onViewDetails}
      className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col h-full cursor-pointer"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute -top-3 left-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
          {product.badge}
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
          <FiCpu className="w-6 h-6" />
        </div>
        <div className="text-right flex flex-col items-end">
             {hasDiscount && (
                 <span className="block text-xs text-slate-400 line-through decoration-red-500/50 mb-1">
                     {product.originalPrice?.toLocaleString()} EGP
                 </span>
             )}
             <span className="block text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-green-500 dark:from-cyan-400 dark:to-green-400">
                 {product.price.toLocaleString()} EGP
             </span>
             {product.compatibility && (
               <div className="flex items-center gap-1.5 mt-2 bg-slate-50 dark:bg-slate-950 px-2 py-1 rounded-md border border-slate-100 dark:border-slate-800">
                 {product.compatibility.includes('ChatGPT') && <SiOpenai className="text-[#10A37F] w-3 h-3" title="ChatGPT" />}
                 {product.compatibility.includes('Claude') && <SiAnthropic className="text-[#d97757] w-3 h-3" title="Claude" />}
                 {product.compatibility.includes('Gemini') && <SiGooglegemini className="text-[#4E88D4] w-3 h-3" title="Gemini" />}
               </div>
             )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow mb-4">
        {product.rating && (
          <div className="flex items-center gap-1 mb-2">
            <FaStar className="text-yellow-400 w-3.5 h-3.5" />
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{product.rating}</span>
            <span className="text-xs text-slate-500">({product.reviewsCount})</span>
          </div>
        )}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight min-h-[3rem] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* Mini Features */}
        <div className="flex flex-wrap gap-2 mb-2">
            {product.features.slice(0, 2).map((feat, i) => (
                <span key={i} className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 flex items-center gap-1">
                    <FiCheck className="text-cyan-500" /> {feat}
                </span>
            ))}
        </div>
      </div>

      {/* Action */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-2">
        <button
          onClick={handleAddToCart}
          className="flex-grow bg-slate-900 dark:bg-slate-100 hover:bg-cyan-600 dark:hover:bg-cyan-500 text-white dark:text-slate-900 font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
        >
          <FiShoppingCart className="w-4 h-4" />
          إضافة للسلة
        </button>
        <div className="w-10 flex items-center justify-center text-slate-400 group-hover:text-cyan-500 transition-colors">
            <FiArrowUpLeft className="w-5 h-5 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};