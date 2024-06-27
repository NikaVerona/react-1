import React from 'react';
import './reset.css';
import './style.css';
import './desctop.css';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import Employees from './components/Employees';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LandingSection />
        <Employees />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
