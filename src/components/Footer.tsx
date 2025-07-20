const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8" 
            style={{ backgroundColor: 'var(--color-bg-dark)', borderTop: '1px solid hsl(var(--color-purple) / 0.2)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/b6434ef6-0063-42a6-9f5c-19ad66eb88ec.png" 
                alt="MoonTide Logo" 
                className="w-8 h-8"
              />
              <span className="font-display text-lg">
                <span style={{ color: 'hsl(var(--color-purple))' }}>Moon</span>
                <span style={{ color: 'hsl(var(--color-blue))' }}>Tide</span>
              </span>
            </div>
            <p className="font-body text-sm max-w-md" 
               style={{ color: 'var(--color-text-light)' }}>
              NOAA-backed tide forecasts, moon phase tracking, and sunrise/sunset timing — all by ZIP code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-body font-medium text-sm mb-4" 
                style={{ color: 'hsl(var(--color-purple))' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="font-body text-sm hover:opacity-80 transition-opacity"
                   style={{ color: 'var(--color-text-light)' }}>
                  Features
                </a>
              </li>
              <li>
                <a href="#download" className="font-body text-sm hover:opacity-80 transition-opacity"
                   style={{ color: 'var(--color-text-light)' }}>
                  Download
                </a>
              </li>
              <li>
                <a href="mailto:moontidesite@gmail.com?subject=MoonTide%20App%20Feedback" 
                   className="font-body text-sm hover:opacity-80 transition-opacity"
                   style={{ color: 'hsl(var(--color-blue))' }}>
                  📧 Send Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-body font-medium text-sm mb-4" 
                style={{ color: 'hsl(var(--color-purple))' }}>
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="font-body text-sm hover:opacity-80 transition-opacity"
                   style={{ color: 'var(--color-text-light)' }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="font-body text-sm hover:opacity-80 transition-opacity"
                   style={{ color: 'var(--color-text-light)' }}>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t" 
             style={{ borderColor: 'hsl(var(--color-purple) / 0.2)' }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm" 
               style={{ color: 'var(--color-text-light)' }}>
              © 2024 MoonTide. All rights reserved.
            </p>
            <p className="font-body text-xs" 
               style={{ color: 'var(--color-text-light)' }}>
              Powered by NOAA data
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;