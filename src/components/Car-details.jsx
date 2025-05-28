export function CarDetails({ cars }) {
  return (
    <div>
      {cars.map((car) => (
        <div>
          <div key={car.id}>
            <h1>{car.name}</h1>
            <img height={300} width={200} src={car.image} alt={car.name} />
          </div>
          <div>
            <p>{car.seats}</p>
            <p>{car.category}</p>
                  <p>KES {car.price_per_day} / day</p>
                  <p>{car.availability_status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
