import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheckCircle, FiAlertCircle, FiInfo, FiX } from 'react-icons/fi';
import { useToastStore } from '../store/toastStore';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed bottom-4 left-4 z-[100] flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            layout
            className={`min-w-[300px] p-4 rounded-xl shadow-2xl border flex items-start gap-3 backdrop-blur-md ${
              toast.type === 'success' 
                ? 'bg-green-500/90 text-white border-green-400' 
                : toast.type === 'error'
                ? 'bg-red-500/90 text-white border-red-400'
                : 'bg-slate-800/90 text-white border-slate-700'
            }`}
          >
            <div className="mt-1">
              {toast.type === 'success' && <FiCheckCircle className="w-5 h-5" />}
              {toast.type === 'error' && <FiAlertCircle className="w-5 h-5" />}
              {toast.type === 'info' && <FiInfo className="w-5 h-5" />}
            </div>
            <div className="flex-grow">
              <p className="font-medium text-sm">{toast.message}</p>
            </div>
            <button 
              onClick={() => removeToast(toast.id)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <FiX className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};