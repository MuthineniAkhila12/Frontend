import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.includes("@") || password.length < 6) {
      setError("Invalid email or password (min 6 chars)");
      setSuccess(false);
      return;
    }
    
    setError("");
    setSuccess(true);
    alert("Login Successful! ");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300">
        <h2 className="text-center text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
          Login
        </h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center mb-4">Login Successful!</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <label htmlFor="remember" className="ml-2 text-sm">Remember Me</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`btn w-full transform transition-all duration-300 ${
              email && password.length >= 6 ? "hover:scale-105 bg-blue-600" : "opacity-50 cursor-not-allowed bg-gray-400"
            }`}
            disabled={!email || password.length < 6}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
