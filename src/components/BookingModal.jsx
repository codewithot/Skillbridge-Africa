import React, { useState } from 'react';
import { X, CheckCircle, MapPin, Shield } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, artisan }) {
  const [date, setDate] = useState('Tomorrow');
  const [time, setTime] = useState('10:00 AM');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('14 Commercial Ave, Yaba, Lagos');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !artisan) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0D4A30] mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">Booking Request Sent!</h3>
            <p className="text-sm text-neutral-600 max-w-sm mx-auto">
              {artisan.name} has been notified. You will receive an SMS and WhatsApp confirmation shortly.
            </p>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-neutral-100">
              <div className={`w-12 h-12 rounded-2xl ${artisan.avatarBg || 'bg-[#CA7320]'} text-white font-bold flex items-center justify-center text-lg shrink-0`}>
                {artisan.avatarInitials || 'CO'}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-lg font-bold text-neutral-900">{artisan.name}</h3>
                  <CheckCircle className="w-3.5 h-3.5 text-[#0D4A30] fill-[#0D4A30]" />
                </div>
                <p className="text-xs text-neutral-500">
                  {artisan.trade} · {artisan.location || 'Yaba, Lagos'} · ★ {artisan.rating || '4.9'}
                </p>
              </div>
            </div>

            {/* Verification Guarantee */}
            <div className="my-4 bg-emerald-50/80 border border-emerald-100 rounded-xl p-3 flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-[#0D4A30] shrink-0" />
              <span className="text-xs text-[#0D4A30] font-medium">
                Skillbridge Guarantee: Verified identity and supervised escrow safety.
              </span>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  When do you need the service?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Today', 'Tomorrow', 'This weekend'].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setDate(opt)}
                      className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition cursor-pointer ${
                        date === opt
                          ? 'border-[#0D4A30] bg-[#0D4A30] text-white shadow-xs'
                          : 'border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['9:00 AM', '12:00 PM', '3:00 PM'].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTime(slot)}
                      className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition cursor-pointer ${
                        time === slot
                          ? 'border-[#0D4A30] bg-[#0D4A30] text-white shadow-xs'
                          : 'border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Your Location / Address
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter street address"
                    className="w-full text-sm font-medium border border-neutral-200 rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:border-[#0D4A30]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Describe what needs doing
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. Distribution board tripping whenever AC is turned on..."
                  className="w-full text-sm font-medium border border-neutral-200 rounded-xl p-3 focus:outline-none focus:border-[#0D4A30]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#0D4A30] hover:bg-[#083622] text-white font-bold py-3.5 px-6 rounded-xl transition shadow-md active:scale-[0.99] cursor-pointer"
                >
                  Confirm Booking with {artisan.shortName?.split(' ')[0] || 'Artisan'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
