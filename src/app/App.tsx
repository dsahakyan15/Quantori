import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'
import Header from 'widgets/Header';
import LoginModal from 'widgets/LoginModal';
import Footer from 'widgets/Footer';

function App() {

  const [loginHide, onLoginHide] = useState(false)
  return (
    <div className="App">
      <Header hide={onLoginHide} />

      <>{loginHide ? <LoginModal hide={onLoginHide} />: null}</>

      <Footer/>
    </div>
  );
}

export default App;
