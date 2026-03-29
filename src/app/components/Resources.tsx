import {
  Library,
  Headphones,
  Laptop,
  BookOpen,
  Users,
  Phone,
  Search,
  ChevronRight,
  Clock,
  CheckCircle,
} from "lucide-react";

export function Resources() {
  const libraryResources = [
    {
      id: 1,
      title: "Reserve Study Room",
      description: "Book private or group study spaces",
      icon: Users,
      available: 12,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Borrow Equipment",
      description: "Laptops, tablets, and tech equipment",
      icon: Laptop,
      available: 8,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Research Databases",
      description: "Access journals and academic papers",
      icon: BookOpen,
      available: null,
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Audio/Video Studio",
      description: "Recording and editing equipment",
      icon: Headphones,
      available: 3,
      color: "bg-orange-500",
    },
  ];

  const supportServices = [
    {
      category: "Academic Support",
      items: [
        { name: "Tutoring Center", hours: "Mon-Fri 9AM-8PM", status: "Open" },
        { name: "Writing Center", hours: "Mon-Thu 10AM-6PM", status: "Open" },
        { name: "Math Lab", hours: "Mon-Fri 12PM-5PM", status: "Closed" },
      ],
    },
    {
      category: "Student Services",
      items: [
        { name: "Career Services", hours: "Mon-Fri 9AM-5PM", status: "Open" },
        { name: "Counseling Center", hours: "Mon-Fri 8AM-6PM", status: "Open" },
        { name: "Health Services", hours: "24/7", status: "Open" },
      ],
    },
  ];

  const recentBooks = [
    { title: "Introduction to Algorithms", author: "Cormen et al.", due: "March 15" },
    { title: "Clean Code", author: "Robert Martin", due: "March 20" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 pt-8 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Resources</h1>
        <p className="text-gray-500 text-sm mt-1">Library and student services</p>

        {/* Search Bar */}
        <div className="mt-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search library catalog..."
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Library Status */}
      <div className="px-6 py-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-5 text-white">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Library className="w-8 h-8" />
              <div>
                <h2 className="font-semibold">Main Library</h2>
                <p className="text-blue-100 text-sm">4th Floor</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Open</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-blue-100">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Open until 12:00 AM</span>
          </div>
        </div>
      </div>

      {/* Checked Out Books */}
      {recentBooks.length > 0 && (
        <div className="px-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Checked Out</h2>
          <div className="space-y-3">
            {recentBooks.map((book, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{book.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{book.author}</p>
                    <p className="text-sm text-blue-600 mt-2">Due: {book.due}</p>
                  </div>
                  <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                    Renew
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Library Resources */}
      <div className="px-6 mb-6">
        <h2 className="font-semibold text-gray-900 mb-3">Library Services</h2>
        <div className="grid grid-cols-2 gap-3">
          {libraryResources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
              >
                <div className={`${resource.color} p-3 rounded-lg w-fit mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{resource.title}</h3>
                <p className="text-xs text-gray-500 mb-2">{resource.description}</p>
                {resource.available !== null && (
                  <p className="text-xs text-green-600 font-medium">
                    {resource.available} available
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Support Services */}
      <div className="px-6 mb-6">
        <h2 className="font-semibold text-gray-900 mb-3">Support Services</h2>
        <div className="space-y-4">
          {supportServices.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-medium text-gray-700 mb-2">{section.category}</h3>
              <div className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        {item.status === "Open" && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{item.hours}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="px-6 mb-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="bg-red-500 p-2 rounded-lg">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-red-900">Campus Emergency</h3>
              <p className="text-red-700 text-sm">24/7 Support Available</p>
            </div>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
              Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
