import './App.css';
import Navbar from './components/Navbar';
import Owner from './components/Owner';

function App() {
  return (
    <>
      <Navbar title="MyProject" home="Home" about="AboutMe"/>
      <Owner owner="Sushil Dikondwar"/>
    </>
  );
}

export default App;
