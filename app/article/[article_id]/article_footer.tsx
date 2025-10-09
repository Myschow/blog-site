import Link from 'next/link';
import React from "react";

const ArticleFooter = async ({ articleTitle }: { articleTitle: string }) => {
  return (
    <div className="border-t-2 border-pixel-green/30 pt-6 mt-8">
      <div className="flex justify-between items-center">
        <span className="text-pixel-green text-xs">
          &gt; ARTICLE_END - {articleTitle}
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
  );
};

export default ArticleFooter;