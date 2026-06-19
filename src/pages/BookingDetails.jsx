import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BookingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooking();
  }, []);

  const fetchBooking = async () => {
    try {
      const response = await axios.get(
        `http://localhost/tulip-backend/api/bookings/single.php?id=${id}`
      );

      if (response.data.status === "success") {
        setBooking(response.data.booking);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl font-bold">
          Loading Itinerary...
        </h2>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl font-bold">
          Booking Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md p-8">

        <h1 className="text-3xl font-bold text-[#032B5B] mb-8">
          Booking Itinerary
        </h1>

        <div className="space-y-5">

          {booking.image && (
            <img
              src={booking.image}
              alt={booking.title}
              className="w-full h-72 object-cover rounded-2xl"
            />
          )}

          <div>
            <h2 className="text-gray-500">Booking Title</h2>
            <p className="text-xl font-bold">
              {booking.title}
            </p>
          </div>

          <div>
            <h2 className="text-gray-500">Destination</h2>
            <p>{booking.destination}</p>
          </div>

          <div>
            <h2 className="text-gray-500">Price</h2>
            <p className="font-bold text-yellow-500">
              ₦{Number(booking.price).toLocaleString()}
            </p>
          </div>

          <div>
            <h2 className="text-gray-500">Passenger Name</h2>
            <p>{booking.full_name}</p>
          </div>

          <div>
            <h2 className="text-gray-500">Email</h2>
            <p>{booking.email}</p>
          </div>

          <div>
            <h2 className="text-gray-500">Phone Number</h2>
            <p>{booking.phone}</p>
          </div>

          <div>
            <h2 className="text-gray-500">Guests</h2>
            <p>{booking.guests}</p>
          </div>

          {booking.departure_date && (
            <div>
              <h2 className="text-gray-500">Departure Date</h2>
              <p>{booking.departure_date}</p>
            </div>
          )}

          {booking.return_date && (
            <div>
              <h2 className="text-gray-500">Return Date</h2>
              <p>{booking.return_date}</p>
            </div>
          )}

          {booking.cabin_class && (
            <div>
              <h2 className="text-gray-500">Cabin Class</h2>
              <p>{booking.cabin_class}</p>
            </div>
          )}

          <div>
            <h2 className="text-gray-500">Date Booked</h2>
            <p>{booking.date_booked}</p>
          </div>

          <div>
            <h2 className="text-gray-500 mb-2">Status</h2>

            <span
              className={`px-4 py-2 rounded-full text-white ${
                booking.status === "Pending"
                  ? "bg-yellow-500"
                  : booking.status === "Confirmed"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              {booking.status}
            </span>
          </div>

        </div>

        <button
          onClick={() => navigate("/bookings")}
          className="mt-8 bg-[#032B5B] text-white px-6 py-3 rounded-xl"
        >
          Back To Bookings
        </button>

      </div>
    </div>
  );
};

export default BookingDetails;