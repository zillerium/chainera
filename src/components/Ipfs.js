import React, { useState } from 'react';
import './styles.css';

const boxData = [
  { id: 1, heading: 'IPFS', text: 'Images, Text, PDFs.' },
  { id: 2, heading: 'Infura', text: 'For permanent solutions.' },
  { id: 3, heading: 'CID', text: 'Stored on chain.' },
  { id: 4, heading: 'Url', text: 'Integrations via https.' },
  { id: 5, heading: 'Metadata', text: 'Data stored also in a database.' },
  { id: 6, heading: 'API', text: 'Accessed via API calls.' },
];

const Box = ({ id, heading, text, isMobile, isActive, handleClick }) => {
  const classNames = `box col mb-3 ${isActive ? 'active' : ''}`;
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  const backgroundColor = hovered ? '#ADD8E6' : '#0077CC';
  const color = hovered ? '#000000' : '#FFFFFF';

  return (
    <div className={classNames} onClick={() => handleClick(id)} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ backgroundColor }}>
      <h2 style={{ color }}>{heading}</h2>
      <p style={{ color }}>{text}</p>
    </div>
  );
};

const BoxesRow = ({ boxes, isMobile, activeBoxId, handleClick }) => (
	<div className={`row${isMobile ? ' row-cols-1' : ' row-cols-3'} gx-3 my-1`} >

    {boxes.map((box) => (
      <div className="col-md-4">
        <Box
          key={box.id}
          id={box.id}
          heading={box.heading}
          text={box.text}
          isMobile={isMobile}
          isActive={box.id === activeBoxId}
          handleClick={handleClick}
        />
      </div>
    ))}
  </div>
);

const Ipfs= () => {
  const [activeBoxId, setActiveBoxId] = useState(null);
  const isMobile = window.innerWidth < 768;
  const rows = isMobile ? [boxData] : [boxData.slice(0, 3), boxData.slice(3, 6)];

  const handleBoxClick = (id) => {
    setActiveBoxId(id);
  };

	return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
		          <h1 className="text-center">IPFS</h1>

        </div>
      </div>
      <div className="row">
		        <div className="col text-center">

          <p>We have solutions implementing storage in IPFS.</p>
        </div>
      </div>
      {rows.map((boxes, index) => (
        <BoxesRow
          key={index}
          boxes={boxes}
          isMobile={isMobile}
          activeBoxId={activeBoxId}
          handleClick={handleBoxClick}
        />
      ))}
		<div className="row mt-3">
        <div className="col text-center">
          <p>These solutions allow a IPFS data to be stored.</p>
        </div>
      </div>
    </div>
  );

};
export default Ipfs;

