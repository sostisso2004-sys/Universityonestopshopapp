import { BookOpen, Calendar, FileText, Award, ChevronRight, Clock, Video, Globe } from "lucide-react";
import { useState } from "react";

export function Academics() {
  const [activeTab, setActiveTab] = useState<"schedule" | "grades" | "assignments">("schedule");

  const courses = [
    {
      id: 1,
      name: "Business Internship I",
      code: "BUS 4600 01",
      instructor: "Andrienne Caroll Conlon, MBA",
      schedule: "Online - Asynchronous",
      room: "Canvas",
      grade: "A",
      credits: 1,
      color: "bg-[#9B1B30]",
      isOnline: true,
    },
    {
      id: 2,
      name: "Techniques of Business Writing",
      code: "ENG 2380 01",
      instructor: "Patricia Rossi",
      schedule: "Tuesday 8:00 AM - 8:55 AM",
      room: "K207",
      grade: "A",
      credits: 1,
      color: "bg-[#C9B382]",
      isOnline: false,
    },
    {
      id: 3,
      name: "Calculus I",
      code: "MAT 2210 01",
      instructor: "Roberta Silver",
      schedule: "Tue, Thu 10:05 AM - 12:05 PM",
      room: "W212",
      grade: "A",
      credits: 4,
      color: "bg-[#9B1B30]",
      isOnline: false,
    },
    {
      id: 4,
      name: "Real World Economics",
      code: "ECO 3010 01",
      instructor: "Peter D'Antonio",
      schedule: "Tue, Thu 5:00 PM - 6:25 PM",
      room: "Online - Synchronous",
      grade: "A",
      credits: 3,
      color: "bg-[#C9B382]",
      isOnline: true,
    },
    {
      id: 5,
      name: "(H) Global Economics & Finance",
      code: "ECO 3200H01",
      instructor: "Michael Betzag",
      schedule: "Tuesday 6:35 PM - 9:25 PM",
      room: "C111",
      grade: "A",
      credits: 3,
      color: "bg-[#9B1B30]",
      isOnline: false,
    },
    {
      id: 6,
      name: "(H)ModMinds-ReflectOnChangingWorld",
      code: "ENG 2900H02",
      instructor: "Jeffry Massey",
      schedule: "Thursday 6:35 PM - 9:25 PM",
      room: "W212",
      grade: "A",
      credits: 3,
      color: "bg-[#C9B382]",
      isOnline: false,
    },
    {
      id: 7,
      name: "Personal Finance Planning",
      code: "FIN 2510 01",
      instructor: "Jerome Dantone",
      schedule: "Online - Asynchronous",
      room: "Canvas",
      grade: "A",
      credits: 1,
      color: "bg-[#9B1B30]",
      isOnline: true,
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Calculus Problem Set #6",
      course: "MAT 2210",
      dueDate: "March 12",
      status: "upcoming",
      color: "bg-[#9B1B30]",
    },
    {
      id: 2,
      title: "Microeconomics Case Study",
      course: "ECO 3010",
      dueDate: "March 14",
      status: "upcoming",
      color: "bg-[#C9B382]",
    },
    {
      id: 3,
      title: "Honors Macro Research Paper",
      course: "ECO 3200H",
      dueDate: "March 18",
      status: "upcoming",
      color: "bg-[#9B1B30]",
    },
    {
      id: 4,
      title: "Literature Analysis Essay",
      course: "ENG 2900H",
      dueDate: "March 20",
      status: "upcoming",
      color: "bg-[#C9B382]",
    },
    {
      id: 5,
      title: "Financial Statement Analysis",
      course: "FIN 2510",
      dueDate: "March 16",
      status: "upcoming",
      color: "bg-[#9B1B30]",
    },
  ];

  const grades = [
    { course: "BUS 3600", assignments: 8, grade: "A", percentage: 98 },
    { course: "ENG 2380", assignments: 6, grade: "A", percentage: 97 },
    { course: "MAT 2210", assignments: 15, grade: "A", percentage: 96 },
    { course: "ECO 3010", assignments: 10, grade: "A", percentage: 99 },
    { course: "ECO 3200H", assignments: 8, grade: "A", percentage: 100 },
    { course: "ENG 2900H", assignments: 7, grade: "A", percentage: 98 },
    { course: "FIN 2510", assignments: 9, grade: "A", percentage: 97 },
  ];

  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 pt-8 pb-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Academics</h1>
            <p className="text-gray-500 text-sm mt-1">Spring 2026 Semester</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Total Credits</p>
            <p className="text-2xl font-bold text-gray-900">70/120</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setActiveTab("schedule")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "schedule"
                ? "bg-[#9B1B30] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Schedule
          </button>
          <button
            onClick={() => setActiveTab("grades")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "grades"
                ? "bg-[#9B1B30] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Grades
          </button>
          <button
            onClick={() => setActiveTab("assignments")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "assignments"
                ? "bg-[#9B1B30] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Assignments
          </button>
        </div>
      </div>

      {/* Schedule Tab */}
      {activeTab === "schedule" && (
        <div className="px-6 py-6 space-y-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className={`${course.color} h-2`}></div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">{course.name}</h3>
                      {course.isOnline && (
                        <span className="px-2 py-0.5 bg-red-50 text-[#9B1B30] rounded-full text-xs font-medium flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          Online
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{course.code} • {course.credits} {course.credits === 1 ? 'credit' : 'credits'}</p>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {course.grade}
                  </span>
                </div>
                <div className="space-y-2 mt-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{course.room}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Grades Tab */}
      {activeTab === "grades" && (
        <div className="px-6 py-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="text-center">
              <p className="text-gray-500 text-sm">Cumulative GPA</p>
              <p className="text-4xl font-bold text-gray-900 mt-2">4.0</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="text-yellow-600 text-sm font-medium">Honors Student • Dean's List</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
              <div className="text-center">
                <p className="text-gray-500 text-sm">Year</p>
                <p className="text-lg font-bold text-gray-900">Sophomore</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-sm">Majors</p>
                <p className="text-lg font-bold text-gray-900">2</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-sm">Credits</p>
                <p className="text-lg font-bold text-gray-900">{totalCredits}</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {grades.map((grade, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{grade.course}</h3>
                    <p className="text-sm text-gray-500">{grade.assignments} assignments</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">{grade.grade}</p>
                    <p className="text-sm text-gray-500">{grade.percentage}%</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#9B1B30] h-2 rounded-full"
                    style={{ width: `${grade.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Assignments Tab */}
      {activeTab === "assignments" && (
        <div className="px-6 py-6 space-y-4">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
            >
              <div className="flex items-start gap-3">
                <div className={`${assignment.color} p-2 rounded-lg`}>
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{assignment.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{assignment.course}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Due {assignment.dueDate}</span>
                    {assignment.status === "urgent" && (
                      <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full font-medium">
                        Due Soon
                      </span>
                    )}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}