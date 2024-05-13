import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import Listings from '../components/Listings'
import ViewAllListings from '../components/ViewAllListings'

const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeCards />
            <Listings isHome = {true} />
            <ViewAllListings />
        </>
    )         
}

export default HomePage;