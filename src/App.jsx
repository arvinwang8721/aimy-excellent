import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Navbar from './components/Navbar';
import Hero from './components/home/Hero';
import Highlights from './components/home/Highlights';
import Features from './components/home/Features';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import VideoGallery from './components/VideoGallery';
import Faq from './components/Faq';
import * as Sentry from '@sentry/react';

const Home = () => (
  <>
    <Helmet>
      <title>Home Page - Aimy home improvements</title>
      <meta name="description" content="This is the home page of Your Site Name." />
    </Helmet>

    <Hero />
    <Highlights />
    <Features />
    {/* <HowItWorks /> */}
  </>
);

const App = () => {
  return (
    <Router>
      <main className="bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/video-galleries" element={<VideoGallery />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default Sentry.withProfiler(App);
