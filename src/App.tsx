import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import WelcomePage from "./pages/WelcomePage";

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
