import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker, FaClock, FaGamepad } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'

const ListingPage = ({deleteListing}) => {
  const navigate = useNavigate()
    const {id} = useParams()
    const listing = useLoaderData()

    const onDeleteClick = (listingId) => {
      const confirm = window.confirm('Are you sure you want to delete this listing?')

      if (!confirm) return;

      deleteListing(listingId);

      toast.success('Listing Deleted Successfully')

      navigate('/listings')
    }

    return (
        <>
           <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/listings"
          className="text-slate-500 hover:text-slate-600 flex items-center">
          <FaArrowLeft className='mr-2' /> Back to Listings
        </Link>
      </div>
    </section>

    <section className="bg-slate-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              <div className="text-gray-500 mb-4">{listing.type}</div>
              <h1 className="text-3xl font-bold mb-4">
                {listing.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                <FaClock className='mr-1 text-black mt-1' />
                <p className="text-black">{listing.time}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-slate-800 text-lg font-bold mb-6">
                Description
              </h3>

              <p className="mb-4">
               {listing.description}
              </p>

              <h3 className="text-slate-800 text-lg font-bold mb-2">Game</h3>

              <div className='flex flex-col lg:flex-row mb-1'>
                  <FaGamepad className='inline text-lg mb-1 mr-2 mt-1' />
                  <h3 className='text-slate-800 mb-2'>{listing.game}</h3>
                </div>
            </div>
          </main>

          
          <aside>
           
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Player Info</h3>

              <h2 className="text-2xl">{listing.playerName}</h2>

              <hr className="my-4" />

              <h3 className="text-xl">Email:</h3>

              <p className="my-2 bg-slate-100 p-2 font-bold">
                {listing.email}
              </p>

              <h3 className="text-xl">Discord:</h3>

              <p className="my-2 bg-slate-100 p-2 font-bold">{listing.discord}</p>
            </div>

           
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Listing</h3>
              <Link
                to={`/edit-listing/${listing._id}`} //Maybe change this
                className="bg-slate-500 hover:bg-slate-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Listing</Link>
              <button onClick={ () => onDeleteClick(listing._id) }className="bg-slate-900 hover:bg-black text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                Delete Listing
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
        </>
    )
}

const listingLoader = async ({params}) => {
  const res = await fetch(`https://fantasyfind-server.up.railway.app/listings/${params.id}`)
  const data = await res.json()
  console.log('working bro')
  return data
}

export {ListingPage as default, listingLoader}
