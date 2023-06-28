import Header from "./Components/Header";
import Inputs from "./Components/Inputs";
import Footer from "./Components/Footer";
import Left from "./imgg/left.png";
import Right from "./imgg/right.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="left" src={Left} alt=""/>
      <img className="right" src={Right} alt=""/> 
      <Header/>
      <Inputs/>
      <Footer/>
    </div>
  );
}

export default App;
