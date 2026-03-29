import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Academics } from "./components/Academics";
import { Events } from "./components/Events";
import { Campus } from "./components/Campus";
import { SpiritStore } from "./components/SpiritStore";
import { Profile } from "./components/Profile";
import { ShuttleSchedule } from "./components/ShuttleSchedule";
import { Library } from "./components/Library";
import { FitnessSchedule } from "./components/FitnessSchedule";
import { CounselingAppointment } from "./components/CounselingAppointment";
import { CareerAppointment } from "./components/CareerAppointment";
import { ClubDetail } from "./components/ClubDetail";
import { ResidenceLife } from "./components/ResidenceLife";
import { Notifications } from "./components/Notifications";
import { MaintenanceRequest } from "./components/MaintenanceRequest";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "academics", Component: Academics },
      { path: "events", Component: Events },
      { path: "campus", Component: Campus },
      { path: "spirit-store", Component: SpiritStore },
      { path: "profile", Component: Profile },
      { path: "shuttle-schedule", Component: ShuttleSchedule },
      { path: "library", Component: Library },
      { path: "fitness-schedule", Component: FitnessSchedule },
      { path: "counseling-appointment", Component: CounselingAppointment },
      { path: "career-appointment", Component: CareerAppointment },
      { path: "club/:clubId", Component: ClubDetail },
      { path: "residence-life", Component: ResidenceLife },
      { path: "notifications", Component: Notifications },
      { path: "maintenance-request", Component: MaintenanceRequest },
      { path: "maintenance", Component: MaintenanceRequest },
    ],
  },
]);