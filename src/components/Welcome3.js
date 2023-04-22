
import React from 'react';

const Welcome = () => {
  const images = [
    { id: 1, src: 'doramoscreen.png', alt: 'Doramo' },
    { id: 2, src: 'fsscreen2.png', alt: 'Image 2' },
    { id: 3, src: 'catalox2.png', alt: 'Image 3' },
    { id: 4, src: 'peacioscree.png', alt: 'Image 4' },
  ];

  const handleClick = (id) => {
    // handle image click
    // navigate to component based on image id
  };

  const getImageStyle = () => {
    const imageWidth = window.innerWidth < 600 ? window.innerWidth : 600;
    const imageHeight = imageWidth * 0.75;
    return {
      width: `${imageWidth}px`,
      height: `${imageHeight}px`,
    };
  };

  return (
    <div className="image-navigation">
      <div className="row">
        {images.slice(0, 4).map((image) => (
          <div className="col-3" key={image.id}>
            <button onClick={() => handleClick(image.id)}>
              <img
                src={image.src}
                alt={image.alt}
                style={getImageStyle()}
              />
            </button>
          </div>
        ))}
      </div>
      <div className="row">
        {images.slice(4).map((image) => (
          <div className="col-6" key={image.id}>
            <button onClick={() => handleClick(image.id)}>
              <img
                src={image.src}
                alt={image.alt}
                style={getImageStyle()}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;

