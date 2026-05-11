import {
  FaHotel,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaSearch,
  FaStar,
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
} from "react-icons/fa";

const hotels = [
  {
    name: "Burj Al Arab",
    location: "Dubai, UAE",
    price: "₦250,000/night",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },

  {
    name: "The Ritz London",
    location: "London, UK",
    price: "₦320,000/night",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },

  {
    name: "Paris Luxury Suites",
    location: "Paris, France",
    price: "₦280,000/night",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },

  {
    name: "Ocean Paradise Resort",
    location: "Maldives",
    price: "₦450,000/night",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
];

const Hotels = () => {
  return (
    <section className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div
        className="
          relative
          h-[70vh]
          bg-cover
          bg-center
          flex
          items-center
          justify-center
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">

          <p className="uppercase tracking-widest text-yellow-400 mb-4">
            Luxury & Comfort
          </p>

          <h1 className="
            text-4xl
            md:text-6xl
            font-bold
            leading-tight
          ">
            Find The Perfect <br />
            Hotel For Your Stay
          </h1>

        </div>

      </div>

      {/* Search Box */}
      <div className="
        relative
        z-20
        px-4
        md:px-10
        lg:px-20
        -mt-16
      ">

        <div className="
          bg-white
          shadow-2xl
          rounded-3xl
          p-6
          md:p-8
          max-w-7xl
          mx-auto
        ">

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-4
          ">

            {/* Destination */}
            <div className="relative">

              <FaMapMarkerAlt
                className="
                  absolute
                  top-5
                  left-4
                  text-gray-400
                "
              />

              <input
                type="text"
                placeholder="Destination"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  py-4
                  pl-12
                  pr-4
                  outline-none
                "
              />

            </div>

            {/* Check In */}
            <div className="relative">

              <FaCalendarAlt
                className="
                  absolute
                  top-5
                  left-4
                  text-gray-400
                "
              />

              <input
                type="date"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  py-4
                  pl-12
                  pr-4
                  outline-none
                "
              />

            </div>

            {/* Check Out */}
            <div className="relative">

              <FaCalendarAlt
                className="
                  absolute
                  top-5
                  left-4
                  text-gray-400
                "
              />

              <input
                type="date"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  py-4
                  pl-12
                  pr-4
                  outline-none
                "
              />

            </div>

            {/* Guests */}
            <div className="relative">

              <FaUsers
                className="
                  absolute
                  top-5
                  left-4
                  text-gray-400
                "
              />

              <input
                type="number"
                placeholder="Guests"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  py-4
                  pl-12
                  pr-4
                  outline-none
                "
              />

            </div>

            {/* Button */}
            <button
              className="
                bg-yellow-400
                hover:bg-yellow-500
                transition
                rounded-xl
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                py-4
              "
            >

              <FaSearch />

              Search Hotels

            </button>

          </div>

        </div>

      </div>

      {/* Hotels Section */}
      <div className="
        py-24
        px-4
        md:px-10
        lg:px-20
      ">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">

            <p className="text-yellow-500 uppercase font-semibold">
              Popular Hotels
            </p>

            <h2 className="
              text-3xl
              md:text-5xl
              font-bold
              text-[#032B5B]
              mt-3
            ">
              Best Luxury Hotels
            </h2>

          </div>

          {/* Hotel Cards */}
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          ">

            {hotels.map((hotel, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-lg
                  hover:shadow-2xl
                  transition
                  duration-300
                "
              >

                {/* Image */}
                <img
                  src={hotel.image}
                  alt=""
                  className="
                    w-full
                    h-64
                    object-cover
                  "
                />

                {/* Content */}
                <div className="p-6">

                  {/* Rating */}
                  <div className="
                    flex
                    items-center
                    gap-2
                    text-yellow-400
                    mb-4
                  ">

                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                  </div>

                  <h3 className="
                    text-2xl
                    font-bold
                    text-[#032B5B]
                    mb-2
                  ">
                    {hotel.name}
                  </h3>

                  <p className="text-gray-500 mb-6">
                    {hotel.location}
                  </p>

                  {/* Features */}
                  <div className="
                    flex
                    gap-4
                    text-gray-500
                    mb-6
                  ">

                    <FaWifi />
                    <FaSwimmingPool />
                    <FaUtensils />

                  </div>

                  <div className="
                    flex
                    justify-between
                    items-center
                  ">

                    <p className="
                      text-yellow-500
                      font-bold
                      text-lg
                    ">
                      {hotel.price}
                    </p>

                    <button
                      className="
                        bg-[#032B5B]
                        hover:bg-yellow-400
                        hover:text-black
                        transition
                        text-white
                        px-5
                        py-3
                        rounded-xl
                        font-semibold
                      "
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

    </section>
  );
};

export default Hotels;