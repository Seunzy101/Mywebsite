const EditProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-[#032B5B] mb-8 text-center">
          Edit Profile
        </h1>

        <form className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="border p-4 rounded-xl outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border p-4 rounded-xl outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            placeholder="Location"
            className="border p-4 rounded-xl outline-none"
          />

          <input
            type="password"
            placeholder="New Password"
            className="border p-4 rounded-xl outline-none md:col-span-2"
          />

          <button
            className="
              md:col-span-2
              bg-[#032B5B]
              hover:bg-yellow-500
              text-white
              py-4
              rounded-xl
              transition
            "
          >
            Save Changes
          </button>

        </form>

      </div>

    </div>
  );
};

export default EditProfile;