import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, ShieldCheck } from 'lucide-react';

export default function ArtisanModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    trade: 'Electrician',
    city: 'Lagos',
    experienceYears: '5',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-[#CA7320] mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">Application Received!</h3>
            <p className="text-sm text-neutral-600 max-w-sm mx-auto">
              Our onboarding team will reach out via WhatsApp / phone to verify your credentials and activate your Skillbridge profile.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-[#F7B928]/30 flex items-center justify-center text-[#CA7320]">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D4A30]">
                Artisan Network
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#111A14] tracking-tight">
              Join Skillbridge Africa
            </h3>
            <p className="text-sm text-neutral-600 mt-1 mb-5">
              Get direct clients without middlemen, build verified reviews, and grow your artisan business.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Babatunde Lawal"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full text-sm font-medium border border-neutral-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#0D4A30]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    Primary Trade
                  </label>
                  <select
                    value={formData.trade}
                    onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                    className="w-full text-sm font-medium border border-neutral-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#0D4A30] bg-white"
                  >
                    <option value="Electrician">Electrician</option>
                    <option value="Plumber">Plumber</option>
                    <option value="Tailor">Tailoring & Fashion</option>
                    <option value="Carpenter">Carpentry</option>
                    <option value="Auto Mechanic">Auto Mechanic</option>
                    <option value="Hair & Beauty">Hair & Beauty</option>
                    <option value="Painter">Painting & Tiling</option>
                    <option value="Welder">Welding & Fabrication</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full text-sm font-medium border border-neutral-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#0D4A30]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    City / State
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lagos, Abuja, Accra"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-sm font-medium border border-neutral-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#0D4A30]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +234 801 234 5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-sm font-medium border border-neutral-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#0D4A30]"
                  />
                </div>
              </div>

              <div className="bg-[#FAF8F5] border border-neutral-200/80 rounded-xl p-3 flex items-center gap-2 text-xs text-neutral-600">
                <ShieldCheck className="w-4 h-4 text-[#0D4A30] shrink-0" />
                <span>Verification requires valid national ID or acceptable means of identification</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#F7B928] hover:bg-[#E2A519] text-[#12221B] font-extrabold py-3.5 px-6 rounded-xl transition shadow-md active:scale-[0.99] cursor-pointer"
                >
                  Submit Artisan Profile
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
