import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'creator-pack',
    name: 'حقيبة صناع المحتوى',
    description: 'لصناع المحتوى اللي عايزين "هوكات" وسكريبتات بتجيب تفاعل حقيقي.',
    price: 1500,
    originalPrice: 2200,
    features: ['توليد أفكار فيرال (Viral Ideas)', 'كتابة سكريبتات ريلز وتيك توك', 'تحليل التريندات لحظياً'],
    badge: 'الأكثر مبيعاً'
  },
  {
    id: 'agency-os',
    name: 'حقيبة الوكالات (Agency OS)',
    description: 'نظام متكامل لإدارة استراتيجيات العملاء والتقارير الاحترافية.',
    price: 4500,
    originalPrice: 6500,
    features: ['بناء استراتيجيات تسويق كاملة', 'تقارير أداء شهرية أوتوماتيكية', 'إدارة محتوى لـ 10+ عملاء'],
    badge: 'للمحترفين'
  },
  {
    id: 'enterprise-pack',
    name: 'حقيبة الشركات (Enterprise)',
    description: 'للشركات الكبيرة اللي محتاجة حوكمة وأمان للبيانات مع ذكاء اصطناعي.',
    price: 9000,
    originalPrice: 15000,
    features: ['أمان وخصوصية للبيانات (Data Privacy)', 'تدريب موديلات خاصة (Custom Models)', 'دعم فني وأولوية قصوى'],
    badge: 'للشركات'
  }
];