import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiTrendingUp, FiUsers, FiAward, FiDollarSign, FiClock, FiStar } from 'react-icons/fi';

type PersonaKey = 'freelancer' | 'agency' | 'teamLead' | 'employee';

interface BenefitData {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  benefits: {
    head: string;
    body: string;
  }[];
}

interface PersonaData {
  id: PersonaKey;
  label: string;
  subLabel: string;
  icon: React.ReactNode;
  data: {
    money: BenefitData;
    time: BenefitData;
    ego: BenefitData;
  };
}

const MATRIX_DATA: PersonaData[] = [
  {
    id: 'freelancer',
    label: 'Freelancer',
    subLabel: 'عايز تبقى One-Man Agency',
    icon: <FiBriefcase />,
    data: {
      money: {
        title: 'الفلوس والبيزنس (ROI)',
        icon: <FiDollarSign />,
        colorClass: 'text-green-500 bg-green-500/10 border-green-500/20',
        benefits: [
          { head: 'خد شغل 5 أضعاف:', body: 'بدل ما تمسك عميلين وتتعب، امسك 10 عملاء بنفس الجودة.' },
          { head: 'عَلّي سعرك:', body: 'قدم "استراتيجية + تنفيذ" مش بس تنفيذ، واطلب الـ Rate اللي تستحقه.' }
        ]
      },
      time: {
        title: 'الوقت والمجهود (Efficiency)',
        icon: <FiClock />,
        colorClass: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
        benefits: [
          { head: 'وفر مرتب مساعدين:', body: 'النظام هو الـ Copywriter والـ Researcher والـ Strategist بتاعك مجاناً.' },
          { head: 'أجازات أكتر:', body: 'خلص شغل الأسبوع في يومين وعيش حياتك.' }
        ]
      },
      ego: {
        title: 'الـ Ego والبرستيج (Status)',
        icon: <FiStar />,
        colorClass: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
        benefits: [
          { head: 'ابهر عميلك:', body: 'سلم شغل "وكالات" متكامل يخلي العميل يمسك فيك وميسبكش.' },
          { head: 'ثقة الاحتراف:', body: 'هتتكلم بمصطلحات وخطط تخليهم يشوفوك "خبير" مش مجرد "منفذ".' }
        ]
      }
    }
  },
  {
    id: 'agency',
    label: 'Agency / Company',
    subLabel: 'عايز هوامش ربح أعلى',
    icon: <FiTrendingUp />,
    data: {
      money: {
        title: 'الفلوس والبيزنس (ROI)',
        icon: <FiDollarSign />,
        colorClass: 'text-green-500 bg-green-500/10 border-green-500/20',
        benefits: [
          { head: 'قلل التكاليف (Burn rate):', body: 'قلل الاعتماد على الـ Junior hires وارفع إنتاجية الـ Seniors للضعف.' },
          { head: 'Consistency:', body: 'اضمن إن كل العملاء بياخدوا نفس جودة الشغل مهما الموظفين اتغيروا.' }
        ]
      },
      time: {
        title: 'الوقت والمجهود (Efficiency)',
        icon: <FiClock />,
        colorClass: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
        benefits: [
          { head: 'سرعة الـ Delivery:', body: 'سلم الخطط والمحتوى في ربع الوقت المعتاد.' },
          { head: 'Onboarding لحظي:', body: 'أي موظف جديد هيستلم "النظام" ويشتغل بكفاءة من أول يوم.' }
        ]
      },
      ego: {
        title: 'الـ Ego والبرستيج (Status)',
        icon: <FiStar />,
        colorClass: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
        benefits: [
          { head: 'بيع خدمات جديدة:', body: 'اعرض خدمات "AI-Powered Strategy" لعملائك كـ Premium Service.' },
          { head: 'الريادة:', body: 'خلي وكالتك هي اللي بتقود السوق في استخدام الـ AI بذكاء.' }
        ]
      }
    }
  },
  {
    id: 'teamLead',
    label: 'Team Lead / Manager',
    subLabel: 'عايز تنجز وتكبر',
    icon: <FiUsers />,
    data: {
      money: {
        title: 'الفلوس والبيزنس (ROI)',
        icon: <FiDollarSign />,
        colorClass: 'text-green-500 bg-green-500/10 border-green-500/20',
        benefits: [
          { head: 'Focus on Strategy:', body: 'وفر وقت "تصلح التاسكات" وركز في التخطيط والنمو الحقيقي.' },
          { head: 'KPIs في السما:', body: 'حقق التارجت بمجهود أقل بكتير من الفريق.' }
        ]
      },
      time: {
        title: 'الوقت والمجهود (Efficiency)',
        icon: <FiClock />,
        colorClass: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
        benefits: [
          { head: 'مفيش Micromanagement:', body: 'النظام بيضمن الجودة، فمش محتاج تراجع ورا الفريق كل كلمة.' },
          { head: 'تقارير بضغطة زر:', body: 'خلق تقارير أداء وتحليل منافسين في ثواني.' }
        ]
      },
      ego: {
        title: 'الـ Ego والبرستيج (Status)',
        icon: <FiStar />,
        colorClass: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
        benefits: [
          { head: 'المنقذ الذكي:', body: 'أنت اللي دخلت التكنولوجيا دي الشركة = ترقية ومكافأة.' },
          { head: 'راحة البال:', body: 'مش هتشيل هم "مين غاب النهاردة" لأن السيستم سادد.' }
        ]
      }
    }
  },
  {
    id: 'employee',
    label: 'Employee',
    subLabel: 'عايز تترقى وتستريح',
    icon: <FiAward />,
    data: {
      money: {
        title: 'الفلوس والبيزنس (ROI)',
        icon: <FiDollarSign />,
        colorClass: 'text-green-500 bg-green-500/10 border-green-500/20',
        benefits: [
          { head: 'أمان وظيفي (Job Security):', body: 'بدل ما الـ AI ياخد مكانك، أنت بقيت "الطيار" اللي بيسوق الـ AI.' },
          { head: 'Side Hustle Ready:', body: 'خلص شغل الشركة بدري وابدأ في مشاريعك الخاصة.' }
        ]
      },
      time: {
        title: 'الوقت والمجهود (Efficiency)',
        icon: <FiClock />,
        colorClass: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
        benefits: [
          { head: 'وداعاً لـ "قفلة الكاتب":', body: 'مفيش شاشة بيضا تاني. الأفكار والخطط جاهزة قدامك علطول.' },
          { head: 'مجهود أقل، إنتاج أكتر:', body: 'اعمل شغل يوم كامل في ساعتين قهوة.' }
        ]
      },
      ego: {
        title: 'الـ Ego والبرستيج (Status)',
        icon: <FiStar />,
        colorClass: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
        benefits: [
          { head: 'نظرة "العبقري":', body: 'مديرك هيتفاجئ من سرعة وجودة شغلك وهيسألك "عملتها إزاي؟".' },
          { head: 'سلطة المعرفة:', body: 'هتبقى المرجع في الفريق لأي حاجة ليها علاقة بالـ AI والـ Growth.' }
        ]
      }
    }
  }
];

