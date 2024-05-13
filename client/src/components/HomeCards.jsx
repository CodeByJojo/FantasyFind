import { Link } from 'react-router-dom';
import Card from "./Card";

const HomeCards = () => {
    return (
        <section className='py-4'>
        <div className='container-xl lg:container m-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
            <Card>
            <h2 className='text-2xl font-bold'>For Those Looking</h2>
              <p className='mt-2 mb-4'>
                Browse our listings and start your adventure today
              </p>
              <Link
                to='/listings'
                className='inline-block bg-slate-800 text-white rounded-lg px-4 py-2 hover:bg-gray-700'
              >
                Browse Listings
              </Link>
            </Card>
            <Card bg='bg-slate-200'>
            <h2 className='text-2xl font-bold'>For Those Posting</h2>
              <p className='mt-2 mb-4'>
                Add a listing and find the perfect adventuring friend
              </p>
              <Link
                to='/add-listing'
                className='inline-block bg-slate-800 text-white rounded-lg px-4 py-2 hover:bg-slate-600'
              >
                Add Listing
              </Link>
            </Card>
          </div>
        </div>
      </section>
    )
}

export default HomeCards;