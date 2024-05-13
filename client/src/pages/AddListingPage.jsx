import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

const AddListingPage = ({addListingSubmit}) => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('Looking-For-Group');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [game, setGame] = useState('Final Fantasy XIV');
    const [playerName, setPlayerName] = useState('');
    const [email, setEmail] = useState('');
    const [discord, setDiscord] = useState('');

    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault();
        
        const newListing = {
            title, 
            type,
            time,
            description,
            game,
            playerName,
            email,
            discord,
            
        }

        addListingSubmit(newListing)

        toast.success('Listing Added')

        return navigate('/listings')
    }

    return (
        <section className="bg-slate-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Listing</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Type</label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Looking-For-Group">Looking For Group</option>
                <option value="Looking-For-Player">Looking For Player</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Listing Name</label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Looking for tank"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Description</label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Game</label>
              <select
                id="game"
                name="game"
                className="border rounded w-full py-2 px-3"
                required
                value={game}
                onChange={(e) => setGame(e.target.value)}
              >
                <option value="Final Fantasy XIV">Final Fantasy XIV</option>
                <option value="World of Warcraft">World of Warcraft</option>
                <option value="Apex Legends">Apex Legends</option>
                <option value="Destiny">Destiny</option>
                <option value="League of Legends">League of Legends</option>
                <option value="Overwatch">Overwatch</option>
                <option value="Valorant">Valorant</option>
                <option value="Diablo IV">Diablo IV</option>
                <option value="Helldivers">Helldivers</option>
                <option value="Monster Hunter">Monster Hunter</option>
                <option value="Street Fighter">Street Fighter</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Time
              </label>
              <input
                type='text'
                id='time'
                name='time'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='What time do you play?'
                required     
                value={time}
                onChange={(e) => setTime(e.target.value)}      
              />
            </div>

            <h3 className="text-2xl mb-5">Your Info</h3>

            <div className="mb-4">
              <label htmlFor="playerName" className="block text-gray-700 font-bold mb-2"
                >Player Name</label>
              <input
                type="text"
                id="playerName"
                name="playerName"
                className="border rounded w-full py-2 px-3"
                placeholder="Your Characters Name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
              />
            </div>

            

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
                >Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded w-full py-2 px-3"
                placeholder="Your Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="discord"
                className="block text-gray-700 font-bold mb-2"
                >Discord</label>
              <input
                type="text"
                id="discord"
                name="discord"
                className="border rounded w-full py-2 px-3"
                placeholder="Your Discord Username"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit">
                Add Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    )
}


export default AddListingPage