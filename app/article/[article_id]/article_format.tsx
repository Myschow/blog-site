import React from "react";

interface ArticleContentProps {
  title: string;
  category: string;
  date: string;
  description: string;
  content: string[];
}

const ArticleContent = async ({ 
  title, 
  category, 
  date, 
  description, 
  content 
}: ArticleContentProps) => {
  return (
    <>
      {/* Article Header */}
      <div className="border-b-2 border-pixel-green/30 pb-4 mb-6">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-2xl sm:text-3xl text-pixel-cyan font-mono">
            {title}
          </h2>
          <span className="text-pixel-darker text-xs bg-pixel-purple px-2 py-1 animate-pulse">
            {category}
          </span>
        </div>
        <div className="flex justify-between items-center text-pixel-green text-sm">
          <span>PUBLISHED: {date}</span>
        </div>
      </div>

      {/* Article Description */}
      <div className="border-2 border-pixel-blue/50 bg-pixel-darker/50 p-4 mb-6">
        <pre className="text-pixel-cyan text-sm font-mono whitespace-pre-wrap">
          {description}
        </pre>
      </div>

      {/* Article Body */}
      <div className="space-y-4">
        {content.map((paragraph: string, index: number) => (
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
    </>
  );
};

export default ArticleContent;