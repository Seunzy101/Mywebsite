import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSearch = () => {
    navigate("/flights", {
      state: {
        from,
        to,
        departure,
        returnDate,
      },
    });
  };

  return (
    <section className="relative z-20 px-4 md:px-10 lg:px-20 -mt-16">

      <div
        className="
          bg-white
          shadow-2xl
          rounded-3xl
          p-6
          md:p-8
          max-w-7xl
          mx-auto
        "
      >

        {/* Heading */}
        <div className="mb-8">
          <p className="text-yellow-500 font-semibold uppercase">
            Book Your Trip
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-[#032B5B] mt-2">
            Find Your Perfect Flight
          </h2>
        </div>

        {/* Booking Form */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-4
          "
        >

          {/* From */}
          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="
              border
              border-gray-300
              rounded-xl
              px-4
              py-4
              outline-none
              focus:border-[#032B5B]
              w-full
            "
          />

          {/* To */}
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="
              border
              border-gray-300
              rounded-xl
              px-4
              py-4
              outline-none
              focus:border-[#032B5B]
              w-full
            "
          />

          {/* Departure */}
          <input
            type="date"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="
              border
              border-gray-300
              rounded-xl
              px-4
              py-4
              outline-none
              focus:border-[#032B5B]
              w-full
            "
          />

          {/* Return */}
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="
              border
              border-gray-300
              rounded-xl
              px-4
              py-4
              outline-none
              focus:border-[#032B5B]
              w-full
            "
          />

          {/* Button */}
          <button
            onClick={handleSearch}
            className="
              bg-yellow-400
              hover:bg-yellow-500
              transition
              rounded-xl
              font-semibold
              px-6
              py-4
              w-full
            "
          >
            Search Flights
          </button>

        </div>

      </div>

    </section>
  );
};

export default Booking;