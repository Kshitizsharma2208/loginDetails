
// import './App.css';
// // import Header from './components/header/Header';
// import Landing from "./components/Landing";
// import DefaultLayout from './layouts/default';
// function App() {
//   return (
//     <DefaultLayout>
//       <Landing />
//      </DefaultLayout>
//   );
// }

//  export default App;

import { Link } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="linkContainer">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">profile</Link>
      <Link to="/fruitCorner">fruitsCorner</Link>
      <Link to="/Calc">calc</Link>


    </div>
  );
}

export default App;