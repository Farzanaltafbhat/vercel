
import './Home.css'
import '../assets/images/location.png';
import location from '../assets/images/location.png'
import Banner from './Carousel/Banner';
import Card from './Cards/Cards';
import Cards from './Cards/Cards1'
import Slider from './Carousel/cardscarousel';
import ReviewCarousel from '../Components/Review'
const Home = () => {

  return (
    <>
    <div className='input-wrapper'>
     <div style={{ margin: '0 90px' }}>
        <div className="search-bar">
          <div className="location-container">
            <img src={location} alt="Location Icon" className="location-icon" />
            <input type="text" placeholder="Location" className="location-input" />
          </div>
          <input type="text" placeholder="Search for Doctors..." className="search-input" />
        </div>
        <div className='btn'>
        <button className="book-appointment-btn">Book Appointment</button>
        </div>

      </div>
      </div>
  <div>
       <Banner /> 
    </div>
    <div>
    <Card />
    </div>
    <div className="r">
          <div className="r">
          <h1 className='bookapp'>Book an appointment for an in-clinic consultation </h1>
          </div>
          <h3 className='booktext'>Find experienced doctors across all specialities</h3>
        </div>
        <div className='btn2'>
        <button className="ourspecial">Our Specialities</button>
        </div>

    <div>
    <Cards />
    </div>
    
    <div>
      <h1 className='bookapp'>Book an appointment for an in-clinic consultation </h1>
      <h3 className='booktext'>Find experienced doctors across all specialities</h3>
    </div>
   

    <div>
     <Slider />
    </div>
    <div>
      <ReviewCarousel />
    </div>
    </>
  )
}

export default Home