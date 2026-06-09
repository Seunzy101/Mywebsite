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

  // ADD BOOKING
  const addBooking = (booking) => {
    const exists = bookings.some(
      (item) =>
        item.title === booking.title &&
        item.destination === booking.destination
    );

    if (exists) {
      toast.warning("Booking already exists!");
      return;
    }

    const newBooking = {
      id: Date.now().toString(),
      title: booking.title || booking.city || "Untitled Booking",
      destination:
        booking.destination ||
        booking.country ||
        booking.city ||
        "No Destination",
      price: booking.price || "N/A",
      image: booking.image || "",
      dateBooked: new Date().toLocaleDateString(),
      status: "Pending",
    };

    setBookings((prev) => [...prev, newBooking]);

    toast.success("Booking added successfully!");
  };


  const updateBookingStatus = (id, status) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id
          ? { ...booking, status }
          : booking
      )
    );

    if (status === "Confirmed") {
      toast.success("Payment successful 🎉 Booking Confirmed");
    }
  };

  // CANCEL BOOKING
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

  // DELETE SINGLE BOOKING
  const deleteBooking = (id) => {
    setBookings((prev) =>
      prev.filter((booking) => booking.id !== id)
    );

    toast.info("Booking removed");
  };

  // CLEAR ALL BOOKINGS
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
        updateBookingStatus,
        cancelBooking,
        deleteBooking,
        clearBookings,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};