import { Bus, Clock, MapPin, ChevronLeft, Calendar } from "lucide-react";
import { Link } from "react-router";
import { getNextShuttle } from "../utils/shuttleUtils";
import { useState, useEffect } from "react";

export function ShuttleSchedule() {
  const [nextShuttles, setNextShuttles] = useState<Array<{ route: string; nextTime: string; countdown: string; dayOfWeek: number; isFutureDay: boolean }>>([]);

  useEffect(() => {
    const updateShuttles = () => {
      const shuttles = [
        getNextShuttle("rvc"),
        getNextShuttle("hempstead"),
        getNextShuttle("mall"),
      ].filter(s => s !== null) as Array<{ route: string; nextTime: string; countdown: string; dayOfWeek: number; isFutureDay: boolean }>;
      setNextShuttles(shuttles);
    };

    updateShuttles();
    const interval = setInterval(updateShuttles, 30000);

    return () => clearInterval(interval);
  }, []);

  const isNextDeparture = (routeName: string, time: string, dayName: string) => {
    const nextShuttle = nextShuttles.find(s => s.route === routeName);
    if (!nextShuttle) return false;
    
    // Convert dayOfWeek to day name for comparison
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const nextShuttleDay = dayNames[nextShuttle.dayOfWeek];
    
    // Map schedule day names to match
    const isDayMatch = 
      (dayName === "Monday - Thursday" && (nextShuttleDay === "Monday" || nextShuttleDay === "Tuesday" || nextShuttleDay === "Wednesday" || nextShuttleDay === "Thursday")) ||
      (dayName === "Friday" && nextShuttleDay === "Friday") ||
      (dayName === "Saturday & Sunday" && (nextShuttleDay === "Saturday" || nextShuttleDay === "Sunday"));
    
    return isDayMatch && nextShuttle.nextTime === time;
  };

  const shuttleRoutes = [
    {
      id: 1,
      name: "RVC LIRR Station",
      schedule: [
        { 
          day: "Monday - Thursday", 
          departures: [
            { molloy: "6:40 AM", rvc: "7:00 AM" },
            { molloy: "7:10 AM", rvc: "7:20 AM" },
            { molloy: "7:20 AM", rvc: "7:35 AM" },
            { molloy: "7:45 AM", rvc: "8:00 AM" },
            { molloy: "8:15 AM", rvc: "8:30 AM" },
            { molloy: "8:40 AM", rvc: "8:55 AM" },
            { molloy: "9:30 AM", rvc: "9:45 AM" },
            { molloy: "10:00 AM", rvc: "10:15 AM" },
            { molloy: "10:40 AM", rvc: "10:55 AM" },
            { molloy: "11:10 AM", rvc: "11:20 AM" },
            { molloy: "11:40 AM", rvc: "11:55 AM" },
            { molloy: "12:00 PM", rvc: "12:15 PM" },
            { molloy: "12:40 PM", rvc: "12:55 PM" },
            { molloy: "1:00 PM", rvc: "1:15 PM" },
            { molloy: "1:30 PM", rvc: "1:45 PM" },
            { molloy: "2:00 PM", rvc: "2:15 PM" },
            { molloy: "2:30 PM", rvc: "2:45 PM" },
            { molloy: "3:00 PM", rvc: "3:15 PM" },
            { molloy: "3:30 PM", rvc: "3:45 PM" },
            { molloy: "4:00 PM", rvc: "4:30 PM" },
            { molloy: "4:45 PM", rvc: "5:00 PM" },
            { molloy: "5:15 PM", rvc: "5:30 PM" },
            { molloy: "5:50 PM", rvc: "6:05 PM" },
            { molloy: "6:20 PM", rvc: "6:30 PM" },
            { molloy: "6:45 PM", rvc: "7:00 PM" },
            { molloy: "7:10 PM", rvc: "7:20 PM" },
            { molloy: "7:25 PM", rvc: "7:40 PM" },
            { molloy: "8:00 PM", rvc: "8:15 PM" },
            { molloy: "8:30 PM", rvc: "8:45 PM" },
            { molloy: "9:00 PM", rvc: "9:15 PM" },
            { molloy: "9:30 PM", rvc: "9:45 PM" },
            { molloy: "10:00 PM", rvc: "10:15 PM" },
            { molloy: "10:30 PM", rvc: "10:45 PM" },
          ]
        },
        { 
          day: "Friday", 
          departures: [
            { molloy: "6:40 AM", rvc: "7:00 AM" },
            { molloy: "7:10 AM", rvc: "7:20 AM" },
            { molloy: "7:20 AM", rvc: "7:35 AM" },
            { molloy: "7:45 AM", rvc: "8:00 AM" },
            { molloy: "8:15 AM", rvc: "8:30 AM" },
            { molloy: "8:40 AM", rvc: "8:55 AM" },
            { molloy: "9:30 AM", rvc: "9:45 AM" },
            { molloy: "10:00 AM", rvc: "10:15 AM" },
            { molloy: "10:40 AM", rvc: "10:55 AM" },
            { molloy: "11:10 AM", rvc: "11:20 AM" },
            { molloy: "11:40 AM", rvc: "11:55 AM" },
            { molloy: "12:00 PM", rvc: "12:15 PM" },
            { molloy: "12:40 PM", rvc: "12:55 PM" },
            { molloy: "1:00 PM", rvc: "1:15 PM" },
            { molloy: "1:30 PM", rvc: "1:45 PM" },
            { molloy: "2:00 PM", rvc: "2:15 PM" },
            { molloy: "2:30 PM", rvc: "2:45 PM" },
            { molloy: "3:00 PM", rvc: "3:15 PM" },
            { molloy: "3:30 PM", rvc: "3:45 PM" },
            { molloy: "4:00 PM", rvc: "4:30 PM" },
            { molloy: "4:45 PM", rvc: "5:00 PM" },
            { molloy: "5:15 PM", rvc: "5:30 PM" },
            { molloy: "5:45 PM", rvc: "6:00 PM" },
            { molloy: "7:00 PM", rvc: "7:10 PM" },
            { molloy: "8:10 PM", rvc: "8:20 PM" },
            { molloy: "9:30 PM", rvc: "9:40 PM" },
          ]
        },
        { 
          day: "Saturday & Sunday", 
          departures: [
            { molloy: "12:00 PM", rvc: "12:15 PM" },
            { molloy: "1:45 PM", rvc: "2:00 PM" },
            { molloy: "3:30 PM", rvc: "3:45 PM" },
          ]
        },
      ],
      color: "bg-[#003DA5]",
    },
    {
      id: 2,
      name: "Hempstead Transit Center",
      schedule: [
        { 
          day: "Monday - Thursday", 
          departures: [
            { molloy: "6:45 AM", hempstead: "7:00 AM" },
            { molloy: "7:15 AM", hempstead: "7:30 AM" },
            { molloy: "7:45 AM", hempstead: "8:00 AM" },
            { molloy: "8:15 AM", hempstead: "8:35 AM" },
            { molloy: "8:50 AM", hempstead: "9:10 AM" },
            { molloy: "9:25 AM", hempstead: "9:40 AM" },
            { molloy: "10:00 AM", hempstead: "10:15 AM" },
            { molloy: "10:30 AM", hempstead: "10:50 AM" },
            { molloy: "11:20 AM", hempstead: "11:45 AM" },
            { molloy: "12:00 PM", hempstead: "12:15 PM" },
            { molloy: "12:30 PM", hempstead: "12:45 PM" },
            { molloy: "1:20 PM", hempstead: "1:45 PM" },
            { molloy: "2:15 PM", hempstead: "2:45 PM" },
            { molloy: "3:30 PM", hempstead: "4:00 PM" },
            { molloy: "4:40 PM", hempstead: "5:05 PM" },
            { molloy: "5:25 PM", hempstead: "5:35 PM" },
            { molloy: "5:50 PM", hempstead: "6:00 PM" },
            { molloy: "6:15 PM", hempstead: "6:30 PM" },
            { molloy: "6:50 PM", hempstead: "7:15 PM" },
            { molloy: "7:30 PM", hempstead: "8:00 PM" },
            { molloy: "8:15 PM", hempstead: "8:45 PM" },
          ]
        },
        { 
          day: "Friday", 
          departures: [
            { molloy: "6:45 AM", hempstead: "7:00 AM" },
            { molloy: "7:15 AM", hempstead: "7:30 AM" },
            { molloy: "7:45 AM", hempstead: "8:00 AM" },
            { molloy: "8:15 AM", hempstead: "8:35 AM" },
            { molloy: "8:50 AM", hempstead: "9:10 AM" },
            { molloy: "9:25 AM", hempstead: "9:40 AM" },
            { molloy: "10:00 AM", hempstead: "10:15 AM" },
            { molloy: "10:30 AM", hempstead: "10:50 AM" },
            { molloy: "11:20 AM", hempstead: "11:45 AM" },
            { molloy: "12:00 PM", hempstead: "12:15 PM" },
            { molloy: "12:30 PM", hempstead: "12:45 PM" },
            { molloy: "1:20 PM", hempstead: "1:45 PM" },
            { molloy: "2:15 PM", hempstead: "2:45 PM" },
            { molloy: "3:30 PM", hempstead: "4:00 PM" },
            { molloy: "4:40 PM", hempstead: "5:05 PM" },
            { molloy: "5:25 PM", hempstead: "5:35 PM" },
          ]
        },
        { 
          day: "Saturday & Sunday", 
          departures: "No Service"
        },
      ],
      color: "bg-[#9B1B30]",
    },
    {
      id: 3,
      name: "Mall/Target",
      schedule: [
        { 
          day: "Monday - Thursday", 
          departures: "No Service"
        },
        { 
          day: "Friday", 
          departures: [
            { molloy: "6:10 PM", mall: "6:30 PM" },
            { molloy: "7:20 PM", mall: "7:45 PM" },
            { molloy: "8:30 PM", mall: "9:00 PM" },
          ]
        },
        { 
          day: "Saturday & Sunday", 
          departures: [
            { molloy: "11:00 AM", mall: "11:30 AM" },
            { molloy: "12:30 PM", mall: "1:00 PM" },
            { molloy: "2:30 PM", mall: "3:00 PM" },
            { mall: "4:15 PM" }, // Return only
          ]
        },
      ],
      color: "bg-[#C9B382]",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003DA5] to-[#0052CC] text-white px-6 pt-8 pb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back to Home</span>
        </Link>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 p-3 rounded-full">
            <Bus className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Shuttle Schedule</h1>
            <p className="text-blue-100 text-sm mt-1">Campus transportation services</p>
          </div>
        </div>
      </div>

      {/* Next Departures */}
      {nextShuttles.length > 0 && (
        <div className="px-6 py-6">
          <h2 className="font-semibold text-gray-900 mb-4">Next Departures from Molloy</h2>
          <div className="space-y-3">
            {nextShuttles.map((shuttle, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <Bus className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{shuttle.route}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{shuttle.countdown}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-[#003DA5]">{shuttle.nextTime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {nextShuttles.length === 0 && (
        <div className="px-6 py-6">
          <div className="bg-gray-100 rounded-xl p-6 text-center">
            <Clock className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600 font-medium">No shuttles currently running</p>
            <p className="text-sm text-gray-500 mt-1">Check the full schedule below</p>
          </div>
        </div>
      )}

      {/* Full Schedule */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-4">Full Schedule</h2>
        <div className="space-y-4">
          {shuttleRoutes.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className={`${route.color} text-white px-4 py-3`}>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <h3 className="font-semibold">{route.name}</h3>
                </div>
              </div>
              
              <div className="p-4 space-y-4">
                {route.schedule.map((daySchedule, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <h4 className="font-medium text-gray-900">{daySchedule.day}</h4>
                    </div>
                    
                    {daySchedule.departures === "No Service" ? (
                      <p className="text-sm text-gray-500 italic">No service on these days</p>
                    ) : Array.isArray(daySchedule.departures) ? (
                      <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-600 mb-2 pb-2 border-b border-gray-200">
                          <div>From Molloy</div>
                          <div>From {route.name.includes("RVC") ? "RVC" : route.name.includes("Hempstead") ? "Hempstead" : "Mall/Target"}</div>
                        </div>
                        {daySchedule.departures.map((time, timeIndex) => {
                          const isMolloyNext = time.molloy && isNextDeparture(route.name, time.molloy, daySchedule.day);
                          return (
                            <div key={timeIndex} className="grid grid-cols-2 gap-2 text-sm">
                              <span className={`px-3 py-1.5 rounded-lg font-medium ${
                                isMolloyNext 
                                  ? 'bg-[#9B1B30] text-white shadow-md' 
                                  : 'bg-blue-50 text-gray-700'
                              }`}>
                                {time.molloy || "—"}
                              </span>
                              <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg">
                                {time.rvc || time.hempstead || time.mall || "—"}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Notes */}
      <div className="px-6 pb-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <h3 className="font-semibold text-yellow-900 mb-2">Important Information</h3>
          <ul className="text-sm text-yellow-800 space-y-1">
            <li>• Shuttle service is available to all students with valid Molloy ID</li>
            <li>• Schedule may vary during holidays and semester breaks</li>
            <li>• For real-time updates, contact Public Safety at 516-323-3500</li>
            <li>• Please arrive 5 minutes before departure time</li>
            <li>• Mall/Target pickup: Target's main entrance (Westbury) & Macy's entrance (Roosevelt Field)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}