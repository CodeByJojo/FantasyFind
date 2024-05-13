import { NavLink } from 'react-router-dom';
import { FaBookReader} from 'react-icons/fa';
import { FaDragon } from 'react-icons/fa';

const Navbar = () => {
  const linkClass = ({ isActive }) => isActive ? 'text-white bg-slate-800 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

    return (
        <nav className='bg-slate-600 border-b border-slate-600'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='flex h-20 items-center justify-between'>
            <div
              className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'
            >
              {/* <!-- Logo --> */}
              <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
                <FaDragon className='h-10 w-auto text-white' />
                  
                <span className='hidden md:block text-white text-2xl font-bold ml-2'
                  >Fantasy Find</span>
              </NavLink>
              <div className='md:ml-auto'>
                <div className='flex space-x-2'>
                  <NavLink
                    to='/'
                    className={ linkClass }
                    >Home</NavLink>
                  <NavLink
                    to='/listings'
                    className={ linkClass }
                    >Listings</NavLink>
                  <NavLink
                    to='/add-listing'
                    className={ linkClass }
                    >Add Listing</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
};

export default Navbar;