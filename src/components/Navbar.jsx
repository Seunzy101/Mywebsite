import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
  className="
    sticky
    top-0
    z-50
    bg-white/95
    backdrop-blur-md
    shadow-md
    px-4
    md:px-10
    py-4
  "
>

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
          <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
          <li><Link to="/flights" className="hover:text-yellow-500">Flights</Link></li>
          <li><Link to="/hotels" className="hover:text-yellow-500">Hotels</Link></li>
          <li><Link to="/tours" className="hover:text-yellow-500">Tours</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
          <li><Link to="/about" className="hover:text-yellow-500">About</Link></li>
        </ul>

        {/* Desktop Button */}
        <Link to="/bookings">
  <button className="hidden lg:block bg-[#032B5B] hover:bg-yellow-500 text-white px-5 py-3 rounded-xl transition-colors duration-300">
    My Bookings
  </button>
</Link>

        {/* Mobile Icon */}
        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-6 flex flex-col gap-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/flights" onClick={() => setMenuOpen(false)}>Flights</Link>
          <Link to="/hotels" onClick={() => setMenuOpen(false)}>Hotels</Link>
          <Link to="/tours" onClick={() => setMenuOpen(false)}>Tours</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/bookings" onClick={() => setMenuOpen(false)}>
  <button className="bg-[#032B5B] text-white px-5 py-3 rounded-xl mt-4">
    My Bookings
  </button>
</Link>
        </div>
      )}

    </nav> 
  );
};
export default Navbar;