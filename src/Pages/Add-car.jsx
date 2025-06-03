import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import {Header} from "../components/Header"

const validationSchema = z.object({
  name: z.string().nonempty({ message: "Car name is required" }),
  category: z.string().nonempty({ message: "Car category is required" }),
  seats: z.coerce.number().min(2, { message: "Number of seats is required" }),
  luggage: z.coerce
    .number()
    .min(1, { message: "luggage capacity is required" }),
  doors: z.coerce.number().min(2, { message: "number of doors is required" }),
  price_per_day: z.coerce.number().min(1, { message: "price per day is required" }),
  image: z.string().url({ message: "Image url is required" }),
  availability_status: z
    .string()
    .nonempty({ message: "Availability status is required" }),
});

export function AddCar() {
  const [cars, setCars] = useState([]);

  const status = [...new Set(cars.map((car) => car.availability_status))];

  useEffect(() => {
    fetch("https://roamrental-backend.onrender.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      name: "",
      category: "",
      seats: 0,
      luggage: 0,
      doors: 0,
      price_per_day: 0,
      image: "",
      availability_status: "",
    },
  });

  const onSubmit = (values) => {
    fetch("https://roamrental-backend.onrender.com/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
        toast.success(data.message);
      });
  };
    
  return (
    <>
      <Header />
      <div className="w-full text-center mt-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Enter name"
              {...register("name")}
              className="px-10 py-3 bg-gray-300 rounded-full shadow-sm mt-5 text-2xl h-20 w-1/2 mx-auto "
            />
            {errors?.name?.message ? (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter category"
              {...register("category")}
              className="px-10 py-3 bg-gray-300 rounded-full shadow-sm mt-5 text-2xl h-20 w-1/2 mx-auto "
            />
            {errors?.category?.message ? (
              <p className="text-xs text-red-500">{errors.category.message}</p>
            ) : null}
          </div>

          <div>
            <input
              type="number"
              placeholder="Enter seats"
              {...register("seats")}
              className="px-10 py-3 bg-gray-300 rounded-full shadow-sm mt-5 text-2xl h-20 w-1/2 mx-auto "
            />
            {errors?.seats?.message ? (
              <p className="text-xs text-red-500">{errors.seats.message}</p>
            ) : null}
          </div>

          <div>
            <input
              type="number"
              placeholder="Enter luggage"
              {...register("luggage")}
              className="px-10 py-3 bg-gray-300 rounded-full shadow-sm mt-5 text-2xl h-20 w-1/2 mx-auto "
            />
            {errors?.luggage?.message ? (
              <p className="text-xs text-red-500">{errors.luggage.message}</p>
            ) : null}
          </div>

          <div>
            <input
              type="number"
              placeholder="Enter doors"
              {...register("doors")}
              className="px-10 py-3 bg-gray-300 rounded-full shadow-sm mt-5 text-2xl h-20 w-1/2 mx-auto "
            />
            {errors?.doors?.message ? (
              <p className="text-xs text-red-500">{errors.doors.message}</p>
            ) : null}
          </div>

          <div>
            <input
              type="number"
              placeholder="Enter price"
              {...register("price_per_day")}
              className="px-10 py-3 bg-gray-300 rounded-full shadow-sm mt-5 text-2xl h-20 w-1/2 mx-auto "
            />
            {errors?.price_per_day?.message ? (
              <p className="text-xs text-red-500">
                {errors.price_per_day.message}
              </p>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter image url"
              {...register("image")}
              className="px-10 py-3 bg-gray-300 rounded-full shadow-sm mt-5 text-2xl h-20 w-1/2 mx-auto "
            />
            {errors?.image?.message ? (
              <p className="text-xs text-red-500">{errors.image.message}</p>
            ) : null}
          </div>

          <div>
            <select
              {...register("availability_status")}
              className="px-10 py-3 bg-gray-300 rounded-full shadow-sm mt-5 text-2xl h-20 w-1/2 mx-auto "
            >
              <option value="">Select status</option>
              {status.map((availability_status) => (
                <option key={availability_status} value={availability_status}>
                  {availability_status}
                </option>
              ))}
            </select>

            {errors?.availability_status?.message ? (
              <p className="text-xs text-red-500">
                {errors.availability_status.message}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-gray-300 font-medium rounded-lg px-4 w-40 h-12 shadow-md hover:bg-blue-700 mt-10 text-2xl"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
