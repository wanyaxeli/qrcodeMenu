import logo from './logo.svg';
import './App.css';
import React,{useState,createContext} from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import SubHeader from './components/SubHeader';
import AppRoutes from './components/AppRoutes';
export const barge=createContext(0)
function App() {
  const [bargeValue,setBarge]=useState(0)
  return (
<barge.Provider value={{value:[bargeValue,setBarge]}} className="App">
      <SubHeader/>
      <Header/>
      <AppRoutes/>
    </barge.Provider>
  );
}

export default App;
