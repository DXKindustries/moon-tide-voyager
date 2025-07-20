import { Button } from "@/components/ui/button";
import AnimatedMoon from "@/components/AnimatedMoon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-16 lg:py-24" 
             style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      
      {/* Content Section */}
      <div className="flex-1 max-w-2xl text-center lg:text-left mb-12 lg:mb-0">
        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-8">
          <span style={{ color: 'hsl(var(--color-text-light))' }}>
            Track lunar cycles.
          </span>
          <br />
          <span style={{ color: 'hsl(var(--color-text-light))' }}>
            Read the tides.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg sm:text-xl leading-relaxed mb-12"
           style={{ color: 'hsl(var(--color-grey))' }}>
          NOAA-backed tide forecasts and moon phase tracking by ZIP code.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#download" className="button primary text-base px-6 py-3">
            Download App
          </a>
        </div>
      </div>

      {/* Phone in Hand Section */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative">
          {/* Hand holding phone mockup */}
          <div className="relative">
            {/* Phone with actual app screenshot */}
            <div className="relative rounded-[2.5rem] shadow-2xl"
                 style={{ 
                   backgroundColor: '#1a1a1a',
                   width: '280px',
                   height: '572px'
                 }}>
              
              {/* Phone bezel */}
              <div className="absolute inset-0 rounded-[2.5rem] border-4 border-gray-800"></div>
              
              {/* Screen content - using the actual app screenshot */}
              <div className="absolute inset-4 rounded-[1.8rem] overflow-hidden">
                <img 
                  src="/lovable-uploads/25da43ba-e22e-4e36-b435-fda53ba25e68.png"
                  alt="MoonTide App Interface"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
            </div>

            {/* Subtle hand elements to suggest holding */}
            <div className="absolute -bottom-4 -left-2 w-8 h-12 bg-gradient-to-t from-amber-100 to-amber-50 rounded-full opacity-40 blur-sm"></div>
            <div className="absolute -bottom-2 -right-3 w-6 h-10 bg-gradient-to-t from-amber-100 to-amber-50 rounded-full opacity-40 blur-sm"></div>
            <div className="absolute top-12 -right-4 w-4 h-8 bg-gradient-to-l from-amber-100 to-amber-50 rounded-full opacity-30 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;