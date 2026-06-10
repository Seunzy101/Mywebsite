import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // 🔥 AUTH SYNC (100% RELIABLE)
  useEffect(() => {
    const syncAuth = () => {
      const storedUser = localStorage.getItem("user");
      const loggedIn = localStorage.getItem("loggedIn");

      if (storedUser && loggedIn === "true") {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    syncAuth();

    window.addEventListener("authChange", syncAuth);
    window.addEventListener("storage", syncAuth);

    return () => {
      window.removeEventListener("authChange", syncAuth);
      window.removeEventListener("storage", syncAuth);
    };
  }, []);

  // 🔥 LOGOUT (FULL RESET)
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("loggedIn");

    setUser(null);

    toast.success("Logged out successfully");

    // force sync everywhere
    window.dispatchEvent(new Event("authChange"));

    navigate("/");
  };

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

        {/* LOGO */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Tulip Logo"
            className="w-10 md:w-12 cursor-pointer"
          />

          <h1 className="text-2xl md:text-3xl font-bold text-[#032B5B] cursor-pointer">
            Tulip<span className="text-yellow-500">Hospitality</span>
          </h1>
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 font-medium">
          <li><NavLink to="/" end className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/flights" className={navLinkClass}>Flights</NavLink></li>
          <li><NavLink to="/hotels" className={navLinkClass}>Hotels</NavLink></li>
          <li><NavLink to="/tours" className={navLinkClass}>Tours</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
        </ul>

        {/* DESKTOP ACTIONS */}
        <div className="hidden lg:flex items-center gap-4">

          <NavLink to="/bookings">
            <button className="bg-[#032B5B] hover:bg-yellow-500 text-white px-5 py-3 rounded-xl">
              My Bookings
            </button>
          </NavLink>

          {!user ? (
            <>
              <NavLink to="/signin">
                <button className="border border-[#032B5B] text-[#032B5B] px-5 py-3 rounded-xl hover:bg-[#032B5B] hover:text-white transition">
                  Sign In
                </button>
              </NavLink>

              <NavLink to="/signup">
                <button className="bg-[#032B5B] hover:bg-yellow-500 text-white px-5 py-3 rounded-xl">
                  Sign Up
                </button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/profile">
                <FaUserCircle className="text-4xl text-[#032B5B] hover:text-yellow-500 cursor-pointer" />
              </NavLink>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-xl"
              >
                Logout
              </button>
            </>
          )}

        </div>

        {/* MOBILE TOGGLE */}
        <div
          className="lg:hidden text-2xl cursor-pointer text-[#032B5B]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-2 bg-white rounded-2xl p-4 shadow-md">

          <NavLink to="/" end className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/flights" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Flights</NavLink>
          <NavLink to="/hotels" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Hotels</NavLink>
          <NavLink to="/tours" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Tours</NavLink>
          <NavLink to="/contact" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/about" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>

          <div className="flex flex-col gap-3 mt-4">

            <NavLink to="/bookings" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-[#032B5B] text-white py-3 rounded-xl">
                My Bookings
              </button>
            </NavLink>

            {!user ? (
              <>
                <NavLink to="/signin" onClick={() => setMenuOpen(false)}>
                  <button className="w-full border border-[#032B5B] text-[#032B5B] py-3 rounded-xl">
                    Sign In
                  </button>
                </NavLink>

                <NavLink to="/signup" onClick={() => setMenuOpen(false)}>
                  <button className="w-full bg-[#032B5B] text-white py-3 rounded-xl">
                    Sign Up
                  </button>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/profile" onClick={() => setMenuOpen(false)}>
                  <div className="flex items-center justify-center gap-2 border border-[#032B5B] text-[#032B5B] py-3 rounded-xl">
                    <FaUserCircle className="text-2xl" />
                    <span>Profile</span>
                  </div>
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white py-3 rounded-xl"
                >
                  Logout
                </button>
              </>
            )}

          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;