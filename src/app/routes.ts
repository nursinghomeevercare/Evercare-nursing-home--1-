import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import NursingHomePage from "./pages/NursingHomePage";
import DementiaCare from "./pages/DementiaCare";
import BedboundCare from "./pages/BedboundCare";
import RehabilitationCare from "./pages/RehabilitationCare";
import PricingPage from "./pages/PricingPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import InternationalPage from "./pages/InternationalPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "nursing-home-bangkok", Component: NursingHomePage },
      { path: "dementia-care", Component: DementiaCare },
      { path: "bedbound-care", Component: BedboundCare },
      { path: "rehabilitation", Component: RehabilitationCare },
      { path: "pricing", Component: PricingPage },
      { path: "facilities", Component: FacilitiesPage },
      { path: "international", Component: InternationalPage },
      { path: "about", Component: AboutPage },
      { path: "blog", Component: BlogPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFound },
      ],
    },
  ],
  {
    basename: "/"  }
);
