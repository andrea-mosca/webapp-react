import { BrowserRouter, Routes, Route } from "react-router";

import DefaulLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import MovieIndexPage from "./pages/MovieIndexPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaulLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path=":id" element={<MovieIndexPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
