import { useState, useEffect } from "react";

export function Filter({cars, setFilteredCars}) {
  const [filter, setFilter] = useState("");

  const categories = [...new Set(cars.map((car) => car.category))];

  useEffect(() => {
    const filteredCars = cars.filter(
      (car) => !filter || car.category === filter
    );
    setFilteredCars(filteredCars);
  }, [filter, cars, setFilteredCars]);

  return (
    <div className="flex justify-center mt-6">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="bg-gray-300 font-medium rounded-lg px-4 w-40 h-12 shadow-md hover:bg-blue-700 "
      >
        <option value="">Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
