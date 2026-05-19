function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Smart Leads Dashboard
      </h1>

      <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold">
        Login
      </button>
    </nav>
  );
}

export default Navbar;