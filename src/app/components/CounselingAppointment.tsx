import { Heart, ChevronLeft, Clock, Phone, Mail, MapPin, User } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export function CounselingAppointment() {
  const [selectedCounselor, setSelectedCounselor] = useState("any");
  const [selectedDate, setSelectedDate] = useState("March 3");
  const [selectedTime, setSelectedTime] = useState("");

  const counselors = [
    { id: "any", name: "Any Counselor", specialty: "First available" },
    { id: "dr-smith", name: "Dr. Sarah Smith", specialty: "Anxiety & Stress" },
    { id: "dr-johnson", name: "Dr. Michael Johnson", specialty: "Academic Support" },
    { id: "dr-rodriguez", name: "Dr. Elena Rodriguez", specialty: "Relationships" },
    { id: "dr-chen", name: "Dr. James Chen", specialty: "Depression & Mood" },
  ];

  const weekDates = [
    { date: "March 3", day: "Mon" },
    { date: "March 4", day: "Tue" },
    { date: "March 5", day: "Wed" },
    { date: "March 6", day: "Thu" },
    { date: "March 7", day: "Fri" },
  ];

  // Schedule data - different availability for different counselors
  const schedules: Record<string, Record<string, string[]>> = {
    "any": {
      "March 3": ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"],
      "March 4": ["9:00 AM", "10:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
      "March 5": ["9:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"],
      "March 6": ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "4:00 PM"],
      "March 7": ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM"],
    },
    "dr-smith": {
      "March 3": ["9:00 AM", "10:00 AM", "11:00 AM"],
      "March 4": ["1:00 PM", "2:00 PM", "3:00 PM"],
      "March 5": ["9:00 AM", "11:00 AM", "2:00 PM"],
      "March 6": ["10:00 AM", "11:00 AM", "1:00 PM"],
      "March 7": ["9:00 AM", "10:00 AM"],
    },
    "dr-johnson": {
      "March 3": ["1:00 PM", "2:00 PM", "3:00 PM"],
      "March 4": ["9:00 AM", "10:00 AM"],
      "March 5": ["1:00 PM", "3:00 PM"],
      "March 6": ["9:00 AM", "3:00 PM", "4:00 PM"],
      "March 7": ["11:00 AM", "1:00 PM", "2:00 PM"],
    },
    "dr-rodriguez": {
      "March 3": ["10:00 AM", "2:00 PM"],
      "March 4": ["9:00 AM", "1:00 PM", "4:00 PM"],
      "March 5": ["11:00 AM", "2:00 PM", "3:00 PM"],
      "March 6": ["10:00 AM", "1:00 PM"],
      "March 7": ["9:00 AM", "2:00 PM"],
    },
    "dr-chen": {
      "March 3": ["11:00 AM", "1:00 PM", "3:00 PM"],
      "March 4": ["10:00 AM", "2:00 PM", "3:00 PM"],
      "March 5": ["9:00 AM", "1:00 PM"],
      "March 6": ["11:00 AM", "3:00 PM", "4:00 PM"],
      "March 7": ["10:00 AM", "11:00 AM", "1:00 PM"],
    },
  };

  const availableTimes = schedules[selectedCounselor]?.[selectedDate] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 pt-8 pb-6">
        <Link to="/campus" className="inline-flex items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back to Campus</span>
        </Link>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 p-3 rounded-full">
            <Heart className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Counseling Center</h1>
            <p className="text-pink-100 text-sm mt-1">Your mental health matters</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="px-6 py-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-3">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <a href="tel:516-323-4040" className="text-gray-900 font-medium hover:text-[#9B1B30]">
                516-323-4040
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a href="mailto:counseling@molloy.edu" className="text-gray-900 font-medium hover:text-[#9B1B30]">
                counseling@molloy.edu
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="text-gray-900 font-medium">Public Square, 030</p>
            </div>
          </div>
        </div>
      </div>

      {/* Counselor Selection */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-4">Select a Counselor</h2>
        <div className="space-y-2">
          {counselors.map((counselor) => (
            <button
              key={counselor.id}
              onClick={() => setSelectedCounselor(counselor.id)}
              className={`w-full bg-white rounded-xl shadow-sm border p-4 flex items-center gap-3 transition-all ${
                selectedCounselor === counselor.id
                  ? "border-pink-600 ring-2 ring-pink-600"
                  : "border-gray-100 hover:border-pink-300"
              }`}
            >
              <div className={`p-2 rounded-full ${
                selectedCounselor === counselor.id
                  ? "bg-pink-100"
                  : "bg-gray-100"
              }`}>
                <User className={`w-5 h-5 ${
                  selectedCounselor === counselor.id
                    ? "text-pink-600"
                    : "text-gray-600"
                }`} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-gray-900">{counselor.name}</h3>
                <p className="text-sm text-gray-500">{counselor.specialty}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-4">Select a Date</h2>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {weekDates.map((item) => (
            <button
              key={item.date}
              onClick={() => setSelectedDate(item.date)}
              className={`flex-shrink-0 flex flex-col items-center gap-1 px-4 py-3 rounded-xl border-2 transition-all min-w-[70px] ${
                selectedDate === item.date
                  ? "border-pink-600 bg-pink-50"
                  : "border-gray-200 bg-white hover:border-pink-300"
              }`}
            >
              <span className="text-xs text-gray-500">{item.day}</span>
              <span className={`font-semibold ${
                selectedDate === item.date
                  ? "text-pink-600"
                  : "text-gray-900"
              }`}>
                {item.date.split(" ")[1]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-4">
          Available Times on {selectedDate}
        </h2>
        {availableTimes.length > 0 ? (
          <div className="grid grid-cols-3 gap-2">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-3 rounded-lg border-2 font-medium text-sm transition-all ${
                  selectedTime === time
                    ? "border-pink-600 bg-pink-600 text-white"
                    : "border-gray-200 bg-white text-gray-900 hover:border-pink-300"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        ) : (
          <div className="bg-gray-100 rounded-xl p-6 text-center">
            <p className="text-gray-600">No available times for this date</p>
            <p className="text-sm text-gray-500 mt-1">Please select a different date</p>
          </div>
        )}
      </div>

      {/* Confirmation */}
      {selectedTime && (
        <div className="px-6 pb-6">
          <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-4">
            <h3 className="font-semibold text-pink-900 mb-2">Appointment Summary</h3>
            <div className="space-y-1 text-sm text-pink-800">
              <p>• Counselor: {counselors.find(c => c.id === selectedCounselor)?.name}</p>
              <p>• Date: {selectedDate}, 2026</p>
              <p>• Time: {selectedTime}</p>
            </div>
            <button className="mt-4 w-full bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors">
              Confirm Appointment
            </button>
          </div>
        </div>
      )}

      {/* Crisis Support */}
      <div className="px-6 pb-6">
        <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4">
          <h3 className="font-semibold text-red-900 mb-2">Crisis Support</h3>
          <p className="text-sm text-red-800 mb-3">
            If you're experiencing a mental health emergency, please contact:
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-red-900 font-medium">• Campus Public Safety: 516-323-3500</p>
            <p className="text-red-900 font-medium">• National Suicide Prevention: 988</p>
            <p className="text-red-900 font-medium">• Crisis Text Line: Text HOME to 741741</p>
          </div>
        </div>
      </div>

      {/* Hours */}
      <div className="px-6 pb-6">
        <div className="bg-[#003DA5] text-white rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5" />
            <h3 className="font-semibold">Hours</h3>
          </div>
          <div className="text-sm space-y-1 text-blue-100">
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>After-hours crisis support available 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
}