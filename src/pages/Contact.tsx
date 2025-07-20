import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <Header />
      
      {/* Content with padding to account for fixed header */}
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-12">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6">
              <span style={{ color: 'hsl(var(--color-purple))' }}>Contact </span>
              <span style={{ color: 'hsl(var(--color-blue))' }}>Us</span>
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border" 
                 style={{ borderColor: 'hsl(var(--color-purple) / 0.2)' }}>
              
              <p className="font-body text-lg mb-8 leading-relaxed" 
                 style={{ color: 'var(--color-text-light)' }}>
                If you have questions, need support, or want to share feedback about MoonTide, we'd love to hear from you!
              </p>

              <div className="bg-white/5 rounded-xl p-6 border mb-6" 
                   style={{ borderColor: 'hsl(var(--color-blue) / 0.2)' }}>
                <h2 className="font-display text-xl mb-4" 
                    style={{ color: 'hsl(var(--color-purple))' }}>
                  Email
                </h2>
                <a href="mailto:moontidesite@gmail.com" 
                   className="font-body text-lg font-medium hover:opacity-80 transition-opacity"
                   style={{ color: 'hsl(var(--color-blue))' }}>
                  moontidesite@gmail.com
                </a>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border" 
                   style={{ borderColor: 'hsl(var(--color-purple) / 0.2)' }}>
                <p className="font-body text-sm" 
                   style={{ color: 'var(--color-text-light)' }}>
                  We aim to respond to all inquiries within 2 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;