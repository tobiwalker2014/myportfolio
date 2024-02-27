import React from 'react';

const ExternalLinkIcon = ({ url, iconUrl, alt }) => {
  // Function to handle click event
  const handleClick = () => {
    // Opens the provided URL in a new tab when the icon is clicked
    window.open(url, '_blank');
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {/* Renders the icon image */}
      <img src={iconUrl} alt={alt} />
    </div>
  );
};

export default GitHub;
