const AnimatedBackground = () => {
  return (
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
                ['--move-x' as string]: `${moveX}px`,
                ['--move-y' as string]: `${moveY}px`,
                ['--start-opacity' as string]: startOpacity,
              } as React.CSSProperties}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedBackground;
