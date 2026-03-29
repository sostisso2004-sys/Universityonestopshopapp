import { MapPin, Clock, Users, Search, Utensils, Dumbbell, Bus, ChevronRight, Library, Heart, Briefcase, Filter, Wrench } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export function Campus() {
  const [activeTab, setActiveTab] = useState<"dining" | "clubs" | "resources">("dining");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Academic", "Social", "Identity-Based", "Spiritual", "Leadership", "Cultural"];

  const clubs = [
    {
      id: "finance-society",
      name: "Student-Managed Investment Fund",
      category: "Academic",
      members: 62,
      description: "Stock market analysis, portfolio management, and finance careers",
      meetingTime: "Wednesdays at 5:00 PM",
      color: "bg-[#FFB81C]",
    },
    {
      id: 2,
      name: "Economics Club",
      category: "Academic",
      members: 45,
      description: "Network with fellow econ students and industry professionals",
      meetingTime: "Tuesdays at 6:00 PM",
      color: "bg-[#003DA5]",
    },
    {
      id: 3,
      name: "Business Analytics Club",
      category: "Academic",
      members: 38,
      description: "Data science, analytics tools, and business intelligence",
      meetingTime: "Mondays at 4:00 PM",
      color: "bg-[#003DA5]",
    },
    {
      id: 4,
      name: "Molloy Student Government",
      category: "Leadership",
      members: 28,
      description: "Represent students and organize campus-wide events",
      meetingTime: "Thursdays at 7:00 PM",
      color: "bg-[#FFB81C]",
    },
    {
      id: 5,
      name: "Molloy Debate Team",
      category: "Academic",
      members: 22,
      description: "Competitive debate and public speaking",
      meetingTime: "Mondays & Wednesdays at 6:00 PM",
      color: "bg-[#003DA5]",
    },
    {
      id: 6,
      name: "International Student Association",
      category: "Identity-Based",
      members: 55,
      description: "Celebrate diversity and global perspectives",
      meetingTime: "Fridays at 5:00 PM",
      color: "bg-[#FFB81C]",
    },
    {
      id: 7,
      name: "Honors Program Student Council",
      category: "Academic",
      members: 34,
      description: "Leadership and community service for honors students",
      meetingTime: "Biweekly Wednesdays at 6:30 PM",
      color: "bg-[#003DA5]",
    },
    {
      id: 8,
      name: "Greek Life Council",
      category: "Social",
      members: 120,
      description: "Fraternity and sorority community events",
      meetingTime: "Varies by chapter",
      color: "bg-[#FFB81C]",
    },
    {
      id: 9,
      name: "Campus Ministry",
      category: "Spiritual",
      members: 48,
      description: "Faith formation, prayer services, and community service",
      meetingTime: "Thursdays at 12:00 PM",
      color: "bg-[#003DA5]",
    },
    {
      id: 10,
      name: "Latino Student Organization",
      category: "Identity-Based",
      members: 42,
      description: "Celebrating Latino culture",
      meetingTime: "Tuesdays at 5:00 PM",
      color: "bg-[#FFB81C]",
    },
    {
      id: 11,
      name: "LGBTQ+ Alliance",
      category: "Identity-Based",
      members: 36,
      description: "Support and advocacy for LGBTQ+ students and allies",
      meetingTime: "Wednesdays at 4:00 PM",
      color: "bg-[#003DA5]",
    },
  ];

  const diningHalls = [
    {
      id: 1,
      name: "Starbucks",
      status: "Open",
      hours: "Mon-Fri 7:00 AM - 7:00 PM",
      location: "Public Square",
      canOrderAhead: true,
    },
    {
      id: 2,
      name: "Anselma Room",
      status: "Open",
      hours: "Mon-Fri 7:00 AM - 7:00 PM, Weekends 9:00 AM - 5:00 PM",
      location: "Kellenberg Hall",
      canOrderAhead: true,
    },
    {
      id: 3,
      name: "Primepick",
      status: "Open 24/7",
      hours: "24 Hours",
      location: "Public Square",
      canOrderAhead: false,
    },
  ];

  const resources = [
    { name: "JET Library", icon: Library, status: "Open until 11 PM", link: "/library" },
    { name: "Shuttle Schedule", icon: Bus, status: "Next: 15 min", link: "/shuttle-schedule" },
    { name: "Fitness Center", icon: Dumbbell, status: "Open until 10 PM", link: "/fitness-schedule" },
    { name: "Counseling Center", icon: Heart, status: "Available", link: "/counseling-appointment" },
    { name: "Career Center", icon: Briefcase, status: "Book appointment", link: "/career-appointment" },
    { name: "Maintenance", icon: Wrench, status: "Contact for repairs", link: "/maintenance" },
  ];

  const filteredClubs = selectedCategory === "All" 
    ? clubs 
    : clubs.filter(club => club.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 pt-8 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Campus</h1>
        <p className="text-gray-500 text-sm mt-1">Explore campus life</p>

        {/* Tab Navigation */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setActiveTab("dining")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "dining"
                ? "bg-[#9B1B30] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Dining
          </button>
          <button
            onClick={() => setActiveTab("clubs")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "clubs"
                ? "bg-[#9B1B30] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Clubs
          </button>
          <button
            onClick={() => setActiveTab("resources")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "resources"
                ? "bg-[#9B1B30] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Resources
          </button>
        </div>
      </div>

      {/* Dining Tab */}
      {activeTab === "dining" && (
        <div className="px-6 py-6 space-y-4">
          {diningHalls.map((hall) => (
            <div
              key={hall.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{hall.name}</h3>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    hall.status.includes("Open")
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {hall.status}
                </span>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{hall.hours}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{hall.location}</span>
                </div>
              </div>

              {hall.canOrderAhead && (
                <button className="w-full bg-[#9B1B30] text-white py-2.5 rounded-lg font-medium text-sm hover:bg-[#7A1625] transition-colors">
                  Order Ahead
                </button>
              )}
              
              {hall.name === "Primepick" && (
                <a
                  href="https://apps.apple.com/us/app/primepick-go/id6752860064"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#9B1B30] text-white py-2.5 rounded-lg font-medium text-sm hover:bg-[#7A1625] transition-colors flex items-center justify-center gap-2"
                >
                  Open Primepick App
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Clubs Tab */}
      {activeTab === "clubs" && (
        <div className="px-6 py-6">
          {/* Search */}
          <div className="mb-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search clubs and organizations..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003DA5] focus:border-transparent shadow-sm"
            />
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Filter by Category</span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-[#9B1B30] text-white"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-[#9B1B30]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Clubs List */}
          <h2 className="font-semibold text-gray-900 mb-3">
            {selectedCategory === "All" ? "All Organizations" : `${selectedCategory} Organizations`}
          </h2>
          <div className="space-y-3">
            {filteredClubs.map((club) => {
              const isClickable = club.id === "finance-society";
              const clubContent = (
                <>
                  <div className={`${club.color} p-3 rounded-lg`}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className="font-semibold text-gray-900">{club.name}</h3>
                        <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full mt-1">
                          {club.category}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{club.description}</p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        <span>{club.members} members</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{club.meetingTime}</span>
                      </div>
                    </div>
                  </div>
                </>
              );

              return isClickable ? (
                <Link
                  key={club.id}
                  to={`/club/${club.id}`}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-start gap-3 hover:shadow-md transition-shadow"
                >
                  {clubContent}
                </Link>
              ) : (
                <div
                  key={club.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-start gap-3"
                >
                  {clubContent}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Resources Tab */}
      {activeTab === "resources" && (
        <div className="px-6 py-6">
          <div className="space-y-3">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={index}
                  to={resource.link}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="bg-[#9B1B30] p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{resource.name}</h3>
                    <span className="text-sm text-gray-600">{resource.status}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}