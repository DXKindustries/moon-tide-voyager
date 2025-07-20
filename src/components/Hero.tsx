import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-16 lg:py-24" 
             style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      
      {/* Content Section */}
      <div className="flex-1 max-w-2xl text-center lg:text-left mb-12 lg:mb-0">
        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-6">
          <span className="gradient-hero">
            Move with the Moon.
          </span>
          <br />
          <span className="gradient-hero">
            Read the Tides.
          </span>
          <br />
          <span className="gradient-hero">
            Know the Daylight.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 lg:mb-12"
           style={{ color: 'hsl(var(--color-text-light))' }}>
          NOAA-backed tide forecasts, moon phase tracking, and sunrise/sunset timing — all by ZIP code.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
          <a href="#" className="button primary text-lg px-8 py-4">
            Download for Android
          </a>
          <a href="#" className="button secondary text-lg px-8 py-4">
            iOS Coming Soon
          </a>
        </div>
      </div>

      {/* Phone Mockup Section */}
      <div className="flex-1 flex justify-center lg:justify-end max-w-md lg:max-w-lg">
        <div className="relative transform rotate-3 hover:rotate-1 transition-transform duration-500">
          {/* Phone Frame */}
          <div className="relative rounded-[2.5rem] p-2 shadow-2xl"
               style={{ backgroundColor: 'var(--color-card-bg)' }}>
            
            {/* Screen */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[9/19.5] w-72 sm:w-80 lg:w-96"
                 style={{ backgroundColor: 'var(--color-bg-dark)' }}>
              
              {/* Placeholder for app screenshot */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                {/* App Header Mockup */}
                <div className="flex items-center justify-between w-full mb-8">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/lovable-uploads/b6434ef6-0063-42a6-9f5c-19ad66eb88ec.png" 
                      alt="MoonTide Logo" 
                      className="w-8 h-8"
                    />
                    <span className="font-display text-xl">
                      <span style={{ color: 'hsl(var(--color-purple))' }}>Moon</span>
                      <span style={{ color: 'hsl(var(--color-blue))' }}>Tide</span>
                    </span>
                  </div>
                </div>

                {/* Moon Phase Mockup */}
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-32 h-32 rounded-full mb-4 bg-gradient-to-br"
                       style={{ backgroundColor: 'hsl(var(--color-purple))' }}></div>
                  <h3 className="font-display text-lg mb-2" style={{ color: 'hsl(var(--color-purple))' }}>
                    Waning Crescent
                  </h3>
                  <p className="text-sm" style={{ color: 'hsl(var(--color-grey))' }}>
                    July 18, 2025
                  </p>
                </div>

                {/* Data Mockup */}
                <div className="w-full space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm" style={{ color: 'hsl(var(--color-grey))' }}>Illumination</span>
                    <span className="font-medium text-lg" style={{ color: 'hsl(var(--color-purple))' }}>43%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm" style={{ color: 'hsl(var(--color-grey))' }}>Moonrise</span>
                    <span className="font-medium" style={{ color: 'hsl(var(--color-text-light))' }}>6:42 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm" style={{ color: 'hsl(var(--color-grey))' }}>Moonset</span>
                    <span className="font-medium" style={{ color: 'hsl(var(--color-text-light))' }}>7:15 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;