export const BenefitsMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PersonaKey>('freelancer');

  const activeData = MATRIX_DATA.find(p => p.id === activeTab)?.data;

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
       {/* Ambient Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
             مصفوفة المكاسب: ليه AG-Mart هو استثمارك الأذكى؟
          </h2>
          <p className="text-slate-400 text-lg">
            اختار الكاركتر بتاعك وشوف حياتك هتتغير إزاي
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {MATRIX_DATA.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setActiveTab(persona.id)}
              className={`relative px-6 py-4 rounded-xl flex flex-col items-center gap-2 transition-all duration-300 min-w-[140px] border ${
                activeTab === persona.id
                  ? 'bg-slate-800 border-cyan-500 shadow-lg shadow-cyan-900/20 scale-105'
                  : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:bg-slate-800 hover:border-slate-600'
              }`}
            >
              <div className={`text-2xl ${activeTab === persona.id ? 'text-cyan-400' : 'text-slate-500'}`}>
                {persona.icon}
              </div>
              <div className="text-center">
                <span className={`block font-bold ${activeTab === persona.id ? 'text-white' : 'text-slate-300'}`}>
                  {persona.label}
                </span>
                <span className="text-[10px] text-slate-500 block max-w-[150px] mx-auto leading-tight mt-1">
                  {persona.subLabel}
                </span>
              </div>
              
              {/* Active Indicator */}
              {activeTab === persona.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 border-2 border-cyan-500/50 rounded-xl pointer-events-none"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode='wait'>
          {activeData && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {[activeData.money, activeData.time, activeData.ego].map((section, idx) => (
                <div 
                  key={idx} 
                  className={`bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border ${section.colorClass} hover:bg-slate-800 transition-colors group h-full`}
                >
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700/50">
                    <div className="text-2xl p-3 rounded-lg bg-slate-900/50 shadow-inner group-hover:scale-110 transition-transform">
                      {section.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {section.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {section.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="relative pl-4 border-r-2 border-slate-700 hover:border-cyan-500/50 transition-colors pr-4">
                        <strong className="block text-white mb-2 text-sm md:text-base font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-slate-300">
                          {benefit.head}
                        </strong>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {benefit.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};