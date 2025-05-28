export function Header() {
  return (
    <header className="bg-blue-900 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex">
          <img className="h-10 w-10 m-2" src="./image.png" alt="app icon" />
          <h1 className="text-5xl font-bold text-gray-300">RoamRental</h1>
        </div>
        <div className="flex space-x-6">
          <button className="text-gray-100 hover:text-blue-500 text-2xl">
            Home
          </button>
          <button className="text-gray-100 hover:text-blue-500 text-2xl">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
