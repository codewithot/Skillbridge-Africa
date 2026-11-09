import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import HowItWorks from './components/HowItWorks';
import TradesGrid from './components/TradesGrid';
import TrustAndSafety from './components/TrustAndSafety';
import ArtisanBanner from './components/ArtisanBanner';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ArtisanModal from './components/ArtisanModal';
import FindArtisanModal from './components/FindArtisanModal';

export default function App() {
  const [isFindArtisanOpen, setIsFindArtisanOpen] = useState(false);
  const [isArtisanSignupOpen, setIsArtisanSignupOpen] = useState(false);
  const [bookingArtisan, setBookingArtisan] = useState(null);
  const [searchParams, setSearchParams] = useState({ trade: '', location: '' });

  // Handlers
  const handleOpenFindArtisan = (trade = '', location = '') => {
    setSearchParams({ trade, location });
    setIsFindArtisanOpen(true);
  };

  const handleHeroSearch = ({ trade, location }) => {
    setSearchParams({ trade, location });
    setIsFindArtisanOpen(true);
  };

  const handleSelectTrade = (tradeName) => {
    setSearchParams({ trade: tradeName, location: 'Lagos' });
    setIsFindArtisanOpen(true);
  };

  const handleBookArtisan = (artisan) => {
    setBookingArtisan(artisan);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-900 flex flex-col font-sans selection:bg-[#0D4A30] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar 
        onOpenFindArtisan={() => handleOpenFindArtisan()} 
        onOpenArtisanSignup={() => setIsArtisanSignupOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 2. Hero Section with Interactive App Mockups */}
        <Hero 
          onSearchSubmit={handleHeroSearch}
          onBookArtisan={handleBookArtisan}
        />

        {/* 3. Trust Signals: "Hiring a stranger shouldn't feel like a gamble." */}
        <TrustSignals />

        {/* 4. How It Works: "From 'I need someone' to job done, in four steps." */}
        <HowItWorks />

        {/* 5. Trades Grid: "Every trade, one place." */}
        <TradesGrid onSelectTrade={handleSelectTrade} />

        {/* 6. Trust & Safety: "We keep watch, so you don't have to." */}
        <TrustAndSafety />

        {/* 7. Artisan CTA Banner: "Are you an artisan? Your craft deserves a profile." */}
        <ArtisanBanner onOpenArtisanSignup={() => setIsArtisanSignupOpen(true)} />

        {/* 8. Final CTA: "Find the right hands for your next job." */}
        <FinalCta onOpenFindArtisan={() => handleOpenFindArtisan()} />
      </main>

      {/* 9. Footer */}
      <Footer onOpenArtisanSignup={() => setIsArtisanSignupOpen(true)} />

      {/* Interactive Modals */}
      <BookingModal 
        isOpen={Boolean(bookingArtisan)} 
        onClose={() => setBookingArtisan(null)} 
        artisan={bookingArtisan} 
      />

      <ArtisanModal 
        isOpen={isArtisanSignupOpen} 
        onClose={() => setIsArtisanSignupOpen(false)} 
      />

      <FindArtisanModal 
        isOpen={isFindArtisanOpen} 
        onClose={() => setIsFindArtisanOpen(false)} 
        initialTrade={searchParams.trade}
        initialLocation={searchParams.location}
        onSelectArtisan={handleBookArtisan}
      />
    </div>
  );
}
