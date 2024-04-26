import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-react.svg'
import { FaBookReader} from 'react-icons/fa';

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
                {/* <img
                  className='h-10 w-auto'
                  src={logo}
                  alt='React Jobs'
                /> */}
                <FaBookReader className='h-10 w-auto text-white' />
                <span className='hidden md:block text-white text-2xl font-bold ml-2'
                  >EmployAct</span>
              </NavLink>
              <div className='md:ml-auto'>
                <div className='flex space-x-2'>
                  <NavLink
                    to='/'
                    className={ linkClass }
                    >Home</NavLink>
                  <NavLink
                    to='/jobs'
                    className={ linkClass }
                    >Jobs</NavLink>
                  <NavLink
                    to='/add-job'
                    className={ linkClass }
                    >Add Job</NavLink>

                    <NavLink
                      to='/add-job2'
                      className={ linkClass }>
                        Add Job 2
                      </NavLink>
                      <NavLink
                      to='/jobs2'
                      className={ linkClass }>
                        Jobs2
                      </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
};

export default Navbar;