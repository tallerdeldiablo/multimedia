import logo from './logo.svg';
import './App.css';
import firstPage from './img/first-page.png';

import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <> 

    <div className="App">
      {/* <h1>My page </h1> */}
      <img src={firstPage} alt="profile-image"/>



    </div>
    <PortfolioContainer />;
   

    </>
  );
}

export default App;
