import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("bookings");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  // ✅ ADD BOOKING
  const addBooking = (booking) => {
    if (!booking) return;

    const newBooking = {
      id: Date.now().toString(),

      title: booking.title || "Untitled Booking",
      destination: booking.destination || "No Destination",
      price: booking.price || "N/A",
      image: booking.image || "",

      // ✅ FIX: supports both name formats
      fullName: booking.fullName || booking.name || "",
      email: booking.email || "",
      phone: booking.phone || "",

      guests: booking.guests || 1,
      departureDate: booking.departureDate || "",
      returnDate: booking.returnDate || "",

      dateBooked: new Date().toLocaleDateString(),
      status: "Pending",
    };

    setBookings((prev) => [...prev, newBooking]);

    toast.success("Booking added successfully!");
  };

  // ✅ UPDATE STATUS (THIS FIXES YOUR PAYMENT ISSUE)
  const updateBookingStatus = (id, status) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id
          ? { ...booking, status }
          : booking
      )
    );

  };

  // ❌ CANCEL BOOKING
  const cancelBooking = (id) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id
          ? { ...booking, status: "Canceled" }
          : booking
      )
    );

    toast.error("Booking canceled");
  };

  // 🧹 CLEAR ALL
  const clearBookings = () => {
    setBookings([]);
    localStorage.removeItem("bookings");
    toast.info("All bookings cleared");
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        updateBookingStatus, // ✅ IMPORTANT
        cancelBooking,
        clearBookings,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};