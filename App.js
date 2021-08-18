import './App.css';
import Inputbox from './components/Inputbox';
import Navbar from './components/Navbar';
import Owner from './components/Owner';

function App() {
  return (
    <>
      <Navbar title="MyProject" home="Home" about="AboutMe"/>
      <Owner owner="Sushil Dikondwar"/>
      <Inputbox/>
    </>
  );
}

export default App;
