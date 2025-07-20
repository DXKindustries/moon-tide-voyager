const Header = () => {
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

        {/* Navigation - Hidden on mobile, can be added later */}
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
      </div>
    </header>
  );
};

export default Header;