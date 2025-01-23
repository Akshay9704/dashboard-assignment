import { Route, Routes, Navigate } from "react-router-dom";
import AppLayout from "./components/layout";
import DashboardPage from "./pages/dashboard/dashboard";
import PortfolioPage from "./pages/portfolio/portfolio";
import InputsPage from "./pages/inputs/inputs";
import ProfilePage from "./pages/profile/profile";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* Redirect to /portfolio */}
          <Route index element={<Navigate to="/portfolio" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="inputs" element={<InputsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

