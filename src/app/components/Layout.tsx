import { Outlet, useLocation, Link } from "react-router";
import { Home, BookOpen, Calendar, MapPin } from "lucide-react";
import { ChatAssistant } from "./ChatAssistant";
import { PromotionalBanner } from "./PromotionalBanner";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/academics", icon: BookOpen, label: "Academics" },
    { path: "/events", icon: Calendar, label: "Events" },
    { path: "/campus", icon: MapPin, label: "Campus" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <PromotionalBanner />
      <Outlet />
      <ChatAssistant />

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 px-4 py-2 safe-area-inset-bottom">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
                  isActive
                    ? "text-[#9B1B30]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? "fill-red-50" : ""}`} />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}