import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h2>About Us</h2>
        <p className="mt-4 text-gray-700">
          This is a simple frontend assignment project built with Next.js, Tailwind CSS, and React Context API.
        </p>
      </div>
    </div>
  );
}
