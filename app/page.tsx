import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/About'));
const Portfolio = dynamic(() => import('@/components/Portfolio'));
const Services = dynamic(() => import('@/components/Services'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Contact = dynamic(() => import('@/components/Contact'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}