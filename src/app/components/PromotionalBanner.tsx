import { X, Calendar, MapPin, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner has been shown before
    const hasSeenBanner = localStorage.getItem("tedx-banner-seen");
    if (!hasSeenBanner) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("tedx-banner-seen", "true");
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50 animate-fadeIn" />

      {/* Banner Modal */}
      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-md mx-auto animate-slideUp">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Image */}
          <div className="relative bg-gradient-to-br from-[#9B1B30] via-[#7A1625] to-black h-48 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="text-center z-10">
              <Sparkles className="w-12 h-12 text-[#C9B382] mx-auto mb-3" />
              <h1 className="text-4xl font-bold text-white mb-2">
                TED<span className="text-red-500">x</span>
              </h1>
              <p className="text-xl text-white font-semibold">Molloy University</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Ideas Worth Spreading
            </h2>
            <p className="text-gray-600 mb-6">
              Join us for an inspiring evening of innovative talks from thought leaders, 
              entrepreneurs, and visionaries from our community.
            </p>

            {/* Event Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-sm">
                <Calendar className="w-5 h-5 text-[#9B1B30] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Friday, March 15, 2026</p>
                  <p className="text-gray-600">7:00 PM - 9:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-[#9B1B30] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Madison Theatre</p>
                  <p className="text-gray-600">Public Square Building</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-[#9B1B30] to-[#7A1625] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
                Register Now
              </button>
              <button
                onClick={handleClose}
                className="px-6 py-3 border-2 border-gray-200 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Later
              </button>
            </div>

            {/* Footer */}
            <p className="text-center text-xs text-gray-500 mt-4">
              Limited seating available • Free admission for students
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
