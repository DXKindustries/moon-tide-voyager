interface AnimatedMoonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  phase?: 'new' | 'waxing-crescent' | 'first-quarter' | 'waxing-gibbous' | 'full' | 'waning-gibbous' | 'last-quarter' | 'waning-crescent';
  className?: string;
}

const AnimatedMoon = ({ 
  size = 'md', 
  phase = 'waning-crescent',
  className = '' 
}: AnimatedMoonProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  // Phase percentages for different moon phases
  const phaseData = {
    'new': 0,
    'waxing-crescent': 25,
    'first-quarter': 50,
    'waxing-gibbous': 75,
    'full': 100,
    'waning-gibbous': 75,
    'last-quarter': 50,
    'waning-crescent': 43
  };

  const illumination = phaseData[phase];

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Outer glow */}
      <div 
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, hsl(var(--color-purple) / 0.3) 0%, transparent 70%)`,
          filter: 'blur(4px)',
          transform: 'scale(1.2)'
        }}
      />
      
      {/* Main moon body */}
      <div 
        className="relative w-full h-full rounded-full transition-all duration-300 hover:scale-105"
        style={{
          background: `linear-gradient(135deg, hsl(var(--color-purple)) 0%, hsl(var(--color-purple) / 0.8) 100%)`,
          boxShadow: `
            inset -2px -2px 8px hsl(var(--color-purple) / 0.3),
            0 0 20px hsl(var(--color-purple) / 0.4),
            0 0 40px hsl(var(--color-purple) / 0.2)
          `,
          animation: 'moonGlow 3s ease-in-out infinite alternate'
        }}
      >
        {/* Phase shadow overlay */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              transparent ${illumination}%, 
              hsl(var(--color-bg-dark) / 0.8) ${illumination + 5}%, 
              hsl(var(--color-bg-dark) / 0.9) 100%
            )`,
            transition: 'all 0.5s ease-in-out'
          }}
        />
        
        {/* Surface details */}
        <div className="absolute inset-0 rounded-full opacity-30">
          {/* Crater effects */}
          <div 
            className="absolute w-2 h-2 rounded-full"
            style={{ 
              top: '30%', 
              left: '25%',
              backgroundColor: 'hsl(var(--color-purple) / 0.5)',
              boxShadow: 'inset 1px 1px 2px hsl(var(--color-bg-dark) / 0.3)'
            }}
          />
          <div 
            className="absolute w-1 h-1 rounded-full"
            style={{ 
              top: '60%', 
              left: '70%',
              backgroundColor: 'hsl(var(--color-purple) / 0.4)',
              boxShadow: 'inset 1px 1px 1px hsl(var(--color-bg-dark) / 0.2)'
            }}
          />
          <div 
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{ 
              top: '45%', 
              left: '50%',
              backgroundColor: 'hsl(var(--color-purple) / 0.3)',
              boxShadow: 'inset 1px 1px 2px hsl(var(--color-bg-dark) / 0.2)'
            }}
          />
        </div>
      </div>

    </div>
  );
};

export default AnimatedMoon;