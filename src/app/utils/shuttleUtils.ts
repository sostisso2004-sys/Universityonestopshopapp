// Shuttle schedule data
const schedules = {
  rvc: {
    monThu: [
      "6:40 AM", "7:10 AM", "7:20 AM", "7:45 AM", "8:15 AM", "8:40 AM", "9:30 AM", "10:00 AM",
      "10:40 AM", "11:10 AM", "11:40 AM", "12:00 PM", "12:40 PM", "1:00 PM", "1:30 PM", "2:00 PM",
      "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:45 PM", "5:15 PM", "5:50 PM", "6:20 PM",
      "6:45 PM", "7:10 PM", "7:25 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM"
    ],
    fri: [
      "6:40 AM", "7:10 AM", "7:20 AM", "7:45 AM", "8:15 AM", "8:40 AM", "9:30 AM", "10:00 AM",
      "10:40 AM", "11:10 AM", "11:40 AM", "12:00 PM", "12:40 PM", "1:00 PM", "1:30 PM", "2:00 PM",
      "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:45 PM", "5:15 PM", "5:45 PM", "7:00 PM",
      "8:10 PM", "9:30 PM"
    ],
    satSun: ["12:00 PM", "1:45 PM", "3:30 PM"]
  },
  hempstead: {
    monThu: [
      "6:45 AM", "7:15 AM", "7:45 AM", "8:15 AM", "8:50 AM", "9:25 AM", "10:00 AM", "10:30 AM",
      "11:20 AM", "12:00 PM", "12:30 PM", "1:20 PM", "2:15 PM", "3:30 PM", "4:40 PM", "5:25 PM",
      "5:50 PM", "6:15 PM", "6:50 PM", "7:30 PM", "8:15 PM"
    ],
    fri: [
      "6:45 AM", "7:15 AM", "7:45 AM", "8:15 AM", "8:50 AM", "9:25 AM", "10:00 AM", "10:30 AM",
      "11:20 AM", "12:00 PM", "12:30 PM", "1:20 PM", "2:15 PM", "3:30 PM", "4:40 PM", "5:25 PM"
    ],
    satSun: []
  },
  mall: {
    monThu: [],
    fri: ["6:10 PM", "7:20 PM", "8:30 PM"],
    satSun: ["11:00 AM", "12:30 PM", "2:30 PM"]
  }
};

function parseTime(timeStr: string): number {
  const [time, period] = timeStr.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  
  if (period === 'PM' && hours !== 12) {
    hours += 12;
  } else if (period === 'AM' && hours === 12) {
    hours = 0;
  }
  
  return hours * 60 + minutes; // Return minutes since midnight
}

function formatCountdown(minutes: number): string {
  if (minutes < 1) {
    return "Departing now";
  } else if (minutes < 60) {
    return `in ${minutes} min`;
  } else if (minutes < 1440) { // Less than 24 hours
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (mins === 0) {
      return `in ${hours} hour${hours > 1 ? 's' : ''}`;
    }
    return `in ${hours} hour${hours > 1 ? 's' : ''} ${mins} min`;
  } else {
    return ""; // Will be replaced by day name
  }
}

function getDayName(dayOfWeek: number): string {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[dayOfWeek];
}

function getScheduleForDay(route: "rvc" | "hempstead" | "mall", dayOfWeek: number): string[] {
  const scheduleMap = {
    rvc: schedules.rvc,
    hempstead: schedules.hempstead,
    mall: schedules.mall
  };
  
  const routeSchedule = scheduleMap[route];
  
  if (dayOfWeek >= 1 && dayOfWeek <= 4) {
    return routeSchedule.monThu;
  } else if (dayOfWeek === 5) {
    return routeSchedule.fri;
  } else {
    return routeSchedule.satSun;
  }
}

export function getNextShuttle(route: "rvc" | "hempstead" | "mall"): { route: string; nextTime: string; countdown: string; dayOfWeek: number; isFutureDay: boolean } | null {
  const now = new Date();
  const currentDayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  const routeNames = {
    rvc: "RVC LIRR Station",
    hempstead: "Hempstead Transit Center",
    mall: "Mall/Target"
  };
  
  const routeName = routeNames[route];
  
  // Check today first
  const todaySchedule = getScheduleForDay(route, currentDayOfWeek);
  
  for (const time of todaySchedule) {
    const departureMinutes = parseTime(time);
    if (departureMinutes > currentMinutes) {
      const minutesUntil = departureMinutes - currentMinutes;
      return {
        route: routeName,
        nextTime: time,
        countdown: formatCountdown(minutesUntil),
        dayOfWeek: currentDayOfWeek,
        isFutureDay: false
      };
    }
  }
  
  // No more shuttles today, check the next 7 days
  for (let daysAhead = 1; daysAhead <= 7; daysAhead++) {
    const futureDayOfWeek = (currentDayOfWeek + daysAhead) % 7;
    const futureSchedule = getScheduleForDay(route, futureDayOfWeek);
    
    if (futureSchedule.length > 0) {
      // Get the first shuttle of that day
      const firstTime = futureSchedule[0];
      
      return {
        route: routeName,
        nextTime: firstTime,
        countdown: getDayName(futureDayOfWeek),
        dayOfWeek: futureDayOfWeek,
        isFutureDay: true
      };
    }
  }
  
  // No shuttles found in the next week (shouldn't happen with real schedules)
  return null;
}