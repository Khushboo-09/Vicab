import './App.css';
import FooterFile from './Components/FooterFile';
import HeaderFile from './Components/HeaderFile';
import SearchWords from './Components/SearchWords';


function App() {
  return (
    <div className="App">
      <HeaderFile></HeaderFile>
      <SearchWords></SearchWords>
      <FooterFile></FooterFile>
    </div>
  );
}

export default App;
