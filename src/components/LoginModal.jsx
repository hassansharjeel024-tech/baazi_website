import { useState } from "react";
import { X, User, Eye, EyeOff, Loader2 } from "lucide-react";
import { login } from "../services/authService";

export default function LoginModal({ isOpen, onClose, onSuccess }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  function resetForm() {
    setEmail("");
    setPassword("");
    setShowPassword(false);
    setError("");
    setIsSubmitting(false);
  }

  function handleClose() {
    if (isSubmitting) return;
    resetForm();
    onClose();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await login({ email: trimmedEmail, password, remember });
      resetForm();
      onSuccess?.();
      onClose();
    } catch (err) {
      setError(err?.message || "Login failed. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/95 backdrop-blur-md rounded-3xl border border-white/10 relative flex flex-col justify-between"
        style={{
          width: "660px",
          height: "auto",
          minHeight: "420px",
          maxWidth: "100%",
          padding: "40px",
        }}
      >
        <button
          type="button"
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition disabled:opacity-50"
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
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="abc@gmail.com"
                  disabled={isSubmitting}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-60"
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
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  disabled={isSubmitting}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-60"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isSubmitting}
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

            <label className="flex items-center gap-2 text-sm font-poppins text-gray-600 select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                disabled={isSubmitting}
                className="rounded border-gray-300"
              />
              Remember
            </label>

            {error && (
              <p className="text-red-500 text-sm font-poppins -mt-2">{error}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#D9E021] text-[#1F2544] font-poppins font-bold text-lg py-3.5 rounded-full hover:brightness-95 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Signing in...
              </>
            ) : (
              "Log In"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
