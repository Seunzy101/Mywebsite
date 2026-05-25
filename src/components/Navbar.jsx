import { useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-500 font-semibold"
      : "hover:text-yellow-500 transition";

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-500 font-semibold py-1"
      : "hover:text-yellow-500 transition py-1";

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md px-4 md:px-10 py-4">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Tulip Logo" className="w-10 md:w-12" />
          <h1 className="text-2xl md:text-3xl font-bold text-[#032B5B]">
            Tulip<span className="text-yellow-500">Hospitality</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 font-medium">
          <li><NavLink to="/" end className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/flights" className={navLinkClass}>Flights</NavLink></li>
          <li><NavLink to="/hotels" className={navLinkClass}>Hotels</NavLink></li>
          <li><NavLink to="/tours" className={navLinkClass}>Tours</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <NavLink to="/signup">
            <button className="bg-[#032B5B] hover:bg-yellow-500 text-white px-5 py-3 rounded-xl transition-colors duration-300">
              Sign Up
            </button>
          </NavLink>
          <NavLink to="/bookings">
            <button className="bg-[#032B5B] hover:bg-yellow-500 text-white px-5 py-3 rounded-xl transition-colors duration-300">
              My Bookings
            </button>
          </NavLink>
          <NavLink to="/profile">
            <FaUserCircle className="text-4xl text-[#032B5B] hover:text-yellow-500 transition cursor-pointer" />
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <div
          className="lg:hidden text-2xl cursor-pointer text-[#032B5B]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-2 bg-white rounded-2xl p-4 shadow-md">

          <NavLink to="/" end className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/flights" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Flights</NavLink>
          <NavLink to="/hotels" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Hotels</NavLink>
          <NavLink to="/tours" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Tours</NavLink>
          <NavLink to="/contact" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/about" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>

          <div className="flex flex-col gap-3 mt-4">
            <NavLink to="/signup" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-[#032B5B] hover:bg-yellow-500 text-white px-5 py-3 rounded-xl transition-colors duration-300">
                Sign Up
              </button>
            </NavLink>
            <NavLink to="/bookings" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-[#032B5B] hover:bg-yellow-500 text-white px-5 py-3 rounded-xl transition">
                My Bookings
              </button>
            </NavLink>
            <NavLink to="/profile" onClick={() => setMenuOpen(false)}>
              <div className="flex items-center justify-center gap-2 border border-[#032B5B] text-[#032B5B] hover:bg-[#032B5B] hover:text-white py-3 rounded-xl transition cursor-pointer">
                <FaUserCircle className="text-2xl" />
                <span className="font-medium">Profile</span>
              </div>
            </NavLink>
          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;