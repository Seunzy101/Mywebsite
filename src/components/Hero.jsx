 import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 lg:px-20 w-full">
        <div className="max-w-3xl text-white">

          <p className="text-yellow-400 uppercase tracking-widest mb-4 text-sm md:text-base">
            Explore The World
          </p>

          <h1 className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Travel Beyond <br />
            Your Imagination
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-8 max-w-2xl">
            Discover amazing destinations, affordable flight deals,
            luxury hotels and unforgettable travel experiences with
            Tulip Hospitality.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            {/* Navigate to Flights */}
            <button
              onClick={() => navigate('/flights')}
              className="bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold px-8 py-4 rounded-xl w-full sm:w-auto"
            >
              Explore Now
            </button>

            {/* Navigate to About */}
            <button
              onClick={() => navigate('/about')}
              className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl w-full sm:w-auto"
            >
              Learn More
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;