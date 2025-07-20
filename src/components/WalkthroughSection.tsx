const WalkthroughSection = () => {
  const walkthroughSteps = [
    {
      id: 1,
      title: "Get Started",
      description: "Open MoonTide and enter your ZIP code to find the nearest NOAA tide station.",
      images: [
        "/lovable-uploads/0b85fb98-0abc-40a0-807f-0c384cb8ffb5.png",
        "/lovable-uploads/ae77c6a6-4574-43a0-af47-c0e3153a65cf.png",
        "/lovable-uploads/442f21e6-21bf-48bb-affc-1c87a3ae31b6.png",
        "/lovable-uploads/e7ee071d-d8a2-47bb-b2a8-43ef0967f622.png",
        "/lovable-uploads/8daddf21-b65d-4854-9dac-8b0333838086.png",
        "/lovable-uploads/25795b27-0c0b-4d99-ad07-bf69a312b23a.png"
      ]
    }
    // More steps will be added as images are provided
  ];

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" 
             style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-6">
            <span className="gradient-hero">
              How It Works
            </span>
          </h2>
          <p className="font-body text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
             style={{ color: 'var(--color-text-light)' }}>
            Follow these simple steps to start tracking lunar cycles and tidal patterns with precision.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-3">
            {walkthroughSteps.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: index === 0 ? 'var(--color-purple)' : 'var(--color-grey)' 
                }}
              />
            ))}
          </div>
        </div>

        {/* Walkthrough Steps */}
        <div className="space-y-24">
          {walkthroughSteps.map((step, stepIndex) => (
            <div key={step.id} className="space-y-8">
              
              {/* Step Header */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                     style={{ backgroundColor: 'var(--color-purple)' }}>
                  <span className="font-body font-bold text-lg"
                        style={{ color: 'var(--color-selection-text)' }}>
                    {step.id}
                  </span>
                </div>
                <h3 className="font-body font-medium text-2xl lg:text-3xl mb-4"
                    style={{ color: 'var(--color-text-light)' }}>
                  {step.title}
                </h3>
                <p className="font-body text-lg leading-relaxed max-w-2xl mx-auto"
                   style={{ color: 'var(--color-grey)' }}>
                  {step.description}
                </p>
              </div>

              {/* Screenshots Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {step.images.map((imageSrc, imageIndex) => (
                  <div 
                    key={imageIndex}
                    className="flex justify-center animate-fade-in"
                    style={{ animationDelay: `${imageIndex * 150}ms` }}
                  >
                    <div className="relative group">
                      {/* Phone Frame */}
                      <div className="relative rounded-[2rem] p-3 shadow-2xl transition-transform duration-300 group-hover:scale-105"
                           style={{ backgroundColor: 'var(--color-card-bg)' }}>
                        
                        {/* Screenshot */}
                        <div className="relative rounded-[1.5rem] overflow-hidden aspect-[9/19.5] w-64 sm:w-72">
                          <img 
                            src={imageSrc}
                            alt={`${step.title} - Step ${imageIndex + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                           style={{ backgroundColor: 'var(--color-purple)' }}>
                        <span className="text-xs font-bold"
                              style={{ color: 'var(--color-selection-text)' }}>
                          {imageIndex + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="text-center mt-16 pt-8 border-t border-opacity-20"
             style={{ borderColor: 'var(--color-grey)' }}>
          <p className="font-body text-sm"
             style={{ color: 'var(--color-grey)' }}>
            More walkthrough steps coming as you provide additional images...
          </p>
        </div>
      </div>
    </section>
  );
};

export default WalkthroughSection;