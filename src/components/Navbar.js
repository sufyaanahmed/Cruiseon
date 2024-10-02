

function Navbar() {
  return (
    <nav className="bg-gray-900 p-5 shadow-none">
      <div className="container mx-auto flex justify-between items-center">
        {/* Company Logo/Name */}
        <div className="text-orange-500 text-xl md:text-2xl font-bold">
          Cruiseon Cars
        </div>

        {/* Navbar Links */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          <li>
            <a
              href="#home"
              className="text-orange-500 font-bold px-4 py-2 rounded-full transition-colors duration-300 hover:bg-white hover:bg-opacity-20 hover:text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-orange-500 font-bold px-4 py-2 rounded-full transition-colors duration-300 hover:bg-white hover:bg-opacity-20 hover:text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#fleet"
              className="text-orange-500 font-bold px-4 py-2 rounded-full transition-colors duration-300 hover:bg-white hover:bg-opacity-20 hover:text-white"
            >
              Fleet
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="text-orange-500 font-bold px-4 py-2 rounded-full transition-colors duration-300 hover:bg-white hover:bg-opacity-20 hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-orange-500 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
