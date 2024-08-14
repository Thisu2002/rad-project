// import React from 'react';
// import NavBar from '../components/NavBar';
// import paws from '../images/paws.png';
// import admin from '../images/admin.png';
// import vet from '../images/vet.png';
// import petOwner from '../images/petOwner.png';

// const User = () => {
//   const userPageStyle = {
//     backgroundImage: `url(${paws})`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     minHeight: '100vh',
//     position: 'relative'
// };

//   const contentStyle = {
//     padding: '20px',
//     borderRadius: '10px',
//     fontFamily: 'Poppins',
//     textAlign: 'center',
//     width: '55%',
//     position: 'absolute',
//     top: '130px',
//     left: '100px'
//   };

//   const imageStyle = {
//     width: '25%',
//     height: '25%',
//     margin: '40px 100px 20px 100px'
//   };

//   return (
//     <div>
//       <NavBar />
//       <div style={userPageStyle}>
//         <style>
//           {`
//             @font-face {
//               font-family: 'Poppins';
//               src: url('../fonts/poppins.ttf') format('truetype');
//             }
//           `}
//         </style>
//         <div style={{position: 'absolute', top: '130px', left: '100px', fontFamily: 'Poppins'}}>
//           <h4 style={{margin: '0'}}>Select a User Role</h4>
//           <hr style={{width: '100px', border: 'none', borderTop: '2px solid black'}} />
//         </div>
//         <div style={contentStyle}>
//           <img src={admin} alt='admin' style={imageStyle}/>
//           <img src={vet} alt='vet' style={imageStyle}/><br />
//           <img src={petOwner} alt='petOwner' style={imageStyle}/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default User;

import React from 'react';
import NavBar from '../components/NavBar';
import paws from '../images/paws.png';
import admin from '../images/admin.png';
import vet from '../images/vet.png';
import petOwner from '../images/petOwner.png';

const User = () => {
  const userPageStyle = {
    backgroundImage: `url(${paws})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    position: 'relative'
  };

  const contentStyle = {
    padding: '20px',
    borderRadius: '10px',
    fontFamily: 'Poppins',
    textAlign: 'center',
    width: '55%',
    position: 'absolute',
    top: '130px',
    left: '50%',
    transform: 'translateX(-50%)', // Center the content horizontally
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const imageStyle = {
    width: '25%',
    height: 'auto',
    margin: '20px' // Adjust margin as needed
  };

  return (
    <div>
      <NavBar />
      <div style={userPageStyle}>
        <style>
          {`
            @font-face {
              font-family: 'Poppins';
              src: url('../fonts/poppins.ttf') format('truetype');
            }
          `}
        </style>
        <div style={{position: 'absolute', top: '130px', left: '50%', transform: 'translateX(-50%)', fontFamily: 'Poppins', textAlign: 'center'}}>
          <h4 style={{margin: '0'}}>Select a User Role</h4>
          <hr style={{width: '100px', border: 'none', borderTop: '2px solid black'}} />
        </div>
        <div style={contentStyle}>
          <img src={admin} alt='admin' style={imageStyle}/>
          <img src={vet} alt='vet' style={imageStyle}/>
          <img src={petOwner} alt='petOwner' style={imageStyle}/>
        </div>
      </div>
    </div>
  );
};

export default User;
