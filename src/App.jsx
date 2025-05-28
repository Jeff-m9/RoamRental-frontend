import { Header } from "./components/Header";
import { SearchBar } from "./components/Search-bar";
import { Filter } from "./components/Filter";
import { CarList } from "./components/Car-list";
// import "./app.css";
import { useState, useEffect } from "react";
import { CarDetails } from "./components/Car-details";
import {CarDetails} from "../components/Car-details"

function App() {
  const [cars, setcars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  const handleFetch = () => {
    fetch("http://localhost:8000/cars")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setcars(data);
      });
  };
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <Header />
      <div className="flex pr-10 py-3 pt-10 mt-20">
        <SearchBar cars={cars} setFilteredCars={setFilteredCars} />
        <Filter cars={cars} setFilteredCars={setFilteredCars} />
      </div>
          <CarList handleFetch={handleFetch} cars={filteredCars} />
          
      {cars.map((car, index) => (
        <CarDetails key={index} {...car} />
      ))}
    </>
  );
}

export default App;
