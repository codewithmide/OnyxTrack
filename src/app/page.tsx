import Features from './components/features';
import Footer from './components/footer';
import Hero from './components/hero'
import Navbar from './components/navbar';
import Works from './components/works';

export default function Home() {
  return (
    <main className="min-h-screen flex-col center bg-white text-black">
      <Navbar />
      <Hero />
      <Features />
      <Works />
      <Footer />
    </main>
  )
}
