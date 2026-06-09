import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      const loggedIn = localStorage.getItem("loggedIn");

      if (!savedUser || loggedIn !== "true") {
        navigate("/signin");
        return;
      }

      setUser(savedUser);

      const savedBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

      setBookings(savedBookings.slice(0, 3));
    } catch (error) {
      localStorage.removeItem("user");
      localStorage.removeItem("loggedIn");
      navigate("/signin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");

    window.dispatchEvent(new Event("authChange"));

    toast.success("Logged out successfully");

    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* LEFT PROFILE CARD */}
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

          <FaUserCircle className="text-8xl text-[#032B5B] mx-auto mb-4" />

          <h1 className="text-3xl font-bold text-[#032B5B]">
            {user.fullName}
          </h1>

          <p className="text-gray-500 mt-2">
            Premium Travel Member
          </p>

          <Link to="/edit-profile">
            <button
              className="
                mt-6
                w-full
                bg-[#032B5B]
                hover:bg-yellow-500
                text-white
                py-4
                rounded-xl
                transition
              "
            >
              Edit Profile
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="
              mt-3
              w-full
              bg-red-500
              hover:bg-red-600
              text-white
              py-4
              rounded-xl
              transition
            "
          >
            Logout
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 flex flex-col gap-8">

          {/* PERSONAL INFORMATION */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-[#032B5B] mb-6">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="border rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <FaUserCircle className="text-[#032B5B]" />
                  <p className="font-semibold">Full Name</p>
                </div>

                <p className="text-gray-500">
                  {user.fullName || "Not Set"}
                </p>
              </div>

              <div className="border rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <FaEnvelope className="text-[#032B5B]" />
                  <p className="font-semibold">Email</p>
                </div>

                <p className="text-gray-500">
                  {user.email || "Not Set"}
                </p>
              </div>

              <div className="border rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <FaPhone className="text-[#032B5B]" />
                  <p className="font-semibold">Phone Number</p>
                </div>

                <p className="text-gray-500">
                  {user.phone || "Not Set"}
                </p>
              </div>

              <div className="border rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <FaMapMarkerAlt className="text-[#032B5B]" />
                  <p className="font-semibold">Location</p>
                </div>

                <p className="text-gray-500">
                  {user.location || "Not Set"}
                </p>
              </div>

            </div>

          </div>

          {/* RECENT BOOKINGS */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold text-[#032B5B]">
                Recent Bookings
              </h2>

              <Link to="/bookings">
                <button
                  className="
                    bg-[#032B5B]
                    hover:bg-yellow-500
                    text-white
                    px-5
                    py-3
                    rounded-xl
                    transition
                  "
                >
                  View All
                </button>
              </Link>

            </div>

            {bookings.length === 0 ? (
              <div className="border rounded-2xl p-6 text-center text-gray-500">
                No bookings yet
              </div>
            ) : (
              <div className="flex flex-col gap-4">

                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="border rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                  >
                    <div>
                      <h3 className="font-bold text-lg">
                        {booking.title}
                      </h3>

                      <p className="text-gray-500">
                        {booking.destination}
                      </p>
                    </div>

                    <span
                      className={`px-4 py-2 rounded-full text-sm w-fit ${
                        booking.status === "Confirmed"
                          ? "bg-green-100 text-green-600"
                          : booking.status === "Canceled"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>
                ))}

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;