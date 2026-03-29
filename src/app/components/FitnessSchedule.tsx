import { Dumbbell, Clock, MapPin, ChevronLeft, Calendar } from "lucide-react";
import { Link } from "react-router";

export function FitnessSchedule() {
  const schedule = [
    { day: "Monday - Friday", hours: "6:00 AM - 10:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
  ];

  const classes = [
    {
      id: 1,
      name: "Yoga",
      instructor: "Sarah Johnson",
      time: "Monday & Wednesday 7:00 AM",
      duration: "60 min",
    },
    {
      id: 2,
      name: "HIIT Training",
      instructor: "Mike Torres",
      time: "Tuesday & Thursday 6:00 PM",
      duration: "45 min",
    },
    {
      id: 3,
      name: "Spin Class",
      instructor: "Emma Davis",
      time: "Monday, Wednesday, Friday 5:30 PM",
      duration: "45 min",
    },
    {
      id: 4,
      name: "Strength Training",
      instructor: "John Smith",
      time: "Tuesday & Thursday 7:00 AM",
      duration: "60 min",
    },
    {
      id: 5,
      name: "Zumba",
      instructor: "Maria Garcia",
      time: "Wednesday 6:00 PM",
      duration: "60 min",
    },
  ];

  const facilities = [
    "Cardio Equipment (Treadmills, Ellipticals, Bikes)",
    "Free Weights & Strength Training",
    "Group Fitness Studio",
    "Basketball Court",
    "Indoor Track",
    "Locker Rooms & Showers",
  ];

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
            <Dumbbell className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Fitness Center</h1>
            <p className="text-red-100 text-sm mt-1">Stay active and healthy</p>
          </div>
        </div>
      </div>

      {/* Hours */}
      <div className="px-6 py-6">
        <h2 className="font-semibold text-gray-900 mb-4">Hours of Operation</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
          {schedule.map((item, index) => (
            <div key={index} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="font-medium text-gray-900">{item.day}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">{item.hours}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Group Fitness Classes */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-4">Group Fitness Classes</h2>
        <div className="space-y-3">
          {classes.map((fitnessClass) => (
            <div
              key={fitnessClass.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">{fitnessClass.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">with {fitnessClass.instructor}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  {fitnessClass.duration}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                <Clock className="w-4 h-4" />
                <span>{fitnessClass.time}</span>
              </div>
              <button className="mt-3 w-full bg-[#9B1B30] text-white py-2 rounded-lg font-medium text-sm hover:bg-[#7A1625] transition-colors">
                Reserve Spot
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Facilities */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-4">Facilities & Equipment</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <ul className="space-y-2">
            {facilities.map((facility, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-[#9B1B30] rounded-full"></div>
                <span>{facility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Location */}
      <div className="px-6 pb-6">
        <div className="bg-[#003DA5] text-white rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5" />
            <h3 className="font-semibold">Location</h3>
          </div>
          <p className="text-blue-100">Athletic & Recreation Center</p>
          <p className="text-blue-100 text-sm mt-1">1000 Hempstead Avenue, Rockville Centre, NY</p>
        </div>
      </div>
    </div>
  );
}
