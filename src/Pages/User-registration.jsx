import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { Header } from "../components/Header";

const validationSchema = z.object({
  first_name: z.string().nonempty({ message: "Name is required" }),
  last_name: z.string().nonempty({ message: "Name is required" }),
  phone: z.string().nonempty().min(10, { message: "Invalid phone number" }),
  email_address: z.string().email({ message: "Invalid email address" }),
});

export function UserRegistration() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email_address: "",
    },
  });

  const onSubmit = (values) => {
    fetch("http://localhost:8000/users", {
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
              placeholder="Enter first name"
              {...register("first_name")}
              className="px-10 py-3 bg-gray-300 rounded-full shadow-sm mt-5 text-2xl h-20 w-1/2 mx-auto "
            />
            {errors?.first_name?.message ? (
              <p className="text-xs text-red-500">{errors.last_name.message}</p>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter last name"
              {...register("last_name")}
              className="px-10 py-3 bg-gray-300 rounded-full shadow-sm mt-5 text-2xl h-20 w-1/2 mx-auto "
            />
            {errors?.last_name?.message ? (
              <p className="text-xs text-red-500">{errors.last_name.message}</p>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter phone number"
              {...register("phone")}
              className="px-10 py-3 bg-gray-300 rounded-full shadow-sm mt-5 text-2xl h-20 w-1/2 mx-auto "
            />
            {errors?.phone?.message ? (
              <p className="text-xs text-red-500">{errors.phone.message}</p>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter email address"
              {...register("email_address")}
              className="px-10 py-3 bg-gray-300 rounded-full shadow-sm mt-5 text-2xl h-20 w-1/2 mx-auto "
            />
            {errors?.email_address?.message ? (
              <p className="text-xs text-red-500">
                {errors.email_address.message}
              </p>
            ) : null}
          </div>
          <button
            type="submit"
            className="bg-gray-300 font-medium rounded-lg px-4 w-40 h-12 shadow-md hover:bg-blue-700 mt-10 text-2xl"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}
