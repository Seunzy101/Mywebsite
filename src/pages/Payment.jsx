import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [method, setMethod] = useState("");
  const [loading, setLoading] = useState(false);

  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handlePayment = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost/tulip-backend/api/bookings/confirm.php",
        {
          id,
        }
      );

      if (response.data.status === "success") {
        toast.success("Payment Successful 🎉");

        setTimeout(() => {
          navigate("/bookings");
        }, 1000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/bookings");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-xl p-8 rounded-3xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Payment
        </h1>

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

        {method === "bank" && (
          <div className="mb-6 p-4 bg-gray-100 rounded-xl">
            <h2 className="font-bold mb-2">
              Bank Details
            </h2>

            <p>Account Name: Tulip Hospitality Limited</p>
            <p>Account Number: 3131419176</p>
            <p>Bank: FirstBank</p>
          </div>
        )}

        {method === "mobile" && (
          <div className="mb-6 p-4 bg-gray-100 rounded-xl">
            <h2 className="font-bold mb-2">
              Mobile Money
            </h2>

            <p>Provider: MTN Mobile Money</p>
            <p>+234 906 084 6432</p>
          </div>
        )}

        <button
          onClick={handlePayment}
          disabled={!method || loading}
          className={`w-full py-4 rounded-xl text-white font-semibold ${
            !method || loading
              ? "bg-gray-400"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>

        <button
          onClick={handleCancel}
          className="w-full mt-3 py-3 rounded-xl border border-red-500 text-red-500"
        >
          Cancel Payment
        </button>

      </div>
    </div>
  );
};

export default Payment;