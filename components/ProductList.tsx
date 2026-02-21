import React from 'react';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { FiCheck, FiShoppingCart } from 'react-icons/fi';

export const ProductList: React.FC = () => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-slate-900 dark:text-white">اختار "الدماغ" اللي تناسبك</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">استثمار لمرة واحدة، عائد مدى الحياة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const hasDiscount = product.originalPrice && product.originalPrice > product.price;
            const discountPercent = hasDiscount && product.originalPrice 
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
              : 0;

            return (
              <div 
                key={product.id} 
                className={`relative bg-slate-50 dark:bg-slate-900 border ${index === 1 ? 'border-purple-500 shadow-2xl shadow-purple-900/10 dark:shadow-purple-900/20' : 'border-slate-200 dark:border-slate-800'} rounded-2xl p-8 flex flex-col hover:transform hover:scale-105 transition-all duration-300`}
              >
                {product.badge && (
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-sm font-bold ${index === 1 ? 'bg-purple-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}`}>
                    {product.badge}
                  </div>
                )}

                {hasDiscount && (
                   <div className="absolute top-4 left-4 bg-red-500/10 text-red-500 dark:text-red-400 text-xs font-bold px-2 py-1 rounded border border-red-500/20">
                     وفر {discountPercent}%
                   </div>
                )}

                <div className="mb-6 mt-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{product.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm h-12 leading-relaxed">{product.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">{product.price.toLocaleString()}</span>
                    <span className="text-slate-500 text-sm mb-1">جنية</span>
                  </div>
                  {hasDiscount && (
                    <div className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                      <span className="line-through decoration-red-500/50">{product.originalPrice?.toLocaleString()} جنية</span>
                      <span className="text-xs text-slate-400">سعر أصلي</span>
                    </div>
                  )}
                </div>

                <ul className="mb-8 space-y-3 flex-grow">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      <FiCheck className={`mt-1 flex-shrink-0 ${index === 1 ? 'text-purple-600 dark:text-purple-400' : 'text-cyan-600 dark:text-cyan-400'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => addItem(product)}
                  className={`w-full py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors ${
                    index === 1 
                      ? 'bg-purple-600 hover:bg-purple-500 text-white' 
                      : 'bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                  }`}
                >
                  <FiShoppingCart />
                  إضافة للسلة
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};