export interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  content: string[];
}

export const articles: Record<string, Article> = {
  '1': {
    id: '1',
    title: 'PERFORMANCE.OPT',
    date: '2024-03-05',
    category: 'OPTIMIZATION',
    description: '// OPTIMIZING_BUNDLES...\n// CACHE_STRATEGIES...\n// LOAD_TIME: 0.5S',
    content: [
      '// SYSTEM INITIALIZATION COMPLETE',
      '// LOADING PERFORMANCE MODULE...',
      '',
      'Performance optimization is crucial for modern web applications. In this comprehensive guide, we explore advanced techniques to achieve blazing-fast load times and smooth user experiences.',
      '',
      'Key Optimization Strategies:',
      '- Code splitting and lazy loading components',
      '- Image optimization and modern formats',
      '- Efficient caching strategies',
      '- Bundle analysis and tree shaking',
      '- Runtime performance monitoring'
    ]
  },
  'nextjs-setup': {
    id: 'nextjs-setup',
    title: 'NEXTJS_SETUP.TXT',
    date: '2024-03-15',
    category: 'WEB DEVELOPMENT',
    description: '// INITIALIZING WEB_DEV_SYSTEM...\n// LOADING REACT_COMPONENTS...\n// TURBOPACK_ENGAGED',
    content: [
      '// BOOTING DEVELOPMENT ENVIRONMENT...',
      '// CONFIGURING BUILD SYSTEM...',
      '',
      'Next.js has revolutionized modern web development with its powerful features and excellent developer experience.',
      '',
      'Setup Process:',
      '- Creating a new Next.js project with TypeScript',
      '- Configuring Tailwind CSS for styling',
      '- Setting up ESLint and Prettier',
      '- Enabling Turbopack for faster development'
    ]
  },
  '2': {
    id: '2',
    title: 'REACT_HOOKS.JS',
    date: '2024-03-10',
    category: 'REACT',
    description: '// LOADING HOOKS_MODULE...\n// STATE_MANAGEMENT: ACTIVE',
    content: [
      '// IMPORTING REACT HOOKS...',
      '// COMPONENT LIFECYCLE: INITIALIZED',
      '',
      'React Hooks have transformed the way we write components. Discover the power of useState, useEffect, and custom hooks in building modern applications.',
      '',
      'Essential Hooks:',
      '- useState for state management',
      '- useEffect for side effects',
      '- useContext for global state',
      '- Custom hooks for reusable logic'
    ]
  },
  '3': {
    id: '3',
    title: 'TYPESCRIPT_GUIDE.TS',
    date: '2024-02-28',
    category: 'TYPESCRIPT',
    description: '// COMPILING TYPES...\n// CHECKING INTERFACES...',
    content: [
      '// TYPE SYSTEM LOADING...',
      '// INTERFACE VALIDATION: ACTIVE',
      '',
      'TypeScript brings type safety to JavaScript development. Learn how to leverage static typing to catch errors early and improve code quality.',
      '',
      'TypeScript Features:',
      '- Static type checking',
      '- Interface definitions',
      '- Generics and utility types',
      '- Enhanced IDE support'
    ]
  },
  '4': {
    id: '4',
    title: 'API_DESIGN.REST',
    date: '2024-02-20',
    category: 'BACKEND',
    description: '// ESTABLISHING CONNECTION...\n// ENDPOINTS: CONFIGURED',
    content: [
      '// API SERVER INITIALIZING...',
      '// ROUTES CONFIGURATION: COMPLETE',
      '',
      'Building robust APIs is essential for scalable applications. Explore RESTful design principles, authentication strategies, and best practices.',
      '',
      'API Best Practices:',
      '- RESTful endpoint design',
      '- Authentication & authorization',
      '- Error handling strategies',
      '- Rate limiting and caching'
    ]
  }
};

export function getArticle(id: string): Article | null {
  return articles[id] || null;
}

export function getAllArticles(): Article[] {
  return Object.values(articles);
}