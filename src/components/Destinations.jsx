import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../context/BookingContext";
import BookingModal from "../components/BookingModal";

const destinations = [
  {
    title: "Dubai",
    destination: "United Arab Emirates",
    price: "₦620,000",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
  {
    title: "London",
    destination: "United Kingdom",
    price: "₦850,000",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
  },
  {
    title: "Paris",
    destination: "France",
    price: "₦980,000",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    title: "Texas",
    destination: "United States",
    price: "₦950,000",
    image:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2",
  },
];

const Destinations = () => {
  const { addBooking } = useContext(BookingContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleBook = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleSubmit = (formData) => {
    if (!selectedItem) return;

    addBooking({
      title: selectedItem.title,
      destination: selectedItem.destination,
      price: selectedItem.price,
      image: selectedItem.image,

      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      guests: formData.guests,
      departureDate: formData.departureDate,
      returnDate: formData.returnDate,
    });

    setOpen(false);
    setSelectedItem(null);

    navigate("/bookings");
  };

  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-yellow-500 uppercase font-semibold">
            Popular Destinations
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#032B5B] mt-3">
            Explore The World
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover amazing travel destinations with affordable packages.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#032B5B]">
                  {item.title}
                </h3>

                <p className="text-gray-500">
                  {item.destination}
                </p>

                <h4 className="text-xl font-bold text-yellow-500 mt-2">
                  {item.price}
                </h4>

                <button
                  onClick={() => handleBook(item)}
                  className="w-full mt-5 bg-[#032B5B] text-white py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <BookingModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onSubmit={handleSubmit}
          item={selectedItem}
        />

      </div>
    </section>
  );
};

export default Destinations;