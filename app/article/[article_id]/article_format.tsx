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
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-3">
          <h2 className="text-2xl sm:text-3xl text-pixel-cyan font-mono break-words flex-1">
            {title}
          </h2>
          <span className="text-pixel-darker text-xs bg-pixel-purple px-3 py-2 sm:px-2 sm:py-1 animate-pulse rounded self-start sm:self-auto whitespace-nowrap">
            {category}
          </span>
        </div>
        <div className="flex justify-between items-center text-pixel-green text-sm mt-2">
          <span className="text-xs sm:text-sm">PUBLISHED: {date}</span>
        </div>
      </div>

      {/* Article Description */}
      <div className="border-2 border-pixel-blue/50 bg-pixel-darker/50 p-3 sm:p-4 mb-6 rounded">
        <pre className="text-pixel-cyan text-sm font-mono whitespace-pre-wrap break-words">
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
                ? 'font-mono text-xs sm:text-sm opacity-80 bg-pixel-darker/30 p-2 sm:p-3 rounded' 
                : paragraph.startsWith('-') 
                ? 'font-mono text-xs sm:text-sm ml-4 sm:ml-6'
                : 'text-sm sm:text-base'
            } ${
              paragraph === '' ? 'h-4' : ''
            } break-words`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </>
  );
};

export default ArticleContent;