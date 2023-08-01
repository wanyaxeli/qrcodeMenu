import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import SubHeader from './components/SubHeader';

function App() {
  return (
    <div className="App">
      <SubHeader/>
      <Header/>
      <Banner/>
    </div>
  );
}

export default App;
