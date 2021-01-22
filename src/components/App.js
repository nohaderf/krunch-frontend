import NavBar from './NavBar';
import MainContainer from './MainContainer';
import logo from '../logo.png';

function App() {
  return (
    <>
    <header>
      <img className="logo" src={logo} alt="Krunch" />
    </header>
    <div className="App">
      <NavBar />
      <MainContainer />
    </div>
    </>
  );
}

export default App;
