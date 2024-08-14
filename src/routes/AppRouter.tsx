import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
//Layouts
const MainLayout = lazy(() => import("../layouts/MainLayout"));
//Pages
const HomePage = lazy(() => import("../pages/HomePage"));
const DetailsMovie = lazy(() => import("../pages/DetailsMovie"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col h-[90vh] items-center justify-center">
          Loading...
        </div>
      }
    >
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/details-movie/:id" element={<DetailsMovie />} />
            <Route path="/*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppRouter;
