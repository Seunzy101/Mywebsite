import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookingBox from "./components/BookingBox.jsx";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer";
import Flights from "./pages/Flights"
import Hotels from "./pages/Hotels"
import Tours from "./pages/Tours"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Account from "./pages/Account";
import Bookings from "./pages/Bookings"
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
        <Route path="/account" element={<Account />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}