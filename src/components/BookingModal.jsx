import { useState } from "react";

const BookingModal = ({ isOpen, onClose, onSubmit, item }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: 1,
    departureDate: "",
    returnDate: "",
  });

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!form.fullName || !form.email || !form.phone) return;

    onSubmit({
      ...form,
      title: item?.title || "",
      destination: item?.destination || "",
      price: item?.price || "",
      image: item?.image || "",
    });

    setForm({
      fullName: "",
      email: "",
      phone: "",
      guests: 1,
      departureDate: "",
      returnDate: "",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl">

        <h2 className="text-2xl font-bold mb-4">
          Client Details
        </h2>

        <input
          className="w-full p-3 border rounded mb-3"
          placeholder="Full Name"
          value={form.fullName}
          onChange={(e) =>
            setForm({ ...form, fullName: e.target.value })
          }
        />

        <input
          className="w-full p-3 border rounded mb-3"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          className="w-full p-3 border rounded mb-3"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <input
          type="number"
          className="w-full p-3 border rounded mb-3"
          placeholder="Guests"
          value={form.guests}
          onChange={(e) =>
            setForm({ ...form, guests: e.target.value })
          }
        />

        <input
          type="date"
          className="w-full p-3 border rounded mb-3"
          value={form.departureDate}
          onChange={(e) =>
            setForm({ ...form, departureDate: e.target.value })
          }
        />

        <input
          type="date"
          className="w-full p-3 border rounded mb-4"
          value={form.returnDate}
          onChange={(e) =>
            setForm({ ...form, returnDate: e.target.value })
          }
        />

        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-green-600 text-white py-3 rounded"
          >
            Submit Booking
          </button>

          <button
            onClick={onClose}
            className="flex-1 border py-3 rounded text-red-500"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookingModal;