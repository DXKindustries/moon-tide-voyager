const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4" 
            style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* Logo goes here */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-moon-purple to-moon-blue flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="font-display text-xl lg:text-2xl" style={{ color: 'var(--color-text-light)' }}>
            MoonTide
          </span>
        </div>

        {/* Navigation - Hidden on mobile, can be added later */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="font-body text-sm font-medium hover:opacity-80 transition-opacity"
             style={{ color: 'var(--color-text-light)' }}>
            Features
          </a>
          <a href="#download" className="font-body text-sm font-medium hover:opacity-80 transition-opacity"
             style={{ color: 'var(--color-text-light)' }}>
            Download
          </a>
          <a href="#support" className="font-body text-sm font-medium hover:opacity-80 transition-opacity"
             style={{ color: 'var(--color-text-light)' }}>
            Support
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;