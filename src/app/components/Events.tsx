import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Briefcase,
  Trophy,
  Music,
  GraduationCap,
  Heart,
  ChevronRight,
  Filter,
  Theater,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

type EventCategory = "all" | "professional" | "athletics" | "social" | "academic" | "wellness" | "madison";

export function Events() {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>("all");

  const categories = [
    { id: "all" as EventCategory, label: "All", icon: Calendar },
    { id: "professional" as EventCategory, label: "Professional", icon: Briefcase },
    { id: "athletics" as EventCategory, label: "Athletics", icon: Trophy },
    { id: "social" as EventCategory, label: "Social", icon: Music },
    { id: "academic" as EventCategory, label: "Academic", icon: GraduationCap },
    { id: "wellness" as EventCategory, label: "Wellness", icon: Heart },
    { id: "madison" as EventCategory, label: "Madison Theatre", icon: Theater },
  ];

  const events = [
    {
      id: 1,
      title: "Investment Banking Workshop",
      date: "March 3",
      time: "4:00 PM - 6:00 PM",
      location: "Casey 105",
      category: "professional" as EventCategory,
      attendees: 45,
      featured: true,
      description: "Learn from Goldman Sachs analysts",
    },
    {
      id: 2,
      title: "Career Fair - Finance & Economics",
      date: "March 8",
      time: "10:00 AM - 4:00 PM",
      location: "Public Square",
      category: "professional" as EventCategory,
      attendees: 250,
      featured: true,
      description: "Meet with top employers in finance",
    },
    {
      id: 3,
      title: "Lions Basketball vs. LIU",
      date: "March 5",
      time: "7:00 PM",
      location: "Bob Houlihan Gymnasium",
      category: "athletics" as EventCategory,
      attendees: 180,
      featured: false,
      description: "Home game - Division II Conference",
    },
    {
      id: 4,
      title: "Economics Club Networking Night",
      date: "March 10",
      time: "6:00 PM - 8:00 PM",
      location: "Casey 105",
      category: "social" as EventCategory,
      attendees: 35,
      featured: false,
      description: "Connect with fellow economics students",
    },
    {
      id: 5,
      title: "Data Analytics Seminar Series",
      date: "March 12",
      time: "5:30 PM - 7:00 PM",
      location: "Casey 105",
      category: "academic" as EventCategory,
      attendees: 60,
      featured: true,
      description: "Industry experts share insights",
    },
    {
      id: 6,
      title: "Spring Concert: Live Band Night",
      date: "March 15",
      time: "8:00 PM",
      location: "Madison Theatre",
      category: "madison" as EventCategory,
      attendees: 200,
      featured: false,
      description: "Student performances and local artists",
    },
    {
      id: 7,
      title: "CFA Level I Prep Session",
      date: "March 14",
      time: "3:00 PM - 5:00 PM",
      location: "Online - Zoom",
      category: "professional" as EventCategory,
      attendees: 28,
      featured: false,
      description: "Free prep session for finance students",
    },
    {
      id: 8,
      title: "Mindfulness & Meditation Workshop",
      date: "March 11",
      time: "12:00 PM - 1:00 PM",
      location: "Larinin Room - Public Square",
      category: "wellness" as EventCategory,
      attendees: 25,
      featured: false,
      description: "De-stress during midterm season",
    },
    {
      id: 9,
      title: "Women's Lacrosse vs. Adelphi",
      date: "March 9",
      time: "3:00 PM",
      location: "RVC Sportsplex",
      category: "athletics" as EventCategory,
      attendees: 95,
      featured: false,
      description: "Conference match",
    },
    {
      id: 10,
      title: "Bloomberg Terminal Training",
      date: "March 6",
      time: "2:00 PM - 4:00 PM",
      location: "Casey 105",
      category: "academic" as EventCategory,
      attendees: 20,
      featured: true,
      description: "Hands-on training for business students",
    },
    {
      id: 11,
      title: "TEDx Molloy University",
      date: "March 20",
      time: "6:00 PM - 9:00 PM",
      location: "Madison Theatre",
      category: "madison" as EventCategory,
      attendees: 350,
      featured: true,
      description: "Ideas worth spreading - featuring student and professional speakers",
    },
    {
      id: 12,
      title: "Comedy Night: Professional Comedians",
      date: "March 22",
      time: "7:30 PM",
      location: "Madison Theatre",
      category: "madison" as EventCategory,
      attendees: 175,
      featured: false,
      description: "Laugh the night away with top NYC comedians",
    },
    {
      id: 13,
      title: "Broadway Musical: Student Production",
      date: "March 28",
      time: "7:00 PM",
      location: "Madison Theatre",
      category: "madison" as EventCategory,
      attendees: 220,
      featured: false,
      description: "Annual spring musical production",
    },
  ];

  const filteredEvents = selectedCategory === "all" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const trendingEvents = events
    .filter(event => event.attendees >= 150)
    .sort((a, b) => b.attendees - a.attendees)
    .slice(0, 3);

  const getCategoryColor = (category: EventCategory) => {
    const colors = {
      all: "bg-gray-500",
      professional: "bg-[#9B1B30]",
      athletics: "bg-[#C9B382]",
      social: "bg-purple-600",
      academic: "bg-[#9B1B30]",
      wellness: "bg-pink-600",
      madison: "bg-indigo-600",
    };
    return colors[category];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 pt-8 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Events</h1>
        <p className="text-gray-500 text-sm mt-1">Discover what's happening at Molloy</p>
      </div>

      {/* Trending Events */}
      {selectedCategory === "all" && (
        <div className="px-6 py-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-gray-900" />
            <h2 className="font-semibold text-gray-900">Trending Events</h2>
          </div>
          <div className="space-y-3">
            {trendingEvents.map((event) => {
              const categoryData = categories.find(c => c.id === event.category);
              const CategoryIcon = categoryData?.icon || Calendar;
              
              return (
                <div
                  key={event.id}
                  className="bg-gradient-to-r from-[#9B1B30] to-[#7A1625] rounded-xl p-5 text-white shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CategoryIcon className="w-4 h-4" />
                        <span className="text-xs font-medium text-blue-100">
                          {categoryData?.label}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg">{event.title}</h3>
                      <p className="text-blue-100 text-sm mt-1">{event.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attending</span>
                    </div>
                    <button className="px-4 py-2 bg-white text-[#9B1B30] rounded-lg font-medium text-sm hover:bg-red-50 transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Category Filters */}
      <div className="px-6 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-gray-600" />
          <h2 className="font-semibold text-gray-900">Categories</h2>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === "all"
                ? "bg-[#003DA5] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? `${getCategoryColor(category.id)} text-white shadow-md`
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* All Events List */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-3">
          {selectedCategory === "all" ? "All Events" : `${categories.find(c => c.id === selectedCategory)?.label} Events`}
        </h2>
        <div className="space-y-3">
          {filteredEvents.map((event) => {
            const categoryData = categories.find(c => c.id === event.category);
            const CategoryIcon = categoryData?.icon || Calendar;
            
            return (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className={`${getCategoryColor(event.category)} rounded-lg p-3 text-center min-w-[60px]`}>
                    <p className="text-white text-xs font-medium">
                      {event.date.split(" ")[0]}
                    </p>
                    <p className="text-white text-2xl font-bold">
                      {event.date.split(" ")[1]}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{event.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{event.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" />
                    </div>
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 ${getCategoryColor(event.category)} bg-opacity-10 text-xs rounded-full font-medium flex items-center gap-1`}>
                        <CategoryIcon className="w-3 h-3" />
                        {categoryData?.label}
                      </span>
                      <span className="text-xs text-gray-500">{event.attendees} attending</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}