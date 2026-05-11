const STATS = [
  { number: "10+", label: "Years of Experience" },
  { number: "50K+", label: "Happy Customers" },
  { number: "120+", label: "Destinations" },
  { number: "24/7", label: "Customer Support" },
];

const TEAM = [
  { name: "Ashiru Oluwaseun", role: "CEO & Founder", initials: "AO" },
  { name: "Ashiru Ashley", role: "Director", initials: "AA" },
  { name: "Tunde Adewale", role: "Travel Consultant", initials: "TA" },
  { name: "Chisom Eze", role: "Customer Experience", initials: "CE" },
];

const VALUES = [
  { icon: "🤝", title: "Trust", desc: "We build lasting relationships with our customers through honesty and transparency." },
  { icon: "⭐", title: "Excellence", desc: "We deliver only the best travel experiences, from booking to return." },
  { icon: "🌍", title: "Adventure", desc: "We believe everyone deserves to explore the world comfortably." },
  { icon: "💬", title: "Support", desc: "Our team is always available to assist you every step of the way." },
];

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Banner */}
      <div className="bg-[#032B5B] text-white py-20 px-4 text-center">
        <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Tulip Hospitality</h1>
        <p className="text-white/70 max-w-xl mx-auto text-base leading-relaxed">
          Your trusted travel partner for flights, hotels, tours and unforgettable experiences across the globe.
        </p>
      </div>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
          <h2 className="text-3xl font-bold text-[#032B5B] mb-5">Making Every Journey Comfortable & Memorable</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tulip Hospitality was founded with a simple mission — to make travel easy, affordable, and enjoyable for everyone. What started as a small travel agency in Lagos has grown into a trusted brand serving thousands of customers across Nigeria and beyond.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            From booking flights to organising full tour packages, we handle every detail so you can focus on enjoying the journey. Our team of experienced travel consultants is dedicated to finding you the best deals and experiences.
          </p>
          <div className="flex gap-3">
            <div className="w-1 bg-yellow-500 rounded-full"></div>
            <p className="text-[#032B5B] font-medium italic">
              "Travel is the only thing you buy that makes you richer."
            </p>
          </div>
        </div>
        <div className="bg-[#032B5B] rounded-2xl p-8 text-white grid grid-cols-2 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center bg-white/10 rounded-xl p-5">
              <p className="text-3xl font-bold text-yellow-400 mb-1">{s.number}</p>
              <p className="text-sm text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-2">What We Stand For</p>
            <h2 className="text-3xl font-bold text-[#032B5B]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-[#032B5B] text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-2">The People Behind Us</p>
          <h2 className="text-3xl font-bold text-[#032B5B]">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#032B5B] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {member.initials}
              </div>
              <h3 className="font-bold text-[#032B5B] mb-1">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#032B5B] py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          Let Tulip Hospitality take care of every detail while you enjoy the adventure.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/flights">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-[#032B5B] font-bold px-8 py-3 rounded-xl transition-colors duration-300">
              Book a Flight
            </button>
          </a>
          <a href="/contact">
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#032B5B] font-bold px-8 py-3 rounded-xl transition-colors duration-300">
              Contact Us
            </button>
          </a>
        </div>
      </section>

    </div>
  );
}