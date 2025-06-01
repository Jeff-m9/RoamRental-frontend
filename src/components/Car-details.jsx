import { Link } from "react-router-dom";

export function CarDetails({
  id,
  name,
  luggage,
  image,
  seats,
  category,
  price_per_day,
  availability_status,
}) {
  return (
    <div className="p-6 flex gap-20 mt-20">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow w-270">
        <img src={image} alt={name} className="w-full h-200 object-cover" />
      </div>
      <div className="p-6 space-y-6 bg-white rounded-lg shadow-sm w-120 h-150 text-center hover:shadow-2xl">
        <h2 className="text-5xl font-bold text-gray-800 border-b pb-4">
          {name}
        </h2>

        <div className="flex flex-col justify-between h-72 text-2xl text-gray-700 p-4 rounded shadow">
          <div className="space-y-2">
            <p>
              <span className="font-semibold text-gray-900">Seats:</span>{" "}
              {seats}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Luggage:</span>{" "}
              {luggage}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Category:</span>{" "}
              {category}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Price:</span> KES{" "}
              {price_per_day} / day
            </p>
            <p
              className={`font-bold ${
                availability_status === "available"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {availability_status}
            </p>
          </div>

          <Link to={"/bookings"} className="bg-blue-600 text-white px-4 py-2 rounded">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
