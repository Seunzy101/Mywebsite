import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#032B5B] text-white">

      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Tulip Hospitality" className="w-12 h-12 object-contain" />
              <h2 className="text-2xl font-bold">
                Tulip<span className="text-yellow-400">Hospitality</span>
              </h2>
            </div>
            <p className="text-gray-300 leading-8 mb-6">
              We provide unforgettable travel experiences, affordable flight bookings,
              hotel reservations, visa services and tours worldwide.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedin].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-yellow-400 hover:text-black transition">
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="hover:text-yellow-400 transition"><Link to="/">Home</Link></li>
              <li className="hover:text-yellow-400 transition"><Link to="/flights">Flights</Link></li>
              <li className="hover:text-yellow-400 transition"><Link to="/hotels">Hotels</Link></li>
              <li className="hover:text-yellow-400 transition"><Link to="/tours">Tours</Link></li>
              <li className="hover:text-yellow-400 transition"><Link to="/contact">Contact</Link></li>
              <li className="hover:text-yellow-400 transition"><Link to="/about">About</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="hover:text-yellow-400 transition cursor-pointer">Visa Processing</li>
              <li className="hover:text-yellow-400 transition cursor-pointer">Airport Transfer</li>
              <li className="hover:text-yellow-400 transition cursor-pointer">Boat Cruise</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1">Add</span>
                <span>10, Surulere, Lagos, Nigeria.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400">Call</span>
                <span>+234 906 084 6432</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400">Email</span>
                <span>ashiruseun17@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400">Time</span>
                <span>Mon - Sun: 8:00am - 10:00pm</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-4 text-center text-gray-400 text-sm">
        © 2026 Tulip Hospitality. All Rights Reserved. Built with love by Seun Tutored by Mr. Raymond.
      </div>

    </footer>
  );
};

export default Footer;