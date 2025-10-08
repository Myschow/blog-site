import Link from 'next/link';
export default function Home() {
  return (
    <div className="min-h-screen bg-pixel-darker">
      {/* Wavy Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Base pixel grid */}
        <div className="absolute inset-0 bg-[size:20px_20px] bg-[linear-gradient(to_right,#001122_1px,transparent_1px),linear-gradient(to_bottom,#001122_1px,transparent_1px)] opacity-10"></div>
        
        {/* Animated wave layers */}
        <div className="absolute inset-0 opacity-30">
          {/* Wave Layer 1 - Slow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pixel-blue/20 via-transparent to-transparent animate-pulse-slow"></div>
          
          {/* Wave Layer 2 - Medium */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,_var(--tw-gradient-stops))] from-pixel-cyan/15 via-transparent to-transparent animate-float-medium"></div>
          
          {/* Wave Layer 3 - Fast */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_20%_20%,_var(--tw-gradient-stops))] from-pixel-purple/10 via-transparent to-transparent animate-float-fast"></div>
          
          {/* Moving grid lines for wave effect */}
          <div className="absolute inset-0 bg-[length:100px_100px] bg-[linear-gradient(90deg,transparent_99%,#00ccff10_100%)] animate-slide-wave"></div>
          <div className="absolute inset-0 bg-[length:150px_150px] bg-[linear-gradient(180deg,transparent_99%,#00ffff08_100%)] animate-slide-wave-reverse"></div>
        </div>
        

    <div className="absolute inset-0">
  {[...Array(150)].map((_, i) => {
    const startSize = 0.5 + Math.random() * 8; // Random size between 0.5px and 3px
    const startOpacity = 0.3 + Math.random() * 0.7; // Random opacity between 0.3 and 1.0
    const duration = 5 + Math.random() * 10; // Random duration between 5-15s
    const delay = Math.random() * 5; // Random delay up to 5s
    
    // Random movement direction and distance
    const angle = Math.random() * 2 * Math.PI; // Random angle in radians
    const distance = 50 + Math.random() * 100; // Random distance between 50-150px
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
          // Custom CSS properties for random movement
          ['--move-x' as any]: `${moveX}px`,
          ['--move-y' as any]: `${moveY}px`,
          ['--start-opacity' as any]: startOpacity,
        }}
      />
    );
  })}
</div>
      </div>



      
      {/* Scrollable Content Container */}
<div className="relative h-screen overflow-y-auto">
  <div className="container mx-auto px-4 py-8 max-w-4xl min-h-full">
    
    {/* Fixed Header - Increased z-index and added margin-bottom */}
    <header className="sticky top-0 z-20 bg-pixel-darker/80 backdrop-blur-sm pb-8 pt-4 border-b-2 border-pixel-green/30 mb-8">
      <div className="text-center">
        <div className="inline-block border-4 border-pixel-green p-4 mb-6 bg-pixel-dark/90 backdrop-blur-sm">
          <h1 className="text-3xl sm:text-4xl text-pixel-green mb-2 tracking-tight">
            TECH_BLOG.exe
          </h1>
          <div className="w-full h-1 bg-pixel-green mb-2"></div>
          <p className="text-pixel-cyan text-sm animate-pulse">
            &gt; SYSTEM_READY
          </p>
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

    {/* Scrollable Blog Posts with transform-origin fix */}
    <div className="space-y-6 pb-16 pt-4 transform-gpu">

      <article className="border-4 border-pixel-cyan bg-pixel-dark/90 backdrop-blur-sm p-4 
                         transition-all duration-300 
                         hover:border-pixel-green active:border-pixel-green
                         hover:scale-[1.02] active:scale-[1.02]
                         md:hover:border-pixel-green md:hover:scale-[1.02]
                         transform-gpu origin-center"> {/* Added transform-gpu and origin-center */}
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-lg sm:text-xl text-pixel-blue">
            NEXTJS_SETUP.TXT
          </h2>
          <span className="text-pixel-darker text-xs bg-pixel-purple px-2 py-1 animate-pulse">
            NEW
          </span>
        </div>
        
        <p className="text-pixel-cyan text-sm mb-4 leading-relaxed">
          // OPTIMIZING_BUNDLES...
          // CACHE_STRATEGIES...
          // LOAD_TIME: 0.5S
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
          // OPTIMIZING_BUNDLES...
          // CACHE_STRATEGIES...
          // LOAD_TIME: 0.5S
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
          // OPTIMIZING_BUNDLES...
          // CACHE_STRATEGIES...
          // LOAD_TIME: 0.5S
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
          // OPTIMIZING_BUNDLES...
          // CACHE_STRATEGIES...
          // LOAD_TIME: 0.5S
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
          // OPTIMIZING_BUNDLES...
          // CACHE_STRATEGIES...
          // LOAD_TIME: 0.5S
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

    {/* Fixed Footer */}
    <footer className="sticky bottom-0 bg-pixel-darker/80 backdrop-blur-sm text-center py-4 border-t-2 border-pixel-green/30 mt-8">
      <div className="flex justify-center space-x-2 mb-2">
        <div className="w-2 h-2 bg-pixel-green animate-pulse"></div>
        <div className="w-2 h-2 bg-pixel-blue animate-pulse" style={{animationDelay: '0.2s'}}></div>
        <div className="w-2 h-2 bg-pixel-purple animate-pulse" style={{animationDelay: '0.4s'}}></div>
      </div>
      <p className="text-pixel-cyan text-sm">
        &gt; TERMINAL_ACTIVE | CONNECTION_STABLE
      </p>
      <p className="text-pixel-green text-xs mt-2">
        [F1]HELP [F2]MENU [F3]EXIT
      </p>
    </footer>
  </div>
</div>
    </div>
  );
}