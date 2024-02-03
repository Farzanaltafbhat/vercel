import React from 'react'
import './Home.css'
import '../assets/images/location.png';
import healthcare from '../assets/images/healthcare.png'
import location from '../assets/images/location.png'
import Banner from './Carousel/Banner';
import Card from './Cards/Cards';
import dental from '../assets/images/dental.png';
import preg from '../assets/images/preg.png';
import child from '../assets/images/child.png';
import nutrition from '../assets/images/nutrition.png';
import physio from '../assets/images/physio.png';
import physician from '../assets/images/physician.png';
import ortho from '../assets/images/ortho.png';
import Slider from '../pages/Carousel/cardscarousel';
import ReviewCarousel  from '../Components/Review';
import CardsContainer from '../Components/Simplecards';
import Downloadapp from '../Components/Downloadapp';
const Home = () => {
  const cards = [
    {
      image: dental,
      heading: 'Dentist',
      description: 'Teething troubles? Schedule a dental checkup',
    },
    {
      image: preg,
      heading: 'Gynecologist',
      description: 'For womens pregnancy and infertility treatments',
    },
    {
      image: child,
      heading: 'Pediatrician',
      description: 'Child specialists and doctors for infant',
    },
    {
      image: nutrition,
      heading: 'Dietition/Nutrition',
      description: 'Get guidance on eating right and get your diet plans',
    },
    {
      image: physio,
      heading: 'Physiotherapist',
      description: 'Pulled a muscle? Get a Physiotherapist.',
    },
    {
      image: physician,
      heading: 'General Physician',
      description: 'Find the right family doctor in your neighbourhood',
    },
    {
      image: ortho,
      heading: 'Orthopedist',
      description: 'For bones and joint issues get Orthopedist',
    },
  ];
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
    <div className="heading-container">
      <h1 className="heading-line">Consult top doctors online for any health concern</h1>
      <p className="description">Private online consultations with verified doctors in all specialists</p>
      <button className="specialities-button">Our Specialities</button>
    </div>
    < CardsContainer/>
    <div>
      <h1 className='bookapp'>Book an appointment for an in-clinic consultation </h1>
      <h3 className='booktext'>Find experienced doctors across all specialities</h3>
    </div>
    <div>
     <Slider />
    </div>
    <div>
      <Downloadapp />
    </div>
    <div>
    <ReviewCarousel />
    </div>
    </>
  )
}

export default Home