// CardsContainer.js
import React from 'react';
import './Simplecards.css'; // Import your CSS file

const cardsData = [
  {
    image: 'https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=1024x1024&w=is&k=20&c=QXe9WAVnBb8f2LhA-2Lr38Mi6BwOoTe4Thj358IHIa0=',
    heading: 'Cold, Cough or Fever',
    description: 'CONSULT NOW.',
  },
  {
    image: 'https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=1024x1024&w=is&k=20&c=QXe9WAVnBb8f2LhA-2Lr38Mi6BwOoTe4Thj358IHIa0=',
    heading: 'Child not feeling well',
    description: 'CONSULT NOW.',
  },
  {
    image: 'https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=1024x1024&w=is&k=20&c=QXe9WAVnBb8f2LhA-2Lr38Mi6BwOoTe4Thj358IHIa0=',
    heading: 'Diabetes (Mellitus & Insipidus)',
    description: 'CONSULT NOW.',
  },
  {
    image: 'https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=1024x1024&w=is&k=20&c=QXe9WAVnBb8f2LhA-2Lr38Mi6BwOoTe4Thj358IHIa0=',
    heading: 'Depression & Anxiety',
    description: 'CONSULT NOW.',
  },
  {
    image: 'https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=1024x1024&w=is&k=20&c=QXe9WAVnBb8f2LhA-2Lr38Mi6BwOoTe4Thj358IHIa0=',
    heading: 'Acne, Pimples or Skin issues',
    description: 'CONSULT NOW.',
  },
];

const CardsContainer = () => {
  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={`Card ${index + 1}`} className="card-image" />
          <h2 className="card-heading">{card.heading}</h2>
          <p className="card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
