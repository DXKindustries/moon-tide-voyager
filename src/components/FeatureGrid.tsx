import { Moon, Waves, Sun, Calendar } from "lucide-react";
import AnimatedMoon from "@/components/AnimatedMoon";

const FeatureGrid = () => {
  const features = [
    {
      icon: Moon,
      title: "Moon Phases by Month",
      description: "See every full moon, new moon, and special name like \"Harvest Moon.\""
    },
    {
      icon: Waves,
      title: "Live Tide Charts", 
      description: "Graphs and tide tables pulled straight from NOAA, mapped by ZIP."
    },
    {
      icon: Sun,
      title: "Sunrise & Sunset Times",
      description: "Know your daylight hours and golden hour — location-based."
    },
    {
      icon: Calendar,
      title: "7-Day Forecast",
      description: "A full week view of tides, moon phases, and solar timing."
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" 
             style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-6">
            <span className="gradient-hero">
              Everything You Need
            </span>
          </h2>
          <p className="font-body text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
             style={{ color: 'hsl(var(--color-text-light))' }}>
            Track lunar cycles, tidal patterns, and solar timing with precision data from trusted sources.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 lg:p-10 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ backgroundColor: 'var(--color-card-bg)' }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-1"
                       style={{ backgroundColor: 'hsl(var(--color-bg-dark))' }}>
                    {feature.icon === Moon ? (
                      <AnimatedMoon size="md" phase="full" />
                    ) : (
                      <IconComponent 
                        size={48} 
                        strokeWidth={1.5}
                        style={{ color: 'hsl(var(--color-purple))' }}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-body font-medium text-xl lg:text-2xl mb-3 leading-tight"
                      style={{ color: 'hsl(var(--color-text-light))' }}>
                    {feature.title}
                  </h3>
                  <p className="font-body text-base lg:text-lg leading-relaxed"
                     style={{ color: 'hsl(var(--color-grey))' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;