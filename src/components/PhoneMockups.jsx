import React, { useState } from 'react';
import { 
  Search, MapPin, Star, CheckCircle, Shield, Share2, 
  MessageSquare, ChevronDown, ArrowLeft, Home, Compass, Bookmark, Calendar, User
} from 'lucide-react';

const SAMPLE_ARTISANS = [
  {
    id: 'chidi',
    name: 'Chidi Okafor',
    shortName: 'Chidi O.',
    trade: 'Electrician',
    location: 'Yaba, Lagos',
    distance: '0.8 km away',
    rating: 4.9,
    reviewsCount: 128,
    experience: '9 yrs',
    avatarInitials: 'CO',
    avatarBg: 'bg-[#CA7320]',
    badgeBg: 'bg-[#0D4A30]',
    available: 'Available today',
    isAvailableToday: true,
    skills: ['Wiring', 'Inverters', 'Fault finding', 'Lighting'],
    verifiedNote: 'Verified by Skillbridge. No complaints on record.',
    review: {
      author: 'Ngozi E.',
      authorInitials: 'NE',
      date: '2 weeks ago',
      rating: 5,
      content: 'Found and fixed the fault in one visit and explained everything he did. Neat work, and he arrived on time.'
    }
  },
  {
    id: 'musa',
    name: 'Musa Abubakar',
    shortName: 'Musa A.',
    trade: 'Electrician',
    location: 'Surulere, Lagos',
    distance: '1.4 km away',
    rating: 4.8,
    reviewsCount: 94,
    experience: '6 yrs',
    avatarInitials: 'MA',
    avatarBg: 'bg-[#B45309]',
    badgeBg: 'bg-[#0D4A30]',
    available: 'Available today',
    isAvailableToday: true,
    skills: ['Generators', 'Solar installation', 'Wiring'],
    verifiedNote: 'Verified by Skillbridge. Identity & background checked.',
    review: {
      author: 'Kunle A.',
      authorInitials: 'KA',
      date: '3 weeks ago',
      rating: 5,
      content: 'Very professional. Repaired our commercial distribution board with zero downtime.'
    }
  },
  {
    id: 'tunde',
    name: 'Tunde Bakare',
    shortName: 'Tunde B.',
    trade: 'Electrician',
    location: 'Ikeja, Lagos',
    distance: '2.1 km away',
    rating: 4.7,
    reviewsCount: 67,
    experience: '8 yrs',
    avatarInitials: 'TB',
    avatarBg: 'bg-[#334155]',
    badgeBg: 'bg-[#0D4A30]',
    available: 'Available tomorrow',
    isAvailableToday: false,
    skills: ['Smart Home', 'Appliance repair', 'Rewiring'],
    verifiedNote: 'Verified by Skillbridge. Guaranteed workmanship.',
    review: {
      author: 'Amara O.',
      authorInitials: 'AO',
      date: '1 month ago',
      rating: 5,
      content: 'Installed lighting and smart switches seamlessly. Highly recommended!'
    }
  }
];

