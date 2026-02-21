
import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { CreativeAgitation } from './CreativeAgitation';

export const ProblemAgitation: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Background Noise/Grid */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="max-w-5xl mx-auto">
          
          {/* Main Container Box */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-950/80 backdrop-blur-xl shadow-2xl">
            
            {/* Caution Tape Header */}
            <div className="bg-yellow-400 text-slate-900 py-2 px-4 flex items-center justify-center gap-4 overflow-hidden">
               <div className="flex gap-4 font-black tracking-widest uppercase text-sm animate-pulse whitespace-nowrap">
                  <span className="flex items-center gap-1"><FiAlertTriangle /> System Warning</span>
                  <span className="flex items-center gap-1"><FiAlertTriangle /> System Warning</span>
                  <span className="flex items-center gap-1"><FiAlertTriangle /> System Warning</span>
                  <span className="flex items-center gap-1"><FiAlertTriangle /> System Warning</span>
               </div>
            </div>

            <div className="p-6 md:p-12 relative">
               {/* New Sub-Component */}
               <CreativeAgitation />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
