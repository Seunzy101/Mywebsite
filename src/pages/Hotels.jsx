import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../context/BookingContext";
import BookingModal from "../components/BookingModal";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaSearch,
  FaStar,
} from "react-icons/fa";

const hotels = [
  {
    title: "Burj Al Arab",
    destination: "Dubai, UAE",
    location: "Dubai, UAE",
    price: "₦250,000/night",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    title: "The Ritz London",
    destination: "London, UK",
    location: "London, UK",
    price: "₦320,000/night",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    title: "Paris Luxury Suites",
    destination: "Paris, France",
    location: "Paris, France",
    price: "₦280,000/night",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Ocean Paradise Resort",
    destination: "Maldives",
    location: "Maldives",
    price: "₦450,000/night",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
];

const Hotels = () => {
  const { addBooking } = useContext(BookingContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  // search (UI only for now)
  const [search, setSearch] = useState("");

  const handleBook = (hotel) => {
    setSelectedHotel(hotel);
    setOpen(true);
  };

  const handleSubmit = (clientData) => {
  if (!selectedHotel) return;

  addBooking({
    title: selectedHotel.title,
    destination: selectedHotel.destination,
    price: selectedHotel.price,
    image: selectedHotel.image,

    fullName: clientData.fullName,
    email: clientData.email,
    phone: clientData.phone,
    guests: clientData.guests,

    departureDate: clientData.checkInDate,
    returnDate: clientData.checkOutDate,

    bookingType: "hotel",
  });

  setOpen(false);
  setSelectedHotel(null);
  navigate("/bookings");
};

  return (
    <section className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="uppercase tracking-widest text-yellow-400 mb-4">
            Luxury & Comfort
          </p>
          <h1 className="text-4xl md:text-6xl font-bold">
            Find The Perfect Hotel For Your Stay
          </h1>
        </div>
      </div>

      {/* SEARCH */}
      <div className="relative z-20 px-4 md:px-10 lg:px-20 -mt-16">
        <div className="bg-white shadow-2xl rounded-3xl p-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="relative">
              <FaMapMarkerAlt className="absolute top-5 left-4 text-gray-400" />
              <input
                placeholder="Destination"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border rounded-xl py-4 pl-12 pr-4"
              />
            </div>

            <div className="relative">
              <FaCalendarAlt className="absolute top-5 left-4 text-gray-400" />
              <input type="date" className="w-full border rounded-xl py-4 pl-12 pr-4" />
            </div>

            <div className="relative">
              <FaCalendarAlt className="absolute top-5 left-4 text-gray-400" />
              <input type="date" className="w-full border rounded-xl py-4 pl-12 pr-4" />
            </div>

            <div className="relative">
              <FaUsers className="absolute top-5 left-4 text-gray-400" />
              <input type="number" placeholder="Guests"
                className="w-full border rounded-xl py-4 pl-12 pr-4" />
            </div>

          </div>

          <button className="mt-4 bg-yellow-400 px-8 py-3 rounded-xl font-semibold flex items-center gap-2">
            <FaSearch /> Search Hotels
          </button>
        </div>
      </div>

      {/* HOTELS */}
      <div className="py-24 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-yellow-500 uppercase font-semibold">
              Popular Hotels
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#032B5B] mt-3">
              Best Luxury Hotels
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {hotels.map((hotel, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg"
              >

                <img
                  src={hotel.image}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">

                  <div className="flex gap-1 text-yellow-400 mb-3">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>

                  <h3 className="text-2xl font-bold text-[#032B5B]">
                    {hotel.title}
                  </h3>

                  <p className="text-gray-500">{hotel.location}</p>

                  <p className="text-yellow-500 font-bold mt-2">
                    {hotel.price}
                  </p>

                  <button
                    onClick={() => handleBook(hotel)}
                    className="w-full mt-4 bg-[#032B5B] text-white py-3 rounded-xl"
                  >
                    Book Now
                  </button>

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
        item={selectedHotel}
        bookingType="hotel"
      />

    </section>
  );
};

export default Hotels;