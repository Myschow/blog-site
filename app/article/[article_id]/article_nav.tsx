import Link from 'next/link';
import React from "react";

const Navigation = () => {
  return (
    <div className="flex justify-center space-x-4 mb-4">
      <Link href="/">
        <button className="border-2 border-pixel-blue text-pixel-blue px-4 py-2 text-sm 
                        hover:bg-pixel-blue active:bg-pixel-blue
                        hover:text-pixel-darker active:text-pixel-darker 
                        transition-colors
                        md:hover:bg-pixel-blue md:hover:text-pixel-darker">
          [HOME]
        </button>
      </Link>
      <Link href="#top">
        <button className="border-2 border-pixel-purple text-pixel-purple px-4 py-2 text-sm 
                        hover:bg-pixel-purple active:bg-pixel-purple
                        hover:text-pixel-darker active:text-pixel-darker 
                        transition-colors
                        md:hover:bg-pixel-purple md:hover:text-pixel-darker">
          [TOP]
        </button>
      </Link>
    </div>
  );
};

export default Navigation;