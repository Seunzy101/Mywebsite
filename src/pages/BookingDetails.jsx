import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BookingContext } from "../context/BookingContext";

const BookingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { bookings } = useContext(BookingContext);

  const booking = bookings.find((b) => b.id === id);

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-600">
            Booking Not Found
          </h2>

          <button
            onClick={() => navigate("/bookings")}
            className="mt-6 bg-[#032B5B] text-white px-6 py-3 rounded-xl"
          >
            Back to Bookings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md p-8">

        <h1 className="text-3xl font-bold text-[#032B5B] mb-6">
          Booking Itinerary
        </h1>

        {booking.image && (
          <img
            src={booking.image}
            alt={booking.title}
            className="w-full h-64 object-cover rounded-2xl mb-6"
          />
        )}

        <div className="space-y-4">

          <div>
            <h2 className="text-gray-500">Full Name</h2>
            <p className="text-xl font-bold">
              {booking.fullName}
            </p>
          </div>

          <div>
            <h2 className="text-gray-500">Email</h2>
            <p className="text-lg">
              {booking.email}
            </p>
          </div>

          <div>
            <h2 className="text-gray-500">Phone</h2>
            <p className="text-lg">
              {booking.phone}
            </p>
          </div>

          <div>
            <h2 className="text-gray-500">Destination</h2>
            <p className="text-lg">
              {booking.destination}
            </p>
          </div>

          <div>
            <h2 className="text-gray-500">Price</h2>
            <p className="text-lg font-bold text-yellow-500">
              {booking.price}
            </p>
          </div>

          <div>
            <h2 className="text-gray-500">Guests</h2>
            <p>{booking.guests}</p>
          </div>

          <div>
            <h2 className="text-gray-500">Departure Date</h2>
            <p>{booking.departureDate}</p>
          </div>

          <div>
            <h2 className="text-gray-500">Return Date</h2>
            <p>{booking.returnDate}</p>
          </div>

          <div>
            <h2 className="text-gray-500">Status</h2>
            <span
              className={`inline-block px-4 py-2 rounded-full text-white font-semibold ${
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

        <div className="mt-8">
          <button
            onClick={() => navigate("/bookings")}
            className="bg-gray-500 text-white px-6 py-3 rounded-xl"
          >
            Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookingDetails;