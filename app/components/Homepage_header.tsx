// import Link from 'next/link';
import React from "react";

interface HomePageHeaderProps {
  articleTitle?: string;
  navigation?: () => React.ReactNode;
}

const HomePage_header = async ({ articleTitle, navigation }: HomePageHeaderProps) => {
  const statusText = articleTitle ? `READING: ${articleTitle}` : 'SYSTEM_READY';

  return (
    <header className="sticky top-0 z-20 bg-pixel-darker/80 backdrop-blur-sm pb-8 pt-4 border-b-2 border-pixel-green/30 mb-8">
      <div className="text-center">
        <div className="inline-block border-4 border-pixel-green p-4 mb-6 bg-pixel-dark/90 backdrop-blur-sm">
          <h1 className="text-3xl sm:text-4xl text-pixel-green mb-2 tracking-tight">
            TECH_BLOG.exe
          </h1>
          <div className="w-full h-1 bg-pixel-green mb-2"></div>
          <p className="text-pixel-cyan text-sm animate-pulse">
            &gt; {statusText}
          </p>
        </div>
        
        {/* Navigation - output if function is provided */}
        {navigation && navigation()}
        
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
  );
};

export default HomePage_header;