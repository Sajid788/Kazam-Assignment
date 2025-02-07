import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    try {
      await loginUser(email, password);
      toast.success("Login successful! 🎉");
      navigate("/");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.error("Login failed", error);
    }
  };

  return (
    
   <div className=" flex items-center justify-center lg:m-0 m-4">
    <form
      className="relative mt-[4rem]  px-10 py-14 rounded-lg bg-white w-full max-w-[520px]"
      onSubmit={handleSubmit}
    >
      <div className="relative z-10">
        <h1 className="mb-2 text-center text-[1.35rem] font-medium">
          Login to Your Account
        </h1>
        <p className="mb-8 px-[2rem] text-center text-[#999] text-[14px]">
          Login Now. Don't have an account?{" "}
          <Link
            to = "/signup"
            className="font-bold text-[#2ECC71] hover:text-[#7263F3] transition-all duration-300"
          >
            Register here
          </Link>
        </p>

        <div className="mt-[1rem] flex flex-col">
          <label htmlFor="email" className="mb-1 text-[#999]">
            Email
          </label>

          <input
            type="email"
            className="px-4 py-3 border-[2px] rounded-md outline-[#2ECC71] text-gray-800"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="relative mt-[1rem] flex flex-col">
          <label htmlFor="password" className="mb-1 text-[#999]">
            Password
          </label>

          <input
            type="password"
            className="px-4 py-3 border-[2px] rounded-md outline-[#2ECC71] text-gray-800"
            placeholder="***************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mt-4 flex justify-end"></div>
        <div className="flex">
        <button
              type="submit"
              disabled={loading} 
              className={`mt-[1.5rem] cursor-pointer  flex items-center justify-center gap-2 flex-1 px-4 py-3 font-bold text-white rounded-md transition-colors ${
                loading ? "bg-[#1abc9c] abc9ccursor-not-allowed" : "bg-[#2ECC71] hover:bg-[#1abc9c]"
              }`}
            >
              {loading && (
               <svg
               className="animate-spin h-5 w-5 text-white"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <circle
                 className="opacity-25"
                 cx="12"
                 cy="12"
                 r="10"
                 stroke="currentColor"
                 strokeWidth="4"
               ></circle>
               <path
                 className="opacity-75"
                 fill="currentColor"
                 d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 108 8h-4l3 3 3-3h-4a8 8 0 01-8 8z"
               ></path>
             </svg>
              )}
              {loading ? "Loading..." : "Login Now"}
        </button>
        </div>
      </div>
      <img src="/flurry.png" alt="" />
    </form>
   </div>
    
  );
};

export default Login;
