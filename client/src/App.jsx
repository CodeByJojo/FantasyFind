import {
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider}
  from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage'
import NotFoundPage from './pages/NotFoundPage';
import ListingPage, {listingLoader} from './pages/ListingPage';
import AddListingPage from './pages/AddListingPage';
import EditListingPage from './pages/EditListingPage';

//strt

const App = () => {

  // Add New Listing
  const addListing = async (newListing) => {
    const res = await fetch('http://localhost:1212/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newListing)
    })
    return;
  }

  //Delete Listing
  const deleteListing = async (id) => {
    const res = await fetch(`http://localhost:1212/listings/${id}`, {
      method: 'DELETE'
    })
    return;
  }

  //Update Listing
  const updateListing = async (listing) => {
    const res = await fetch(`http://localhost:1212/listings/${listing.id}`, { //Maybe change this
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(listing)
    })
    return; 
  }


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/listings' element={<ListingsPage />} />
    <Route path='/add-listing' element={<AddListingPage addListingSubmit={addListing} />} />
    <Route path='/edit-listing/:id' element={<EditListingPage updateListingSubmit={updateListing}/>} loader ={listingLoader} />
    <Route path='/listings/:id' element={<ListingPage deleteListing={deleteListing}/>} loader ={listingLoader} /> 
    <Route path='*' element={<NotFoundPage />} />
  </Route>
  )
);
  return (
    <RouterProvider router={router} />
  )
};

export default App;