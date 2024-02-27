import React from 'react';

const ExternalLinkIcon = ({ iconUrl, destinationUrl }) => {
  const handleClick = () => {
    window.open(destinationUrl, '_blank');
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={iconUrl} alt="External Link Icon" />
    </div>
  );
};

export default GitHub;
