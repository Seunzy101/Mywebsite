import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BookingContext } from "../context/BookingContext";

const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { updateBookingStatus } = useContext(BookingContext);

  const [method, setMethod] = useState("card");
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      // Update booking status
      updateBookingStatus(id, "Confirmed");

      toast.success("Payment Successful 🎉 Booking Confirmed");

      setLoading(false);

      // Redirect after toast
      setTimeout(() => {
        navigate("/bookings");
      }, 1200);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-xl p-8 rounded-3xl shadow-lg">

        <h1 className="text-3xl font-bold text-[#032B5B] mb-6 text-center">
          Payment
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Choose your preferred payment method
        </p>

        {/* Payment Options */}
        <div className="space-y-4 mb-8">

          <button
            onClick={() => setMethod("card")}
            className={`w-full p-4 border rounded-xl transition ${
              method === "card"
                ? "bg-blue-100 border-blue-500"
                : ""
            }`}
          >
            💳 Card Payment
          </button>

          <button
            onClick={() => setMethod("bank")}
            className={`w-full p-4 border rounded-xl transition ${
              method === "bank"
                ? "bg-blue-100 border-blue-500"
                : ""
            }`}
          >
            🏦 Bank Transfer
          </button>

          <button
            onClick={() => setMethod("mobile")}
            className={`w-full p-4 border rounded-xl transition ${
              method === "mobile"
                ? "bg-blue-100 border-blue-500"
                : ""
            }`}
          >
            📱 Mobile Money
          </button>

        </div>

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className={`w-full py-4 rounded-xl text-white font-semibold transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Processing Payment..." : "Pay Now"}
        </button>

      </div>
    </div>
  );
};

export default Payment;