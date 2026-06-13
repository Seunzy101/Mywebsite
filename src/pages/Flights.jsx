import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../context/BookingContext";
import BookingModal from "../components/BookingModal";
import { FaSearch, FaTimes, FaPlane } from "react-icons/fa";
import { getCheapFlights } from "../api/travelpayouts";
import axios from "axios";
import { toast } from "react-toastify";

const CITY_CODES = {
  "lagos": "LOS",
  "abuja": "ABV",
  "port harcourt": "PHC",
  "london": "LON",
  "dubai": "DXB",
  "paris": "CDG",
  "new york": "JFK",
  "amsterdam": "AMS",
  "istanbul": "IST",
  "accra": "ACC",
  "nairobi": "NBO",
  "johannesburg": "JNB",
  "cairo": "CAI",
  "doha": "DOH",
  "toronto": "YYZ",
  "rome": "FCO",
  "madrid": "MAD",
  "berlin": "BER",
  "singapore": "SIN",
};

const CITY_NAMES = {
  LOS: "Lagos", ABV: "Abuja", PHC: "Port Harcourt",
  LON: "London", DXB: "Dubai", CDG: "Paris",
  JFK: "New York", AMS: "Amsterdam", IST: "Istanbul",
  ACC: "Accra", NBO: "Nairobi", JNB: "Johannesburg",
  CAI: "Cairo", DOH: "Doha", YYZ: "Toronto",
  FCO: "Rome", MAD: "Madrid", BER: "Berlin", SIN: "Singapore",
};

const AIRLINE_NAMES = {
  SU: "Aeroflot", TK: "Turkish Airlines", EK: "Emirates",
  QR: "Qatar Airways", ET: "Ethiopian Airlines", MS: "EgyptAir",
  LH: "Lufthansa", BA: "British Airways", AF: "Air France",
  KL: "KLM", UN: "Transaero", S7: "S7 Airlines",
  W6: "Wizz Air", FR: "Ryanair", U2: "easyJet",
  VS: "Virgin Atlantic", AA: "American Airlines", DL: "Delta",
  UA: "United Airlines", WB: "RwandAir", AT: "Royal Air Maroc",
  SA: "South African Airways", A3: "Aegean Airlines",
  AY: "Finnair", IB: "Iberia", LX: "Swiss",
  OS: "Austrian", SK: "SAS", TP: "TAP Air Portugal",
  VY: "Vueling", PC: "Pegasus Airlines", XQ: "SunExpress",
  HV: "Transavia", EW: "Eurowings", BT: "airBaltic",
  WS: "WestJet", AC: "Air Canada", QF: "Qantas",
  SQ: "Singapore Airlines", CX: "Cathay Pacific",
  NH: "ANA", JL: "Japan Airlines", MH: "Malaysia Airlines",
  AI: "Air India", B6: "JetBlue", WN: "Southwest Airlines",
};

const DESTINATION_IMAGES = {
  default: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  LON: "https://images.unsplash.com/photo-1505764706515-aa95265c5abc",
  DXB: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  CDG: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3",
  JFK: "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625",
  AMS: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4",
  IST: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
  ACC: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
  NBO: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e",
  JNB: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743",
  CAI: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a",
  DOH: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee",
  FCO: "https://images.unsplash.com/photo-1529260830199-42c24126f198",
  MAD: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
  SIN: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
};

const TRIP_TYPES = ["One Way", "Round Trip", "Multi-City"];
const CABIN_CLASSES = ["Economy", "Premium Economy", "Business", "First Class"];

const CLASS_MULTIPLIER = {
  "Economy": 1,
  "Premium Economy": 1.4,
  "Business": 2.5,
  "First Class": 4,
};

const WIDGET_SRC = "https://tpemd.com/content?currency=usd&trs=539172&shmarker=739037&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%23032B5B&color_button=%23F5C518&color_icons=%23032B5B&dark=%231a1a1a&light=%23FFFFFF&secondary=%23FFFFFF&special=%23e5e7eb&color_focused=%23032B5B&border_radius=12&plain=true&promo_id=7879&campaign_id=100";

