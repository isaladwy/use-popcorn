import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './starRating';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="red" maxRating={5} onSetRating={setMovieRating} />
//       <p>{movieRating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <Test />
    <StarRating
      size={36}
      color="blue"
      maxRating={7}
      className="test"
      defaultRating={3}
    /> */}
    <App/>
  </React.StrictMode>
);
