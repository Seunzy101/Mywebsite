import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Bookings = () => {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        toast.error("Please login");
        navigate("/signin");
        return;
      }

      const response = await axios.get(
        `http://localhost/tulip-backend/api/bookings/get.php?user_id=${user.id}`
      );

      if (response.data.status === "success") {
        setBookings(response.data.bookings);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async () => {
    try {
      const response = await axios.post(
        "http://localhost/tulip-backend/api/bookings/cancel.php",
        {
          id: selectedBookingId,
        }
      );

      if (response.data.status === "success") {
        toast.success("Booking cancelled");
        setShowCancelModal(false);
        fetchBookings();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to cancel booking");
    }
  };

  const clearBookings = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const response = await axios.post(
        "http://localhost/tulip-backend/api/bookings/clear.php",
        {
          user_id: user.id,
        }
      );

      if (response.data.status === "success") {
        toast.success("All bookings cleared");
        setBookings([]);
        setShowClearModal(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to clear bookings");
    }
  };
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
    const matchesSearch =
      booking.title
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      booking.destination
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "All" ||
      booking.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl font-bold">
          Loading Bookings...
        </h2>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-[#032B5B]">
              My Bookings
            </h1>

            {bookings.length > 0 && (
              <button
                onClick={() => setShowClearModal(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-semibold"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">

            <div className="bg-blue-100 p-6 rounded-3xl shadow-md">
              <h2>Total</h2>
              <p className="text-4xl font-bold">
                {bookings.length}
              </p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-3xl shadow-md">
              <h2>Pending</h2>
              <p className="text-4xl font-bold">
                {pendingBookings.length}
              </p>
            </div>

            <div className="bg-green-100 p-6 rounded-3xl shadow-md">
              <h2>Confirmed</h2>
              <p className="text-4xl font-bold">
                {confirmedBookings.length}
              </p>
            </div>

            <div className="bg-red-100 p-6 rounded-3xl shadow-md">
              <h2>Canceled</h2>
              <p className="text-4xl font-bold">
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
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                className="flex-1 border rounded-xl px-4 py-3"
              />

              <select
                value={filterStatus}
                onChange={(e) =>
                  setFilterStatus(e.target.value)
                }
                className="border rounded-xl px-4 py-3"
              >
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Canceled">Canceled</option>
              </select>

            </div>

          </div>

          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-md p-12 text-center">
              No bookings found
            </div>
          ) : (
            <div className="flex flex-col gap-6">

              {filteredBookings.map((booking) => (

                <div
                  key={booking.id}
                  onClick={() =>
                    navigate(`/booking/${booking.id}`)
                  }
                  className="bg-white rounded-3xl shadow-md p-6 flex flex-col md:flex-row md:justify-between gap-6 cursor-pointer hover:shadow-xl transition"
                >

                  <div>
                    <h2 className="text-2xl font-bold text-[#032B5B]">
                      {booking.title}
                    </h2>

                    <p className="text-gray-500">
                      {booking.destination}
                    </p>

                    <p className="text-yellow-500 font-bold mt-2">
                      ₦{Number(booking.price).toLocaleString()}
                    </p>

                    <p className="text-sm text-gray-400 mt-2">
                      {booking.date_booked}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">

                    <div
                      className={`px-4 py-2 rounded-full text-white text-center ${booking.status === "Pending"
                        ? "bg-yellow-500"
                        : booking.status === "Confirmed"
                          ? "bg-green-500"
                          : "bg-red-500"
                        }`}
                    >
                      {booking.status}
                    </div>

                    {booking.status === "Pending" && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/payment/${booking.id}`);
                          }}
                          className="py-3 px-5 rounded-xl text-white bg-green-500 hover:bg-green-600"
                        >
                          Proceed To Payment
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedBookingId(booking.id);
                            setShowCancelModal(true);
                          }}
                          className="py-3 px-5 rounded-xl text-white bg-red-500 hover:bg-red-600"
                        >
                          Cancel Booking
                        </button>
                      </>
                    )}

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>
      </div>
      {/* CANCEL BOOKING MODAL */}
      {
        showCancelModal && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-3xl shadow-xl w-[90%] max-w-md">
              <h2 className="text-2xl font-bold mb-4">
                Cancel Booking
              </h2>

              <p className="text-gray-600 mb-6">
                Are you sure you want to cancel this booking?
              </p>

              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="px-5 py-3 rounded-xl border"
                >
                  No
                </button>

                <button
                  onClick={cancelBooking}
                  className="px-5 py-3 rounded-xl bg-red-600 text-white"
                >
                  Yes, Cancel
                </button>
              </div>
            </div>
          </div>
        )
      }

      {/* CLEAR ALL MODAL */}
      {
        showClearModal && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-3xl shadow-xl w-[90%] max-w-md">
              <h2 className="text-2xl font-bold mb-4">
                Clear All Bookings
              </h2>

              <p className="text-gray-600 mb-6">
                This action cannot be undone. Delete all bookings?
              </p>

              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => setShowClearModal(false)}
                  className="px-5 py-3 rounded-xl border"
                >
                  No
                </button>

                <button
                  onClick={clearBookings}
                  className="px-5 py-3 rounded-xl bg-red-600 text-white"
                >
                  Yes, Delete All
                </button>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Bookings;