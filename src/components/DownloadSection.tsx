const DownloadSection = () => {
  return (
    <section id="download" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" 
             style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-6">
          <span className="gradient-hero">
            Get MoonTide
          </span>
        </h2>
        <p className="font-body text-lg sm:text-xl leading-relaxed mb-12"
           style={{ color: 'hsl(var(--color-text-light))' }}>
          Download MoonTide and start tracking lunar cycles and tidal patterns with precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border max-w-sm" 
               style={{ borderColor: 'hsl(var(--color-purple) / 0.2)' }}>
            <h3 className="font-display text-xl mb-4" 
                style={{ color: 'hsl(var(--color-purple))' }}>
              Android
            </h3>
            <p className="font-body text-sm mb-6" 
               style={{ color: 'var(--color-text-light)' }}>
              Download MoonTide for Android devices. Available now on Google Play Store.
            </p>
            <a href="#" className="button primary w-full">
              Coming Soon
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border max-w-sm" 
               style={{ borderColor: 'hsl(var(--color-blue) / 0.2)' }}>
            <h3 className="font-display text-xl mb-4" 
                style={{ color: 'hsl(var(--color-blue))' }}>
              iOS
            </h3>
            <p className="font-body text-sm mb-6" 
               style={{ color: 'var(--color-text-light)' }}>
              iOS version is in development. Sign up to be notified when it's available.
            </p>
            <a href="mailto:moontidesite@gmail.com?subject=Notify%20me%20about%20iOS%20release" 
               className="button secondary w-full">
              Notify Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;