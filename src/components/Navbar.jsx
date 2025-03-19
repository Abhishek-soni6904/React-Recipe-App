import { NavLink, useNavigate } from 'react-router-dom'
import { CookingPot, Home, Heart } from 'lucide-react'
import { useRef } from 'react';

export default function Navbar({ searchValue, setSearchValue }) {
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
    setSearchValue(inputRef.current.value);
    inputRef.current.value = ''
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      {/* Top row with logo and navigation links */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center flex-shrink-0">
          <NavLink to={"/"} className="flex items-center gap-1 text-lg sm:text-xl font-bold text-teal-600 hover:text-teal-800 transition-colors">
            Recipes <CookingPot size={18} />
          </NavLink>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-medium text-sm sm:text-base ${isActive ? 'bg-teal-100 text-teal-800' : 'text-gray-700 hover:bg-gray-100'}`
            }
          >
            <Home size={16} /> Home
          </NavLink>

          <NavLink
            to={"/favorites"}
            className={({ isActive }) =>
              `flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-medium text-sm sm:text-base ${isActive ? 'bg-teal-100 text-teal-800' : 'text-gray-700 hover:bg-gray-100'}`
            }
          >
            <Heart size={16} /> Favorites
          </NavLink>
        </div>
      </div>

      {/* Search Input with button */}
      <div className="w-full">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            ref={inputRef}
            placeholder="Search Recipes....."
            className="px-4 py-2 w-full border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-800 transition-colors"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  )
}