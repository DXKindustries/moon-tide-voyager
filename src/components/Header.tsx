import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4" 
            style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/b6434ef6-0063-42a6-9f5c-19ad66eb88ec.png" 
            alt="MoonTide Logo" 
            className="w-10 h-10"
          />
          <span className="font-display text-xl lg:text-2xl">
            <span style={{ color: 'hsl(var(--color-purple))' }}>Moon</span>
            <span style={{ color: 'hsl(var(--color-blue))' }}>Tide</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="/" 
            className="font-body text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: 'var(--color-text-light)' }}
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#features';
              }
            }}
          >
            Features
          </a>
          <a href="/walkthrough" className="font-body text-sm font-medium hover:opacity-80 transition-opacity"
             style={{ color: 'var(--color-text-light)' }}>
            How It Works
          </a>
          <a href="/about" className="font-body text-sm font-medium hover:opacity-80 transition-opacity"
             style={{ color: 'var(--color-text-light)' }}>
            About
          </a>
          <a href="/contact" className="font-body text-sm font-medium hover:opacity-80 transition-opacity"
             style={{ color: 'var(--color-text-light)' }}>
            Support
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-3 -mr-3 hover:opacity-80 transition-opacity touch-manipulation"
          aria-label="Toggle menu"
          style={{ minWidth: '44px', minHeight: '44px' }}
        >
          {isMenuOpen ? (
            <X size={24} style={{ color: 'var(--color-text-light)' }} />
          ) : (
            <Menu size={24} style={{ color: 'var(--color-text-light)' }} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 right-0 z-50 animate-fade-in"
          style={{ backgroundColor: 'var(--color-bg-dark)' }}
        >
          <div className="border-t border-white/10 shadow-lg">
            <nav className="flex flex-col px-4 py-4 space-y-1">
              <a 
                href="/" 
                className="font-body text-lg font-medium hover:opacity-80 transition-all duration-200 py-4 px-2 rounded-lg hover:bg-white/5 touch-manipulation"
                style={{ color: 'var(--color-text-light)', minHeight: '44px' }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  if (window.location.pathname === '/') {
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#features';
                  }
                }}
              >
                Features
              </a>
              <a 
                href="/walkthrough" 
                className="font-body text-lg font-medium hover:opacity-80 transition-all duration-200 py-4 px-2 rounded-lg hover:bg-white/5 touch-manipulation"
                style={{ color: 'var(--color-text-light)', minHeight: '44px' }}
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="/about" 
                className="font-body text-lg font-medium hover:opacity-80 transition-all duration-200 py-4 px-2 rounded-lg hover:bg-white/5 touch-manipulation"
                style={{ color: 'var(--color-text-light)', minHeight: '44px' }}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/contact" 
                className="font-body text-lg font-medium hover:opacity-80 transition-all duration-200 py-4 px-2 rounded-lg hover:bg-white/5 touch-manipulation"
                style={{ color: 'var(--color-text-light)', minHeight: '44px' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;