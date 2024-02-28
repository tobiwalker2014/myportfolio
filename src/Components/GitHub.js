// import React from 'react';

// const GitHub = ({ iconUrl, destinationUrl }) => {
//   const handleClick = () => {
//     window.open(destinationUrl, '_blank');
//   };

//   return (
//     <div onClick={handleClick} style={{ cursor: 'pointer' }}>
//       <img src={iconUrl} alt="External Link Icon" />
//     </div>
//   );
// };

// export default GitHub;

// import React from 'react';

// const GitHub = ({ iconUrl, destinationUrl }) => {
//   const handleClick = () => {
//     window.open(destinationUrl, '_blank');
//   };

//   return (

//     <div 
//         onClick={handleClick} 
//         style={{
//             cursor: 'pointer',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//     >
//         <div className="flex flex-col items-center justify-center">
//           <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
//             My GitHub Repo
//           </h2>
//           <p>
//               Below is a link to my GitHub repo that contains the code for the projects abov and more:
//           </p>

//             <div>
//                     <img src={iconUrl} alt="External Link Icon" style={{ maxWidth: '100%', maxHeight: '100%' }} />
//             </div>

//         </div>

//     </div>
//   );
// };

// export default GitHub;

import React from 'react';
import giticon from './giticon.png';

const GitHub = ({ destinationUrl }) => {
  const handleClick = () => {
    window.open(destinationUrl, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          My GitHub Repo
        </h2>
        <p>
          Click on the link to my GitHub repo below that contains the code for the projects above and the code for other projects:
        </p>
        <div>
          <img src={giticon} 
          alt="External Link Icon"   
          style={{ 
            display: 'block', 
            margin: '0 auto', 
            maxWidth: '20%', 
            maxHeight: '20%' 
          }}  
          />
        </div>
      </div>
    </div>
  );
};

export default GitHub;
