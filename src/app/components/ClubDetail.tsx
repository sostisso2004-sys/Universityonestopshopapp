import { ChevronLeft, Mail, Clock, Calendar, MapPin, Users } from "lucide-react";
import { Link, useParams } from "react-router";

export function ClubDetail() {
  const { clubId } = useParams();

  // For now, we'll only have data for the Finance & Investment Society
  if (clubId !== "finance-society") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Club Not Found</h1>
          <Link to="/campus" className="text-[#9B1B30] hover:underline">
            Return to Campus
          </Link>
        </div>
      </div>
    );
  }

  const club = {
    name: "Student-Managed Investment Fund",
    category: "Academic",
    members: 62,
    description: "The Student-Managed Investment Fund is dedicated to providing students with hands-on experience in financial markets, investment strategies, and career development in finance. We host workshops, speaker events, and manage a student investment fund.",
    email: "finance.society@molloy.edu",
    meetingTime: "Wednesdays at 5:00 PM",
    location: "Kellenberg Hall, Room 315",
    
    eboard: [
      {
        position: "President",
        name: "Michael Chen",
        email: "michael.chen@lions.molloy.edu",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
      {
        position: "Vice President",
        name: "Sarah Martinez",
        email: "sarah.martinez@lions.molloy.edu",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      },
      {
        position: "Treasurer",
        name: "James Wilson",
        email: "james.wilson@lions.molloy.edu",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      },
      {
        position: "Secretary",
        name: "Emily Rodriguez",
        email: "emily.rodriguez@lions.molloy.edu",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      },
      {
        position: "Events Coordinator",
        name: "David Park",
        email: "david.park@lions.molloy.edu",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      },
    ],

    upcomingEvents: [
      {
        id: 1,
        title: "Bloomberg Terminal Workshop",
        date: "March 8, 2026",
        time: "5:00 PM - 7:00 PM",
        location: "Library Computer Lab",
        description: "Learn how to use Bloomberg Terminal for financial analysis",
      },
      {
        id: 2,
        title: "Guest Speaker: JP Morgan Analyst",
        date: "March 15, 2026",
        time: "5:00 PM - 6:30 PM",
        location: "Kellenberg Hall Auditorium",
        description: "Hear from a JP Morgan investment banking analyst about their career path",
      },
      {
        id: 3,
        title: "Stock Pitch Competition",
        date: "March 22, 2026",
        time: "4:00 PM - 7:00 PM",
        location: "Public Square 210",
        description: "Present your investment thesis and compete for prizes",
      },
      {
        id: 4,
        title: "Networking Night with Alumni",
        date: "March 29, 2026",
        time: "6:00 PM - 8:00 PM",
        location: "Anselma Room",
        description: "Network with Molloy alumni working in finance",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003DA5] to-[#0052CC] text-white px-6 pt-8 pb-6">
        <Link to="/campus" className="inline-flex items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back to Campus</span>
        </Link>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 p-3 rounded-full">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{club.name}</h1>
            <p className="text-blue-100 text-sm mt-1">{club.category} • {club.members} members</p>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="px-6 py-6">
        <h2 className="font-semibold text-gray-900 mb-3">About</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <p className="text-gray-700 leading-relaxed">{club.description}</p>
        </div>
      </div>

      {/* Contact & Meeting Info */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-3">Contact & Meeting Info</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a href={`mailto:${club.email}`} className="text-gray-900 font-medium hover:text-[#9B1B30]">
                {club.email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">Meeting Time</p>
              <p className="text-gray-900 font-medium">{club.meetingTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="text-gray-900 font-medium">{club.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* E-Board */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-3">Executive Board</h2>
        <div className="space-y-3">
          {club.eboard.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-[#9B1B30] font-medium">{member.position}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-sm text-gray-600 hover:text-[#9B1B30] transition-colors"
                >
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-3">Upcoming Events</h2>
        <div className="space-y-3">
          {club.upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
            >
              <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{event.description}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </div>
              <button className="mt-3 w-full bg-[#003DA5] text-white py-2 rounded-lg font-medium text-sm hover:bg-[#0052CC] transition-colors">
                RSVP
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Join Button */}
      <div className="px-6 pb-6">
        <button className="w-full bg-gradient-to-r from-[#9B1B30] to-[#7A1625] text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
          Join Student-Managed Investment Fund
        </button>
      </div>
    </div>
  );
}