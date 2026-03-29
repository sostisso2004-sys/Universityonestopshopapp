import { ChevronLeft, Home, Key, AlertCircle, Users, Phone, Mail, FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router";

export function ResidenceLife() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#9B1B30] to-[#7A1625] text-white px-6 pt-8 pb-6">
        <Link to="/profile" className="inline-flex items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back to Profile</span>
        </Link>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 p-3 rounded-full">
            <Home className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Residence Life</h1>
            <p className="text-red-100 text-sm mt-1">Your on-campus home</p>
          </div>
        </div>
      </div>

      {/* Important Announcements */}
      <div className="px-6 py-6">
        <h2 className="font-semibold text-gray-900 mb-3">Important Announcements</h2>
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Weather Alert - Monday Closure</h3>
              <p className="text-sm text-amber-800 mb-2">
                Due to severe weather conditions, the <strong>Anselma Room</strong> and <strong>Starbucks</strong> will be closed this Monday, March 3rd.
              </p>
              <p className="text-sm text-amber-800">
                ☑️ <strong>Primepick</strong> will remain open 24/7 as an alternative dining option. Please stock up on essentials today!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Room Assignment */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-3">Your Room</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#9B1B30] p-3 rounded-lg">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Maria Regina Hall</h3>
              <p className="text-sm text-gray-600">Room 318</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3 mt-4">
            <div className="flex items-center gap-2 mb-2">
              <Key className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Room PIN</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 tracking-wider">0000</p>
            <p className="text-xs text-gray-500 mt-1">Keep this confidential</p>
          </div>
        </div>
      </div>

      {/* Overnight Guests */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-3">Overnight Guests</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-start gap-3 mb-4">
            <Users className="w-5 h-5 text-gray-600 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Guest Policy</h3>
              <p className="text-sm text-gray-600 mt-2">
                You are allowed <strong>3 overnight guests per semester</strong>. All guests must be registered 48 hours in advance.
              </p>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Guests Remaining:</strong> <span className="text-[#9B1B30] font-semibold">3 of 3</span>
                </p>
                <p className="text-xs text-gray-500">
                  • Guests must be 18+ years old<br />
                  • Valid ID required at check-in<br />
                  • Maximum 2 consecutive nights
                </p>
              </div>
            </div>
          </div>
          
          <a
            href="https://forms.molloy.edu/overnight-guest-request"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#9B1B30] text-white py-3 rounded-lg font-medium text-sm hover:bg-[#7A1625] transition-colors flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Request Overnight Guest
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Residence Life Staff */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-3">Residence Life Staff</h2>
        
        {/* Your RA */}
        <div className="bg-gradient-to-r from-[#C9B382] to-[#B8A070] text-white rounded-xl shadow-sm p-4 mb-3">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
              alt="Jessica Rivera"
              className="w-16 h-16 rounded-full object-cover border-2 border-white"
            />
            <div className="flex-1">
              <p className="text-xs text-yellow-100 mb-1">Your Resident Assistant</p>
              <h3 className="font-semibold text-lg">Jessica Rivera</h3>
              <p className="text-sm text-yellow-100">Maria Regina Hall - Floor 3</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4" />
              <a href="tel:516-555-0123" className="hover:underline">516-555-0123</a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" />
              <a href="mailto:jessica.rivera@lions.molloy.edu" className="hover:underline">
                jessica.rivera@lions.molloy.edu
              </a>
            </div>
          </div>
        </div>

        {/* Head RA */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-3">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
              alt="Michael Thompson"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-1">Head Resident Assistant</p>
              <h3 className="font-semibold text-gray-900 text-lg">Michael Thompson</h3>
              <p className="text-sm text-gray-600">Maria Regina Hall</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Phone className="w-4 h-4 text-gray-600" />
              <a href="tel:516-555-0145" className="hover:text-[#9B1B30]">516-555-0145</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Mail className="w-4 h-4 text-gray-600" />
              <a href="mailto:michael.thompson@lions.molloy.edu" className="hover:text-[#9B1B30]">
                michael.thompson@lions.molloy.edu
              </a>
            </div>
          </div>
        </div>

        {/* General Residence Life Contact */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-[#9B1B30] p-3 rounded-lg">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Residence Life Office</h3>
              <p className="text-sm text-gray-600">General inquiries & support</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Phone className="w-4 h-4 text-gray-600" />
              <a href="tel:516-323-4200" className="hover:text-[#9B1B30] font-medium">516-323-4200</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Mail className="w-4 h-4 text-gray-600" />
              <a href="mailto:reslife@molloy.edu" className="hover:text-[#9B1B30]">
                reslife@molloy.edu
              </a>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              <strong>Office Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM<br />
              <strong>Emergency Contact:</strong> Campus Public Safety 516-323-3500 (24/7)
            </p>
          </div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="px-6 pb-6">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
          <h3 className="font-semibold text-blue-900 mb-2">Resident Tips</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>✓ Keep your room PIN secure - don't share it</li>
            <li>✓ Quiet hours: 10 PM - 8 AM on weekdays</li>
            <li>✓ Lock your door when you leave</li>
            <li>✓ Report maintenance issues immediately</li>
            <li>✓ Respect your roommates and neighbors</li>
          </ul>
        </div>
      </div>
    </div>
  );
}