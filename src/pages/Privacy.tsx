import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <Header />
      
      {/* Content with padding to account for fixed header */}
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-12">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6">
              <span style={{ color: 'hsl(var(--color-purple))' }}>Privacy </span>
              <span style={{ color: 'hsl(var(--color-blue))' }}>Policy</span>
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border" 
                 style={{ borderColor: 'hsl(var(--color-purple) / 0.2)' }}>
              
              <p className="font-body text-sm mb-8" 
                 style={{ color: 'var(--color-text-light)' }}>
                <strong>Effective Date:</strong> July 20, 2025
              </p>

              <p className="font-body text-lg mb-8 leading-relaxed" 
                 style={{ color: 'var(--color-text-light)' }}>
                MoonTide ("we", "us", or "our") respects your privacy. This Privacy Policy describes how we handle information in the MoonTide mobile app.
              </p>

              {/* Section 1 */}
              <div className="mb-8">
                <h2 className="font-display text-2xl mb-4" 
                    style={{ color: 'hsl(var(--color-purple))' }}>
                  1. Information We Do Not Collect
                </h2>
                <p className="font-body leading-relaxed" 
                   style={{ color: 'var(--color-text-light)' }}>
                  We do not collect, store, or share any personal information from users of the MoonTide app.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h2 className="font-display text-2xl mb-4" 
                    style={{ color: 'hsl(var(--color-purple))' }}>
                  2. Data Usage
                </h2>
                <ul className="font-body leading-relaxed space-y-2" 
                    style={{ color: 'var(--color-text-light)' }}>
                  <li>• The MoonTide app does not require users to create accounts or enter personal details.</li>
                  <li>• We do not track or log your location, usage, or any other data.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h2 className="font-display text-2xl mb-4" 
                    style={{ color: 'hsl(var(--color-purple))' }}>
                  3. Communications
                </h2>
                <ul className="font-body leading-relaxed space-y-2" 
                    style={{ color: 'var(--color-text-light)' }}>
                  <li>• If you contact us directly (e.g., by emailing moontidesite@gmail.com), we may keep your email to respond to your inquiry.</li>
                  <li>• We do not add you to any mailing list or share your email address.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h2 className="font-display text-2xl mb-4" 
                    style={{ color: 'hsl(var(--color-purple))' }}>
                  4. Children's Privacy
                </h2>
                <p className="font-body leading-relaxed" 
                   style={{ color: 'var(--color-text-light)' }}>
                  MoonTide does not target or knowingly collect information from children under 13.
                </p>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h2 className="font-display text-2xl mb-4" 
                    style={{ color: 'hsl(var(--color-purple))' }}>
                  5. Changes to This Policy
                </h2>
                <p className="font-body leading-relaxed" 
                   style={{ color: 'var(--color-text-light)' }}>
                  If we change our Privacy Policy, we will update this page with the new version and update the "Effective Date" above.
                </p>
              </div>

              {/* Section 6 */}
              <div className="bg-white/5 rounded-xl p-6 border" 
                   style={{ borderColor: 'hsl(var(--color-blue) / 0.2)' }}>
                <h2 className="font-display text-2xl mb-4" 
                    style={{ color: 'hsl(var(--color-purple))' }}>
                  6. Contact
                </h2>
                <p className="font-body leading-relaxed mb-3" 
                   style={{ color: 'var(--color-text-light)' }}>
                  If you have any questions or concerns about this Privacy Policy, contact us at:
                </p>
                <a href="mailto:moontidesite@gmail.com" 
                   className="font-body text-lg font-medium hover:opacity-80 transition-opacity"
                   style={{ color: 'hsl(var(--color-blue))' }}>
                  moontidesite@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;