import {useState} from 'react';
import { FaClock, FaGamepad } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Listing = ({listing}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = listing.description;

  if(!showFullDescription) {
    description = description.substring(0, 45) + '...';1
  }

    return (
        <div className='bg-white rounded-xl shadow-md relative'>
              <div className='p-4'>
                <div className='mb-6'>
                  <div className='text-gray-600 my-2'>{ listing.type }</div>
                  <h3 className='text-xl font-bold'>{listing.title}</h3>
                </div>

                <div className='mb-5'>{description}</div>

                <button onClick={() => setShowFullDescription((prevState) => !prevState)} className='text-slate-500 mb-5 hover:text-slate-600'>{showFullDescription ? 'Less' : 'More'}</button>

                <div className='flex flex-col lg:flex-row mb-1'>
                  <FaGamepad className='inline text-lg mb-1 mr-2 mt-1' />
                  <h3 className='text-slate-800 mb-2'>{listing.game}</h3>
                </div>
                

                <div className='border border-gray-100 mb-5'></div>

                <div className='flex flex-col lg:flex-row justify-between mb-4'>
                  <div className='text-black mb-3'>
                    <FaClock className='inline text-lg mb-1 mr-2 mt-1' />
                    {listing.time}
                  </div>
                  <Link
                    to={`/listings/${listing._id}`}
                    className='h-[36px] bg-slate-500 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-center text-sm'
                  >
                  Read More
                  </Link>
                </div>
              </div>
            </div>
    )
}

export default Listing;