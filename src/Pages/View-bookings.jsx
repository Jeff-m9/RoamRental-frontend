import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { Header } from "../components/Header";

const validationSchema = z.object({
  email_address: z.string().email({ message: "Invalid email address" }),
});

export function ViewBookings() {
  const [bookings, setBookings] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email_address: "",
    },
  });

  const email = watch("email_address");

  const fetchBookings = () => {
    fetch(
      `https://roamrental-backend.onrender.com/bookings/by-email?email=${encodeURIComponent(
        email
      )}`
    )
      .then((res) => res.json())
      .then((data) => setBookings(data));
  };

  const handleDelete = (id) => {
    fetch(`https://roamrental-backend.onrender.com/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        fetchBookings();
      });
  };

  return (
    <>
      <Header />
      <div className="w-full text-center mt-30">
        <form
          onSubmit={handleSubmit(fetchBookings)}
          className="flex flex-col items-center space-y-4 mt-6"
        >
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email_address")}
            className="px-10 py-3 bg-gray-300 rounded-full shadow-sm text-2xl h-20 w-1/2"
          />
          {errors?.email_address?.message ? (
            <p className="text-xs text-red-500">
              {errors.email_address.message}
            </p>
          ) : null}

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            View My Bookings
          </button>
        </form>

        <div className="mt-6 px-4">
          {bookings.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            bookings.map((booking) => (
              <div
                key={booking.id}
                className="flex flex-col justify-between h-72 mx-20 mt-10 text-2xl text-gray-700 p-4 rounded shadow-xl"
              >
                <p>
                  <strong>Car:</strong> {booking.car_name}
                </p>
                <p>
                  <strong>Days:</strong> {booking.num_of_days}
                </p>
                <p>
                  <strong>Total Price:</strong> KES {booking.total_price}
                </p>
                <button
                  onClick={() => handleDelete(booking.id)}
                  className="bg-red-600 text-white px-4 py-2 mx-175 rounded "
                >
                  Cancel Booking
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
