import {
  FaPlane,
  FaHotel,
  FaMapMarkedAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

const Bookings = () => {

  const {
    bookings,
    updateBookingStatus,
    cancelBooking,
  } = useContext(BookingContext);

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "Pending"
  );

  const confirmedBookings = bookings.filter(
    (booking) => booking.status === "Confirmed"
  );

  const canceledBookings = bookings.filter(
    (booking) => booking.status === "Canceled"
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-[#032B5B] mb-8">
          My Bookings
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          {/* Pending */}
          <div className="bg-yellow-100 p-6 rounded-3xl shadow-md">
            <h2 className="text-2xl font-bold text-yellow-700">Pending</h2>
            <p className="text-5xl font-bold mt-4">{pendingBookings.length}</p>
          </div>

          {/* Confirmed */}
          <div className="bg-green-100 p-6 rounded-3xl shadow-md">
            <h2 className="text-2xl font-bold text-green-700">Confirmed</h2>
            <p className="text-5xl font-bold mt-4">{confirmedBookings.length}</p>
          </div>

          {/* Canceled */}
          <div className="bg-red-100 p-6 rounded-3xl shadow-md">
            <h2 className="text-2xl font-bold text-red-700">Canceled</h2>
            <p className="text-5xl font-bold mt-4">{canceledBookings.length}</p>
          </div>

        </div>

        <div className="flex flex-col gap-6">

          {bookings.length === 0 && (
            <p className="text-gray-500">No bookings yet.</p>
          )}

          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-3xl shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >

              <div>
                <h2 className="text-2xl font-bold text-[#032B5B]">
                  {booking.title}
                </h2>
                <p className="text-gray-500">{booking.destination}</p>
                <p className="text-yellow-500 font-bold mt-2">{booking.price}</p>
              </div>

              {/* ✅ Fixed: was <<div */}
              <div className="flex flex-col gap-3">

                {/* Status Pill */}
                <div
                  className={`px-4 py-2 rounded-full text-white text-sm font-semibold text-center ${
                    booking.status === "Pending"
                      ? "bg-yellow-500"
                      : booking.status === "Confirmed"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {booking.status}
                </div>

                {/* Confirm Button */}
                <button
                  onClick={() => updateBookingStatus(booking.id, "Confirmed")}
                  disabled={
                    booking.status === "Confirmed" ||
                    booking.status === "Canceled"
                  }
                  className={`py-3 px-5 rounded-xl transition text-white ${
                    booking.status === "Confirmed" || booking.status === "Canceled"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  {booking.status === "Confirmed" ? "Confirmed" : "Confirm Booking"}
                </button>

                {/* Cancel Button */}
                <button
                  onClick={() => cancelBooking(booking.id)}
                  disabled={
                    booking.status === "Canceled" ||
                    booking.status === "Confirmed"
                  }
                  className={`py-3 px-5 rounded-xl transition text-white ${
                    booking.status === "Canceled" || booking.status === "Confirmed"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                >
                  {booking.status === "Canceled" ? "Canceled" : "Cancel Booking"}
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Bookings;