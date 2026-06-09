import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div
        className="
          h-[50vh]
          bg-cover
          bg-center
          flex
          items-center
          justify-center
          relative
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff')",
        }}
      >

        
        <div className="absolute inset-0 bg-black/50"></div>

        
        <div className="relative z-10 text-center text-white px-4">

          <p className="uppercase tracking-widest text-yellow-400 mb-4">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Contact Tulip Hospitality
          </h1>

        </div>

      </div>

      {/* Contact Content */}
      <div className="py-20 px-4 md:px-10 lg:px-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">

          {/* Left Side */}
          <div>

            <p className="text-yellow-500 uppercase font-semibold mb-3">
              Contact Information
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-[#032B5B] mb-6">
              Let’s Plan Your Next Trip
            </h2>

            <p className="text-gray-600 leading-8 mb-10">
              Reach out to Tulip Hospitality for flight bookings,
              visa services, hotel reservations, tours and more.
              Our team is available to help make your travel
              experience smooth and unforgettable.
            </p>

            {/* Contact Items */}
            <div className="space-y-6">

              <div className="flex items-start gap-5">

                <div className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#032B5B]
                  text-white
                  flex
                  items-center
                  justify-center
                ">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-1">
                    Phone Number
                  </h3>

                  <p className="text-gray-600">
                    +234 906 084 6432
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#032B5B]
                  text-white
                  flex
                  items-center
                  justify-center
                ">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-1">
                    Email Address
                  </h3>

                  <p className="text-gray-600 break-all">
                    info@tuliphospitality.com
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#032B5B]
                  text-white
                  flex
                  items-center
                  justify-center
                ">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-1">
                    Office Address
                  </h3>

                  <p className="text-gray-600">
                    Lagos, Nigeria
                  </p>
                </div>

              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-10">

              <div className="
                w-12
                h-12
                rounded-full
                bg-[#032B5B]
                text-white
                flex
                items-center
                justify-center
                cursor-pointer
                hover:bg-yellow-400
                hover:text-black
                transition
              ">
                <FaFacebookF />
              </div>

              <div className="
                w-12
                h-12
                rounded-full
                bg-[#032B5B]
                text-white
                flex
                items-center
                justify-center
                cursor-pointer
                hover:bg-yellow-400
                hover:text-black
                transition
              ">
                <FaInstagram />
              </div>

              <div className="
                w-12
                h-12
                rounded-full
                bg-[#032B5B]
                text-white
                flex
                items-center
                justify-center
                cursor-pointer
                hover:bg-yellow-400
                hover:text-black
                transition
              ">
                <FaTwitter />
              </div>

              <div className="
                w-12
                h-12
                rounded-full
                bg-[#032B5B]
                text-white
                flex
                items-center
                justify-center
                cursor-pointer
                hover:bg-yellow-400
                hover:text-black
                transition
              ">
                <FaLinkedin />
              </div>

            </div>

          </div>

          {/* Right Side - Form */}
          <div className="
            bg-white
            shadow-2xl
            rounded-3xl
            p-8
            md:p-10
          ">

            <h2 className="text-3xl font-bold text-[#032B5B] mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  focus:border-[#032B5B]
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  focus:border-[#032B5B]
                "
              />

              <input
                type="text"
                placeholder="Subject"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  focus:border-[#032B5B]
                "
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  focus:border-[#032B5B]
                "
              ></textarea>

              <button
                className="
                  bg-yellow-400
                  hover:bg-yellow-500
                  transition
                  w-full
                  py-4
                  rounded-xl
                  font-semibold
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;