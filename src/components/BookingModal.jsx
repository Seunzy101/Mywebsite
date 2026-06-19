import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaUsers } from "react-icons/fa";

const BookingModal = ({
  isOpen,
  onClose,
  onSubmit,
  item,
  bookingType = "flight",
  tripType = "One Way",
}) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: 1,

    departureDate: "",
    returnDate: "",

    checkInDate: "",
    checkOutDate: "",

    tourDate: "",
  });

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (
      !form.fullName ||
      !form.email ||
      !form.phone
    ) {
      alert("Please complete all required fields");
      return;
    }

    onSubmit({
      ...form,

      title: item?.title || "",
      destination: item?.destination || "",
      price: item?.price || "",
      image: item?.image || "",

      bookingType,
      tripType,
    });

    setForm({
      fullName: "",
      email: "",
      phone: "",
      guests: 1,

      departureDate: "",
      returnDate: "",

      checkInDate: "",
      checkOutDate: "",

      tourDate: "",
    });

    onClose();
  };

  const inputClass =
    "w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#032B5B]";

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="bg-[#032B5B] text-white p-6">
          <h2 className="text-2xl font-bold">
            Complete Booking
          </h2>

          <p className="text-sm opacity-80 mt-1">
            Fill in your travel details
          </p>
        </div>

        <div className="p-6 space-y-4">

          {/* FULL NAME */}
          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Full Name"
              value={form.fullName}
              onChange={(e) =>
                setForm({
                  ...form,
                  fullName: e.target.value,
                })
              }
              className={`${inputClass} pl-12`}
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className={`${inputClass} pl-12`}
            />
          </div>

          {/* PHONE */}
          <div className="relative">
            <FaPhone className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
              className={`${inputClass} pl-12`}
            />
          </div>

          {/* GUESTS */}
          <div className="relative">
            <FaUsers className="absolute left-4 top-4 text-gray-400" />

            <input
              type="number"
              min="1"
              placeholder="Guests"
              value={form.guests}
              onChange={(e) =>
                setForm({
                  ...form,
                  guests: e.target.value,
                })
              }
              className={`${inputClass} pl-12`}
            />
          </div>

          {/* FLIGHT ONE WAY */}
          {bookingType === "flight" &&
            tripType === "One Way" && (
              <>
                <label className="text-sm font-semibold text-gray-600">
                  Departure Date
                </label>

                <input
                  type="date"
                  value={form.departureDate}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      departureDate: e.target.value,
                    })
                  }
                  className={inputClass}
                />
              </>
            )}

          {/* FLIGHT ROUND TRIP */}
          {bookingType === "flight" &&
            tripType === "Round Trip" && (
              <>
                <label className="text-sm font-semibold text-gray-600">
                  Departure Date
                </label>

                <input
                  type="date"
                  value={form.departureDate}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      departureDate: e.target.value,
                    })
                  }
                  className={inputClass}
                />

                <label className="text-sm font-semibold text-gray-600">
                  Return Date
                </label>

                <input
                  type="date"
                  value={form.returnDate}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      returnDate: e.target.value,
                    })
                  }
                  className={inputClass}
                />
              </>
            )}

          {/* HOTEL */}
          {bookingType === "hotel" && (
            <>
              <label className="text-sm font-semibold text-gray-600">
                Check-In Date
              </label>

              <input
                type="date"
                value={form.checkInDate}
                onChange={(e) =>
                  setForm({
                    ...form,
                    checkInDate: e.target.value,
                  })
                }
                className={inputClass}
              />

              <label className="text-sm font-semibold text-gray-600">
                Check-Out Date
              </label>

              <input
                type="date"
                value={form.checkOutDate}
                onChange={(e) =>
                  setForm({
                    ...form,
                    checkOutDate: e.target.value,
                  })
                }
                className={inputClass}
              />
            </>
          )}

          {/* TOUR */}
          {bookingType === "tour" && (
            <>
              <label className="text-sm font-semibold text-gray-600">
                Tour Date
              </label>

              <input
                type="date"
                value={form.tourDate}
                onChange={(e) =>
                  setForm({
                    ...form,
                    tourDate: e.target.value,
                  })
                }
                className={inputClass}
              />
            </>
          )}

          {/* BUTTONS */}
          <div className="flex gap-3 pt-4">

            <button
              onClick={handleSubmit}
              className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700"
            >
              Confirm Booking
            </button>

            <button
              onClick={onClose}
              className="flex-1 border border-red-500 text-red-500 py-3 rounded-xl font-semibold hover:bg-red-50"
            >
              Cancel
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingModal;