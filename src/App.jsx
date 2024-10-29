import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; // Menu icon
import { AiOutlineClose } from 'react-icons/ai'; // Close icon

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between px-20 py-2 w-full items-center bg-slate-100">
        <h1 className="sm:text-3xl font-bold">
          City <span className="text-pink-500">Cosmetics</span>
        </h1>

        {/* Menu Icon for Mobile */}
        <div className="sm:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={30} className="cursor-pointer" />
          ) : (
            <FiMenu size={30} className="cursor-pointer" />
          )}
        </div>

        {/* Navigation Links */}
        <ul
          className={`fixed sm:static top-0 left-0 w-[250px] h-full sm:w-auto sm:h-auto bg-white shadow-lg sm:shadow-none flex flex-col sm:flex-row items-start sm:items-center gap-5 text-xl sm:text-2xl px-5 py-10 sm:p-0 transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } sm:translate-x-0`}
        >
          <li className="hover:text-pink-500 cursor-pointer">Home</li>
          <li className="hover:text-pink-500 cursor-pointer">Products</li>
          <li className="hover:text-pink-500 cursor-pointer">Cart</li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="mt-10 px-20 py-2">
        <h1 className="text-3xl font-bold">
          Welcome To City <span className="text-pink-500">Cosmetics</span>
        </h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia
          provident distinctio, facere quidem hic, aperiam nesciunt dolore temporibus,
          perspiciatis tempora molestias ad laudantium. Ipsa architecto aut error vitae
          officia?
        </p>
      </div>

      <img
        className="w-[300px] h-[300px]"
        src="https://img.freepik.com/free-photo/portrait-pretty-happy-girl-talking-mobile-phone_171337-2610.jpg"
        alt="Hero"
      />

      

      <div className="px-20 py-2 w-full bg-pink-500 text-white text-center sm:text-3xl font-bold mt-5">
        <h1>All Rights Reserved. Abdullah.</h1>
      </div>
    </div>
  );
}

export default App;
