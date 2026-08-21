import { Route, Routes } from "react-router";
import { lazy, Suspense} from "react";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import LoginPage from "./pages/Login/LoginPage";
import Contact from "./pages/Contact/ContactPage"

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"));
const JobDetail = lazy(() => import("./pages/Detail/Detail"));
const ProfilePage = lazy(() => import("./pages/Profile/ProfilePage"));
const NotFoundPage = lazy(() => import("./pages/404"));

function App() {

  return (
    <>
      <Header />
      <Suspense
        fullback={
          <div
            style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}
          >
            Crgando...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/regirser" element={<LoginPage />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route path="/profile" element={
            <ProtectedRoute >
              <ProfilePage />
            </ProtectedRoute> 
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
