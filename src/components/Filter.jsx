export function Filter() {
  return (
    <div className="flex justify-center mt-6">
      <select
        name="Categories"
        className="bg-blue-500 text-white font-medium rounded-lg px-4 w-40 h-12 shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <option value="">Category</option>
        <option value="SUV">SUV</option>
        <option value="sedan">Sedan</option>
      </select>
    </div>
  );
}
