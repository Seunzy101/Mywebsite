import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../context/BookingContext";
import BookingModal from "../components/BookingModal";
import { FaSearch } from "react-icons/fa";

const flights = [
  {
    title: "Lagos to Dubai",
    destination: "Dubai",
    from: "Lagos",
    to: "Dubai",
    price: "₦620,000",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  },
  {
    title: "Abuja to London",
    destination: "London",
    from: "Abuja",
    to: "London",
    price: "₦850,000",
    image:
      "https://images.unsplash.com/photo-1505764706515-aa95265c5abc",
  },
  {
    title: "Port Harcourt to Paris",
    destination: "Paris",
    from: "Port Harcourt",
    to: "Paris",
    price: "₦980,000",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3",
  },
  {
    title: "Lagos to New York",
    destination: "New York",
    from: "Lagos",
    to: "New York",
    price: "₦950,000",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  },
];

const Flights = () => {
  const { addBooking } = useContext(BookingContext);
  const navigate = useNavigate();

  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("");

  const [activeFrom, setActiveFrom] = useState("");
  const [activeTo, setActiveTo] = useState("");

  const [open, setOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleSearch = () => {
    setActiveFrom(searchFrom);
    setActiveTo(searchTo);
  };

  const handleBook = (flight) => {
    setSelectedFlight(flight);
    setOpen(true);
  };

  const handleSubmit = (clientData) => {
    if (!selectedFlight) return;

    addBooking({
      title: selectedFlight.title,
      destination: selectedFlight.destination,
      price: selectedFlight.price,
      image: selectedFlight.image,

      from: selectedFlight.from,
      to: selectedFlight.to,

      fullName: clientData.fullName,
      email: clientData.email,
      phone: clientData.phone,
      guests: clientData.guests,

      departureDate:
        clientData.departureDate || departure,

      returnDate:
        clientData.returnDate || returnDate,

      passengers,
    });

    setOpen(false);
    setSelectedFlight(null);
    navigate("/bookings");
  };

  const filteredFlights = flights.filter((flight) => {
    const matchFrom = activeFrom
      ? flight.from
          .toLowerCase()
          .includes(activeFrom.toLowerCase())
      : true;

    const matchTo = activeTo
      ? flight.to
          .toLowerCase()
          .includes(activeTo.toLowerCase())
      : true;

    return matchFrom && matchTo;
  });

  return (
    <section className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-4">
          <p className="uppercase tracking-widest text-yellow-400 mb-4">
            Book Flights
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Find Affordable Flights Worldwide
          </h1>
        </div>
      </div>

      {/* SEARCH */}
      <div className="px-4 md:px-10 lg:px-20 mt-10">
        <div className="bg-white shadow-2xl rounded-3xl p-6 max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

            <input
              placeholder="From"
              value={searchFrom}
              onChange={(e) => setSearchFrom(e.target.value)}
              className="border p-3 rounded-xl"
            />

            <input
              placeholder="To"
              value={searchTo}
              onChange={(e) => setSearchTo(e.target.value)}
              className="border p-3 rounded-xl"
            />

            <input
              type="date"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="border p-3 rounded-xl"
            />

            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="border p-3 rounded-xl"
            />

            <input
              type="number"
              placeholder="Passengers"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="border p-3 rounded-xl"
            />

          </div>

          <button
            onClick={handleSearch}
            className="mt-4 bg-yellow-400 px-8 py-3 rounded-xl font-semibold"
          >
            <FaSearch className="inline mr-2" />
            Search Flights
          </button>

        </div>
      </div>

      {/* FLIGHTS */}
      <div className="py-24 px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredFlights.map((flight, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <img
                src={flight.image}
                alt={flight.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {flight.title}
                </h3>

                <p className="text-gray-500">
                  From {flight.from} → {flight.to}
                </p>

                <p className="text-yellow-500 font-bold">
                  {flight.price}
                </p>

                <button
                  onClick={() => handleBook(flight)}
                  className="w-full mt-4 bg-[#032B5B] text-white py-3 rounded-xl"
                >
                  Book Flight
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>

      <BookingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        item={selectedFlight}
      />
    </section>
  );
};

export default Flights;