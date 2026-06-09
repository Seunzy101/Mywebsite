import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  // Load bookings from localStorage
  const [bookings, setBookings] = useState(() => {
    const savedBookings = localStorage.getItem("bookings");

    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  // Save bookings whenever they change
  useEffect(() => {
    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );
  }, [bookings]);

  // Add Booking
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
      id: Date.now(),

      title:
        booking.title ||
        booking.city ||
        "Untitled Booking",

      destination:
        booking.destination ||
        booking.country ||
        booking.city ||
        "No Destination",

      price: booking.price || "N/A",

      image: booking.image || "",

      dateBooked:
        new Date().toLocaleDateString(),

      status: "Pending",
    };

    setBookings((prev) => [
      ...prev,
      newBooking,
    ]);

    toast.success(
      "Booking added successfully!"
    );
  };

  // Update Booking Status
  const updateBookingStatus = (
    id,
    status
  ) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id
          ? {
              ...booking,
              status,
            }
          : booking
      )
    );

    if (status === "Confirmed") {
      toast.success(
        "Payment successful!"
      );
    }
  };

  // Cancel Booking
  const cancelBooking = (id) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id
          ? {
              ...booking,
              status: "Canceled",
            }
          : booking
      )
    );

    toast.error("Booking canceled");
  };

  // Remove Single Booking
  const deleteBooking = (id) => {
    setBookings((prev) =>
      prev.filter(
        (booking) =>
          booking.id !== id
      )
    );

    toast.info("Booking removed");
  };

  // Clear All Bookings
  const clearBookings = () => {
    setBookings([]);

    localStorage.removeItem(
      "bookings"
    );

    toast.info(
      "All bookings cleared"
    );
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