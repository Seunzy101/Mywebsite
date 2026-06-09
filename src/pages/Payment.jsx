import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BookingContext } from "../context/BookingContext";

const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateBookingStatus } = useContext(BookingContext);

  const [method, setMethod] = useState("");
  const [loading, setLoading] = useState(false);

  // Card state (only needed for card)
  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      updateBookingStatus(id, "Confirmed");

      toast.success("Payment Successful 🎉 Booking Confirmed");

      setLoading(false);

      setTimeout(() => {
        navigate("/bookings");
      }, 1200);
    }, 1200);
  };

  // CANCEL PAYMENT
  const handleCancel = () => {
    toast.info("Payment cancelled");

    // optional: go back to bookings
    navigate("/bookings");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-xl p-8 rounded-3xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Payment
        </h1>

        {/* PAYMENT OPTIONS */}
        <div className="space-y-3 mb-6">

          <button
            onClick={() => setMethod("card")}
            className={`w-full p-4 border rounded-xl ${
              method === "card" ? "bg-blue-100" : ""
            }`}
          >
            💳 Card Payment
          </button>

          <button
            onClick={() => setMethod("bank")}
            className={`w-full p-4 border rounded-xl ${
              method === "bank" ? "bg-blue-100" : ""
            }`}
          >
            🏦 Bank Transfer
          </button>

          <button
            onClick={() => setMethod("mobile")}
            className={`w-full p-4 border rounded-xl ${
              method === "mobile" ? "bg-blue-100" : ""
            }`}
          >
            📱 Mobile Money
          </button>

        </div>

        {/* CARD FORM */}
        {method === "card" && (
          <div className="space-y-3 mb-6">
            <input
              placeholder="Card Number"
              className="w-full p-3 border rounded"
              onChange={(e) =>
                setCard({ ...card, number: e.target.value })
              }
            />
            <input
              placeholder="Card Holder Name"
              className="w-full p-3 border rounded"
              onChange={(e) =>
                setCard({ ...card, name: e.target.value })
              }
            />
            <div className="flex gap-3">
              <input
                placeholder="MM/YY"
                className="w-1/2 p-3 border rounded"
                onChange={(e) =>
                  setCard({ ...card, expiry: e.target.value })
                }
              />
              <input
                placeholder="CVV"
                className="w-1/2 p-3 border rounded"
                onChange={(e) =>
                  setCard({ ...card, cvv: e.target.value })
                }
              />
            </div>
          </div>
        )}

        {/* BANK DETAILS */}
        {method === "bank" && (
          <div className="mb-6 p-4 bg-gray-100 rounded-xl">
            <h2 className="font-bold mb-2">Bank Details</h2>
            <p>Account Name: Tulip Hospitality Limited</p>
            <p>Account Number: 3131419176</p>
            <p>Bank: Firstbank</p>

            <p className="text-sm text-gray-500 mt-2">
              Make transfer then click Pay Now
            </p>
          </div>
        )}

        {/* MOBILE MONEY */}
        {method === "mobile" && (
          <div className="mb-6 p-4 bg-gray-100 rounded-xl">
            <h2 className="font-bold mb-2">Mobile Money</h2>
            <p>Provider: MTN Mobile Money</p>
            <p>Send payment to: +234 906 084 6432</p>
            <p>Account Name: Tulip Hospitality Ltd</p>

            <p className="text-sm text-gray-500 mt-2">
              After payment, click Pay Now
            </p>
          </div>
        )}

        {/* PAY BUTTON */}
        <button
          onClick={handlePayment}
          disabled={!method || loading}
          className={`w-full py-4 rounded-xl text-white font-semibold ${
            !method || loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>

        {/* CANCEL BUTTON */}
        <button
          onClick={handleCancel}
          className="w-full mt-3 py-3 rounded-xl border border-red-500 text-red-500 hover:bg-red-50 transition"
        >
          Cancel Payment
        </button>

      </div>
    </div>
  );
};

export default Payment;