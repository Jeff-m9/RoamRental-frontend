export function CarDetails({
  id,
  name,
  luggage,
  image,
  seats,
  category,
  price_per_day,
  availability_status,
})

{
  return (
      <div className="p-6 flex justify-between items-center">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition-shadow">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
          <div className="p-4 space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-600">
              <strong>Seats:</strong> {seats}
            </p>
            <p className="text-gray-600">
              <strong>Luggage :</strong> {luggage}
            </p>
            <p className="text-gray-600">
              <strong>Category:</strong> {category}
            </p>
            <p className="text-gray-800 font-medium">
              <strong>Price:</strong> KES {price_per_day} / day
            </p>
            <p className="font-semibold">{availability_status}</p>
          </div>
        </div>
      </div>
  );
}
