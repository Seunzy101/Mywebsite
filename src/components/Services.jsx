import {
  FaPlane,
  FaHotel,
  FaPassport,
  FaShip,
} from "react-icons/fa";

const Services = () => {

  const services = [
    {
      title: "Visa Services",
      description:
        "Fast and reliable visa processing.",
      icon: <FaPassport />,
    },

    {
      title: "Flight Booking",
      description:
        "Affordable local and international flights.",
      icon: <FaPlane />,
    },

    {
      title: "Hotel Reservations",
      description:
        "Book luxury and budget-friendly hotels.",
      icon: <FaHotel />,
    },

    {
      title: "Boat Cruise",
      description:
        "Enjoy amazing cruise experiences.",
      icon: <FaShip />,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-yellow-500 uppercase font-semibold">
            Our Services
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#032B5B] mt-3">
            What We Offer
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-8">
            We provide complete travel and hospitality solutions.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                transition
                duration-300
                p-8
                text-center
              "
            >

              {/* Icon */}
              <div
                className="
                  w-20
                  h-20
                  mx-auto
                  rounded-full
                  bg-[#032B5B]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-3xl
                  mb-6
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#032B5B] mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-7">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;
