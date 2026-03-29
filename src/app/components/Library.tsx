import {
  Search,
  BookOpen,
  Clock,
  MapPin,
  ChevronLeft,
  AlertCircle,
  CheckCircle,
  Calendar,
  RotateCw,
} from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export function Library() {
  const [searchQuery, setSearchQuery] = useState("");

  const checkedOutBooks = [
    {
      id: 1,
      title: "Principles of Economics",
      author: "N. Gregory Mankiw",
      dueDate: "March 20, 2026",
      daysLeft: 11,
      location: "3rd Floor - Economics Section (HB171 .M36)",
      coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Business Analytics: Data Analysis & Decision Making",
      author: "S. Christian Albright",
      dueDate: "March 25, 2026",
      daysLeft: 16,
      location: "2nd Floor - Business Section (HD30.213 .A43)",
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Financial Markets and Institutions",
      author: "Frederic Mishkin",
      dueDate: "March 30, 2026",
      daysLeft: 21,
      location: "3rd Floor - Finance Section (HG181 .M57)",
      coverImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=600&fit=crop",
    },
  ];

  const searchResults = [
    {
      id: 4,
      title: "Advanced Macroeconomic Theory",
      author: "Michael Wickens",
      status: "Available",
      copies: 3,
      location: "3rd Floor - Economics Section (HB172.5 .W53)",
      coverImage: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=400&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Python for Data Analysis",
      author: "Wes McKinney",
      status: "Available",
      copies: 2,
      location: "1st Floor - Computer Science (QA76.73 .P98)",
      coverImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=400&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Corporate Finance Fundamentals",
      author: "Ross, Westerfield, Jordan",
      status: "Checked Out",
      copies: 0,
      location: "3rd Floor - Finance Section (HG4026 .R677)",
      coverImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#9B1B30] to-[#7A1625] text-white px-6 pt-8 pb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back to Home</span>
        </Link>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 p-3 rounded-full">
            <BookOpen className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">JET Library</h1>
            <p className="text-red-100 text-sm mt-1">James E. Tobin Library</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search books, journals, and resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white text-gray-900 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
          />
        </div>
      </div>

      {/* Checked Out Books */}
      <div className="px-6 py-6">
        <h2 className="font-semibold text-gray-900 mb-4">Your Checked Out Books</h2>
        <div className="space-y-3">
          {checkedOutBooks.map((book) => (
            <div
              key={book.id}
              className={`bg-white rounded-xl shadow-sm border p-4 ${
                book.daysLeft <= 3 ? "border-red-300 bg-red-50/30" : "border-gray-100"
              }`}
            >
              <div className="flex gap-4">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-20 h-28 object-cover rounded-lg shadow-sm"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{book.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{book.author}</p>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <p className="text-xs text-gray-600">{book.location}</p>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    {book.daysLeft <= 3 ? (
                      <AlertCircle className="w-4 h-4 text-red-600" />
                    ) : (
                      <Clock className="w-4 h-4 text-gray-500" />
                    )}
                    <p className={`text-sm font-medium ${book.daysLeft <= 3 ? "text-red-600" : "text-gray-700"}`}>
                      Due {book.dueDate} ({book.daysLeft} days left)
                    </p>
                  </div>

                  {book.daysLeft <= 3 && (
                    <button className="mt-3 w-full bg-[#9B1B30] text-white py-2 rounded-lg font-medium text-sm hover:bg-[#7A1625] transition-colors flex items-center justify-center gap-2">
                      <RotateCw className="w-4 h-4" />
                      Extend Checkout
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Results / Browse */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-4">Browse Popular Books</h2>
        <div className="space-y-3">
          {searchResults.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
            >
              <div className="flex gap-4">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-20 h-28 object-cover rounded-lg shadow-sm"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{book.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{book.author}</p>
                    </div>
                    {book.status === "Available" ? (
                      <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        <CheckCircle className="w-3 h-3" />
                        Available
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        Checked Out
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <p className="text-xs text-gray-600">{book.location}</p>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    {book.copies > 0 ? `${book.copies} copies available` : "No copies available"}
                  </p>

                  {book.status === "Available" && (
                    <button className="mt-3 w-full bg-[#9B1B30] text-white py-2 rounded-lg font-medium text-sm hover:bg-[#7A1625] transition-colors">Reserve Book</button>
                  )}
                  
                  {book.status === "Checked Out" && (
                    <button className="mt-3 w-full bg-gray-200 text-gray-700 py-2 rounded-lg font-medium text-sm hover:bg-gray-300 transition-colors">
                      Join Waitlist
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Library Info */}
      <div className="px-6 pb-6">
        <div className="bg-[#003DA5] text-white rounded-xl p-4">
          <h3 className="font-semibold mb-2">Library Hours</h3>
          <div className="text-sm space-y-1 text-blue-100">
            <p>Monday - Thursday: 8:00 AM - 11:00 PM</p>
            <p>Friday: 8:00 AM - 8:00 PM</p>
            <p>Saturday: 9:00 AM - 5:00 PM</p>
            <p>Sunday: 11:00 AM - 9:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}