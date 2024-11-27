import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import AuthPage from "./pages/auth";
import SharedBrain from "./pages/sharedBrain";
import SharedLinkListPage from "./pages/SharedLinkListPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRedirect from "./components/AuthRedirect";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/authenticate"
          element={
            <AuthRedirect>
              {/* I am not able to visite after loging */}
              <AuthPage />
            </AuthRedirect>
          }
        />
        <Route path="/shared/:sharedHash" element={<SharedBrain />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {/* I am not able to visite before loging */}
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/all-shared-links" element={<SharedLinkListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
