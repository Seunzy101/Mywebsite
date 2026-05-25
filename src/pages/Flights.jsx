import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../context/BookingContext";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUsers,
  FaSearch,
} from "react-icons/fa";

const flights = [
  {
    title: "Lagos to Dubai",
    destination: "Dubai",
    from: "Lagos",
    to: "Dubai",
    price: "₦320,000",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  },
  {
    title: "Abuja to London",
    destination: "London",
    from: "Abuja",
    to: "London",
    price: "₦450,000",
    image: "https://images.unsplash.com/photo-1505764706515-aa95265c5abc",
  },
  {
    title: "Port Harcourt to Paris",
    destination: "Paris",
    from: "Port Harcourt",
    to: "Paris",
    price: "₦480,000",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3",
  },
  {
    title: "Lagos to New York",
    destination: "New York",
    from: "Lagos",
    to: "New York",
    price: "₦550,000",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  },
];

const Flights = () => {
  const { addBooking } = useContext(BookingContext);
  const navigate = useNavigate();

  const handleBook = (flight) => {
    addBooking(flight);
    navigate("/bookings");
  };

  return (
    <section className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
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
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Find Affordable <br /> Flights Worldwide
          </h1>
        </div>
      </div>

      {/* Search Box */}
      <div className="relative z-20 px-4 md:px-10 lg:px-20 -mt-16">
        <div className="bg-white shadow-2xl rounded-3xl p-6 md:p-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

            <div className="relative">
              <FaPlaneDeparture className="absolute top-5 left-4 text-gray-400" />
              <input type="text" placeholder="From" className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 outline-none" />
            </div>

            <div className="relative">
              <FaPlaneArrival className="absolute top-5 left-4 text-gray-400" />
              <input type="text" placeholder="To" className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 outline-none" />
            </div>

            <div className="relative">
              <FaCalendarAlt className="absolute top-5 left-4 text-gray-400" />
              <input type="date" className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 outline-none" />
            </div>

            <div className="relative">
              <FaUsers className="absolute top-5 left-4 text-gray-400" />
              <input type="number" placeholder="Passengers" className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 outline-none" />
            </div>

            <button className="bg-yellow-400 hover:bg-yellow-500 transition rounded-xl font-semibold flex items-center justify-center gap-3 py-4">
              <FaSearch /> Search Flights
            </button>

          </div>
        </div>
      </div>

      {/* Flight Cards */}
      <div className="py-24 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-yellow-500 uppercase font-semibold">Popular Routes</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#032B5B] mt-3">
              Top Flight Destinations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {flights.map((flight, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <img src={flight.image} alt="" className="w-full h-60 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-[#032B5B]">{flight.to}</h3>
                    <p className="text-yellow-500 font-bold">{flight.price}</p>
                  </div>
                  <p className="text-gray-500 mb-6">From {flight.from}</p>
                  <button
                    onClick={() => handleBook(flight)}
                    className="w-full bg-[#032B5B] hover:bg-yellow-400 hover:text-black transition text-white py-3 rounded-xl font-semibold"
                  >
                    Book Flight
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default Flights;