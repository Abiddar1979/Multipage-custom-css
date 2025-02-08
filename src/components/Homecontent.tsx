import React from 'react';

const HomeContent = () => {
  return (
    <div>
      <section className='hero' style={{ backgroundImage: "url('/traxxas monster.jpg')" }}>
        <div>
          <h1 className="fade-in">Welcome to RC Cars World</h1>
          <p>Your one-stop shop for the world's best RC Cars</p>
          <button>Shop Now</button>
        </div>
      </section>
    </div>
  );
}

export default HomeContent;
