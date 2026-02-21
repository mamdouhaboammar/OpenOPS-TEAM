
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingBag, FiMenu, FiMoon, FiSun, FiGrid } from 'react-icons/fi';
import { useCartStore } from '../store/cartStore';
import { useThemeStore } from '../store/themeStore';
import { ToastContainer } from './Toast';
import { Logo } from './Logo';
import { Footer } from './Footer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { items, toggleCart } = useCartStore();
  const { isDarkMode, toggleTheme } = useThemeStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Apply dark mode class to html element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-noto selection:bg-cyan-500 selection:text-white overflow-x-hidden transition-colors duration-300">
      
      {/* Toast Notifications */}
      <ToastContainer />

      {/* Navbar */}
      <header className="fixed top-0 w-full z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white flex items-center gap-2">
            <Logo className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500">
              AG-Mart
            </span>
          </Link>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <Link to="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">الرئيسية</Link>
            <Link to="/marketplace" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-bold text-slate-900 dark:text-white relative">
              المتجر (Marketplace)
              <span className="absolute -top-3 -left-3 bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-full animate-pulse">جديد</span>
            </Link>
            <Link to="/contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">تواصل معنا</Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>

            {/* Cart Button */}
            <button 
              onClick={toggleCart} 
              className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              aria-label="Open Cart"
            >
              <FiShoppingBag className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
            
            <Link to="/marketplace" className="md:hidden p-2 text-slate-600 dark:text-slate-300 bg-cyan-50 dark:bg-slate-800 rounded-full">
              <FiGrid className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
