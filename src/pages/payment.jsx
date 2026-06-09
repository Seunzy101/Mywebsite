import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Payment Successful!");

    navigate("/bookings");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-[#032B5B] mb-6">
          Payment
        </h1>

        <input
          type="text"
          placeholder="Card Holder Name"
          className="w-full border rounded-xl p-3 mb-4"
        />

        <input
          type="text"
          placeholder="Card Number"
          className="w-full border rounded-xl p-3 mb-4"
        />

        <div className="grid grid-cols-2 gap-4 mb-4">

          <input
            type="text"
            placeholder="MM/YY"
            className="border rounded-xl p-3"
          />

          <input
            type="text"
            placeholder="CVV"
            className="border rounded-xl p-3"
          />

        </div>

        <button
          onClick={handlePayment}
          className="
            w-full
            bg-green-500
            hover:bg-green-600
            text-white
            py-3
            rounded-xl
            font-semibold
          "
        >
          Pay Now
        </button>

      </div>

    </div>
  );
};

export default Payment;