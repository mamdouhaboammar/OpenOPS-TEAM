import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiTrash2, FiArrowLeft, FiPlus } from 'react-icons/fi';
import { useCartStore } from '../store/cartStore';
import { useToastStore } from '../store/toastStore';
import { agents } from '../data/agents';

export const CartDrawer: React.FC = () => {
  const { isOpen, toggleCart, items, addItem, removeItem, total } = useCartStore();
  const addToast = useToastStore((state) => state.addToast);
  const navigate = useNavigate();

  const handleCheckout = () => {
    toggleCart();
    navigate('/checkout');
  };

  const cartHasItems = items.length > 0;
  
  // Upsell Logic: Find a highly-rated, relevant agent not already in the cart
  const suggestedAgent = agents.find(a => a.id === 'the-orchestrator' && !items.some(i => i.id === a.id)) 
                      || agents.find(a => a.badge === '70% OFF' && !items.some(i => i.id === a.id))
                      || agents.find(a => !items.some(i => i.id === a.id));

  const handleAddUpsell = () => {
    if (suggestedAgent) {
      addItem(suggestedAgent);
      addToast(`تم إضافة ${suggestedAgent.name} كعرض إضافي!`, 'success');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }} // RTL: Start from left
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-full max-w-md bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50 shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">سلة المشتريات</h2>
              <button onClick={toggleCart} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                <FiX className="w-6 h-6 text-slate-400" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {!cartHasItems ? (
                <div className="text-center py-12 text-slate-500">
                  <p>السلة فاضية.. لسه ملقيتش الدماغ المناسبة؟</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="flex-grow">
                      <h3 className="font-bold text-slate-900 dark:text-white">{item.name}</h3>
                      <p className="text-cyan-600 dark:text-cyan-400 font-mono mt-1">{item.price.toLocaleString()} EGP</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 p-1">
                        <FiTrash2 />
                      </button>
                      <span className="text-xs text-slate-500">x{item.quantity}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* CRO Upsell Widget */}
            {cartHasItems && suggestedAgent && (
               <div className="mx-6 mb-4 p-4 bg-gradient-to-r from-purple-50 to-cyan-50 dark:from-purple-900/20 dark:to-cyan-900/20 border border-purple-200 dark:border-purple-800/50 rounded-xl shadow-inner">
                  <p className="text-xs font-bold text-purple-600 dark:text-purple-400 mb-2">🔥 يشتريها المسوقين معاً (عرض إضافي):</p>
                  <div className="flex justify-between items-center gap-3">
                     <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">{suggestedAgent.name}</h4>
                        <div className="flex items-center gap-2 mt-0.5">
                           {suggestedAgent.originalPrice && (
                               <span className="text-xs text-slate-400 line-through">{suggestedAgent.originalPrice}</span>
                           )}
                           <span className="text-sm font-black text-slate-900 dark:text-white">{suggestedAgent.price} EGP</span>
                        </div>
                     </div>
                     <button 
                        onClick={handleAddUpsell} 
                        className="px-3 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-lg hover:scale-105 transition-transform shrink-0 flex items-center gap-1 shadow-md"
                     >
                        <FiPlus /> إضافة
                     </button>
                  </div>
               </div>
            )}

            {cartHasItems && (
              <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-500 dark:text-slate-400">الإجمالي</span>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">{total().toLocaleString()} EGP</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
                >
                  إتمام الشراء
                  <FiArrowLeft />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};