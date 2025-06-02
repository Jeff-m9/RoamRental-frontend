import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { CarDetails } from "../components/Car-details";

export function CarDetailsPage() {
  const params = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`https://roamrental-backend.onrender.com/cars/${params.carId}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
      });
  }, [params.carId]);

  return (
    <div>
      <Header />
      CarDetailsPage{params.carId}
      <CarDetails {...car} />
    </div>
  );
}
