import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Walkthrough = () => {
  const walkthroughSteps = [
    {
      id: 1,
      title: "Get Started",
      description: "Open MoonTide and enter your ZIP code to find the nearest NOAA tide station.",
      images: [
        {
          src: "/lovable-uploads/0b85fb98-0abc-40a0-807f-0c384cb8ffb5.png",
          detail: "Launch the app and see the clean, intuitive welcome screen"
        },
        {
          src: "/lovable-uploads/ae77c6a6-4574-43a0-af47-c0e3153a65cf.png",
          detail: "Enter your ZIP code to get accurate sunrise and sunset times for your location"
        },
        {
          src: "/lovable-uploads/442f21e6-21bf-48bb-affc-1c87a3ae31b6.png",
          detail: "Browse and select from multiple nearby NOAA tide monitoring stations"
        },
        {
          src: "/lovable-uploads/e7ee071d-d8a2-47bb-b2a8-43ef0967f622.png",
          detail: "Confirm your location selection for accurate local tide data"
        },
        {
          src: "/lovable-uploads/8daddf21-b65d-4854-9dac-8b0333838086.png",
          detail: "Access comprehensive help and tutorial information anytime"
        },
        {
          src: "/lovable-uploads/25795b27-0c0b-4d99-ad07-bf69a312b23a.png",
          detail: "Get instant access to your personalized tide and moon dashboard"
        }
      ]
    },
    {
      id: 2,
      title: "View Your Dashboard",
      description: "Instantly see current moon phase, tide charts, and solar timing for your location.",
      images: [
        {
          src: "/lovable-uploads/7fd14ce8-0b8b-49c6-a772-7f49cf5dc0e6.png",
          detail: "View detailed 7-day weather forecasts with temperature and conditions"
        },
        {
          src: "/lovable-uploads/16ab048c-aff2-4f64-94d5-63c018bfeac9.png",
          detail: "Track real-time moon phases with beautiful visual representations"
        },
        {
          src: "/lovable-uploads/3c90c96d-8fda-4fda-b2a4-80f120bee3f4.png",
          detail: "Analyze daylight hours, sunrise, and sunset times for planning"
        },
        {
          src: "/lovable-uploads/da1ba0f5-9bbc-4e7b-8885-6561391cd646.png",
          detail: "Monitor precise tide charts showing high and low tide predictions"
        },
        {
          src: "/lovable-uploads/d0406990-e899-4ac8-9867-f98690e88abd.png",
          detail: "Access all key information in one comprehensive overview screen"
        }
      ]
    },
    {
      id: 3,
      title: "Explore the Lunar Calendar",
      description: "Browse months to see special full moon names like Buck Moon and Harvest Moon, plus solar events like solstices and equinoxes.",
      images: [
        {
          src: "/lovable-uploads/92cdddbf-ccd9-4499-96fc-883309ca879c.png",
          detail: "Navigate through months to explore lunar cycles and special moon names"
        },
        {
          src: "/lovable-uploads/36eb062a-8595-4377-a440-003c7cd399bc.png",
          detail: "Discover traditional full moon names and their cultural significance"
        },
        {
          src: "/lovable-uploads/bc28877f-15d6-4815-a10b-acbd0681d493.png",
          detail: "Track solar events like solstices and equinoxes throughout the year"
        }
      ]
    },
    {
      id: 4,
      title: "Switch Locations Easily",
      description: "Change tide stations by selecting favorite states, searching by distance radius, or typing location names for instant results.",
      images: [
        {
          src: "/lovable-uploads/4f567ae3-2200-4d8d-b7aa-0f39a4401a5c.png",
          detail: "Quick-select from your favorite states for easy location switching"
        },
        {
          src: "/lovable-uploads/88715845-1810-44dd-82b8-9ede31d4af5c.png",
          detail: "Search by distance radius to find all nearby tide monitoring stations"
        },
        {
          src: "/lovable-uploads/b5440ebc-23a9-4ef7-907d-2547fc72414e.png",
          detail: "Type specific location names for instant, accurate search results"
        },
        {
          src: "/lovable-uploads/8857c36f-4e5c-46af-a89d-e4fee65c2b2a.png",
          detail: "Browse comprehensive lists of available NOAA tide stations"
        },
        {
          src: "/lovable-uploads/32a6a308-4851-47e7-911a-69bc3b300024.png",
          detail: "Seamlessly switch between multiple saved locations for comparison"
        }
      ]
    },
    {
      id: 5,
      title: "Access Settings & Support",
      description: "Review privacy policy, terms of service, send feedback, and visit the website for detailed instructions and updates.",
      images: [
        {
          src: "/lovable-uploads/a5751ce7-d8e6-468f-a42a-0fb45b35f884.png",
          detail: "Access app settings, privacy policy, support, and feedback options"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <Header />
      
      {/* Content with padding to account for fixed header */}
      <main className="pt-20">
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" 
                 style={{ backgroundColor: 'var(--color-bg-dark)' }}>
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
                <span className="gradient-hero">
                  How It Works
                </span>
              </h1>
              <p className="font-body text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
                 style={{ color: 'hsl(var(--color-text-light))' }}>
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
                      backgroundColor: index === 0 ? 'hsl(var(--color-purple))' : 'hsl(var(--color-grey))' 
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
                         style={{ backgroundColor: 'hsl(var(--color-purple))' }}>
                      <span className="font-body font-bold text-lg"
                            style={{ color: 'hsl(var(--color-selection-text))' }}>
                        {step.id}
                      </span>
                    </div>
                    <h2 className="font-body font-medium text-2xl lg:text-3xl mb-4"
                        style={{ color: 'hsl(var(--color-text-light))' }}>
                      {step.title}
                    </h2>
                    <div 
                      className="font-body text-lg leading-relaxed max-w-2xl mx-auto"
                      style={{ color: 'hsl(var(--color-grey))' }}
                      dangerouslySetInnerHTML={{
                        __html: step.id === 1 
                          ? "Open <span style='color: hsl(270 62% 64%)'>Moon</span><span style='color: hsl(196 87% 57%)'>Tide</span> and enter your ZIP code to find the nearest NOAA tide station."
                          : step.description
                      }}
                    />
                  </div>

                   {/* Screenshots Grid */}
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                     {step.images.map((image, imageIndex) => (
                       <div 
                         key={imageIndex}
                         className="flex flex-col items-center animate-fade-in"
                         style={{ animationDelay: `${imageIndex * 150}ms` }}
                       >
                         <div className="relative group">
                           {/* Phone Frame */}
                           <div className="relative rounded-[2rem] p-3 shadow-2xl transition-transform duration-300 group-hover:scale-105"
                                style={{ backgroundColor: 'hsl(var(--color-card-bg))' }}>
                             
                             {/* Screenshot */}
                             <div className="relative rounded-[1.5rem] overflow-hidden aspect-[9/19.5] w-64 sm:w-72">
                               <img 
                                 src={typeof image === 'string' ? image : image.src}
                                 alt={`${step.title} - Step ${imageIndex + 1}`}
                                 className="w-full h-full object-cover"
                                 loading="lazy"
                               />
                             </div>
                           </div>

                           {/* Step Number Badge */}
                           <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: 'hsl(var(--color-purple))' }}>
                             <span className="text-xs font-bold"
                                   style={{ color: 'hsl(var(--color-selection-text))' }}>
                               {imageIndex + 1}
                             </span>
                           </div>
                         </div>

                         {/* Image Detail Description */}
                         {typeof image !== 'string' && image.detail && (
                           <div className="mt-4 max-w-xs text-center">
                             <p className="font-body text-sm leading-relaxed"
                                style={{ color: 'hsl(var(--color-grey))' }}>
                               {image.detail}
                             </p>
                           </div>
                         )}
                       </div>
                     ))}
                   </div>
                </div>
              ))}
            </div>

            {/* Coming Soon Message */}
            <div className="text-center mt-16 pt-8 border-t border-opacity-20"
                 style={{ borderColor: 'hsl(var(--color-grey))' }}>
              <p className="font-body text-sm"
                 style={{ color: 'hsl(var(--color-grey))' }}>
                More walkthrough steps coming as you provide additional images...
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Walkthrough;