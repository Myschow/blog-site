import Link from 'next/link';
import React from "react";

const BlogPostsSection = async () => {
  // You can add async data fetching here if needed
  // For example:
  // const posts = await fetchBlogPosts();
  // const userData = await getUserData();

  return (
    
    <div className="space-y-6 pb-16 pt-4 transform-gpu">

      <article className="border-4 border-pixel-cyan bg-pixel-dark/90 backdrop-blur-sm p-4 
                         transition-all duration-300 
                         hover:border-pixel-green active:border-pixel-green
                         hover:scale-[1.02] active:scale-[1.02]
                         md:hover:border-pixel-green md:hover:scale-[1.02]
                         transform-gpu origin-center">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-lg sm:text-xl text-pixel-blue">
            NEXTJS_SETUP.TXT
          </h2>
          <span className="text-pixel-darker text-xs bg-pixel-purple px-2 py-1 animate-pulse">
            NEW
          </span>
        </div>
        
        <p className="text-pixel-cyan text-sm mb-4 leading-relaxed">
          {/* OPTIMIZING_BUNDLES... */}
          {/* CACHE_STRATEGIES... */}
          {/* LOAD_TIME: 0.5S */}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-pixel-green text-xs">2024-03-05</span>
          <button className="border-2 border-pixel-purple text-pixel-purple px-3 py-1 text-sm 
                            hover:bg-pixel-purple active:bg-pixel-purple
                            hover:text-pixel-darker active:text-pixel-darker 
                            transition-colors
                            md:hover:bg-pixel-purple md:hover:text-pixel-darker">
            [EXECUTE]
          </button>
        </div>
      </article>

      {/* Pixel Post 3 */}
      <article className="border-4 border-pixel-cyan bg-pixel-dark/90 backdrop-blur-sm p-4 
                         transition-all duration-300 
                         hover:border-pixel-green active:border-pixel-green
                         hover:scale-[1.02] active:scale-[1.02]
                         md:hover:border-pixel-green md:hover:scale-[1.02]
                         transform-gpu origin-center">
        <h2 className="text-lg sm:text-xl text-pixel-cyan mb-3">
          PERFORMANCE.OPT
        </h2>
        <p className="text-pixel-cyan text-sm mb-4 leading-relaxed">
          {/* OPTIMIZING_BUNDLES... */}
          {/* CACHE_STRATEGIES... */}
          {/* LOAD_TIME: 0.5S */}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-pixel-green text-xs">2024-03-05</span>
          
            <Link href="/article/1">
            <button className="border-2 border-pixel-cyan text-pixel-cyan px-3 py-1 text-sm 
                            hover:bg-pixel-cyan active:bg-pixel-cyan
                            hover:text-pixel-darker active:text-pixel-darker 
                            transition-colors
                            md:hover:bg-pixel-cyan md:hover:text-pixel-darker">
            [ANALYZE]
            </button>
          </Link>
        </div>
      </article>

      <article className="border-4 border-pixel-cyan bg-pixel-dark/90 backdrop-blur-sm p-4 
                         transition-all duration-300 
                         hover:border-pixel-green active:border-pixel-green
                         hover:scale-[1.02] active:scale-[1.02]
                         md:hover:border-pixel-green md:hover:scale-[1.02]
                         transform-gpu origin-center">
        <h2 className="text-lg sm:text-xl text-pixel-cyan mb-3">
          PERFORMAN
        </h2>
        <p className="text-pixel-cyan text-sm mb-4 leading-relaxed">
          {/* OPTIMIZING_BUNDLES... */}
          {/* CACHE_STRATEGIES... */}
          {/* LOAD_TIME: 0.5S */}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-pixel-green text-xs">2024-03-05</span>

          <Link href="/article/nextjs-setup">
          <button className="border-2 border-pixel-cyan text-pixel-cyan px-3 py-1 text-sm 
                            hover:bg-pixel-cyan active:bg-pixel-cyan
                            hover:text-pixel-darker active:text-pixel-darker 
                            transition-colors
                            md:hover:bg-pixel-cyan md:hover:text-pixel-darker">
            [ANALYZE]
          </button>
          </Link>
        </div>
      </article>
      <article className="border-4 border-pixel-cyan bg-pixel-dark/90 backdrop-blur-sm p-4 
                         transition-all duration-300 
                         hover:border-pixel-green active:border-pixel-green
                         hover:scale-[1.02] active:scale-[1.02]
                         md:hover:border-pixel-green md:hover:scale-[1.02]
                         transform-gpu origin-center">
        <h2 className="text-lg sm:text-xl text-pixel-cyan mb-3">
          PERFORMANCE.OPT
        </h2>
        <p className="text-pixel-cyan text-sm mb-4 leading-relaxed">
          {/* OPTIMIZING_BUNDLES... */}
          {/* CACHE_STRATEGIES... */}
          {/* LOAD_TIME: 0.5S */}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-pixel-green text-xs">2024-03-05</span>
          <button className="border-2 border-pixel-cyan text-pixel-cyan px-3 py-1 text-sm 
                            hover:bg-pixel-cyan active:bg-pixel-cyan
                            hover:text-pixel-darker active:text-pixel-darker 
                            transition-colors
                            md:hover:bg-pixel-cyan md:hover:text-pixel-darker">
            [ANALYZE]
          </button>
        </div>
      </article>

      <article className="border-4 border-pixel-cyan bg-pixel-dark/90 backdrop-blur-sm p-4 
                         transition-all duration-300 
                         hover:border-pixel-green active:border-pixel-green
                         hover:scale-[1.02] active:scale-[1.02]
                         md:hover:border-pixel-green md:hover:scale-[1.02]
                         transform-gpu origin-center">
        <h2 className="text-lg sm:text-xl text-pixel-cyan mb-3">
          PERFORMANCE.OPT
        </h2>
        <p className="text-pixel-cyan text-sm mb-4 leading-relaxed">
          {/* OPTIMIZING_BUNDLES... */}
          {/* CACHE_STRATEGIES... */}
          {/* LOAD_TIME: 0.5S */}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-pixel-green text-xs">2024-03-05</span>
          <button className="border-2 border-pixel-cyan text-pixel-cyan px-3 py-1 text-sm 
                            hover:bg-pixel-cyan active:bg-pixel-cyan
                            hover:text-pixel-darker active:text-pixel-darker 
                            transition-colors
                            md:hover:bg-pixel-cyan md:hover:text-pixel-darker">
            [ANALYZE]
          </button>
        </div>
      </article>

    </div>
  );
};

export default BlogPostsSection;
