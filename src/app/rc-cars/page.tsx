import Image from 'next/image';
import React from 'react';

const RC = () => {
  const rcData = [
    { id: 1, name: "traxx Maxx", price: 150000, description: "Fast rc sporty", image: '/trexxas truck.jpeg' },
    { id: 2, name: "traxx slash", price: 80000, description: "Fast rc buggy", image: '/trexxas turbo.jpeg' },
    { id: 3, name: "traxx x-max", price: 50000, description: "Fast rc monster", image: '/traxxas max.jpeg' },
  ];
  console.log(rcData);
  return (
    <div className="rc">
      {rcData.map((car) => (
        <div key={car.id} className="car-card">
          <img src={car.image} alt={car.name} />
          <h3>{car.name}</h3>
          <p>{car.description}</p>
          <div className="price">${car.price}</div>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default RC;
