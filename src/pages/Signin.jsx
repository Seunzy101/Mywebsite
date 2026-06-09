import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      toast.error("No account found. Please sign up.");
      return;
    }

    if (
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {
      localStorage.setItem("loggedIn", "true");

      window.dispatchEvent(new Event("authChange"));

      toast.success("Login successful 🎉");
      navigate("/profile");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-4xl font-bold text-[#032B5B] mb-6 text-center">
          Sign In
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border p-4 rounded-xl"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="border p-4 rounded-xl"
            onChange={handleChange}
          />

          <button className="bg-[#032B5B] text-white py-4 rounded-xl hover:bg-yellow-500">
            Sign In
          </button>
        </form>

        <div className="text-center mt-6">
          <Link to="/signup" className="text-[#032B5B] font-bold">
            Create Account
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Signin;