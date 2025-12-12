// src/App.jsx
import Navbar from './components/layout/Navbar';
import HeroSlider from './components/home/HeroSlider';
import CategorySlider from './components/home/CategorySlider';
import TrendingProducts from './components/home/TrendingProducts';
import FeaturesSection from './components/home/FeatureSection';
import AnimatedShowcase from './components/home/AnimationShowcase';

function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <HeroSlider />

        {/* 2. Category Section */}
        <CategorySlider />

        {/* 3. Trending Gifts Section (New) */}
        <TrendingProducts />

        <AnimatedShowcase />

        <FeaturesSection />

      </main>
    </div>
  )
}

export default App;