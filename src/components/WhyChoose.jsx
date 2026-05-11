import {
  FaCheckCircle,
  FaShieldAlt,
  FaHeadset,
  FaPlaneDeparture,
} from "react-icons/fa";

const WhyChoose = () => {
  const features = [
    {
      icon: <FaPlaneDeparture />,
      title: "Best Travel Deals",
      description:
        "We provide affordable flight, hotel and tour packages worldwide.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Secure Booking",
      description:
        "Your bookings and payments are protected with trusted systems.",
    },

    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description:
        "Our support team is always available to assist your travel needs.",
    },

    {
      icon: <FaCheckCircle />,
      title: "Trusted by Thousands",
      description:
        "Thousands of happy customers travel with Tulip Hospitality yearly.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <p className="text-yellow-500 font-semibold uppercase mb-3">
            Why Choose Us
          </p>

          <h2 className="text-2xl md:text-5xl font-bold text-[#032B5B] leading-tight">
            Why Choose Tulip Hospitality?
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            We make every trip stress-free, affordable and unforgettable.
            From flight bookings to hotel reservations and visa processing,
            Tulip Hospitality gives you the best travel experience.
          </p>

          <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 transition px-8 py-4 rounded-xl font-semibold">
            Learn More About Us
          </button>

        </div>

        {/* Right Side */}
        <div className="grid sm:grid-cols-2 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-white hover:shadow-2xl transition duration-300 p-8 rounded-2xl border"
            >

              <div className="w-16 h-16 rounded-full bg-[#032B5B] text-white flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#032B5B]">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;