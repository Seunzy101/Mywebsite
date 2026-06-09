import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../context/BookingContext";

const Bookings = () => {
  const navigate = useNavigate();

  const { bookings, cancelBooking, clearBookings } =
    useContext(BookingContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const pendingBookings = bookings.filter(
    (b) => b.status === "Pending"
  );

  const confirmedBookings = bookings.filter(
    (b) => b.status === "Confirmed"
  );

  const canceledBookings = bookings.filter(
    (b) => b.status === "Canceled"
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

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">

          <div className="bg-blue-100 p-6 rounded-3xl shadow-md">
            <h2>Total</h2>
            <p className="text-4xl font-bold">{bookings.length}</p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-3xl shadow-md">
            <h2>Pending</h2>
            <p className="text-4xl font-bold">{pendingBookings.length}</p>
          </div>

          <div className="bg-green-100 p-6 rounded-3xl shadow-md">
            <h2>Confirmed</h2>
            <p className="text-4xl font-bold">{confirmedBookings.length}</p>
          </div>

          <div className="bg-red-100 p-6 rounded-3xl shadow-md">
            <h2>Canceled</h2>
            <p className="text-4xl font-bold">{canceledBookings.length}</p>
          </div>

        </div>

        {/* FILTERS */}
        <div className="bg-white p-6 rounded-3xl shadow-md mb-8">

          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border rounded-xl px-4 py-3"
            />

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border rounded-xl px-4 py-3"
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Canceled">Canceled</option>
            </select>

            <button
              onClick={clearBookings}
              className="bg-red-500 text-white px-6 py-3 rounded-xl"
            >
              Clear All
            </button>

          </div>

        </div>

        {/* BOOKINGS LIST */}
        {filteredBookings.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-md p-12 text-center">
            No bookings found
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
                  md:justify-between
                  gap-6
                  cursor-pointer
                  hover:shadow-xl
                  transition
                "
              >

                {/* LEFT SIDE (CLICKABLE AREA) */}
                <div
                  className="flex-1"
                  onClick={() =>
                    navigate(`/booking/${booking.id}`)
                  }
                >
                  <h2 className="text-2xl font-bold text-[#032B5B]">
                    {booking.title}
                  </h2>

                  <p className="text-gray-500">
                    {booking.destination}
                  </p>

                  <p className="text-yellow-500 font-bold mt-2">
                    {booking.price}
                  </p>
                </div>

                {/* RIGHT SIDE (BUTTONS - NOT CLICKABLE) */}
                <div
                  className="flex flex-col gap-3"
                  onClick={(e) => e.stopPropagation()}
                >

                  {/* STATUS */}
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

                  {/* PAYMENT */}
                  <button
                    onClick={() =>
                      navigate(`/payment/${booking.id}`)
                    }
                    disabled={
                      booking.status !== "Pending"
                    }
                    className={`py-3 px-5 rounded-xl text-white ${
                      booking.status !== "Pending"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {booking.status === "Confirmed"
                      ? "Confirmed"
                      : "Proceed To Payment"}
                  </button>

                  {/* CANCEL */}
                  <button
                    onClick={() =>
                      cancelBooking(booking.id)
                    }
                    disabled={
                      booking.status !== "Pending"
                    }
                    className={`py-3 px-5 rounded-xl text-white ${
                      booking.status !== "Pending"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    Cancel Booking
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