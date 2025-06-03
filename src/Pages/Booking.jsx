import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";

const validationSchema = z.object({
  email_address: z.string().nonempty({ message: "User email is required" }),
  car_name: z.string().nonempty({ message: "Car name is required" }),
  num_of_days: z.coerce.number().min(1, { message: "Days must be at least 1" }),
});

export function BookingsPage() {
  const [pricePerDay, setPricePerDay] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email_address: "",
      car_name: "",
      num_of_days: 1,
    },
  });

  const carName = watch("car_name");

  useEffect(() => {
    if (carName.trim()) {
      fetch(
        `https://roamrental-backend.onrender.com/cars/by-name/${encodeURIComponent(
          carName
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.price_per_day) {
            setPricePerDay(data.price_per_day);
          } else {
            setPricePerDay(0);
          }
        });
    }
  }, [carName]);

  const onSubmit = (values) => {
    fetch("https://roamrental-backend.onrender.com/bookings", {
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
              placeholder="Enter email address"
              {...register("email_address")}
              className="px-10 py-3 bg-gray-300 rounded-full shadow-sm mt-5 text-2xl h-20 w-1/2 mx-auto "
            />
            {errors.email_address && (
              <p className="text-red-500">{errors.email_address.message}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter car name"
              {...register("car_name")}
              className="px-10 py-3 bg-gray-300 rounded-full shadow-sm mt-5 text-2xl h-20 w-1/2 mx-auto "
            />
            {errors.car_name && (
              <p className="text-red-500">{errors.car_name.message}</p>
            )}
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter number of days"
              {...register("num_of_days")}
              className="px-10 py-3 bg-gray-300 rounded-full shadow-sm mt-5 text-2xl h-20 w-1/2 mx-auto "
            />
            {errors.num_of_days && (
              <p className="text-red-500">{errors.num_of_days.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="mt-10 px-10 py-4 bg-blue-600 text-white rounded-full shadow-lg text-2xl"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
