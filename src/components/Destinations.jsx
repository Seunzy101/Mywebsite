const destinations = [
  {
    city: "Dubai",
    country: "United Arab Emirates",
    price: "₦320,000",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },

  {
    city: "London",
    country: "United Kingdom",
    price: "₦450,000",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
  },

  {
    city: "Paris",
    country: "France",
    price: "₦480,000",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },

  {
    city: "New York",
    country: "United States",
    price: "₦550,000",
    image:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2",
  },
];

const Destinations = () => {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-gray-100">

      {/* Container */}
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-yellow-500 uppercase font-semibold">
            Popular Destinations
          </p>

          <h2 className="
            text-3xl
            md:text-5xl
            font-bold
            text-[#032B5B]
            mt-3
          ">
            Explore The World
          </h2>

          <p className="
            text-gray-600
            mt-4
            max-w-2xl
            mx-auto
            leading-8
          ">
            Discover amazing places around the world with
            affordable travel packages and unforgettable experiences.
          </p>

        </div>

        {/* Responsive Grid */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
        ">

          {destinations.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.city}
                  className="
                    w-full
                    h-64
                    object-cover
                    hover:scale-110
                    transition
                    duration-500
                  "
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex justify-between items-start gap-4">

                  <div>

                    <h3 className="
                      text-2xl
                      font-bold
                      text-[#032B5B]
                    ">
                      {item.city}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      {item.country}
                    </p>

                  </div>

                  {/* Price */}
                  <div className="text-right">

                    <p className="text-sm text-gray-500">
                      From
                    </p>

                    <h4 className="
                      text-xl
                      font-bold
                      text-yellow-500
                    ">
                      {item.price}
                    </h4>

                  </div>

                </div>

                {/* Button */}
                <button
                  className="
                    mt-6
                    w-full
                    bg-[#032B5B]
                    hover:bg-yellow-400
                    hover:text-black
                    text-white
                    transition
                    py-3
                    rounded-xl
                    font-semibold
                  "
                >
                  Book Now
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Destinations;