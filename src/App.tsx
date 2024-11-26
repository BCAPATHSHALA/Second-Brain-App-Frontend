import Dashboard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AuthPage from "./pages/auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/authenticate" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
