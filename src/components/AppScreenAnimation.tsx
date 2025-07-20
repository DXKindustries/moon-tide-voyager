
import { useState, useEffect, useCallback } from 'react';

const AppScreenAnimation = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  
  const screens = [
    {
      src: "/lovable-uploads/a7f3b962-712c-4514-b85e-17cf50a6674b.png",
      title: "Moon Phase Tracking"
    },
    {
      src: "/lovable-uploads/9994b978-48bf-4223-8be8-9fc3bc317c18.png", 
      title: "Daylight Analysis"
    },
    {
      src: "/lovable-uploads/f395a3ce-fa3d-49b8-98d8-b0299315f14b.png",
      title: "Tide Charts"
    },
    {
      src: "/lovable-uploads/1c90ff24-9d70-419d-8a05-4de1b05df8c5.png",
      title: "7-Day Forecast"
    }
  ];

  const goToScreen = useCallback((index: number) => {
    setCurrentScreen(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen(prev => (prev + 1) % screens.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [screens.length]);

  return (
    <div className="relative w-full max-w-[320px] mx-auto">
      {/* Phone frame - responsive sizing */}
      <div className="relative rounded-[2.5rem] shadow-2xl mx-auto"
           style={{ 
             backgroundColor: '#1a1a1a',
             width: 'min(280px, 90vw)',
             height: 'min(572px, 180vw)'
           }}>
        
        {/* Phone bezel */}
        <div className="absolute inset-0 rounded-[2.5rem] border-4 border-gray-800"></div>
        
        {/* Screen content container */}
        <div className="absolute inset-4 rounded-[1.8rem] overflow-hidden bg-black">
          <img 
            src={screens[currentScreen].src}
            alt={screens[currentScreen].title}
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            loading="eager"
          />
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
      </div>

      {/* Feature indicator dots */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={() => goToScreen(index)}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${
              index === currentScreen 
                ? 'w-6 sm:w-8' 
                : 'w-2 opacity-50 hover:opacity-75'
            }`}
            style={{ 
              backgroundColor: index === currentScreen 
                ? 'hsl(var(--color-purple))' 
                : 'hsl(var(--color-grey))'
            }}
            aria-label={`Go to ${screens[index].title}`}
          />
        ))}
      </div>

      {/* Current feature title */}
      <div className="text-center mt-3 sm:mt-4 px-4">
        <p className="font-body text-xs sm:text-sm transition-opacity duration-300" 
           style={{ color: 'hsl(var(--color-grey))' }}>
          {screens[currentScreen].title}
        </p>
      </div>

      {/* Subtle hand elements to suggest holding - hide on small screens */}
      <div className="hidden sm:block absolute -bottom-4 -left-2 w-8 h-12 bg-gradient-to-t from-amber-100 to-amber-50 rounded-full opacity-40 blur-sm"></div>
      <div className="hidden sm:block absolute -bottom-2 -right-3 w-6 h-10 bg-gradient-to-t from-amber-100 to-amber-50 rounded-full opacity-40 blur-sm"></div>
      <div className="hidden lg:block absolute top-12 -right-4 w-4 h-8 bg-gradient-to-l from-amber-100 to-amber-50 rounded-full opacity-30 blur-sm"></div>
    </div>
  );
};

export default AppScreenAnimation;
