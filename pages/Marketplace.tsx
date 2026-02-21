import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiAlertTriangle, FiTrendingUp } from 'react-icons/fi';
import { SEO } from '../components/SEO';
import { agents } from '../data/agents';
import { AgentCard } from '../components/AgentCard';
import { FeaturedSlider } from '../components/FeaturedSlider';
import { Logo } from '../components/Logo';
import { AgentModal } from '../components/AgentModal';
import { Product } from '../types';

const CATEGORIES = ['All', 'Strategy', 'Content', 'Growth', 'Tech', 'Specialized'];

export const Marketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [claimedCount, setClaimedCount] = useState(82);
  
  // Modal State
  const [selectedAgent, setSelectedAgent] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter Logic
  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || agent.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Fake Live Counter Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setClaimedCount(prev => prev < 96 ? prev + 1 : prev);
    }, 45000); // Increment slowly to look realistic
    return () => clearInterval(interval);
  }, []);

  const handleOpenModal = (agent: Product) => {
    setSelectedAgent(agent);
    setIsModalOpen(true);
  };

  return (
    <>
      <SEO 
        title="متجر العملاء | AG-Mart Marketplace"
        description="تصفح أكثر من 25 عميل ذكي متخصص (AI Agents) جاهزين للانضمام لفريقك فوراً."
      />

      {/* Sticky Scarcity Header */}
      <div className="sticky top-16 z-30 bg-gradient-to-r from-purple-900 via-slate-900 to-cyan-900 text-white shadow-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-right">
            <div className="flex items-center gap-2 text-yellow-400 animate-pulse font-bold text-sm md:text-base">
                <FiAlertTriangle />
                <span>عرض الإطلاق: خصم 70% لأول 100 مستخدم فقط!</span>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto min-w-[300px]">
                <div className="flex-grow h-3 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${claimedCount}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-yellow-400 to-red-500 relative"
                    >
                         <div className="absolute top-0 left-0 w-full h-full bg-white/30 animate-[shimmer_2s_infinite]"></div>
                    </motion.div>
                </div>
                <span className="text-xs font-mono font-bold text-slate-300">{claimedCount}/100 Claimed</span>
            </div>
        </div>
      </div>

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-8 pb-24 transition-colors duration-300">
        <div className="container mx-auto px-4">
            
            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <Logo className="w-16 h-16" />
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                    AG-Mart <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Marketplace</span>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                    وظف خبراء AI متخصصين في مجالاتهم. مش مجرد بوتات، دول موظفين ديجيتال جاهزين للشغل فوراً.
                </p>
            </div>

            {/* Featured Slider - The "Creative & Baya3" Part */}
            <FeaturedSlider />

            {/* Controls */}
            <div className="sticky top-32 z-20 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-sm py-4 mb-8 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                    
                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                                    activeCategory === cat 
                                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg scale-105' 
                                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`}
                            >
                                {cat === 'All' ? 'الكل' : cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-72">
                        <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input 
                            type="text" 
                            placeholder="ابحث عن تخصص (مثلاً: SEO, Copywriter)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full py-3 pr-12 pl-4 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors shadow-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            {filteredAgents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredAgents.map((agent, index) => (
                        <AgentCard 
                          key={agent.id} 
                          product={agent} 
                          onViewDetails={() => handleOpenModal(agent)}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 opacity-50">
                    <FiFilter className="w-16 h-16 mx-auto mb-4 text-slate-400" />
                    <p className="text-xl text-slate-500 dark:text-slate-400">مفيش عملاء بالمواصفات دي حالياً...</p>
                    <button 
                        onClick={() => {setActiveCategory('All'); setSearchTerm('');}}
                        className="mt-4 text-cyan-600 dark:text-cyan-400 underline"
                    >
                        عرض كل العملاء
                    </button>
                </div>
            )}
        </div>
      </div>

      {/* Agent Detail Modal */}
      <AgentModal 
        agent={selectedAgent} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};
