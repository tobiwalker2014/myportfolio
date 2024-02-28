import React from 'react';
import giticon from './giticon.png';

const GitHub = () => {
  const destinationUrl = 'https://github.com/tobiwalker2014'; // Define the destination URL

  const handleClick = () => {
    window.open(destinationUrl, '_blank'); // Open the URL in a new tab
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4" style={{ fontSize: '100%' }}>
          My GitHub Repo
        </h2>
        <p>
          Click on the icon below to go to my GitHub repo that contains the code for the projects above and the code for other projects:
        </p>
        <div>
          {/* Wrap only the img tag inside an anchor tag */}
          <a href={destinationUrl} target="_blank" rel="noopener noreferrer">
            <img 
              src={giticon} 
              alt="External Link Icon"   
              style={{ 
                display: 'block', 
                margin: '0 auto', 
                maxWidth: '20%', 
                maxHeight: '20%' 
              }}  
              onClick={(e) => e.stopPropagation()} 
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHub;
