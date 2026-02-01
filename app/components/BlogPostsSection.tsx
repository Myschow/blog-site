import Link from 'next/link';
import React from "react";
import { getAllArticles } from '@/app/data/articles';

const BlogPostsSection = async () => {
  const articles = getAllArticles();

  // Get first 50 characters of first content paragraph for preview
  const getPreview = (content: string[]) => {
    const firstParagraph = content.find(line => line && !line.startsWith('//'));
    return firstParagraph ? firstParagraph.slice(0, 150) + '...' : '';
  };

  return (
    <div className="space-y-6 pb-16 pt-4 transform-gpu">
      {articles.map((article, index) => (
        <article 
          key={article.id}
          className="border-4 border-pixel-cyan bg-pixel-dark/90 backdrop-blur-sm p-4 
                     transition-all duration-300 
                     hover:border-pixel-green active:border-pixel-green
                     hover:scale-[1.02] active:scale-[1.02]
                     md:hover:border-pixel-green md:hover:scale-[1.02]
                     transform-gpu origin-center">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-lg sm:text-xl text-pixel-cyan">
              {article.title}
            </h2>
            {index === 0 && (
              <span className="text-pixel-darker text-xs bg-pixel-purple px-2 py-1 animate-pulse">
                NEW
              </span>
            )}
          </div>
          
          <p className="text-pixel-cyan text-sm mb-2 leading-relaxed whitespace-pre-line font-mono opacity-80">
            {article.description}
          </p>
          
          <p className="text-pixel-cyan text-sm mb-4 leading-relaxed">
            {getPreview(article.content)}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <span className="text-pixel-green text-xs">{article.date}</span>
              <span className="text-pixel-purple text-xs bg-pixel-darker px-2 py-1 border border-pixel-purple">
                {article.category}
              </span>
            </div>
            
            <Link href={`/article/${article.id}`}>
              <button className="border-2 border-pixel-cyan text-pixel-cyan px-3 py-1 text-sm 
                                hover:bg-pixel-cyan active:bg-pixel-cyan
                                hover:text-pixel-darker active:text-pixel-darker 
                                transition-colors
                                md:hover:bg-pixel-cyan md:hover:text-pixel-darker">
                [READ_MORE]
              </button>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogPostsSection;
