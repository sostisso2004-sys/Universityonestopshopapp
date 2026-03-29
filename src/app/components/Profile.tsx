import {
  User,
  Camera,
  DollarSign,
  CreditCard,
  Award,
  Trophy,
  Star,
  GraduationCap,
  ChevronLeft,
  Wallet,
  Home,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router";

export function Profile() {
  const financialInfo = [
    { id: 1, label: "Tuition Balance", amount: 12450.0, icon: DollarSign, color: "bg-[#9B1B30]" },
    { id: 2, label: "Meal Plan", amount: 487.25, icon: CreditCard, color: "bg-[#C9B382]" },
    { id: 3, label: "LionsBucks", amount: 125.50, icon: Wallet, color: "bg-[#9B1B30]" },
    { id: 4, label: "Flex Dollars", amount: 78.00, icon: CreditCard, color: "bg-[#C9B382]" },
  ];

  const accomplishments = [
    {
      id: 1,
      title: "Perfect GPA",
      description: "Maintained 4.0 GPA for 3 semesters",
      icon: Star,
      color: "bg-yellow-500",
    },
    {
      id: 2,
      title: "Honors Program",
      description: "Active member of the Honors Program",
      icon: Award,
      color: "bg-purple-500",
    },
    {
      id: 3,
      title: "Dean's List",
      description: "Fall 2025, Spring 2025, Fall 2024",
      icon: Trophy,
      color: "bg-blue-500",
    },
    {
      id: 4,
      title: "Double Major",
      description: "Economics & Business Analytics",
      icon: GraduationCap,
      color: "bg-green-500",
    },
    {
      id: 5,
      title: "Finance Minor",
      description: "Pursuing Finance concentration",
      icon: DollarSign,
      color: "bg-emerald-500",
    },
    {
      id: 6,
      title: "Academic Excellence",
      description: "70 credits completed with distinction",
      icon: Award,
      color: "bg-indigo-500",
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
        
        <div className="flex items-center gap-4 mb-6">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-[#C9B382] to-[#B8A070] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg border-4 border-white">
              E
            </div>
            <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all">
              <Camera className="w-4 h-4 text-[#9B1B30]" />
            </button>
          </div>
          
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Eduardo</h1>
            <p className="text-red-100 text-sm mt-1">Sophomore • Class of 2028</p>
            <p className="text-red-100 text-xs mt-1">Economics & Business Analytics</p>
          </div>
        </div>

        {/* GPA Highlight */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-sm">Cumulative GPA</p>
              <p className="text-4xl font-bold mt-1">4.0</p>
            </div>
            <div className="text-right">
              <p className="text-red-100 text-sm">Credits</p>
              <p className="text-2xl font-bold mt-1">70/120</p>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Information */}
      <div className="px-6 py-6">
        <h2 className="font-semibold text-gray-900 mb-4">Financial Overview</h2>
        <div className="grid grid-cols-2 gap-3">
          {financialInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
              >
                <div className={`${item.color} p-3 rounded-lg w-fit mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-xl font-bold text-gray-900">
                  ${item.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Residence Life */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-4">Campus Life</h2>
        <Link
          to="/residence-life"
          className="bg-gradient-to-r from-[#9B1B30] to-[#7A1625] text-white rounded-xl shadow-sm p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
        >
          <div className="bg-white/20 p-3 rounded-lg">
            <Home className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Residence Life</h3>
            <p className="text-sm text-red-100 mt-1">On-Campus Resident • Maria Regina Hall</p>
          </div>
          <ChevronRight className="w-5 h-5 text-white" />
        </Link>
      </div>

      {/* Accomplishments */}
      <div className="px-6 pb-6">
        <h2 className="font-semibold text-gray-900 mb-4">Accomplishments</h2>
        <div className="space-y-3">
          {accomplishments.map((accomplishment) => {
            const Icon = accomplishment.icon;
            return (
              <div
                key={accomplishment.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-start gap-4"
              >
                <div className={`${accomplishment.color} p-3 rounded-lg flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{accomplishment.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{accomplishment.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}