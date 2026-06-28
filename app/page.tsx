import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Modules from './components/Modules';
import Trust from './components/Trust';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Modules />
      <Trust />
      <Footer />
    </main>
  );
}
