import { useState } from "react";
import { X, User, Eye, EyeOff } from "lucide-react";

export default function LoginModal({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div
        className="bg-white/95 backdrop-blur-md rounded-3xl border border-white/10 relative flex flex-col justify-between"
        style={{
          width: "660px",
          height: "620px",
          maxWidth: "100%",
          padding: "40px",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col gap-10">
          <h2 className="font-poppins font-bold text-3xl text-[#1F2544]">
            Log In to Baazi
          </h2>

          <div className="flex flex-col gap-5">
            <div>
              <label className="font-poppins text-sm text-gray-600 mb-2 block">
                Your Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <User className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="font-poppins text-sm text-gray-600 mb-2 block">
                Your Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm font-poppins text-gray-600">
                <input type="checkbox" className="rounded border-gray-300" />
                Remember
              </label>
              <a href="#" className="text-sm font-poppins text-purple-700 hover:underline">
                Forgotten?
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <button className="w-full bg-[#D9E021] text-[#1F2544] font-poppins font-bold text-lg py-3.5 rounded-full hover:brightness-95 transition">
            Log In
          </button>

          <div className="flex flex-col gap-4">
            <p className="text-center text-sm font-poppins text-gray-500">
              Don't have an account?
            </p>
            <button className="w-full bg-black text-white font-poppins font-bold text-lg py-3.5 rounded-full hover:bg-gray-900 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}