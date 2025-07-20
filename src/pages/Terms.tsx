import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <Header />
      
      {/* Content with padding to account for fixed header */}
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-12">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6">
              <span style={{ color: 'hsl(var(--color-purple))' }}>Terms of </span>
              <span style={{ color: 'hsl(var(--color-blue))' }}>Service</span>
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
                Welcome to MoonTide ("we", "us", or "our"). By using the MoonTide mobile app (the "App"), you agree to the following terms and conditions:
              </p>

              {/* Section 1 */}
              <div className="mb-8">
                <h2 className="font-display text-2xl mb-4" 
                    style={{ color: 'hsl(var(--color-purple))' }}>
                  1. Acceptance of Terms
                </h2>
                <p className="font-body leading-relaxed" 
                   style={{ color: 'var(--color-text-light)' }}>
                  By accessing or using the MoonTide app, you agree to these Terms of Service. If you do not agree, please do not use the app.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h2 className="font-display text-2xl mb-4" 
                    style={{ color: 'hsl(var(--color-purple))' }}>
                  2. Use of the App
                </h2>
                <p className="font-body leading-relaxed" 
                   style={{ color: 'var(--color-text-light)' }}>
                  You may use the MoonTide app for personal, non-commercial purposes only. You agree not to misuse the app or attempt to disrupt its operation.
                </p>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h2 className="font-display text-2xl mb-4" 
                    style={{ color: 'hsl(var(--color-purple))' }}>
                  3. No Warranties
                </h2>
                <p className="font-body leading-relaxed" 
                   style={{ color: 'var(--color-text-light)' }}>
                  The MoonTide app is provided "as is" and without warranties of any kind, either express or implied. We do not guarantee the app will always be available, error-free, or accurate.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h2 className="font-display text-2xl mb-4" 
                    style={{ color: 'hsl(var(--color-purple))' }}>
                  4. Limitation of Liability
                </h2>
                <p className="font-body leading-relaxed" 
                   style={{ color: 'var(--color-text-light)' }}>
                  To the fullest extent permitted by law, MoonTide and its creators are not liable for any damages or losses resulting from your use of, or inability to use, the app.
                </p>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h2 className="font-display text-2xl mb-4" 
                    style={{ color: 'hsl(var(--color-purple))' }}>
                  5. Intellectual Property
                </h2>
                <p className="font-body leading-relaxed" 
                   style={{ color: 'var(--color-text-light)' }}>
                  All content, trademarks, and logos within the app are the property of MoonTide or their respective owners. You may not use or copy any content without permission.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-8">
                <h2 className="font-display text-2xl mb-4" 
                    style={{ color: 'hsl(var(--color-purple))' }}>
                  6. Changes to These Terms
                </h2>
                <p className="font-body leading-relaxed" 
                   style={{ color: 'var(--color-text-light)' }}>
                  We may update these Terms of Service from time to time. Any changes will be posted on this page with a new effective date.
                </p>
              </div>

              {/* Section 7 */}
              <div className="bg-white/5 rounded-xl p-6 border" 
                   style={{ borderColor: 'hsl(var(--color-blue) / 0.2)' }}>
                <h2 className="font-display text-2xl mb-4" 
                    style={{ color: 'hsl(var(--color-purple))' }}>
                  7. Contact Us
                </h2>
                <p className="font-body leading-relaxed mb-3" 
                   style={{ color: 'var(--color-text-light)' }}>
                  If you have any questions about these Terms, please contact us at:
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

export default Terms;