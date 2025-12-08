
import React from "react";
import AnimatedBackground from '../../components/background_animation';
import HomePage_header  from '../../components/Homepage_header';
import Navigation from './article_nav';

import ArticlePage_Footer from './articlepage_footer';
import ArticleFooter from './article_footer';
import ArticleContent from './article_format';
import Sound from '@/app/components/sound';

export async function generateStaticParams() {
    // Pre-generate static pages for known articles
    return [
        { article_id: '1' },
        { article_id: 'nextjs-setup' }
    ];
}

const Page = async ({ params }: { params: Promise<{ article_id: string }> }) => {

    const { article_id } = await params;

    // Mock article data based on the ID
    const getArticleData = () => {
        const articles: Record<string, {
            title: string;
            date: string;
            category: string;
            description: string;
            content: string[];
        }> = {
            '1': {
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
            }
        };

        return articles[article_id] || {
            title: 'ARTICLE_NOT_FOUND.TXT',
            date: '1970-01-01',
            category: 'ERROR',
            description: '// ARTICLE DATA CORRUPTED...\n// SYSTEM_ERROR: 404',
            content: ['Article not found. Please check the URL and try again.']
        };
    };

    const article = getArticleData();

    return (

        <div className="min-h-screen bg-pixel-darker">
            <AnimatedBackground />
            {/* Content */}
            <div className="relative h-screen overflow-y-auto">
                <div className="container mx-auto px-4 py-8 max-w-4xl min-h-full">

                    {/* <HomePage_header articleTitle={article.title} /> */}
                    <HomePage_header articleTitle={article.title} navigation={Navigation} />
                    {/* Article Content */}
                    <div id="top" className="space-y-6 pb-16 pt-4 transform-gpu">
                        <article className="border-4 border-pixel-cyan bg-pixel-dark/90 backdrop-blur-sm p-6 
                                            transition-all duration-300 transform-gpu origin-center">

                            <ArticleContent
                                title={article.title}
                                category={article.category}
                                date={article.date}
                                description={article.description}
                                content={article.content}
                            />

                            <ArticleFooter articleTitle={article.title} />
                        </article>
                    </div>

                    <ArticlePage_Footer />

                    
                </div>
            </div>
        </div>
    );
};

export default Page;
