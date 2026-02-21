import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiCopy, FiChevronRight, FiTag, FiX, FiSmartphone, FiCreditCard } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useCartStore } from '../store/cartStore';
import { SEO } from '../components/SEO';

export const Checkout: React.FC = () => {
  const { items, total, subtotal, applyCoupon, removeCoupon, couponCode, discountAmount } = useCartStore();
  const [couponInput, setCouponInput] = useState('');
  const [couponMessage, setCouponMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'vfcash' | 'instapay'>('vfcash');

  const finalPrice = total();
  const subtotalPrice = subtotal();
  const transferNumber = "01092677269";

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(transferNumber);
    alert('تم نسخ الرقم: ' + transferNumber);
  };

  const handleApplyCoupon = () => {
    if (!couponInput) return;
    const result = applyCoupon(couponInput);
    if (result.success) {
        setCouponMessage({ text: result.message, type: 'success' });
        setCouponInput('');
    } else {
        setCouponMessage({ text: result.message, type: 'error' });
    }
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    setCouponMessage(null);
  };

  const handleConfirmPayment = () => {
    const packNames = items.map(i => `${i.name} (x${i.quantity})`).join(', ');
    const methodStr = paymentMethod === 'vfcash' ? 'Vodafone Cash' : 'InstaPay';
    let message = `Hi Mamdouh, I transferred ${finalPrice.toLocaleString()} EGP via ${methodStr} for [${packNames}].`;
    
    if (couponCode) {
        message += ` (Coupon Used: ${couponCode}, Discount: ${discountAmount} EGP)`;
    }
    
    message += ` Here is the receipt.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201092677269?text=${encodedMessage}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">السلة فاضية!</h2>
        <Link to="/" className="text-cyan-600 dark:text-cyan-400 hover:underline">أرجع اختار باقة</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <SEO 
        title="إتمام الشراء | AG-Mart" 
        description="صفحة الدفع اليدوي لنظام AG-Mart"
      />

      <div className="mb-8">
         <Link to="/" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-2 text-sm mb-4">
           <FiChevronRight />
           الرجوع للرئيسية
         </Link>
         <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">إتمام الطلب (Checkout)</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Order Summary */}
        <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-none">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                <span className="w-1.5 h-6 bg-cyan-500 rounded-full block"></span>
                ملخص الطلب
            </h2>
            <div className="space-y-4 mb-6">
                {items.map(item => (
                <div key={item.id} className="flex justify-between items-start text-sm border-b border-slate-100 dark:border-slate-800/50 pb-4 last:border-0 last:pb-0">
                    <div>
                        <span className="text-slate-700 dark:text-slate-200 block font-medium">{item.name}</span>
                        <span className="text-slate-500 text-xs">الكمية: {item.quantity}</span>
                    </div>
                    <span className="text-slate-900 dark:text-white font-mono">{item.price.toLocaleString()}</span>
                </div>
                ))}
            </div>
            
            {/* Coupon Section */}
            <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl p-4 mb-6 border border-slate-200 dark:border-slate-800/50">
                <label className="text-sm text-slate-600 dark:text-slate-400 mb-2 block flex items-center gap-2">
                    <FiTag /> لديك كوبون خصم؟
                </label>
                {!couponCode ? (
                    <div className="flex gap-2">
                        <input 
                            type="text" 
                            value={couponInput}
                            onChange={(e) => setCouponInput(e.target.value)}
                            placeholder="اكتب الكود هنا (مثلاً AGMART10)"
                            className="flex-grow bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600"
                        />
                        <button 
                            onClick={handleApplyCoupon}
                            className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors"
                        >
                            تطبيق
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center justify-between bg-green-50 dark:bg-green-900/20 border border-green-500/30 rounded-lg px-3 py-2">
                        <span className="text-green-600 dark:text-green-400 text-sm font-mono font-bold tracking-wider">{couponCode}</span>
                        <button onClick={handleRemoveCoupon} className="text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors p-1">
                            <FiX />
                        </button>
                    </div>
                )}
                {couponMessage && !couponCode && (
                    <p className={`text-xs mt-2 ${couponMessage.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                        {couponMessage.text}
                    </p>
                )}
            </div>

            <div className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-2">
                <div className="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>المجموع الفرعي</span>
                    <span className="font-mono">{subtotalPrice.toLocaleString()} EGP</span>
                </div>
                
                {discountAmount > 0 && (
                    <div className="flex justify-between text-green-600 dark:text-green-400">
                        <span>قيمة الخصم</span>
                        <span className="font-mono">-{discountAmount.toLocaleString()} EGP</span>
                    </div>
                )}
                
                <div className="flex justify-between font-bold text-xl text-slate-900 dark:text-white pt-2 border-t border-slate-200 dark:border-slate-800/50 mt-2">
                    <span>الإجمالي النهائي</span>
                    <span className="text-cyan-600 dark:text-cyan-400">{finalPrice.toLocaleString()} EGP</span>
                </div>
            </div>
            </div>
        </div>

        {/* Payment Instructions */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 h-fit sticky top-24 shadow-sm dark:shadow-none">
           <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
            <span className="w-1.5 h-6 bg-purple-500 rounded-full block"></span>
            بيانات الدفع
          </h2>

          {/* Payment Method Selector */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setPaymentMethod('vfcash')}
              className={`relative p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                paymentMethod === 'vfcash'
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-500 hover:border-red-200 dark:hover:border-red-900/50'
              }`}
            >
              {paymentMethod === 'vfcash' && <div className="absolute top-2 right-2"><FiCheckCircle className="text-red-500 w-4 h-4" /></div>}
              <FiSmartphone className="w-6 h-6" />
              <span className="font-bold text-sm text-center">فودافون كاش</span>
            </button>
            
            <button
              onClick={() => setPaymentMethod('instapay')}
              className={`relative p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                paymentMethod === 'instapay'
                  ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/10 text-purple-600 dark:text-purple-400'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-500 hover:border-purple-200 dark:hover:border-purple-900/50'
              }`}
            >
              {paymentMethod === 'instapay' && <div className="absolute top-2 right-2"><FiCheckCircle className="text-purple-500 w-4 h-4" /></div>}
              <FiCreditCard className="w-6 h-6" />
              <span className="font-bold text-sm text-center">InstaPay</span>
            </button>
          </div>
          
          <div className={`border p-5 rounded-xl mb-6 transition-colors ${
              paymentMethod === 'vfcash' 
                ? 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-500/20' 
                : 'bg-purple-50 dark:bg-purple-900/10 border-purple-200 dark:border-purple-500/20'
            }`}>
            <p className={`text-sm mb-3 font-semibold ${
                paymentMethod === 'vfcash' ? 'text-red-700 dark:text-red-300' : 'text-purple-700 dark:text-purple-300'
            }`}>
              خطوات الدفع عبر {paymentMethod === 'vfcash' ? 'محفظة فودافون كاش' : 'تطبيق انستا باي'}:
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-loose mb-4 text-sm">
              قم بتحويل مبلغ <strong>{finalPrice.toLocaleString()} EGP</strong> للرقم الموضح بالأسفل.
            </p>
            
            <div className="flex items-center justify-between bg-white dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 group hover:border-cyan-500/30 transition-colors">
              <span className="font-mono text-xl font-bold tracking-wider text-slate-900 dark:text-white dir-ltr">{transferNumber}</span>
              <button onClick={handleCopyNumber} className="text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 p-2 transition-colors" title="نسخ الرقم">
                <FiCopy className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950/50 p-3 rounded-lg border border-slate-200 dark:border-slate-800/50">
              <FiCheckCircle className="mt-1 text-green-500 flex-shrink-0" />
              <p className="leading-relaxed">بعد التحويل، اضغط الزر بالأسفل. سيتم توجيهك للواتساب مع رسالة جاهزة بتفاصيل طلبك لإرفاق صورة الإيصال.</p>
            </div>

            <button 
              onClick={handleConfirmPayment}
              className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl shadow-green-900/20 hover:shadow-green-900/40"
            >
              <FaWhatsapp className="w-6 h-6" />
              تأكيد الدفع وإرسال الإيصال
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};