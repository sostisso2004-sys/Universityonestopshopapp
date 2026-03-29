import { Briefcase, ChevronLeft, Clock, Phone, Mail, MapPin, User, Shirt } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export function CareerAppointment() {
  const [selectedAdvisor, setSelectedAdvisor] = useState("any");
  const [selectedDate, setSelectedDate] = useState("March 3");
  const [selectedTime, setSelectedTime] = useState("");

  const advisors = [
    { id: "any", name: "Any Advisor", specialty: "First available" },
    { id: "ms-parker", name: "Ms. Jennifer Parker", specialty: "Resume & Cover Letters" },
    { id: "mr-williams", name: "Mr. David Williams", specialty: "Interview Prep" },
    { id: "ms-garcia", name: "Ms. Ana Garcia", specialty: "Internship Search" },
    { id: "mr-thompson", name: "Mr. Robert Thompson", specialty: "Graduate School" },
  ];

  const weekDates = [
    { date: "March 3", day: "Mon" },
    { date: "March 4", day: "Tue" },
    { date: "March 5", day: "Wed" },
    { date: "March 6", day: "Thu" },
    { date: "March 7", day: "Fri" },
  ];

  // Schedule data - different availability for different advisors
  const schedules: Record<string, Record<string, string[]>> = {
    "any": {
      "March 3": ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
      "March 4": ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"],
      "March 5": ["9:00 AM", "10:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
      "March 6": ["9:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
      "March 7": ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM"],
    },
    "ms-parker": {
      "March 3": ["9:00 AM", "10:00 AM", "11:00 AM"],
      "March 4": ["1:00 PM", "2:00 PM", "3:00 PM"],
      "March 5": ["9:00 AM", "2:00 PM", "3:00 PM"],
      "March 6": ["11:00 AM", "1:00 PM", "2:00 PM"],
      "March 7": ["9:00 AM", "10:00 AM"],
    },
    "mr-williams": {
      "March 3": ["1:00 PM", "2:00 PM", "3:00 PM"],
      "March 4": ["9:00 AM", "10:00 AM", "11:00 AM"],
      "March 5": ["1:00 PM", "3:00 PM", "4:00 PM"],
      "March 6": ["9:00 AM", "3:00 PM", "4:00 PM"],
      "March 7": ["11:00 AM", "1:00 PM", "2:00 PM"],
    },
    "ms-garcia": {
      "March 3": ["10:00 AM", "2:00 PM", "4:00 PM"],
      "March 4": ["9:00 AM", "1:00 PM", "2:00 PM"],
      "March 5": ["10:00 AM", "1:00 PM", "2:00 PM"],
      "March 6": ["11:00 AM", "1:00 PM", "4:00 PM"],
      "March 7": ["9:00 AM", "2:00 PM"],
    },
    "mr-thompson": {
      "March 3": ["11:00 AM", "1:00 PM", "3:00 PM"],
      "March 4": ["10:00 AM", "11:00 AM"],
      "March 5": ["9:00 AM", "10:00 AM", "4:00 PM"],
      "March 6": ["9:00 AM", "2:00 PM", "3:00 PM"],
      "March 7": ["10:00 AM", "11:00 AM", "1:00 PM"],
    },
  };

  const availableTimes = schedules[selectedAdvisor]?.[selectedDate] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#9B1B30] to-[#7A1625] text-white px-6 pt-8 pb-6">
        <Link to="/campus" className="inline-flex items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back to Campus</span>
        </Link>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 p-3 rounded-full">
            <Briefcase className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Career Center</h1>
            <p className="text-red-100 text-sm mt-1">Plan your professional future</p>
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
              <a href="tel:516-323-4150" className="text-gray-900 font-medium hover:text-[#9B1B30]">
                516-323-4150
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a href="mailto:careers@molloy.edu" className="text-gray-900 font-medium hover:text-[#9B1B30]">
                careers@molloy.edu
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="text-gray-900 font-medium">Public Square 330</p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Closet */}
      <div className="px-6 pb-6">
        <div className="bg-gradient-to-r from-[#C9B382] to-[#B8A070] text-white rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-white/20 p-2 rounded-full">
              <Shirt className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">Career Closet</h3>
          </div>
          <p className="text-sm text-yellow-100">
            Free professional clothing donated for students! Visit us to browse suits, blazers, dress shirts, and more for interviews and career events.
          </p>
        </div>
      </div>

      {/* Advisor Selection */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-4">Select a Career Advisor</h2>
        <div className="space-y-2">
          {advisors.map((advisor) => (
            <button
              key={advisor.id}
              onClick={() => setSelectedAdvisor(advisor.id)}
              className={`w-full bg-white rounded-xl shadow-sm border p-4 flex items-center gap-3 transition-all ${
                selectedAdvisor === advisor.id
                  ? "border-[#9B1B30] ring-2 ring-[#9B1B30]"
                  : "border-gray-100 hover:border-[#C9B382]"
              }`}
            >
              <div className={`p-2 rounded-full ${
                selectedAdvisor === advisor.id
                  ? "bg-red-100"
                  : "bg-gray-100"
              }`}>
                <User className={`w-5 h-5 ${
                  selectedAdvisor === advisor.id
                    ? "text-[#9B1B30]"
                    : "text-gray-600"
                }`} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-gray-900">{advisor.name}</h3>
                <p className="text-sm text-gray-500">{advisor.specialty}</p>
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
                  ? "border-[#9B1B30] bg-red-50"
                  : "border-gray-200 bg-white hover:border-[#C9B382]"
              }`}
            >
              <span className="text-xs text-gray-500">{item.day}</span>
              <span className={`font-semibold ${
                selectedDate === item.date
                  ? "text-[#9B1B30]"
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
                    ? "border-[#9B1B30] bg-[#9B1B30] text-white"
                    : "border-gray-200 bg-white text-gray-900 hover:border-[#C9B382]"
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
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
            <h3 className="font-semibold text-[#9B1B30] mb-2">Appointment Summary</h3>
            <div className="space-y-1 text-sm text-gray-700">
              <p>• Advisor: {advisors.find(a => a.id === selectedAdvisor)?.name}</p>
              <p>• Date: {selectedDate}, 2026</p>
              <p>• Time: {selectedTime}</p>
            </div>
            <button className="mt-4 w-full bg-[#9B1B30] text-white py-3 rounded-lg font-medium hover:bg-[#7A1625] transition-colors">
              Confirm Appointment
            </button>
          </div>
        </div>
      )}

      {/* Hours */}
      <div className="px-6 pb-6">
        <div className="bg-[#003DA5] text-white rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5" />
            <h3 className="font-semibold">Hours</h3>
          </div>
          <div className="text-sm space-y-1 text-blue-100">
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Walk-ins welcome or schedule in advance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
