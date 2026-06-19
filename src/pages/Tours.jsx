import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../context/BookingContext";
import BookingModal from "../components/BookingModal";

import { FaSearch, FaStar } from "react-icons/fa";

const tours = [
  {
    title: "Dubai Luxury Tour",
    destination: "Dubai, UAE",
    location: "Dubai, UAE",
    price: "₦850,000",
    days: "5 Days",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
  {
    title: "Paris Romantic Tour",
    destination: "Paris, France",
    location: "Paris, France",
    price: "₦950,000",
    days: "7 Days",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    title: "United Kingdom Tour",
    destination: "London, UK",
    location: "London, UK",
    price: "₦780,000",
    days: "4 Days",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
  },
  {
    title: "Maldives Beach Tour",
    destination: "Maldives",
    location: "Maldives",
    price: "₦980,000",
    days: "5 Days",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];

const Tours = () => {
  const { addBooking } = useContext(BookingContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const handleBook = (tour) => {
    setSelectedTour(tour);
    setOpen(true);
  };
  const handleSubmit = (formData) => {
    if (!selectedTour) return;

    addBooking({
      title: selectedTour.title,
      destination: selectedTour.destination,
      price: selectedTour.price,
      image: selectedTour.image,
      days: selectedTour.days,

      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      guests: formData.guests,

      departureDate: formData.tourDate,
      returnDate: "",

      bookingType: "tour",
    });

    setOpen(false);
    setSelectedTour(null);
    navigate("/bookings");
  };
  return (
    <section className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="uppercase tracking-widest text-yellow-400 mb-4">
            Explore Amazing Places
          </p>
          <h1 className="text-4xl md:text-6xl font-bold">
            Discover Beautiful Tour Destinations
          </h1>
        </div>
      </div>

      {/* SEARCH (UI ONLY) */}
      <div className="relative z-20 px-4 md:px-10 lg:px-20 -mt-16">
        <div className="bg-white shadow-2xl rounded-3xl p-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <input type="text" placeholder="Destination" className="border p-3 rounded-xl" />
            <input type="date" className="border p-3 rounded-xl" />
            <input type="number" placeholder="Travelers" className="border p-3 rounded-xl" />

            <button className="bg-yellow-400 rounded-xl font-semibold py-3">
              <FaSearch className="inline mr-2" />
              Search Tours
            </button>

          </div>
        </div>
      </div>

      {/* TOURS */}
      <div className="py-24 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-yellow-500 uppercase font-semibold">
              Popular Packages
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#032B5B] mt-3">
              Best Tour Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {tours.map((tour, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg">

                <img src={tour.image} className="w-full h-64 object-cover" />

                <div className="p-6">

                  <div className="flex gap-1 text-yellow-400 mb-3">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>

                  <h3 className="text-2xl font-bold text-[#032B5B]">
                    {tour.title}
                  </h3>

                  <p className="text-gray-500">{tour.location}</p>
                  <p className="text-gray-500 mb-4">{tour.days}</p>

                  <div className="flex justify-between items-center">
                    <p className="text-yellow-500 font-bold text-xl">
                      {tour.price}
                    </p>

                    <button
                      onClick={() => handleBook(tour)}
                      className="bg-[#032B5B] text-white px-5 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition"
                    >
                      Book Now
                    </button>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>

      {/* MODAL */}
      <BookingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        item={selectedTour}
        bookingType="tour"
      />

    </section>
  );
};

export default Tours;