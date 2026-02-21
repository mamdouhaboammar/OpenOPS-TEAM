export interface Bundle {
  id: string;
  name: string;
  description: string;
  agentIds: string[];
  discountPercentage: number;
  color: string;
}

export const bundles: Bundle[] = [
  {
    id: 'marketing-starter',
    name: 'Marketing Starter Pack',
    description: 'كل اللي تحتاجه عشان تبدأ تسويق صح. محتوى، خطة، ونبرة براند موحدة.',
    agentIds: ['egy-copywriter', 'social-planner', 'brand-voice'],
    discountPercentage: 20,
    color: 'from-purple-600 to-indigo-600'
  },
  {
    id: 'growth-hacking-kit',
    name: 'Growth Hacking Kit',
    description: 'مجموعة النمو السريع. إعلانات، تحسين معدل تحويل، وتكتيكات فيرال.',
    agentIds: ['growth-hacker', 'cro-architect', 'meta-ads-specialist'],
    discountPercentage: 25,
    color: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'tech-startup-bundle',
    name: 'Tech Startup Bundle',
    description: 'لشركات التك والستارتاپس. كود نضيف، سكيورتي عالي، ووثائق منتج احترافية.',
    agentIds: ['code-refactor', 'security-sentinel', 'product-manager'],
    discountPercentage: 20,
    color: 'from-blue-600 to-cyan-600'
  }
];
