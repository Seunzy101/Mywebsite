import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {

     // Load saved bookings from localStorage
  const [bookings, setBookings] = useState(() => {

    const savedBookings = localStorage.getItem("bookings");

    return savedBookings
      ? JSON.parse(savedBookings)
      : [];

  });

  // Save bookings whenever state changes
  useEffect(() => {

    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );

  }, [bookings]);

  // Add new booking
  const addBooking = (booking) => {

    const newBooking = {
      id: Date.now(),

      ...booking,

      status: "Pending",
    };

    setBookings((prev) => [...prev, newBooking]);
    toast.success("Booking added successfully!");
  };

  // Update booking status
  const updateBookingStatus = (id, status) => {

    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id
          ? { ...booking, status }
          : booking
      )
    );
  };

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



      return (

    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        updateBookingStatus,
        cancelBooking,
      }}
    >

      {children}

    </BookingContext.Provider>

  );

};