import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header storeName="Cogdell Component Corner" />

      <Hero
        title="Welcome to Cogdell Component Corner"
        subtitle="High‑quality components for every build"
        ctaText="Shop Now"
        image="https://placehold.co/1200x400/667eea/ffffff"
      />

      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <ProductCard
          name="Premium Keyboard"
          price="129.99"
          image="https://placehold.co/600x400"
          description="A high-quality mechanical keyboard."
        />

        <ProductCard
          name="Gaming Mouse"
          price="59.99"
          image="https://placehold.co/600x400"
          description="Precision and comfort for gamers."
        />

        <ProductCard
          name="Noise-Canceling Headphones"
          price="199.99"
          image="https://placehold.co/600x400"
          description="Experience immersive sound."
        />
      </div>

      <Footer
        storeName="Cogdell Component Corner"
        contact="support@cogdellcomponents.com"
      />
    </>
  );
}

export default App;
