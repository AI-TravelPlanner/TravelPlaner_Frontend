import TripPage from "@/createtrip/TripPage";
import HomePage from "@/home/HomePage";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./error-page/PageNotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/create-trip" element={<TripPage />} />
    {/* Catch-All Route for 404 Page */}
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default AppRoutes;