const Flights = () => {
  const navigate = useNavigate();
  const widgetRef = useRef(null);

  const [tripType, setTripType] = useState("One Way");
  const [cabinClass, setCabinClass] = useState("Economy");
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const [legs, setLegs] = useState([
    { from: "", to: "", date: "" },
    { from: "", to: "", date: "" },
  ]);

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);
  const [showWidget, setShowWidget] = useState(false);
  const [searchedFrom, setSearchedFrom] = useState("");
  const [searchedTo, setSearchedTo] = useState("");

  const [open, setOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [detailFlight, setDetailFlight] = useState(null);

  useEffect(() => {
    fetchFlights("LOS", "-", true);
  }, []);

  // Inject widget script when showWidget becomes true
  useEffect(() => {
    if (!showWidget || !widgetRef.current) return;

    widgetRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = WIDGET_SRC;
    script.async = true;
    script.charset = "utf-8";
    widgetRef.current.appendChild(script);

    return () => {
      if (widgetRef.current) widgetRef.current.innerHTML = "";
    };
  }, [showWidget]);

  const buildFlightObject = (orig, dest, f, userDate, multiplier) => {
    const adjusted = Math.round(Number(f.price) * multiplier);
    return {
      title: `${CITY_NAMES[orig] || orig} → ${CITY_NAMES[dest] || dest}`,
      destination: dest,
      from: orig,
      to: dest,
      fromName: CITY_NAMES[orig] || orig,
      toName: CITY_NAMES[dest] || dest,
      price: `₦${adjusted.toLocaleString()}`,
      rawPrice: adjusted,
      airline: AIRLINE_NAMES[f.airline] || f.airline,
      airlineCode: f.airline,
      flight_number: f.flight_number,
      departure_at: userDate
        ? new Date(userDate).toISOString()
        : f.departure_at,
      return_at: returnDate
        ? new Date(returnDate).toISOString()
        : f.return_at,
      image: DESTINATION_IMAGES[dest] || DESTINATION_IMAGES.default,
      cabinClass,
      tripType,
      passengers,
    };
  };

  const fetchFlights = async (origin, destination, isDefault = false) => {
    setLoading(true);
    setError(null);
    try {
      const multiplier = CLASS_MULTIPLIER[cabinClass] || 1;
      const userDate = departure || null;
      const allFlights = [];
      const seen = new Set();

      const origins = isDefault
        ? ["LOS", "ABV", "PHC"]
        : [origin, "LOS", "ABV", "PHC"].filter(
            (o, i, arr) => arr.indexOf(o) === i
          );

      const results = await Promise.all(
        origins.map((o) =>
          getCheapFlights(o, isDefault ? "-" : destination, "NGN")
        )
      );

      results.forEach((data, i) => {
        const orig = origins[i];
        if (!data.success || !data.data) return;
        Object.entries(data.data).forEach(([dest, entries]) => {
          Object.values(entries).forEach((f) => {
            if (seen.has(f.airline)) return;
            seen.add(f.airline);
            allFlights.push(
              buildFlightObject(orig, dest, f, userDate, multiplier)
            );
          });
        });
      });

      if (allFlights.length === 0) {
        setError("No flights found for this route.");
      } else {
        setFlights(isDefault ? allFlights.slice(0, 4) : allFlights);
      }
    } catch (err) {
      setError("Failed to fetch flights. Please try again.");
    }
    setLoading(false);
  };

  const handleSearch = () => {
    setSearched(true);
    const originCode =
      CITY_CODES[searchFrom.trim().toLowerCase()] ||
      searchFrom.trim().toUpperCase();
    const destCode =
      CITY_CODES[searchTo.trim().toLowerCase()] ||
      searchTo.trim().toUpperCase() ||
      "-";
    setSearchedFrom(CITY_NAMES[originCode] || searchFrom);
    setSearchedTo(CITY_NAMES[destCode] || searchTo);
    setShowWidget(true);
    fetchFlights(originCode, destCode);
  };

  const handleCardClick = (flight) => setDetailFlight(flight);
  const handleCloseDetail = () => setDetailFlight(null);

  const handleBook = (flight) => {
    setDetailFlight(null);
    setSelectedFlight(flight);
    setOpen(true);
  };

  const handleSubmit = async (clientData) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      toast.error("Please login first");
      return;
    }

    const response = await axios.post(
      "http://localhost/tulip-backend/api/bookings/create.php",
      {
        user_id: user.id,
        title: selectedFlight.title,
        destination: selectedFlight.toName,
        price: selectedFlight.rawPrice,
      }
    );

    if (response.data.status === "success") {
      toast.success("Booking created successfully");

      setOpen(false);
      setSelectedFlight(null);

      navigate("/bookings");
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.error(error);
    toast.error("Booking failed");
  }
};

  const updateLeg = (index, field, value) => {
    const updated = [...legs];
    updated[index][field] = value;
    setLegs(updated);
  };

  const addLeg = () => {
    if (legs.length < 5) setLegs([...legs, { from: "", to: "", date: "" }]);
  };

  const removeLeg = (index) => {
    if (legs.length > 2) setLegs(legs.filter((_, i) => i !== index));
  };

  const formatDate = (iso, opts = {}) => {
    if (!iso) return "—";
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      ...opts,
    });
  };

  return (
    <section className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="uppercase tracking-widest text-yellow-400 mb-4">
            Book Flights
          </p>
          <h1 className="text-4xl md:text-6xl font-bold">
            Find Affordable Flights Worldwide
          </h1>
        </div>
      </div>

      {/* SEARCH */}
      <div className="px-4 md:px-10 lg:px-20 mt-10">
        <div className="bg-white shadow-2xl rounded-3xl p-6 max-w-7xl mx-auto">

          {/* Trip type + Cabin class */}
          <div className="flex flex-wrap gap-3 mb-5">
            {TRIP_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition ${
                  tripType === type
                    ? "bg-[#032B5B] text-white border-[#032B5B]"
                    : "bg-white text-gray-600 border-gray-300"
                }`}
              >
                {type}
              </button>
            ))}
            <select
              value={cabinClass}
              onChange={(e) => setCabinClass(e.target.value)}
              className="ml-auto border p-2 rounded-xl text-sm text-gray-600"
            >
              {CABIN_CLASSES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* One Way / Round Trip */}
          {tripType !== "Multi-City" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <input
                placeholder="From (e.g. Lagos)"
                value={searchFrom}
                onChange={(e) => setSearchFrom(e.target.value)}
                className="border p-3 rounded-xl"
              />
              <input
                placeholder="To (e.g. London)"
                value={searchTo}
                onChange={(e) => setSearchTo(e.target.value)}
                className="border p-3 rounded-xl"
              />
              <input
                type="date"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className="border p-3 rounded-xl"
              />
              {tripType === "Round Trip" && (
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="border p-3 rounded-xl"
                />
              )}
              <input
                type="number"
                min="1"
                placeholder="Passengers"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="border p-3 rounded-xl"
              />
            </div>
          )}

          {/* Multi-City */}
          {tripType === "Multi-City" && (
            <div className="flex flex-col gap-3">
              {legs.map((leg, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center"
                >
                  <input
                    placeholder={`From (Leg ${i + 1})`}
                    value={leg.from}
                    onChange={(e) => updateLeg(i, "from", e.target.value)}
                    className="border p-3 rounded-xl"
                  />
                  <input
                    placeholder={`To (Leg ${i + 1})`}
                    value={leg.to}
                    onChange={(e) => updateLeg(i, "to", e.target.value)}
                    className="border p-3 rounded-xl"
                  />
                  <div className="flex gap-2">
                    <input
                      type="date"
                      value={leg.date}
                      onChange={(e) => updateLeg(i, "date", e.target.value)}
                      className="border p-3 rounded-xl flex-1"
                    />
                    {legs.length > 2 && (
                      <button
                        onClick={() => removeLeg(i)}
                        className="text-red-400 text-xl font-bold px-2"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex gap-3 mt-1 items-center">
                <button
                  onClick={addLeg}
                  className="text-sm text-[#032B5B] font-semibold underline"
                >
                  + Add another flight
                </button>
                <input
                  type="number"
                  min="1"
                  placeholder="Passengers"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="border p-3 rounded-xl w-40"
                />
              </div>
            </div>
          )}

          <button
            onClick={handleSearch}
            className="mt-5 bg-yellow-400 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition"
          >
            <FaSearch className="inline mr-2" />
            Search Flights
          </button>
        </div>
      </div>

      {/* LIVE WIDGET */}
      {showWidget && (
        <div className="px-4 md:px-10 lg:px-20 mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <h2 className="text-xl font-bold text-gray-700">
                Live Results — {searchedFrom} to {searchedTo}
              </h2>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Real-time prices and availability powered by Aviasales
            </p>
            <div
              ref={widgetRef}
              className="w-full bg-white rounded-3xl shadow-lg overflow-hidden"
              style={{ minHeight: "120px" }}
            />
          </div>
        </div>
      )}

      {/* CACHED FLIGHTS */}
      <div className="py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            {searched
              ? `More options — ${searchedFrom} to ${searchedTo}`
              : "Popular Flights from Nigeria"}
          </h2>
          {searched && (
            <p className="text-sm text-gray-400 mb-8">
              Cached prices · Click any card to view full details
            </p>
          )}
          {!searched && (
            <p className="text-sm text-gray-400 mb-8">
              Search above to see live results
            </p>
          )}

          {loading && (
            <p className="text-center text-gray-500 text-lg py-20">
              Searching flights...
            </p>
          )}
          {error && (
            <p className="text-center text-red-500 text-lg py-20">{error}</p>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {flights.map((flight, index) => (
                <div
                  key={index}
                  onClick={() => handleCardClick(flight)}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <img
                    src={flight.image}
                    alt={flight.title}
                    className="h-60 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex gap-2 mb-2 flex-wrap">
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">
                        {flight.tripType}
                      </span>
                      <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full font-medium">
                        {flight.cabinClass}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{flight.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      {flight.airline} · {flight.airlineCode}{flight.flight_number}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {formatDate(flight.departure_at)}
                    </p>
                    <p className="text-yellow-500 font-bold mt-1 text-lg">
                      {flight.price}
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      Click to view details
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* FLIGHT DETAIL MODAL */}
      {detailFlight && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">

            <button
              onClick={handleCloseDetail}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition"
            >
              <FaTimes />
            </button>

            <img
              src={detailFlight.image}
              alt={detailFlight.title}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />

            <div className="flex gap-2 mb-3 flex-wrap">
              <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                {detailFlight.tripType}
              </span>
              <span className="text-xs bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full font-medium">
                {detailFlight.cabinClass}
              </span>
            </div>

            <h2 className="text-2xl font-bold mb-4">{detailFlight.title}</h2>

            {/* Route visual */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#032B5B]">
                  {detailFlight.fromName}
                </p>
                <p className="text-gray-400 text-sm">{detailFlight.from}</p>
              </div>
              <div className="flex-1 flex items-center justify-center px-4">
                <div className="border-t-2 border-dashed border-gray-300 flex-1" />
                <FaPlane className="text-yellow-400 mx-2 text-xl" />
                <div className="border-t-2 border-dashed border-gray-300 flex-1" />
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#032B5B]">
                  {detailFlight.toName}
                </p>
                <p className="text-gray-400 text-sm">{detailFlight.to}</p>
              </div>
            </div>

            {/* Details */}
            <div className="bg-gray-50 rounded-2xl p-4 space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Airline</span>
                <span className="font-semibold">{detailFlight.airline}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Flight No.</span>
                <span className="font-semibold">
                  {detailFlight.airlineCode}{detailFlight.flight_number}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Departure</span>
                <span className="font-semibold">
                  {formatDate(detailFlight.departure_at, { weekday: "short" })}
                </span>
              </div>
              {detailFlight.tripType === "Round Trip" &&
                detailFlight.return_at && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Return</span>
                    <span className="font-semibold">
                      {formatDate(detailFlight.return_at, { weekday: "short" })}
                    </span>
                  </div>
                )}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Cabin Class</span>
                <span className="font-semibold">{detailFlight.cabinClass}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Passengers</span>
                <span className="font-semibold">{detailFlight.passengers}</span>
              </div>
              <div className="flex justify-between text-sm border-t pt-3">
                <span className="text-gray-700 font-semibold">Total Price</span>
                <span className="text-yellow-500 font-bold text-lg">
                  {detailFlight.price}
                </span>
              </div>
            </div>

            <button
              onClick={handleCloseDetail}
              className="w-full border border-gray-300 text-gray-600 py-3 rounded-2xl font-semibold mb-3 hover:bg-gray-50 transition"
            >
              ← Go Back
            </button>
            <button
              onClick={() => handleBook(detailFlight)}
              className="w-full bg-[#032B5B] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#054a8a] transition"
            >
              Book This Flight
            </button>
          </div>
        </div>
      )}

      <BookingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        item={selectedFlight}
      />
    </section>
  );
};

export default Flights;