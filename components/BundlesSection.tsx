import React from 'react';
import { motion } from 'framer-motion';
import { FiPackage, FiCheck, FiPlus, FiShoppingCart } from 'react-icons/fi';
import { bundles } from '../data/bundles';
import { agents } from '../data/agents';
import { useCartStore } from '../store/cartStore';
import { useToastStore } from '../store/toastStore';

export const BundlesSection: React.FC = () => {
  const addItem = useCartStore((state) => state.addItem);
  const addToast = useToastStore((state) => state.addToast);

  const handleAddBundle = (bundle: typeof bundles[0]) => {
    const bundleAgents = agents.filter(a => bundle.agentIds.includes(a.id));
    
    // Add each agent to cart
    bundleAgents.forEach(agent => {
      addItem(agent);
    });

    addToast(`تم إضافة باقة ${bundle.name} للسلة بنجاح!`, 'success');
  };

  return (
    <div className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg text-white">
          <FiPackage className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">باقات التوفير (Bundles)</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">وفر فلوسك ووظف فريق كامل مرة واحدة</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bundles.map((bundle, idx) => {
          const bundleAgents = agents.filter(a => bundle.agentIds.includes(a.id));
          const originalTotal = bundleAgents.reduce((sum, agent) => sum + agent.price, 0);
          const discountAmount = originalTotal * (bundle.discountPercentage / 100);
          const finalPrice = originalTotal - discountAmount;

          return (
            <motion.div
              key={bundle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:border-cyan-500/30 transition-all duration-300 flex flex-col"
            >
              {/* Header Gradient */}
              <div className={`h-2 bg-gradient-to-r ${bundle.color}`} />
              
              <div className="p-6 flex-grow flex flex-col">
                {/* Title & Desc */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{bundle.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{bundle.description}</p>
                </div>

                {/* Agents List */}
                <div className="space-y-3 mb-8 flex-grow">
                  {bundleAgents.map(agent => (
                    <div key={agent.id} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${bundle.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                        {agent.name.charAt(0)}
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="text-sm font-bold text-slate-900 dark:text-white truncate">{agent.name}</div>
                        <div className="text-xs text-slate-500 truncate">{agent.category}</div>
                      </div>
                      <div className="text-xs font-mono text-slate-400 line-through decoration-red-400">
                        {agent.price}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <span className="block text-xs text-slate-400 mb-1">السعر الإجمالي</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-slate-900 dark:text-white">{finalPrice}</span>
                        <span className="text-xs font-bold text-slate-500">جنية</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs text-red-500 font-bold mb-1">وفرت {discountAmount} جنية</span>
                      <span className="text-sm text-slate-400 line-through decoration-slate-300">{originalTotal} جنية</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddBundle(bundle)}
                    className={`w-full py-3 rounded-xl font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 bg-gradient-to-r ${bundle.color}`}
                  >
                    <FiShoppingCart />
                    <span>شراء الباقة</span>
                  </button>
                </div>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-6 left-6 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                خصم {bundle.discountPercentage}%
              </div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
