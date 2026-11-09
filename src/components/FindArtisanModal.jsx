import React, { useState } from 'react';
import { X, Search, Star, CheckCircle, ArrowRight } from 'lucide-react';

const DIRECTORY_ARTISANS = [
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
    available: 'Available today',
    isAvailableToday: true,
    skills: ['Wiring', 'Inverters', 'Fault finding', 'Lighting']
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
    available: 'Available today',
    isAvailableToday: true,
    skills: ['Generators', 'Solar installation', 'Wiring']
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
    available: 'Available tomorrow',
    isAvailableToday: false,
    skills: ['Smart Home', 'Appliance repair', 'Rewiring']
  },
  {
    id: 'emeka',
    name: 'Emeka Nwosu',
    shortName: 'Emeka N.',
    trade: 'Plumbing',
    location: 'Lekki Phase 1, Lagos',
    distance: '1.2 km away',
    rating: 4.9,
    reviewsCount: 114,
    experience: '11 yrs',
    avatarInitials: 'EN',
    avatarBg: 'bg-[#0284C7]',
    available: 'Available today',
    isAvailableToday: true,
    skills: ['Boreholes', 'Water heaters', 'Pipes', 'Leak detection']
  },
  {
    id: 'fatima',
    name: 'Fatima Al-Hassan',
    shortName: 'Fatima H.',
    trade: 'Tailoring & fashion',
    location: 'Victoria Island, Lagos',
    distance: '2.5 km away',
    rating: 5.0,
    reviewsCount: 88,
    experience: '7 yrs',
    avatarInitials: 'FA',
    avatarBg: 'bg-[#DB2777]',
    available: 'Available today',
    isAvailableToday: true,
    skills: ['Aso Ebi', 'Suits', 'Bridal', 'Alterations']
  },
  {
    id: 'biodun',
    name: 'Biodun Adeyemi',
    shortName: 'Biodun A.',
    trade: 'Carpentry',
    location: 'Maryland, Lagos',
    distance: '3.0 km away',
    rating: 4.8,
    reviewsCount: 76,
    experience: '12 yrs',
    avatarInitials: 'BA',
    avatarBg: 'bg-[#854D0E]',
    available: 'Available today',
    isAvailableToday: true,
    skills: ['Cabinetry', 'Roofing', 'Door installation', 'Wardrobes']
  },
  {
    id: 'solomon',
    name: 'Solomon Mensah',
    shortName: 'Solomon M.',
    trade: 'Auto mechanics',
    location: 'Gbagada, Lagos',
    distance: '1.8 km away',
    rating: 4.8,
    reviewsCount: 102,
    experience: '10 yrs',
    avatarInitials: 'SM',
    avatarBg: 'bg-[#475569]',
    available: 'Available today',
    isAvailableToday: true,
    skills: ['Diagnostics', 'Engine overhaul', 'Brakes', 'Transmission']
  },
  {
    id: 'grace',
    name: 'Grace Eze',
    shortName: 'Grace E.',
    trade: 'Hair & beauty',
    location: 'Yaba, Lagos',
    distance: '0.5 km away',
    rating: 4.9,
    reviewsCount: 145,
    experience: '6 yrs',
    avatarInitials: 'GE',
    avatarBg: 'bg-[#7C3AED]',
    available: 'Available today',
    isAvailableToday: true,
    skills: ['Braids', 'Wig installation', 'Bridal makeup', 'Natural hair']
  }
];

export default function FindArtisanModal({ isOpen, onClose, initialTrade = '', initialLocation = '', onSelectArtisan }) {
  const [searchTerm, setSearchTerm] = useState(initialTrade || '');
  const [selectedTradeFilter, setSelectedTradeFilter] = useState(initialTrade || 'All');

  if (!isOpen) return null;

  const filteredArtisans = DIRECTORY_ARTISANS.filter((artisan) => {
    const matchesTrade = 
      selectedTradeFilter === 'All' || 
      artisan.trade.toLowerCase().includes(selectedTradeFilter.toLowerCase()) ||
      selectedTradeFilter.toLowerCase().includes(artisan.trade.toLowerCase());
    
    const matchesSearch = 
      !searchTerm ||
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.trade.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesLocation = 
      !initialLocation || 
      artisan.location.toLowerCase().includes(initialLocation.toLowerCase());

    return matchesTrade && matchesSearch && (matchesLocation || !searchTerm);
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="bg-[#FAF9F5] rounded-3xl max-w-2xl w-full p-5 sm:p-7 relative shadow-2xl transition-all max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#111A14]">
              Find Verified Artisans
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
              Showing vetted professionals backed by real customer reviews
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-200/80 hover:bg-neutral-300 flex items-center justify-center text-neutral-700 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search & Category Filter */}
        <div className="py-4 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by trade, skill (e.g. Inverters, Plumbing, Braids)..."
              className="w-full text-sm font-medium border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 bg-white focus:outline-none focus:border-[#0D4A30] shadow-2xs"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
            {['All', 'Electrician', 'Plumbing', 'Carpentry', 'Tailoring', 'Auto mechanics', 'Hair & beauty'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTradeFilter(cat)}
                className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition cursor-pointer ${
                  selectedTradeFilter === cat
                    ? 'bg-[#0D4A30] text-white'
                    : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Artisans List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {filteredArtisans.length === 0 ? (
            <div className="text-center py-12 text-neutral-500 text-sm">
              No artisans found matching your query. Try a different search term.
            </div>
          ) : (
            filteredArtisans.map((artisan) => (
              <div
                key={artisan.id}
                className="bg-white rounded-2xl p-4 border border-neutral-200/80 hover:border-[#0D4A30]/50 hover:shadow-sm transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${artisan.avatarBg} text-white font-bold flex items-center justify-center text-base shrink-0 shadow-xs`}>
                    {artisan.avatarInitials}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-neutral-900 text-base">{artisan.name}</h4>
                      <CheckCircle className="w-3.5 h-3.5 text-[#0D4A30] fill-[#0D4A30]" />
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold ml-1">
                        • {artisan.available}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span className="font-medium text-neutral-800">{artisan.trade}</span>
                      <span>·</span>
                      <span>{artisan.location}</span>
                      <span>·</span>
                      <span>{artisan.distance}</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs pt-0.5">
                      <span className="flex items-center gap-1 font-bold text-neutral-900">
                        <Star className="w-3 h-3 fill-[#F7B928] text-[#F7B928]" />
                        {artisan.rating}
                      </span>
                      <span className="text-neutral-400">({artisan.reviewsCount} reviews)</span>
                      <span className="text-neutral-400">· {artisan.experience} exp</span>
                    </div>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {artisan.skills.map((s) => (
                        <span key={s} className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="sm:self-center shrink-0">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectArtisan(artisan);
                    }}
                    className="w-full sm:w-auto bg-[#0D4A30] hover:bg-[#083622] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition shadow-2xs active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
