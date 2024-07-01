import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import BlogsPage from "./pages/BlogsPage";
import SupportPage from "./pages/SupportPage";
import Login from "./pages/Login";
import Trial from "./pages/Trial";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60 * 1000 },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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
    </QueryClientProvider>
  );
}

export default App;
