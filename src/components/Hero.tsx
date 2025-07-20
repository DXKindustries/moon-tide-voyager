import { Button } from "@/components/ui/button";
import AppScreenAnimation from "@/components/AppScreenAnimation";

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

      {/* Phone Animation Section */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <AppScreenAnimation />
      </div>
    </section>
  );
};

export default Hero;