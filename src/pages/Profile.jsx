import { Link } from "react-router-dom";
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Profile = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">

            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">

                {/* Left Profile Card */}
                <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

                    <FaUserCircle className="text-8xl text-[#032B5B] mx-auto mb-4" />

                    <h1 className="text-3xl font-bold text-[#032B5B]">
                        Welcome Back
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

                </div>

                {/* Right Section */}
                <div className="lg:col-span-2 flex flex-col gap-8">

                    {/* Personal Information */}
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
                                    Ashiru Seun
                                </p>
                            </div>

                            <div className="border rounded-2xl p-5">
                                <div className="flex items-center gap-3 mb-2">
                                    <FaEnvelope className="text-[#032B5B]" />
                                    <p className="font-semibold">Email</p>
                                </div>

                                <p className="text-gray-500">
                                    ashiruseun17@gmail.com
                                </p>
                            </div>

                            <div className="border rounded-2xl p-5">
                                <div className="flex items-center gap-3 mb-2">
                                    <FaPhone className="text-[#032B5B]" />
                                    <p className="font-semibold">Phone Number</p>
                                </div>

                                <p className="text-gray-500">
                                    +234 906 084 6432
                                </p>
                            </div>

                            <div className="border rounded-2xl p-5">
                                <div className="flex items-center gap-3 mb-2">
                                    <FaMapMarkerAlt className="text-[#032B5B]" />
                                    <p className="font-semibold">Location</p>
                                </div>

                                <p className="text-gray-500">
                                    Lagos, Nigeria
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Booking History */}
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

                        <div className="flex flex-col gap-4">

                            <div className="border rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                                <div>
                                    <h3 className="font-bold text-lg">
                                        Dubai Vacation Tour
                                    </h3>

                                    <p className="text-gray-500">
                                        Travel Date: June 15, 2026
                                    </p>
                                </div>

                                <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm w-fit">
                                    Confirmed
                                </span>

                            </div>

                            <div className="border rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                                <div>
                                    <h3 className="font-bold text-lg">
                                        London Hotel Reservation
                                    </h3>

                                    <p className="text-gray-500">
                                        Check-In: August 2, 2026
                                    </p>
                                </div>

                                <span className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm w-fit">
                                    Pending
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Profile;