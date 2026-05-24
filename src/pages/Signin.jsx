import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-4xl font-bold text-[#032B5B] mb-6 text-center">
          Sign In
        </h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/profile");
          }}
        >

          <input
            type="email"
            placeholder="Email Address"
            className="border p-4 rounded-xl outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-4 rounded-xl outline-none"
          />

          <button
            className="
              bg-[#032B5B]
              hover:bg-yellow-500
              text-white
              py-4
              rounded-xl
              transition
            "
          >
            Sign In
          </button>

        </form>

        <Link to="/account">
          <button
            className="
              mt-4
              w-full
              border
              border-[#032B5B]
              text-[#032B5B]
              hover:bg-[#032B5B]
              hover:text-white
              py-4
              rounded-xl
              transition
            "
          >
            Create Account
          </button>
        </Link>

      </div>

    </div>
  );
};

export default Signin;