export default function PhoneMockups({ onBookArtisan }) {
  const [selectedArtisanId, setSelectedArtisanId] = useState('chidi');
  const [activeCategory, setActiveCategory] = useState('Electrician');
  const [isStarred, setIsStarred] = useState(true);

  const selectedArtisan = SAMPLE_ARTISANS.find(a => a.id === selectedArtisanId) || SAMPLE_ARTISANS[0];

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Container holding the 2 overlapping mobile frames */}
      <div className="relative w-full max-w-[530px] h-[580px] sm:h-[620px] mx-auto select-none">
        
        {/* ================= BACK PHONE (Listing & Map) ================= */}
        <div className="absolute left-0 sm:left-4 top-2 sm:top-4 w-[255px] sm:w-[275px] h-[520px] sm:h-[555px] bg-neutral-900 rounded-[38px] p-[6px] shadow-2xl ring-1 ring-black/10 z-10 transition-transform hover:z-25">
          {/* Inner bezel */}
          <div className="w-full h-full bg-[#FAFAF9] rounded-[32px] overflow-hidden flex flex-col relative text-[11px] font-sans border border-neutral-100">
            
            {/* Speaker & notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-neutral-900 rounded-full z-30 flex items-center justify-center">
              <div className="w-8 h-1 bg-neutral-700 rounded-full"></div>
            </div>

            {/* Status bar */}
            <div className="h-7 px-4 flex items-center justify-between text-[9px] text-neutral-500 font-semibold pt-1 shrink-0">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span className="text-[8px]">5G</span>
                <div className="w-4 h-2 border border-neutral-500 rounded-xs p-[1px]">
                  <div className="w-full h-full bg-neutral-600 rounded-2xs"></div>
                </div>
              </div>
            </div>

            {/* Phone header */}
            <div className="px-3 pt-1 pb-2 shrink-0">
              <span className="text-[9px] text-neutral-400 block font-medium">Your location</span>
              <div className="flex items-center gap-1 font-bold text-neutral-800 text-[12px] cursor-pointer">
                <MapPin className="w-3 h-3 text-[#0D4A30] fill-[#0D4A30]" />
                <span>Yaba, Lagos</span>
                <ChevronDown className="w-3 h-3 text-neutral-500" />
              </div>

              {/* Search bar */}
              <div className="mt-2 flex items-center gap-2 bg-white border border-neutral-200/80 rounded-lg px-2.5 py-1.5 shadow-2xs">
                <Search className="w-3 h-3 text-neutral-400" />
                <span className="text-neutral-700 font-medium text-[11px]">Electrician</span>
              </div>

              {/* Filter pills */}
              <div className="flex items-center gap-1.5 mt-2 overflow-x-auto no-scrollbar pb-0.5">
                {['Electrician', 'Plumber', 'Tailor', 'Carpenter'].map((trade) => (
                  <button
                    key={trade}
                    onClick={() => setActiveCategory(trade)}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap transition cursor-pointer ${
                      activeCategory === trade
                        ? 'bg-[#0D4A30] text-white shadow-2xs'
                        : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    {trade}
                  </button>
                ))}
              </div>
            </div>

            {/* Map Area */}
            <div className="relative h-28 bg-[#E6EFEA] border-y border-neutral-200/60 overflow-hidden shrink-0">
              {/* Stylized vector map graphics */}
              <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 300 140" fill="none">
                <path d="M-20 70 C 60 75, 120 40, 320 80" stroke="#CBD5E1" strokeWidth="12" strokeLinecap="round" />
                <path d="M70 -10 L 130 150" stroke="#CBD5E1" strokeWidth="8" />
                <path d="M190 -10 L 160 150" stroke="#CBD5E1" strokeWidth="7" />
                <path d="M-10 30 L 310 40" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M-10 110 L 310 115" stroke="#FFFFFF" strokeWidth="5" />
                <circle cx="95" cy="45" r="28" fill="#D1E7DD" opacity="0.6" />
                <circle cx="230" cy="95" r="34" fill="#D1E7DD" opacity="0.6" />
              </svg>

              {/* Map pins with ratings */}
              <div className="absolute top-5 left-16 bg-[#0D4A30] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-md flex items-center gap-0.5 animate-pulse">
                <Star className="w-2.5 h-2.5 fill-[#F7B928] text-[#F7B928]" />
                <span>4.9</span>
              </div>
              <div className="absolute top-4 right-14 bg-white/95 text-neutral-800 text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm flex items-center gap-0.5 border border-neutral-200">
                <Star className="w-2.5 h-2.5 fill-[#F7B928] text-[#F7B928]" />
                <span>4.8</span>
              </div>
              <div className="absolute bottom-4 left-8 bg-white/95 text-neutral-800 text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm flex items-center gap-0.5 border border-neutral-200">
                <span>4.6</span>
              </div>
              <div className="absolute bottom-5 right-8 bg-white/95 text-neutral-800 text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm flex items-center gap-0.5 border border-neutral-200">
                <span>4.7</span>
              </div>
            </div>

            {/* Nearby Artisans List */}
            <div className="flex-1 px-3 py-2 overflow-y-auto no-scrollbar">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-neutral-900 text-[11px]">Nearby electricians</span>
                <span className="text-[9px] text-[#0D4A30] font-medium cursor-pointer">Nearest</span>
              </div>

              <div className="space-y-1.5">
                {SAMPLE_ARTISANS.map((artisan) => (
                  <div
                    key={artisan.id}
                    onClick={() => setSelectedArtisanId(artisan.id)}
                    className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      selectedArtisanId === artisan.id
                        ? 'bg-white border-[#0D4A30] shadow-sm'
                        : 'bg-white/80 border-neutral-200/70 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full ${artisan.avatarBg} text-white font-bold flex items-center justify-center text-[10px] shrink-0`}>
                        {artisan.avatarInitials}
                      </div>
                      <div className="leading-tight">
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-neutral-900 text-[10px]">{artisan.shortName}</span>
                          <CheckCircle className="w-2.5 h-2.5 text-[#0D4A30] fill-[#0D4A30]" />
                        </div>
                        <span className="text-[9px] text-neutral-500 block">Electrician · {artisan.distance}</span>
                        <div className="flex items-center gap-1 text-[9px] font-medium text-neutral-700 mt-0.5">
                          <Star className="w-2 h-2 fill-[#F7B928] text-[#F7B928]" />
                          <span>{artisan.rating}</span>
                          <span className="text-neutral-400">({artisan.reviewsCount} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full inline-block ${
                        artisan.isAvailableToday 
                          ? 'text-emerald-700 bg-emerald-50' 
                          : 'text-amber-700 bg-amber-50'
                      }`}>
                        • {artisan.available}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="h-10 bg-white border-t border-neutral-200/80 px-4 flex items-center justify-between text-neutral-400 shrink-0">
              <div className="flex flex-col items-center text-[#0D4A30]">
                <Home className="w-3.5 h-3.5" />
                <span className="text-[7px] font-medium">Home</span>
              </div>
              <div className="flex flex-col items-center hover:text-neutral-700 cursor-pointer">
                <Compass className="w-3.5 h-3.5" />
                <span className="text-[7px]">Explore</span>
              </div>
              <div className="flex flex-col items-center hover:text-neutral-700 cursor-pointer">
                <Bookmark className="w-3.5 h-3.5" />
                <span className="text-[7px]">Starred</span>
              </div>
              <div className="flex flex-col items-center hover:text-neutral-700 cursor-pointer">
                <Calendar className="w-3.5 h-3.5" />
                <span className="text-[7px]">Bookings</span>
              </div>
              <div className="flex flex-col items-center hover:text-neutral-700 cursor-pointer">
                <User className="w-3.5 h-3.5" />
                <span className="text-[7px]">Profile</span>
              </div>
            </div>

          </div>
        </div>


        {/* ================= FOREGROUND PHONE (Artisan Detail Page) ================= */}
        <div className="absolute right-0 sm:right-2 top-8 sm:top-10 w-[265px] sm:w-[290px] h-[525px] sm:h-[565px] bg-neutral-900 rounded-[38px] p-[6px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] ring-1 ring-black/20 z-20">
          {/* Inner screen */}
          <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col relative text-[11px] font-sans">
            
            {/* Top speaker & camera notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-neutral-900 rounded-full z-30 flex items-center justify-center">
              <div className="w-8 h-1 bg-neutral-700 rounded-full"></div>
            </div>

            {/* Top action bar */}
            <div className="h-11 px-3 pt-3 flex items-center justify-between text-neutral-700 shrink-0 border-b border-neutral-100">
              <button 
                onClick={() => setSelectedArtisanId('chidi')}
                className="w-6 h-6 rounded-full hover:bg-neutral-100 flex items-center justify-center text-neutral-600 cursor-pointer"
                aria-label="Back"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              
              <div className="flex items-center gap-2">
                <button 
                  className="w-6 h-6 rounded-full hover:bg-neutral-100 flex items-center justify-center text-neutral-600 cursor-pointer"
                  aria-label="Share"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={() => setIsStarred(!isStarred)}
                  className="w-6 h-6 rounded-full hover:bg-neutral-100 flex items-center justify-center cursor-pointer"
                  aria-label="Save to favourites"
                >
                  <Star className={`w-4 h-4 ${isStarred ? 'fill-[#F7B928] text-[#F7B928]' : 'text-neutral-400'}`} />
                </button>
              </div>
            </div>

            {/* Detail Scrollable Content */}
            <div className="flex-1 px-3.5 py-2.5 overflow-y-auto no-scrollbar space-y-2.5">
              
              {/* Header profile info */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className={`w-11 h-11 rounded-2xl ${selectedArtisan.avatarBg} text-white font-bold flex items-center justify-center text-base shadow-sm shrink-0`}>
                    {selectedArtisan.avatarInitials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <h4 className="font-extrabold text-[13px] text-neutral-900 leading-tight">
                        {selectedArtisan.name}
                      </h4>
                      <CheckCircle className="w-3 h-3 text-[#0D4A30] fill-[#0D4A30]" />
                    </div>
                    <p className="text-[10px] text-neutral-500 mt-0.5">
                      {selectedArtisan.trade} · {selectedArtisan.location} · {selectedArtisan.distance}
                    </p>
                  </div>
                </div>

                <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">
                  • Available today
                </span>
              </div>

              {/* 3 Stats Row */}
              <div className="grid grid-cols-3 gap-1.5 py-1 text-center bg-neutral-50 rounded-xl p-2 border border-neutral-100">
                <div className="border-r border-neutral-200">
                  <div className="font-extrabold text-neutral-900 text-[12px] flex items-center justify-center gap-0.5">
                    {selectedArtisan.rating} <Star className="w-2.5 h-2.5 fill-[#F7B928] text-[#F7B928]" />
                  </div>
                  <div className="text-[8px] text-neutral-500 uppercase tracking-wider font-medium">Rating</div>
                </div>
                <div className="border-r border-neutral-200">
                  <div className="font-extrabold text-neutral-900 text-[12px]">{selectedArtisan.reviewsCount}</div>
                  <div className="text-[8px] text-neutral-500 uppercase tracking-wider font-medium">Reviews</div>
                </div>
                <div>
                  <div className="font-extrabold text-neutral-900 text-[12px]">{selectedArtisan.experience}</div>
                  <div className="text-[8px] text-neutral-500 uppercase tracking-wider font-medium">Experience</div>
                </div>
              </div>

              {/* Verification Callout */}
              <div className="bg-[#EBF7F0] border border-[#CDEED9] rounded-xl p-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#0D4A30] shrink-0" />
                <span className="text-[9px] font-medium text-[#0D4A30] leading-snug">
                  {selectedArtisan.verifiedNote}
                </span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-1">
                {selectedArtisan.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-[9px] bg-neutral-100 text-neutral-700 font-medium px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Reviews Section */}
              <div className="pt-1">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-neutral-900 text-[11px]">Reviews</span>
                  <button className="text-[9px] text-[#0D4A30] font-semibold hover:underline">
                    See all {selectedArtisan.reviewsCount}
                  </button>
                </div>

                {/* Review item */}
                <div className="bg-neutral-50 border border-neutral-100 rounded-xl p-2.5 space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-slate-700 text-white font-bold text-[8px] flex items-center justify-center">
                        {selectedArtisan.review.authorInitials}
                      </div>
                      <span className="font-bold text-neutral-800 text-[10px]">{selectedArtisan.review.author}</span>
                    </div>
                    <span className="text-[8px] text-neutral-400">{selectedArtisan.review.date}</span>
                  </div>

                  <div className="flex items-center text-[#F7B928]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-[#F7B928]" />
                    ))}
                  </div>

                  <p className="text-[9px] text-neutral-600 leading-relaxed italic">
                    "{selectedArtisan.review.content}"
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom sticky action bar */}
            <div className="p-2.5 bg-white border-t border-neutral-100 flex items-center gap-2 shrink-0">
              <button 
                onClick={() => onBookArtisan?.(selectedArtisan)}
                className="w-9 h-9 rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-50 cursor-pointer"
                title="Message"
              >
                <MessageSquare className="w-4 h-4 text-neutral-600" />
              </button>
              
              <button
                onClick={() => onBookArtisan?.(selectedArtisan)}
                className="flex-1 bg-[#0D4A30] hover:bg-[#083622] text-white font-bold text-[11px] py-2.5 px-3 rounded-xl shadow-sm transition active:scale-[0.98] cursor-pointer"
              >
                Book {selectedArtisan.shortName.split(' ')[0]}
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Caption under phone mockups */}
      <p className="text-xs text-neutral-400 italic text-center mt-3">
        Illustrative preview with sample data
      </p>
    </div>
  );
}

