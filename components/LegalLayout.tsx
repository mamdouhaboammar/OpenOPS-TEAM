import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShield, FiFileText } from 'react-icons/fi';

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated: string;
  activePage: 'terms' | 'privacy';
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ children, title, lastUpdated, activePage }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 md:py-20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="mb-12">
            <Link to="/marketplace" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors mb-6 font-medium">
                <FiArrowRight />
                الرجوع للمتجر
            </Link>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                {title}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-mono text-sm">
                آخر تحديث: {lastUpdated}
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Navigation */}
            <aside className="lg:w-1/4">
                <div className="sticky top-24 space-y-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-4">الوثائق القانونية</p>
                    <Link 
                        to="/terms" 
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                            activePage === 'terms' 
                            ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400 font-bold border border-cyan-200 dark:border-cyan-800' 
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                        }`}
                    >
                        <FiFileText />
                        الشروط والأحكام
                    </Link>
                    <Link 
                        to="/privacy" 
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                            activePage === 'privacy' 
                            ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400 font-bold border border-cyan-200 dark:border-cyan-800' 
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                        }`}
                    >
                        <FiShield />
                        سياسة الخصوصية
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="lg:w-3/4">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none">
                    <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-loose prose-li:text-slate-600 dark:prose-li:text-slate-300 prose-strong:text-slate-900 dark:prose-strong:text-white">
                        {children}
                    </article>
                </div>
            </main>

        </div>
      </div>
    </div>
  );
};