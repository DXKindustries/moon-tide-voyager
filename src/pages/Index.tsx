import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <Header />
      <Hero />
      <FeatureGrid />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
