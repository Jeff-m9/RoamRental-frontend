export function Header() {
  return (
    <header className="bg-blue-900 ">
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-5xl font-bold text-gray-300">RoamRental</h1>
        <div className="flex space-x-6">
          <button className="text-gray-100 hover:text-blue-500">Home</button>
          <button className="text-gray-100 hover:text-blue-500">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
