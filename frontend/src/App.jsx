import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import BlogsPage from "./pages/BlogsPage";
import SupportPage from "./pages/SupportPage";
import Login from "./pages/Login";
import Trial from "./pages/Trial";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="course" element={<CoursePage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="login" element={<Login />} />
          <Route path="trial" element={<Trial />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
