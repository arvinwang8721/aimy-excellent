import { aimyImg } from '../utils';
import { navLists } from '../constants';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleContactButtonClick = () => {
    // Navigate to the contact us page when the button is clicked
    navigate('/contact');
  };


  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center border-b border-gray-300">
      <nav className="flex w-full screen-max-width">
        <Link to="/" className="flex items-center">
          <img src={aimyImg} alt="Apple" width={200} />
        </Link>

        <div className="flex flex-1 justify-center max-sm:hidden">
          <a href="https://store.aimycomfort.com" className="px-5 py-1 text-sm cursor-pointer text-gray-500 hover:text-black transition-all">
            Store
          </a>
          {navLists.map((nav, index) => (
            <Link key={index} to={`/${nav.toLowerCase().replace(/\s+/g, '-')}`} className="px-5 py-1 text-sm cursor-pointer text-gray-500 hover:text-black transition-all">
              {nav} 
            </Link>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <button onClick={handleContactButtonClick} className="text-sm px-4 py-1 bg-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
          >
            Contact Us
          </button>

        </div>
      </nav>
    </header>
  )
}

export default Navbar