import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { CommonPains } from '../components/CommonPains';
import { ExpertsCollaboration } from '../components/ExpertsCollaboration';
import { HowItWorks } from '../components/HowItWorks';
import { WhySpecializedAI } from '../components/WhySpecializedAI';
import { BenefitsMatrix } from '../components/BenefitsMatrix';
import { CodeVisualizer } from '../components/CodeVisualizer';
import { InstallationSteps } from '../components/InstallationSteps';
import { ComparisonTable } from '../components/ComparisonTable';
import { FAQ } from '../components/FAQ';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="AG-Mart | سوق الوكلاء الذكي للمسوقين"
        description="بطل تكتب برومبتات.. ابدأ سطّب دماغ تبيعلك! AG-Mart هو أول نظام تشغيل ذكي بيحول الـ AI لمدير تسويق عبقري فاهم سوقك."
      />
      
      <Hero />
      <CommonPains />
      <ExpertsCollaboration />
      <HowItWorks />
      <WhySpecializedAI />
      <ComparisonTable />
      <BenefitsMatrix />
      <CodeVisualizer />
      <InstallationSteps />
      <FAQ />

      {/* CTA Section at bottom */}
      <section className="py-20 bg-slate-900 dark:bg-gradient-to-t dark:from-slate-900 dark:to-slate-950 text-white border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">مستعد تغير اللعبة؟</h2>
          <p className="text-slate-300 dark:text-slate-400 mb-8 max-w-xl mx-auto">
            انضم لمئات المسوقين اللي بيستخدموا AG-Mart دلوقتي عشان يضاعفوا انتاجيتهم ويوفروا أضعاف تكلفة العمل.
          </p>
          <button 
             onClick={() => navigate('/marketplace')}
             className="bg-white text-slate-900 font-bold py-4 px-10 rounded-full hover:bg-slate-100 hover:scale-105 transition-all shadow-lg hover:shadow-cyan-500/20"
          >
            تصفح المتجر (Agents Market)
          </button>
        </div>
      </section>
    </>
  );
};