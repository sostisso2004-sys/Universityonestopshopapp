import {
  Utensils,
  Bell,
  Clock,
  ChevronRight,
  CheckCircle2,
  ShoppingBag,
  ExternalLink,
  Phone,
  Shield,
  Bus,
  Library,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { getNextShuttle } from "../utils/shuttleUtils";

export function Home() {
  const [nextShuttles, setNextShuttles] = useState<Array<{ route: string; nextTime: string; countdown: string; dayOfWeek: number; isFutureDay: boolean }>>([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const updateShuttles = () => {
      const shuttles = [
        getNextShuttle("rvc"),
        getNextShuttle("hempstead"),
        getNextShuttle("mall"),
      ].filter(s => s !== null) as Array<{ route: string; nextTime: string; countdown: string; dayOfWeek: number; isFutureDay: boolean }>;
      setNextShuttles(shuttles);
    };

    const updateDateTime = () => {
      setCurrentDate(new Date());
    };

    updateShuttles();
    updateDateTime();
    
    const shuttleInterval = setInterval(updateShuttles, 30000); // Update every 30 seconds
    const dateInterval = setInterval(updateDateTime, 60000); // Update every minute

    return () => {
      clearInterval(shuttleInterval);
      clearInterval(dateInterval);
    };
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  const upcomingClasses = [
    { id: 1, name: "ENG 2380", time: "8:00 AM", room: "K207", day: "Tuesday" },
    { id: 2, name: "MAT 2210", time: "10:05 AM", room: "W212", day: "Tuesday" },
    { id: 3, name: "ECO 3010", time: "5:00 PM", room: "Online", day: "Tuesday" },
    { id: 4, name: "ECO 3200H", time: "6:35 PM", room: "C111", day: "Tuesday" },
  ];

  const quickActions = [
    { icon: Library, label: "JET Library", color: "bg-[#9B1B30]", link: "/library" },
    { icon: Utensils, label: "Dining Halls", color: "bg-[#C9B382]", link: "/campus" },
    { icon: ExternalLink, label: "Lions Den", color: "bg-[#9B1B30]", link: "https://lionsden.molloy.edu", external: true },
    { icon: ShoppingBag, label: "Spirit Store", color: "bg-[#C9B382]", link: "/spirit-store" },
  ];

  const todayTasks = [
    { id: 1, task: "Review ECO 3010 lecture notes", completed: false },
    { id: 2, task: "Complete MAT 2210 problem set", completed: true },
    { id: 3, task: "Finance Society meeting at 5 PM", completed: false },
  ];

  const announcements = [
    { id: 1, title: "Career Fair - Finance & Economics", time: "2 hours ago" },
    { id: 2, title: "Bloomberg Terminal Training", time: "5 hours ago" },
    { id: 3, title: "Honors Program Info Session", time: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#9B1B30] to-[#7A1625] text-white px-6 pt-8 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Welcome back, Eduardo!</h1>
            <p className="text-red-100 text-sm mt-1">{formatDate(currentDate)}</p>
          </div>
          
          {/* Profile Picture Bubble */}
          <div className="flex items-center gap-2">
            <Link to="/notifications" className="p-2 hover:bg-red-700 rounded-full transition-colors relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#C9B382] rounded-full"></span>
            </Link>
            <Link to="/profile">
              <button className="w-12 h-12 bg-gradient-to-br from-[#C9B382] to-[#B8A070] rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-white">
                E
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 -mt-4 mb-6">
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            
            if (action.external) {
              return (
                <a
                  key={index}
                  href={action.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`${action.color} p-3 rounded-full`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-center text-gray-700">{action.label}</span>
                </a>
              );
            }
            
            return (
              <Link
                key={index}
                to={action.link}
                className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`${action.color} p-3 rounded-full`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-center text-gray-700">{action.label}</span>
              </Link>
            );
          })}
        </div>
        
        {/* Public Safety Button */}
        <a
          href="tel:516-323-3500"
          className="mt-4 block bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all border-2 border-red-500"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-base">Public Safety</h3>
                <p className="text-sm text-red-100 mt-0.5">Emergency & campus security</p>
              </div>
            </div>
            <Phone className="w-5 h-5" />
          </div>
        </a>

        {/* Next Shuttle */}
        <Link
          to="/shuttle-schedule"
          className="mt-3 bg-gradient-to-r from-[#003DA5] to-[#0052CC] text-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all block"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bus className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-base">Shuttle Schedule</h3>
                <p className="text-xs text-blue-100 mt-0.5">Tap to view full schedule</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5" />
          </div>
          {nextShuttles.length > 0 ? (
            <div className="space-y-2">
              {nextShuttles.map((shuttle, index) => {
                // Format display name (remove "Center" from Hempstead Transit)
                const displayName = shuttle.route.replace(" Center", "");
                
                return (
                  <div key={index} className="flex items-center justify-between bg-white/10 rounded-lg px-3 py-2">
                    <span className="text-sm font-medium">
                      {displayName}
                    </span>
                    <div className="flex items-center gap-2">
                      {shuttle.isFutureDay ? (
                        <span className="text-xs text-blue-100">{shuttle.countdown}</span>
                      ) : (
                        shuttle.countdown !== "Departing now" && (
                          <span className="text-xs text-blue-100">{shuttle.countdown}</span>
                        )
                      )}
                      <span className="text-sm font-semibold">{shuttle.nextTime}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white/10 rounded-lg px-3 py-2.5 text-center">
              <p className="text-sm text-blue-100">No shuttles currently running</p>
              <p className="text-xs text-blue-200 mt-1">Check schedule for next available times</p>
            </div>
          )}
        </Link>

        {/* Tutoring Appointment */}
        <div className="mt-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl p-4 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-base">Next Tutoring Appointment</h3>
                <p className="text-sm text-purple-100 mt-0.5">Tomorrow • ECO 1000 • C211</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">Today's Classes</h2>
          <Link to="/academics" className="text-[#9B1B30] text-sm flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="space-y-3">
          {upcomingClasses.map((classItem) => (
            <div
              key={classItem.id}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{classItem.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{classItem.room}</p>
                </div>
                <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{classItem.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Tasks */}
      <div className="px-6 mb-6">
        <h2 className="font-semibold text-gray-900 mb-3">Today's Tasks</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
          {todayTasks.map((task) => (
            <div key={task.id} className="p-4 flex items-center gap-3">
              <button
                className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  task.completed
                    ? "bg-[#9B1B30] border-[#9B1B30]"
                    : "border-gray-300 hover:border-[#9B1B30]"
                }`}
              >
                {task.completed && <CheckCircle2 className="w-4 h-4 text-white" />}
              </button>
              <span
                className={`flex-1 ${
                  task.completed ? "text-gray-400 line-through" : "text-gray-900"
                }`}
              >
                {task.task}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Announcements */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">Announcements</h2>
          <button className="text-[#003DA5] text-sm">See All</button>
        </div>
        <div className="space-y-3">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
            >
              <div>
                <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{announcement.time}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}