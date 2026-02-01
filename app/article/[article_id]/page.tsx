import React from "react";
import AnimatedBackground from '../../components/background_animation';
import HomePage_header  from '../../components/Homepage_header';
import Navigation from './article_nav';
import ArticlePage_Footer from './articlepage_footer';
import ArticleFooter from './article_footer';
import ArticleContent from './article_format';
import { getArticle, getAllArticles } from '@/app/data/articles';

export async function generateStaticParams() {
    const articles = getAllArticles();
    return articles.map((article) => ({
        article_id: article.id
    }));
}

const Page = async ({ params }: { params: Promise<{ article_id: string }> }) => {
    const { article_id } = await params;
    const article = getArticle(article_id);

    if (!article) {
        return (
            <div className="min-h-screen bg-pixel-darker">
                <AnimatedBackground />
                <div className="relative h-screen overflow-y-auto">
                    <div className="container mx-auto px-4 py-8 max-w-4xl min-h-full">
                        <HomePage_header articleTitle="ERROR" navigation={Navigation} />
                        <div id="top" className="space-y-6 pb-16 pt-4 transform-gpu">
                            <article className="border-4 border-pixel-cyan bg-pixel-dark/90 backdrop-blur-sm p-6">
                                <h1 className="text-2xl text-pixel-cyan">ARTICLE_NOT_FOUND.TXT</h1>
                                <p className="text-pixel-cyan mt-4">// SYSTEM_ERROR: 404</p>
                                <p className="text-pixel-cyan">Article not found. Please check the URL and try again.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-pixel-darker">
            <AnimatedBackground />
            <div className="relative h-screen overflow-y-auto">
                <div className="container mx-auto px-4 py-8 max-w-4xl min-h-full">
                    <HomePage_header articleTitle={article.title} navigation={Navigation} />
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
