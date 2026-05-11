import {
  FaPlane,
  FaHotel,
  FaMapMarkedAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const bookings = [
  {
    type: "Flight",
    destination: "Dubai, UAE",
    date: "12 June 2026",
    price: "₦320,000",
    status: "Confirmed",
    icon: <FaPlane />,
  },

  {
    type: "Hotel",
    destination: "London, UK",
    date: "20 June 2026",
    price: "₦250,000",
    status: "Pending",
    icon: <FaHotel />,
  },

  {
    type: "Tour",
    destination: "Paris, France",
    date: "02 July 2026",
    price: "₦780,000",
    status: "Confirmed",
    icon: <FaMapMarkedAlt />,
  },

  {
    type: "Flight",
    destination: "New York, USA",
    date: "15 July 2026",
    price: "₦550,000",
    status: "Cancelled",
    icon: <FaPlane />,
  },
];

const MyBookings = () => {
  return (
    <section className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <div
        className="
          relative
          h-[45vh]
          bg-cover
          bg-center
          flex
          items-center
          justify-center
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">

          <p className="uppercase tracking-widest text-yellow-400 mb-4">
            Dashboard
          </p>

          <h1 className="
            text-4xl
            md:text-6xl
            font-bold
          ">
            My Bookings
          </h1>

        </div>

      </div>

      {/* Main Content */}
      <div className="
        py-20
        px-4
        md:px-10
        lg:px-20
      ">

        <div className="max-w-7xl mx-auto">

          {/* Stats Cards */}
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            mb-16
          ">

            {/* Card */}
            <div className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
            ">

              <div className="
                w-16
                h-16
                rounded-full
                bg-blue-100
                text-[#032B5B]
                flex
                items-center
                justify-center
                text-2xl
                mb-5
              ">
                <FaPlane />
              </div>

              <h3 className="text-4xl font-bold text-[#032B5B]">
                12
              </h3>

              <p className="text-gray-500 mt-2">
                Flight Bookings
              </p>

            </div>

            {/* Card */}
            <div className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
            ">

              <div className="
                w-16
                h-16
                rounded-full
                bg-yellow-100
                text-yellow-500
                flex
                items-center
                justify-center
                text-2xl
                mb-5
              ">
                <FaHotel />
              </div>

              <h3 className="text-4xl font-bold text-[#032B5B]">
                8
              </h3>

              <p className="text-gray-500 mt-2">
                Hotel Reservations
              </p>

            </div>

            {/* Card */}
            <div className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
            ">

              <div className="
                w-16
                h-16
                rounded-full
                bg-green-100
                text-green-500
                flex
                items-center
                justify-center
                text-2xl
                mb-5
              ">
                <FaMapMarkedAlt />
              </div>

              <h3 className="text-4xl font-bold text-[#032B5B]">
                5
              </h3>

              <p className="text-gray-500 mt-2">
                Tour Packages
              </p>

            </div>

            {/* Card */}
            <div className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
            ">

              <div className="
                w-16
                h-16
                rounded-full
                bg-purple-100
                text-purple-500
                flex
                items-center
                justify-center
                text-2xl
                mb-5
              ">
                <FaCalendarAlt />
              </div>

              <h3 className="text-4xl font-bold text-[#032B5B]">
                25
              </h3>

              <p className="text-gray-500 mt-2">
                Total Trips
              </p>

            </div>

          </div>

          {/* Recent Bookings */}
          <div className="
            bg-white
            rounded-3xl
            shadow-xl
            p-6
            md:p-10
          ">

            {/* Heading */}
            <div className="
              flex
              flex-col
              md:flex-row
              justify-between
              md:items-center
              gap-4
              mb-10
            ">

              <div>

                <p className="text-yellow-500 uppercase font-semibold">
                  Booking History
                </p>

                <h2 className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-[#032B5B]
                  mt-2
                ">
                  Recent Bookings
                </h2>

              </div>

              <button
                className="
                  bg-[#032B5B]
                  hover:bg-yellow-400
                  hover:text-black
                  transition
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  w-full
                  md:w-auto
                "
              >
                View All
              </button>

            </div>

            {/* Booking Cards */}
            <div className="space-y-6">

              {bookings.map((booking, index) => (
                <div
                  key={index}
                  className="
                    border
                    border-gray-200
                    rounded-2xl
                    p-6
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    justify-between
                    gap-6
                    hover:shadow-lg
                    transition
                  "
                >

                  {/* Left */}
                  <div className="
                    flex
                    items-start
                    gap-5
                  ">

                    {/* Icon */}
                    <div className="
                      w-16
                      h-16
                      rounded-full
                      bg-[#032B5B]
                      text-white
                      flex
                      items-center
                      justify-center
                      text-2xl
                      shrink-0
                    ">
                      {booking.icon}
                    </div>

                    {/* Info */}
                    <div>

                      <h3 className="
                        text-2xl
                        font-bold
                        text-[#032B5B]
                      ">
                        {booking.type}
                      </h3>

                      <p className="text-gray-500 mt-1">
                        {booking.destination}
                      </p>

                      <p className="text-gray-500 mt-2">
                        {booking.date}
                      </p>

                    </div>

                  </div>

                  {/* Right */}
                  <div className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    gap-5
                  ">

                    <div>

                      <p className="text-gray-500">
                        Amount
                      </p>

                      <h4 className="
                        text-xl
                        font-bold
                        text-yellow-500
                      ">
                        {booking.price}
                      </h4>

                    </div>

                    {/* Status */}
                    <div
                      className={`
                        px-5
                        py-3
                        rounded-full
                        text-sm
                        font-semibold
                        text-center
                        ${
                          booking.status === "Confirmed"
                            ? "bg-green-100 text-green-600"
                            : booking.status === "Pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                        }
                      `}
                    >
                      {booking.status}
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MyBookings;