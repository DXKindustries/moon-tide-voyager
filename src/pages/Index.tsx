import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <Header />
      <Hero />
      <FeatureGrid />
    </div>
  );
};

export default Index;
