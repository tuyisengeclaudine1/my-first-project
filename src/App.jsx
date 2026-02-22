import React, { useState } from 'react';
import Header from './components/Header.jsx';
import PartA from './components/PartA.jsx';
import Form from './components/Form.jsx';
import Fruits from './components/Fruits.jsx';
import Helo from './components/Helo.jsx';
import Sign from './components/Sign.jsx';
import Fruit from './components/Fruit.jsx';
import Aboutus from './components/Aboutus.jsx';
import Contactus from './components/Contactus.jsx';

function App() { 
  const [showForm, setShowForm] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showAboutus, setShowAboutus] = useState(false);
  const [showContactus, setShowContactus] = useState(false);

  
  const resetPages = () => {
    setShowSlider(false);
    setShowCart(false);
    setShowHome(false);
    setShowAboutus(false);
    setShowContactus(false);
  };

  const handleToggleBuyNow = () => {
    setShowForm(prev => !prev);
  };

  const handleToggleHome = () => {
    resetPages();
    setShowHome(true);
  };

  const handleToggleCart = () => {
    resetPages();
    setShowCart(true);
  };

  const handleToggleFruits = () => {
    resetPages();
    setShowSlider(true);
  };

  const handleToggleAboutus = () => {
    resetPages();
    setShowAboutus(true);
  };

  const handleToggleContactus = () => {
    resetPages();
    setShowContactus(true);
  };

  return (
    <>
      <Header
        onHomeClick={handleToggleHome}
        onFruitsClick={handleToggleFruits}
        onCartClick={handleToggleCart}
        onAboutusClick={handleToggleAboutus}
        onContactusClick={handleToggleContactus}
      /> 

    
      {showHome && (
        <>
          <PartA handleToggleBuyNow={handleToggleBuyNow} />
          {showForm && <Form />}
        </>
      )}

      {showSlider && <Helo />}

      {showCart && (
        <div className="relative z-50">
          <Fruit/>
        </div>
      )}

  
      
  
      {showAboutus && (
        <Aboutus
          handleToggleBuyNow={handleToggleBuyNow}
          showForm={showForm}
        />
      )}

      {showContactus && <Contactus />}

      <Sign />
    </>
  );
}

export default App;


