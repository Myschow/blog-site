const Footer = () => {
  return (
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
  );
};

export default Footer;