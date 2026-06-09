import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../context/BookingContext";

const Bookings = () => {
  const navigate = useNavigate();

  const {
    bookings,
    cancelBooking,
    clearBookings,
  } = useContext(BookingContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "Pending"
  );

  const confirmedBookings = bookings.filter(
    (booking) => booking.status === "Confirmed"
  );

  const canceledBookings = bookings.filter(
    (booking) => booking.status === "Canceled"
  );

  const filteredBookings = bookings.filter((booking) => {
    const title = booking.title || "";
    const destination = booking.destination || "";

    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "All" ||
      booking.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-[#032B5B] mb-8">
          My Bookings
        </h1>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">

          <div className="bg-blue-100 p-6 rounded-3xl shadow-md">
            <h2 className="text-xl font-bold text-blue-700">
              Total
            </h2>
            <p className="text-5xl font-bold mt-4">
              {bookings.length}
            </p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-3xl shadow-md">
            <h2 className="text-xl font-bold text-yellow-700">
              Pending
            </h2>
            <p className="text-5xl font-bold mt-4">
              {pendingBookings.length}
            </p>
          </div>

          <div className="bg-green-100 p-6 rounded-3xl shadow-md">
            <h2 className="text-xl font-bold text-green-700">
              Confirmed
            </h2>
            <p className="text-5xl font-bold mt-4">
              {confirmedBookings.length}
            </p>
          </div>

          <div className="bg-red-100 p-6 rounded-3xl shadow-md">
            <h2 className="text-xl font-bold text-red-700">
              Canceled
            </h2>
            <p className="text-5xl font-bold mt-4">
              {canceledBookings.length}
            </p>
          </div>

        </div>


        <div className="bg-white p-6 rounded-3xl shadow-md mb-8">

          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                flex-1
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
                outline-none
              "
            />

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
              "
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Canceled">Canceled</option>
            </select>

            <button
              onClick={clearBookings}
              className="
                bg-red-500
                hover:bg-red-600
                text-white
                px-6
                py-3
                rounded-xl
                transition
              "
            >
              Clear All
            </button>

          </div>

        </div>


        {filteredBookings.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-md p-12 text-center">

            <h2 className="text-3xl font-bold text-gray-500">
              No bookings found
            </h2>

            <p className="text-gray-400 mt-3">
              Try changing your search or filter.
            </p>

          </div>
        ) : (
          <div className="flex flex-col gap-6">

            {filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="
                  bg-white
                  rounded-3xl
                  shadow-md
                  p-6
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  md:justify-between
                  gap-6
                "
              >

                <div>
                  <h2 className="text-2xl font-bold text-[#032B5B]">
                    {booking.title || "Untitled Booking"}
                  </h2>

                  <p className="text-gray-500">
                    {booking.destination || "No Destination"}
                  </p>

                  <p className="text-yellow-500 font-bold mt-2">
                    {booking.price || "N/A"}
                  </p>
                </div>

                <div className="flex flex-col gap-3">


                  <div
                    className={`px-4 py-2 rounded-full text-white text-sm font-semibold text-center ${booking.status === "Pending"
                        ? "bg-yellow-500"
                        : booking.status === "Confirmed"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                  >
                    {booking.status}
                  </div>

                  {/* Payment Button */}
                  <button
                    onClick={() =>
                      navigate(`/payment/${booking.id}`)
                    }
                    disabled={
                      booking.status === "Confirmed" ||
                      booking.status === "Canceled"
                    }
                    className={`py-3 px-5 rounded-xl transition text-white ${booking.status === "Confirmed" ||
                        booking.status === "Canceled"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                      }`}
                  >
                    {booking.status === "Confirmed"
                      ? "Confirmed"
                      : "Proceed To Payment"}
                  </button>

                  {/* Cancel Button */}
                  <button
                    onClick={() => cancelBooking(booking.id)}
                    disabled={
                      booking.status === "Canceled" ||
                      booking.status === "Confirmed"
                    }
                    className={`py-3 px-5 rounded-xl transition text-white ${booking.status === "Canceled" ||
                        booking.status === "Confirmed"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-600"
                      }`}
                  >
                    {booking.status === "Canceled"
                      ? "Canceled"
                      : "Cancel Booking"}
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default Bookings;