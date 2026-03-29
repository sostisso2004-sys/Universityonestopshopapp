import { ChevronLeft, Bell, AlertCircle, Calendar, Info, Megaphone, CheckCircle, Utensils } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export function Notifications() {
  const [activeTab, setActiveTab] = useState<"unread" | "read">("unread");

  const unreadNotifications = [
    {
      id: 1,
      type: "alert",
      icon: AlertCircle,
      title: "Weather Alert - Dining Closure",
      message: "Anselma Room and Starbucks will be closed Monday, March 3rd due to severe weather. Primepick remains open 24/7.",
      time: "2 hours ago",
      color: "bg-amber-500",
    },
    {
      id: 2,
      type: "event",
      icon: Calendar,
      title: "Finance Society Meeting Tomorrow",
      message: "Bloomberg Terminal Workshop - Wednesday at 5:00 PM in Kellenberg Hall, Room 315.",
      time: "5 hours ago",
      color: "bg-blue-500",
    },
    {
      id: 3,
      type: "announcement",
      icon: Megaphone,
      title: "Career Fair This Week",
      message: "Finance & Economics Career Fair on Friday, March 7th from 2-5 PM in the Student Center.",
      time: "1 day ago",
      color: "bg-purple-500",
    },
    {
      id: 4,
      type: "info",
      icon: Info,
      title: "Library Hours Extended",
      message: "JET Library will be open until 2 AM during finals week (March 10-14).",
      time: "1 day ago",
      color: "bg-green-500",
    },
  ];

  const readNotifications = [
    {
      id: 5,
      type: "announcement",
      icon: Megaphone,
      title: "Spring Break Residence Reminder",
      message: "All residence halls will remain open during spring break. Please ensure you've completed your overnight guest forms in advance.",
      time: "2 days ago",
      color: "bg-purple-500",
    },
    {
      id: 6,
      type: "event",
      icon: Calendar,
      title: "Economics Club Meeting Recap",
      message: "Thanks to everyone who attended Tuesday's meeting! Next meeting: March 11th.",
      time: "3 days ago",
      color: "bg-blue-500",
    },
    {
      id: 7,
      type: "info",
      icon: CheckCircle,
      title: "Course Registration Opens",
      message: "Fall 2026 course registration opened on February 25th. Register through Lions Den.",
      time: "4 days ago",
      color: "bg-green-500",
    },
    {
      id: 8,
      type: "alert",
      icon: Utensils,
      title: "New Menu at Anselma Room",
      message: "Check out our new international cuisine options available Monday-Friday!",
      time: "5 days ago",
      color: "bg-amber-500",
    },
    {
      id: 9,
      type: "announcement",
      icon: Megaphone,
      title: "Guest Speaker: JP Morgan",
      message: "JP Morgan representatives will speak at Finance Society on March 15th. RSVP required.",
      time: "1 week ago",
      color: "bg-purple-500",
    },
    {
      id: 10,
      type: "info",
      icon: Info,
      title: "Midterm Grades Posted",
      message: "Midterm grades are now available on Lions Den. Great work maintaining your 4.0!",
      time: "1 week ago",
      color: "bg-green-500",
    },
  ];

  const displayNotifications = activeTab === "unread" ? unreadNotifications : readNotifications;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#9B1B30] to-[#7A1625] text-white px-6 pt-8 pb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back to Home</span>
        </Link>
        
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-3 rounded-full relative">
            <Bell className="w-8 h-8" />
            {unreadNotifications.length > 0 && (
              <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#C9B382] rounded-full flex items-center justify-center text-xs font-bold">
                {unreadNotifications.length}
              </span>
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold">Notifications</h1>
            <p className="text-red-100 text-sm mt-1">
              {unreadNotifications.length} unread
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex">
          <button
            onClick={() => setActiveTab("unread")}
            className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
              activeTab === "unread"
                ? "text-[#9B1B30]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Unread ({unreadNotifications.length})
            {activeTab === "unread" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9B1B30]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("read")}
            className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
              activeTab === "read"
                ? "text-[#9B1B30]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Read ({readNotifications.length})
            {activeTab === "read" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9B1B30]" />
            )}
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-6 py-6">
        {displayNotifications.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">No notifications</h3>
            <p className="text-sm text-gray-500">You're all caught up!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {displayNotifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`bg-white rounded-xl p-4 shadow-sm border transition-all ${
                    activeTab === "unread"
                      ? "border-l-4 border-l-[#9B1B30] border-gray-100"
                      : "border-gray-100"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`${notification.color} p-2.5 rounded-full flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {notification.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400">{notification.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Mark All as Read (only show on unread tab) */}
      {activeTab === "unread" && unreadNotifications.length > 0 && (
        <div className="px-6 pb-6">
          <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">
            Mark All as Read
          </button>
        </div>
      )}
    </div>
  );
}
