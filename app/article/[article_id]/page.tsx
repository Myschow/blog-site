import Link from 'next/link';
import React from "react";

const Page = ({ params }: { params: { article_id: string } }) => {
    const { article_id } = params;

    // Mock article data based on the ID
    const getArticleData = (articleId: string) => {
        const articles: { [key: string]: any } = {
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

    const article = getArticleData(article_id);

    return (
        <div className="min-h-screen bg-pixel-darker">
            {/* Wavy Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[size:20px_20px] bg-[linear-gradient(to_right,#001122_1px,transparent_1px),linear-gradient(to_bottom,#001122_1px,transparent_1px)] opacity-10"></div>
                
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pixel-blue/20 via-transparent to-transparent animate-pulse-slow"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,_var(--tw-gradient-stops))] from-pixel-cyan/15 via-transparent to-transparent animate-float-medium"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_20%_20%,_var(--tw-gradient-stops))] from-pixel-purple/10 via-transparent to-transparent animate-float-fast"></div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(150)].map((_, i) => {
                        const startSize = 0.5 + Math.random() * 8;
                        const startOpacity = 0.3 + Math.random() * 0.7;
                        const duration = 5 + Math.random() * 10;
                        const delay = Math.random() * 5;
                        const angle = Math.random() * 2 * Math.PI;
                        const distance = 50 + Math.random() * 100;
                        const moveX = Math.cos(angle) * distance;
                        const moveY = Math.sin(angle) * distance;
                        
                        return (
                            <div
                                key={i}
                                className="absolute rounded-full bg-pixel-cyan"
                                style={{
                                    width: `${startSize}px`,
                                    height: `${startSize}px`,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    opacity: startOpacity,
                                    animation: `float-particle-fade ${duration}s infinite ease-in-out ${delay}s`,
                                    ['--move-x' as any]: `${moveX}px`,
                                    ['--move-y' as any]: `${moveY}px`,
                                    ['--start-opacity' as any]: startOpacity,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
            
            {/* Content */}
            <div className="relative h-screen overflow-y-auto">
                <div className="container mx-auto px-4 py-8 max-w-4xl min-h-full">
                    
                    {/* Header */}
                    <header className="sticky top-0 z-20 bg-pixel-darker/80 backdrop-blur-sm pb-8 pt-4 border-b-2 border-pixel-green/30 mb-8">
                        <div className="text-center">
                            <div className="inline-block border-4 border-pixel-green p-4 mb-6 bg-pixel-dark/90 backdrop-blur-sm">
                                <h1 className="text-3xl sm:text-4xl text-pixel-green mb-2 tracking-tight">
                                    TECH_BLOG.exe
                                </h1>
                                <div className="w-full h-1 bg-pixel-green mb-2"></div>
                                <p className="text-pixel-cyan text-sm animate-pulse">
                                    &gt; READING: {article.title}
                                </p>
                            </div>
                            
                            {/* Navigation */}
                            <div className="flex justify-center space-x-4 mb-4">
                                <Link href="/">
                                    <button className="border-2 border-pixel-blue text-pixel-blue px-4 py-2 text-sm 
                                                    hover:bg-pixel-blue active:bg-pixel-blue
                                                    hover:text-pixel-darker active:text-pixel-darker 
                                                    transition-colors
                                                    md:hover:bg-pixel-blue md:hover:text-pixel-darker">
                                        [HOME]
                                    </button>
                                </Link>
                                <Link href="#top">
                                    <button className="border-2 border-pixel-purple text-pixel-purple px-4 py-2 text-sm 
                                                    hover:bg-pixel-purple active:bg-pixel-purple
                                                    hover:text-pixel-darker active:text-pixel-darker 
                                                    transition-colors
                                                    md:hover:bg-pixel-purple md:hover:text-pixel-darker">
                                        [TOP]
                                    </button>
                                </Link>
                            </div>

                            {/* Pixel Art Divider */}
                            <div className="flex justify-center space-x-1">
                                {[...Array(10)].map((_, i) => (
                                    <div 
                                        key={i} 
                                        className="w-3 h-3 bg-pixel-purple animate-bounce"
                                        style={{ animationDelay: `${i * 0.1}s` }}
                                    />
                                ))}
                            </div>
                        </div>
                    </header>

                    {/* Article Content */}
                    <div id="top" className="space-y-6 pb-16 pt-4 transform-gpu">
                        <article className="border-4 border-pixel-cyan bg-pixel-dark/90 backdrop-blur-sm p-6 
                                            transition-all duration-300 transform-gpu origin-center">
                            
                            {/* Article Header */}
                            <div className="border-b-2 border-pixel-green/30 pb-4 mb-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h2 className="text-2xl sm:text-3xl text-pixel-cyan font-mono">
                                        {article.title}
                                    </h2>
                                    <span className="text-pixel-darker text-xs bg-pixel-purple px-2 py-1 animate-pulse">
                                        {article.category}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-pixel-green text-sm">
                                    <span>PUBLISHED: {article.date}</span>
                                    <span>ID: {article_id}</span>
                                </div>
                            </div>

                            {/* Article Description */}
                            <div className="border-2 border-pixel-blue/50 bg-pixel-darker/50 p-4 mb-6">
                                <pre className="text-pixel-cyan text-sm font-mono whitespace-pre-wrap">
                                    {article.description}
                                </pre>
                            </div>

                            {/* Article Body */}
                            <div className="space-y-4">
                                {article.content.map((paragraph: string, index: number) => (
                                    <p 
                                        key={index}
                                        className={`text-pixel-cyan leading-relaxed ${
                                            paragraph.startsWith('//') 
                                                ? 'font-mono text-sm opacity-80 bg-pixel-darker/30 p-2 rounded' 
                                                : paragraph.startsWith('-') 
                                                ? 'font-mono text-sm ml-4'
                                                : 'text-base'
                                        } ${
                                            paragraph === '' ? 'h-4' : ''
                                        }`}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Article Footer */}
                            <div className="border-t-2 border-pixel-green/30 pt-6 mt-8">
                                <div className="flex justify-between items-center">
                                    <span className="text-pixel-green text-xs">
                                        &gt; ARTICLE_END - {article.title}
                                    </span>
                                    <div className="flex space-x-2">
                                        <Link href="/">
                                            <button className="border-2 border-pixel-purple text-pixel-purple px-3 py-1 text-xs 
                                                            hover:bg-pixel-purple active:bg-pixel-purple
                                                            hover:text-pixel-darker active:text-pixel-darker 
                                                            transition-colors">
                                                [HOME]
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Footer */}
                    <footer className="sticky bottom-0 bg-pixel-darker/80 backdrop-blur-sm text-center py-4 border-t-2 border-pixel-green/30 mt-8">
                        <div className="flex justify-center space-x-2 mb-2">
                            <div className="w-2 h-2 bg-pixel-green animate-pulse"></div>
                            <div className="w-2 h-2 bg-pixel-blue animate-pulse" style={{animationDelay: '0.2s'}}></div>
                            <div className="w-2 h-2 bg-pixel-purple animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                        <p className="text-pixel-cyan text-sm">
                            &gt; ARTICLE_VIEW_ACTIVE | SYSTEM: ONLINE
                        </p>
                        <p className="text-pixel-green text-xs mt-2">
                            [ESC]BACK [HOME]MENU [F5]REFRESH
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Page;