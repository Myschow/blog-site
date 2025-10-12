const ArticlePage_Footer = () => {
  return (
    <footer className="sticky bottom-0 bg-pixel-darker/80 backdrop-blur-sm text-center py-4 border-t-2 border-pixel-green/30 mt-8">
      <div className="flex justify-center space-x-2 mb-2">
        <div className="w-2 h-2 bg-pixel-green animate-pulse"></div>
        <div className="w-2 h-2 bg-pixel-blue animate-pulse" style={{animationDelay: '0.2s'}}></div>
        <div className="w-2 h-2 bg-pixel-purple animate-pulse" style={{animationDelay: '0.4s'}}></div>
      </div>
      <p className="text-pixel-cyan text-sm">
        &gt; ARTICLE_VIEW_ACTIVE | SYSTEM: ONLINE 
      </p>
      <p className="text-pixel-green text-xs mt-2">
        [ESC]BACK [HOME]MENU [F5]REFRESH
      </p>
    </footer>
  );
};

export default ArticlePage_Footer;