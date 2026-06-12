import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.fullName ||
      !form.email ||
      !form.password
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost/tulip-backend/api/auth/register.php",
        {
          name: form.fullName,
          email: form.email,
          password: form.password,
        }
      );

      if (response.data.status === "success") {
        toast.success(response.data.message);

        setTimeout(() => {
          navigate("/signin");
        }, 1500);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);

      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-4xl font-bold text-[#032B5B] mb-6 text-center">
          Create Account
        </h1>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >

          <input
            name="fullName"
            placeholder="Full Name"
            className="border p-4 rounded-xl"
            value={form.fullName}
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border p-4 rounded-xl"
            value={form.email}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="border p-4 rounded-xl"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            name="location"
            placeholder="Location"
            className="border p-4 rounded-xl"
            value={form.location}
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="border p-4 rounded-xl"
            value={form.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#032B5B] text-white py-4 rounded-xl hover:bg-yellow-500"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <div className="text-center mt-6">
          <p>Already have an account?</p>

          <Link
            to="/signin"
            className="text-[#032B5B] font-bold"
          >
            Sign In
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SignUp;