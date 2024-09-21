import React from 'react'; 
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import HomePage from './components/HomePage'
import Footer from './components/Footer';


function App() {

  return (
    <BrowserRouter>
    <HomePage/>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
