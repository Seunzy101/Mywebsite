import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditProfile = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) setForm(user);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(form));

    toast.success("Profile updated successfully");

    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-[#032B5B] mb-8 text-center">
          Edit Profile
        </h1>

        <form onSubmit={handleSave} className="grid md:grid-cols-2 gap-6">

          <input value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            className="border p-4 rounded-xl"
            placeholder="Full Name"
          />

          <input value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border p-4 rounded-xl"
            placeholder="Email"
          />

          <input value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="border p-4 rounded-xl"
            placeholder="Phone"
          />

          <input value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="border p-4 rounded-xl"
            placeholder="Location"
          />

          <button className="md:col-span-2 bg-[#032B5B] text-white py-4 rounded-xl">
            Save Changes
          </button>

        </form>

      </div>

    </div>
  );
};

export default EditProfile;