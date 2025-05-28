import { useState } from "react";

export function SearchBar({cars, setFilteredCars}) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    const filteredData = cars.filter((car) =>
      car.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredCars(filteredData);
  };

  return (
    <div className="w-full text-center">
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={input}
        className="px-10 py-3 bg-gray-300 rounded-full shadow-sm mt-5 text-2xl h-20 w-1/2 mx-auto "
      />
    </div>
  );
}
