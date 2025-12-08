// In your main page.tsx or any other component
import HomePage_header from './components/Homepage_header';
import HomePage_footer from './components/Homepage_footer';
import AnimatedBackground from './components/background_animation';
import BlogPostsSection from './components/BlogPostsSection';


export default function Page() {
  return (

    <div className="min-h-screen bg-pixel-darker">
      <AnimatedBackground />
      
      <div className="relative h-screen overflow-y-auto">
        <div className="container mx-auto px-4 py-8 max-w-4xl min-h-full">
          <HomePage_header />
          <BlogPostsSection/>
          <HomePage_footer />
        </div>

      </div>
      </div>
  );
}