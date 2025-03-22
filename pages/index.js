import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  const { users } = useContext(UserContext);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-gray-100 min-h-screen"}>
      <Navbar />
      
      {/* Dark Mode Toggle */}
      <div className="flex justify-end p-4">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 transition"
        >
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </div>

      <div className="container mx-auto mt-6 p-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">User List</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map(user => (
            <motion.div 
              key={user.id} 
              whileHover={{ scale: 1.05 }}
              className="p-5 bg-white dark:bg-gray-800 dark:text-gray-200 shadow-md rounded-lg transition"
            >
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
              <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
                View Profile
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
