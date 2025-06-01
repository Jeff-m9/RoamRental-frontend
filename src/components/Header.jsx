import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-blue-900 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-5xl font-bold text-gray-300">RoamRental</h1>
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-100 hover:text-blue-500 text-2xl">
            Home
          </Link>
          <Link
            to={"/user-registration"}
            className="text-gray-100 hover:text-blue-500 text-2xl"
          >
            Register
          </Link>
          <Link
            to={"/add-car"}
            className="text-gray-100 hover:text-blue-500 text-2xl"
          >
            Add Car
          </Link>
          <Link
            to={"/view-bookings"}
            className="text-gray-100 hover:text-blue-500 text-2xl"
          >
            View Bookings
          </Link>
          <Link
            to="/contact-us"
            className="text-gray-100 hover:text-blue-500 text-2xl"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
