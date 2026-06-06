import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookingBox from "./components/BookingBox.jsx";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Tours from "./pages/Tours";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/SignUp.jsx";
import Bookings from "./pages/Bookings";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <BookingBox />
      <Services />
      <Destinations />
      <WhyChoose />
      <Testimonials />
    </div>
  );
}

// 404 Page
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-9xl font-bold text-[#032B5B]">404</h1>
      <p className="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</p>
      <p className="text-gray-400 mt-2 mb-8">
        The page you're looking for doesn't exist.
      </p>

      <a
        href="/"
        className="bg-[#032B5B] hover:bg-yellow-500 text-white px-8 py-3 rounded-xl transition font-semibold"
      >
        Back to Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/flights" element={<Flights />} />
      </Routes>
      <Footer />

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </BrowserRouter>
  );
}