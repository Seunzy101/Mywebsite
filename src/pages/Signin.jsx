import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Signin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
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

    if (!form.email || !form.password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost/tulip-backend/api/auth/login.php",
        {
          email: form.email,
          password: form.password,
        }
      );

      if (response.data.status === "success") {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        localStorage.setItem("loggedIn", "true");

        window.dispatchEvent(
          new Event("authChange")
        );

        toast.success("Login successful");

        setTimeout(() => {
          navigate("/profile");
        }, 1000);

      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.error(error);

      toast.error(
        "Unable to connect to server"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-4xl font-bold text-[#032B5B] mb-6 text-center">
          Sign In
        </h1>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border p-4 rounded-xl"
            value={form.email}
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
            {loading ? "Signing In..." : "Sign In"}
          </button>

        </form>

        <div className="text-center mt-6">
          <Link
            to="/signup"
            className="text-[#032B5B] font-bold"
          >
            Create Account
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Signin;