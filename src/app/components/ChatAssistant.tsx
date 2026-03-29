import { X, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { getNextShuttle } from "../utils/shuttleUtils";

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; text: string }>>([
    {
      role: "assistant",
      text: "Hi Eduardo! 👋 I'm Mia, your Molloy AI assistant. Ask me anything about campus - dining hours, building locations, events, clubs, your schedule, and more!",
    },
  ]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Student Info
    if (lowerMessage.includes("my gpa") || lowerMessage.includes("my grade")) {
      return "You're doing amazing, Eduardo! You have a 4.0 GPA. Keep up the excellent work! 🌟";
    }
    if (lowerMessage.includes("my major") || lowerMessage.includes("what am i studying")) {
      return "You're pursuing a double major in Economics and Business Analytics with a Finance minor. That's an impressive combination! 📊";
    }
    if (lowerMessage.includes("my schedule") || lowerMessage.includes("my classes") || lowerMessage.includes("how many credits")) {
      return "You're taking 7 classes this semester for a total of 17 credits:\n• Principles of Microeconomics (ECO 101)\n• Introduction to Business Analytics (BUS 201)\n• Financial Accounting (ACC 211)\n• Corporate Finance (FIN 301)\n• Calculus I (MAT 131)\n• Public Speaking (COM 101)\n• Introduction to Philosophy (PHI 102)";
    }
    if (lowerMessage.includes("my room") || lowerMessage.includes("where do i live") || lowerMessage.includes("dorm")) {
      return "You live in Maria Regina Hall, Room 318! Your room PIN is 0000. Check the Residence Life section in your Profile for more details about on-campus living. 🏠";
    }

    // Dining
    if (lowerMessage.includes("starbucks")) {
      return "Starbucks is located in Public Square and is open Monday-Friday 7:00 AM - 7:00 PM. Perfect for your morning coffee! ☕";
    }
    if (lowerMessage.includes("anselma") || lowerMessage.includes("dining hall")) {
      return "The Anselma Room is in Kellenberg Hall and is open Monday-Friday 7:00 AM - 7:00 PM, and weekends 9:00 AM - 5:00 PM. You can order ahead! 🍽️";
    }
    if (lowerMessage.includes("primepick")) {
      return "Primepick is available 24/7 in Public Square! It's perfect for late-night snacks. Download the Primepick Go app to access it. 🏪";
    }
    if (lowerMessage.includes("dining") || lowerMessage.includes("food") || lowerMessage.includes("eat")) {
      return "We have three dining options:\n• Starbucks (Public Square, 7am-7pm weekdays)\n• Anselma Room (Kellenberg Hall, 7am-7pm weekdays)\n• Primepick (Public Square, 24/7)\n\nYou can order ahead at Starbucks and Anselma! 🍕";
    }

    // Library
    if (lowerMessage.includes("library") || lowerMessage.includes("jet") || lowerMessage.includes("tobin")) {
      return "The JET Library is open until 11 PM today. Services include:\n• Book checkout & reservations\n• Study rooms\n• Research assistance\n• Computer lab\n• Printing services\n\nNeed help finding a specific book? 📚";
    }
    if (lowerMessage.includes("study room")) {
      return "The library has several study rooms available! You can reserve them through the library website or by visiting the circulation desk. They're perfect for group projects! 📖";
    }

    // Clubs
    if (lowerMessage.includes("finance") && (lowerMessage.includes("club") || lowerMessage.includes("society") || lowerMessage.includes("investment"))) {
      return "The Student-Managed Investment Fund is great for your interests! They meet Wednesdays at 5:00 PM in Kellenberg Hall, Room 315. Upcoming events include:\n• Bloomberg Terminal Workshop (March 12)\n• JP Morgan Guest Speaker (March 19)\n• Stock Pitch Competition (March 26)\n\nContact: finance.society@molloy.edu 💼";
    }
    if (lowerMessage.includes("economics club")) {
      return "The Economics Club has 45 members and meets Tuesdays at 6:00 PM. Perfect for networking with fellow econ students and industry professionals! 📈";
    }
    if (lowerMessage.includes("business analytics club")) {
      return "The Business Analytics Club meets Mondays at 4:00 PM. They focus on data science, analytics tools, and business intelligence - perfect for your major! 💻";
    }
    if (lowerMessage.includes("club") || lowerMessage.includes("organization") || lowerMessage.includes("join")) {
      return "We have 11+ student organizations including:\\n• Student-Managed Investment Fund (Academic)\\n• Economics Club (Academic)\\n• Business Analytics Club (Academic)\\n• Molloy Student Government (Leadership)\\n• Campus Ministry (Spiritual)\\n• International Student Association (Identity-Based)\\n• LGBTQ+ Alliance (Identity-Based)\\n\\nCheck the Campus tab to explore all clubs! 🎓";
    }

    // Events
    if (lowerMessage.includes("event") || lowerMessage.includes("what's happening")) {
      return "Check out the Events tab to see upcoming activities! You can filter by:\n• Professional events (career fairs, workshops)\n• Athletics (Lions games)\n• Social events (parties, gatherings)\n\nThere's always something happening on campus! 🎉";
    }

    // Counseling Center
    if (lowerMessage.includes("counseling") || lowerMessage.includes("mental health") || lowerMessage.includes("therapy")) {
      return "The Counseling Center is in Public Square, Room 030. Open Monday-Friday 9:00 AM - 5:00 PM.\n\nAvailable counselors:\n• Dr. Sarah Smith (Anxiety & Stress)\n• Dr. Michael Johnson (Academic Support)\n• Dr. Elena Rodriguez (Relationships)\n• Dr. James Chen (Depression & Mood)\n\nPhone: 516-323-4040\nCrisis support available 24/7 💚";
    }

    // Career Center
    if (lowerMessage.includes("career center") || lowerMessage.includes("career") || lowerMessage.includes("internship") || lowerMessage.includes("resume")) {
      return "The Career Center is in Public Square 330, open Monday-Friday 9:00 AM - 5:00 PM.\n\nServices:\n• Resume & cover letter help\n• Interview preparation\n• Internship search assistance\n• Graduate school advising\n\nBonus: We have a FREE Career Closet with professional clothing for interviews! 👔\nPhone: 516-323-4150";
    }

    // Fitness
    if (lowerMessage.includes("gym") || lowerMessage.includes("fitness") || lowerMessage.includes("workout")) {
      return "The Fitness Center is open until 10 PM today! Don't forget to bring your student ID. Great way to stay healthy between classes! 💪";
    }

    // Shuttle
    if (lowerMessage.includes("shuttle") || lowerMessage.includes("bus") || lowerMessage.includes("transportation")) {
      const rvc = getNextShuttle("rvc");
      const hempstead = getNextShuttle("hempstead");
      const mall = getNextShuttle("mall");
      
      let response = "Here are the next available shuttles:\\n\\n";
      if (rvc) response += `🚌 ${rvc.route}: ${rvc.countdown} (${rvc.nextTime})\\n`;
      if (hempstead) response += `🚌 ${hempstead.route}: ${hempstead.countdown} (${hempstead.nextTime})\\n`;
      if (mall) response += `🚌 ${mall.route}: ${mall.countdown} (${mall.nextTime})\\n`;
      
      if (!rvc && !hempstead && !mall) {
        response = "No shuttles currently scheduled. Check the Shuttle Schedule in Campus > Resources for more info! 🚌";
      } else {
        response += "\\nTap the shuttle widget on the Home screen or check Campus > Resources for the full schedule!";
      }
      
      return response;
    }

    // Spirit Store
    if (lowerMessage.includes("spirit store") || lowerMessage.includes("merchandise") || lowerMessage.includes("shop")) {
      return "Check out the Spirit Store tab to browse Molloy merchandise! We have:\n• Apparel (hoodies, t-shirts, hats)\n• Accessories (water bottles, keychains)\n• School supplies\n\nShow your Lion pride! 🦁";
    }

    // Lions Den
    if (lowerMessage.includes("lions den") || lowerMessage.includes("portal")) {
      return "Lions Den is your student portal for:\n• Course registration\n• Grades & transcripts\n• Financial aid\n• Campus announcements\n\nAccess it from the Home screen! 🦁";
    }

    // Buildings & Locations
    if (lowerMessage.includes("public square")) {
      return "Public Square is our main hub! It houses:\n• Starbucks\n• Primepick (24/7)\n• Counseling Center (Room 030)\n• Career Center (Room 330)\n\nIt's the heart of campus! 🏛️";
    }
    if (lowerMessage.includes("kellenberg")) {
      return "Kellenberg Hall contains:\n• Anselma Dining Room\n• Fitness Center\n• Finance & Investment Society meeting room (Room 315)\n\nIt's one of our main academic buildings! 🏫";
    }

    // GPA / Academic Performance
    if (lowerMessage.includes("4.0")) {
      return "Yes! You're maintaining a perfect 4.0 GPA! That's exceptional, Eduardo. Keep balancing your studies with campus activities! 🎓✨";
    }

    // Time-sensitive
    if (lowerMessage.includes("today") || lowerMessage.includes("now") || lowerMessage.includes("open")) {
      return "Here's what's open right now:\n• Anselma Room (until 7 PM)\n• Starbucks (until 7 PM)\n• Primepick (24/7)\n• Library (until 11 PM)\n• Fitness Center (until 10 PM)\n\nWhat do you need? 🕐";
    }

    // Contact info
    if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email")) {
      return "Here are key contacts:\n• Counseling: 516-323-4040\n• Career Center: 516-323-4150\n• Public Safety: 516-323-3500\n• Library: Check the Campus tab\n\nWhat department do you need? 📞";
    }

    // Tutoring
    if (lowerMessage.includes("tutor") || lowerMessage.includes("help with")) {
      return "Need academic support? You can schedule a tutoring appointment through the Home screen banner! We offer tutoring for most subjects including Economics, Math, and Business courses. 📝";
    }

    // Residence Life
    if (lowerMessage.includes("guest") || lowerMessage.includes("overnight")) {
      return "As a resident, you're allowed 3 overnight guests per semester. All guests must be registered 48 hours in advance. You have 3 guests remaining! Check Residence Life in your Profile to request a guest. 🏠";
    }
    if (lowerMessage.includes("ra ") || lowerMessage.includes("resident assistant")) {
      return "Your RA is Jessica Rivera! You can reach her at:\n• Phone: 516-555-0123\n• Email: jessica.rivera@lions.molloy.edu\n\nHead RA: Michael Thompson (516-555-0145)\nCheck the Residence Life section for full contact info! 👋";
    }
    if (lowerMessage.includes("residence life") || lowerMessage.includes("reslife")) {
      return "Residence Life Office:\n• Phone: 516-323-4200\n• Email: reslife@molloy.edu\n• Hours: Monday-Friday, 9 AM - 5 PM\n\nFor emergencies, contact Campus Public Safety at 516-323-3500 (24/7). Check your Profile for more resident info! 🏢";
    }
    if (lowerMessage.includes("maria regina") || lowerMessage.includes("hall 318")) {
      return "You're in Maria Regina Hall, Room 318! Your room PIN is 0000. Your RA is Jessica Rivera, and the Head RA is Michael Thompson. Check Residence Life in your Profile for more details! 🏠";
    }
    if (lowerMessage.includes("maintenance") || lowerMessage.includes("work order") || lowerMessage.includes("repair")) {
      return "Need something fixed in your room? Submit a maintenance work order through the Residence Life page! You can report plumbing, electrical, heating/cooling issues, and more. For emergencies, call Residence Life at 516-323-4200. 🔧";
    }
    if (lowerMessage.includes("notification") || lowerMessage.includes("alert")) {
      return "You have 4 unread notifications! Tap the bell icon at the top of the Home screen to view:\n• Weather alert for Monday closure\n• Finance Society meeting tomorrow\n• Career Fair this week\n• Library extended hours\n\nStay up to date! 🔔";
    }

    // Grades
    if (lowerMessage.includes("grade") && !lowerMessage.includes("my grade")) {
      return "You can check your grades through Lions Den portal! Access it from the Home screen. Your current GPA is 4.0 - amazing work! 📊";
    }

    // General help
    if (lowerMessage.includes("help") || lowerMessage.includes("?")) {
      return "I can help you with:\n• Your schedule & GPA\n• Dining hours & locations\n• Club information & events\n• Library services\n• Counseling & Career Center\n• Building locations\n• Campus resources\n\nWhat would you like to know? 😊";
    }

    // Default response
    return "I'm here to help with campus info! Try asking me about:\n• Your classes or schedule\n• Dining options\n• Club meetings\n• Library hours\n• Counseling or Career Center\n• Building locations\n• Upcoming events\n\nWhat can I help you find? 💙";
  };

  const handleSend = () => {
    if (!message.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: "user" as const, text: message }];
    setMessages(newMessages);

    // Generate AI response
    setTimeout(() => {
      const response = getAIResponse(message);
      setMessages([...newMessages, { role: "assistant" as const, text: response }]);
    }, 800);

    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 left-4 max-w-md mx-auto h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-40 max-h-[calc(100vh-10rem)]">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#9B1B30] to-[#7A1625] text-white px-4 py-3 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Mia - AI Assistant</h3>
                <p className="text-xs text-red-100">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-[#9B1B30] text-white rounded-br-sm"
                      : "bg-gray-100 text-gray-900 rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Mia anything..."
                className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9B1B30] focus:border-transparent text-sm"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-[#9B1B30] text-white rounded-full hover:bg-[#7A1625] transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Bubble Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-4 w-14 h-14 bg-gradient-to-r from-[#9B1B30] to-[#7A1625] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center z-40"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </>
  );
}