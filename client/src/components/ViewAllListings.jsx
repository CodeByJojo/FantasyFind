import { Link } from 'react-router-dom';

const ViewAllListings = () => {
    return (
      <section className='m-auto max-w-lg my-10 px-6'>
      <Link
        to='/listings'
        className='block bg-slate-800 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
        >View All Listings</Link>
    </section>
    )
}

export default ViewAllListings;


