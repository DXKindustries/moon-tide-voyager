import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4" 
            style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
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
          <a href="/#features" className="font-body text-sm font-medium hover:opacity-80 transition-opacity"
             style={{ color: 'var(--color-text-light)' }}>
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
          className="md:hidden p-2 hover:opacity-80 transition-opacity"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} style={{ color: 'var(--color-text-light)' }} />
          ) : (
            <Menu size={24} style={{ color: 'var(--color-text-light)' }} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mt-4 pb-4 border-t border-white/10">
          <nav className="flex flex-col gap-4 pt-4 animate-fade-in">
            <a 
              href="/#features" 
              className="font-body text-base font-medium hover:opacity-80 transition-opacity block transform hover:translate-x-2 transition-transform duration-200"
              style={{ color: 'var(--color-text-light)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="/walkthrough" 
              className="font-body text-base font-medium hover:opacity-80 transition-opacity block transform hover:translate-x-2 transition-transform duration-200"
              style={{ color: 'var(--color-text-light)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="/about" 
              className="font-body text-base font-medium hover:opacity-80 transition-opacity block transform hover:translate-x-2 transition-transform duration-200"
              style={{ color: 'var(--color-text-light)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/contact" 
              className="font-body text-base font-medium hover:opacity-80 transition-opacity block transform hover:translate-x-2 transition-transform duration-200"
              style={{ color: 'var(--color-text-light)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;