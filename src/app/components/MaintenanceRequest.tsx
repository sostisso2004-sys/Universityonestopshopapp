import { ChevronLeft, Wrench, AlertTriangle, Droplet, Zap, Thermometer, Home, Camera, Send } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export function MaintenanceRequest() {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("maria-regina-318");
  const [priority, setPriority] = useState("normal");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { id: "plumbing", label: "Plumbing", icon: Droplet, color: "bg-blue-500" },
    { id: "electrical", label: "Electrical", icon: Zap, color: "bg-yellow-500" },
    { id: "hvac", label: "Heating/Cooling", icon: Thermometer, color: "bg-orange-500" },
    { id: "structural", label: "Structural", icon: Home, color: "bg-gray-600" },
    { id: "other", label: "Other", icon: Wrench, color: "bg-purple-500" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setCategory("");
      setDescription("");
      setPriority("normal");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#9B1B30] to-[#7A1625] text-white px-6 pt-8 pb-6">
        <Link to="/campus" className="inline-flex items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back to Campus</span>
        </Link>
        
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-3 rounded-full">
            <Wrench className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Maintenance Request</h1>
            <p className="text-red-100 text-sm mt-1">Submit a work order</p>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {submitted && (
        <div className="px-6 py-4 bg-green-50 border-b-2 border-green-200">
          <div className="flex items-center gap-3 text-green-800">
            <div className="bg-green-500 p-2 rounded-full">
              <Send className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Request Submitted!</h3>
              <p className="text-sm">Your work order has been received. Ticket #MR{Date.now().toString().slice(-6)}</p>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9B1B30] focus:border-transparent"
            required
          >
            <option value="maria-regina-318">Maria Regina Hall - Room 318 (Your Room)</option>
            <option value="maria-regina-common">Maria Regina Hall - Common Area</option>
            <option value="maria-regina-bathroom">Maria Regina Hall - Floor 3 Bathroom</option>
            <option value="maria-regina-laundry">Maria Regina Hall - Laundry Room</option>
            <option value="other">Other Location</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Issue Category
          </label>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    category === cat.id
                      ? "border-[#9B1B30] bg-red-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className={`${cat.color} p-2.5 rounded-lg w-fit mb-2`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Priority */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Priority Level
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-gray-200 cursor-pointer hover:border-gray-300 transition-colors">
              <input
                type="radio"
                name="priority"
                value="emergency"
                checked={priority === "emergency"}
                onChange={(e) => setPriority(e.target.value)}
                className="w-5 h-5 text-[#9B1B30] focus:ring-[#9B1B30]"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-gray-900">Emergency</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Immediate safety hazard or severe damage</p>
              </div>
            </label>

            <label className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-gray-200 cursor-pointer hover:border-gray-300 transition-colors">
              <input
                type="radio"
                name="priority"
                value="urgent"
                checked={priority === "urgent"}
                onChange={(e) => setPriority(e.target.value)}
                className="w-5 h-5 text-[#9B1B30] focus:ring-[#9B1B30]"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold text-gray-900">Urgent</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Needs attention within 24 hours</p>
              </div>
            </label>

            <label className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-gray-200 cursor-pointer hover:border-gray-300 transition-colors">
              <input
                type="radio"
                name="priority"
                value="normal"
                checked={priority === "normal"}
                onChange={(e) => setPriority(e.target.value)}
                className="w-5 h-5 text-[#9B1B30] focus:ring-[#9B1B30]"
              />
              <div className="flex-1">
                <span className="font-semibold text-gray-900">Normal</span>
                <p className="text-xs text-gray-500 mt-1">Standard repair request (2-5 business days)</p>
              </div>
            </label>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Please describe the issue in detail..."
            rows={5}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9B1B30] focus:border-transparent resize-none"
            required
          />
          <p className="text-xs text-gray-500 mt-2">Be as specific as possible to help us resolve your issue quickly.</p>
        </div>

        {/* Photo Upload (Optional) */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Photos (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 bg-white hover:border-[#9B1B30] transition-colors cursor-pointer">
            <div className="text-center">
              <Camera className="w-10 h-10 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">Tap to upload photos</p>
              <p className="text-xs text-gray-500">Helps us diagnose the issue faster</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!category || !description.trim()}
          className="w-full bg-gradient-to-r from-[#9B1B30] to-[#7A1625] text-white py-4 rounded-xl font-semibold text-base hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Work Order
        </button>

        {/* Help Text */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
          <h3 className="font-semibold text-blue-900 mb-2 text-sm">Need Immediate Help?</h3>
          <p className="text-xs text-blue-800 mb-2">
            For emergencies (flooding, electrical hazards, lockouts), call:
          </p>
          <a
            href="tel:516-323-4200"
            className="text-sm font-semibold text-blue-900 hover:underline"
          >
            Residence Life: 516-323-4200
          </a>
          <br />
          <a
            href="tel:516-323-3500"
            className="text-sm font-semibold text-blue-900 hover:underline"
          >
            Public Safety (24/7): 516-323-3500
          </a>
        </div>
      </form>
    </div>
  );
}