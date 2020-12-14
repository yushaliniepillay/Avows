import React from 'react'
import './App.css';
import NavBarSmall from './component/navbar/NavBarSmall';
import NavBar from "./component/navbar/NavBar";
import HomePage from './component/home/homePage';


const App = () => {
  return (
    <div className="App">
      {/* <NavBarSmall /> */}
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
