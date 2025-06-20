import { Link } from "react-router-dom";

export function CarList({ cars }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 p-20">
      {cars.map((car) => (
        <div
          key={car.id}
          className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300"
        >
          <Link to={`/cars/${car.id}`}>
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">{car.category}</p>
              <h1 className="text-lg font-semibold">{car.name}</h1>
              <p className="text-blue-600 font-bold">
                KES {car.price_per_day} / day
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
