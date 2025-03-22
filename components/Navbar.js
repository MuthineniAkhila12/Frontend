import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Frontend Assignment</h1>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/login" className="bg-white text-blue-600 px-3 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
