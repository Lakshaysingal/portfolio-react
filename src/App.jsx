import React from 'react';
import Navbar from './components/navbar/Navbar';
import PageBox from './components/core/PageBox';
import Section1 from './components/home/Section1';
import Section2 from './components/home/Section2';
import Section4 from './components/home/Section4';
import Section5 from './components/home/Section5';
import Section6 from './components/home/Section6';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen dark:bg-black bg-white">
      <Navbar />
      <div className="pt-16">
        <PageBox>
          <Section1 id="home" />
          <Section2 id="services" />
          <Section4 id="skills" />
          <Section5 id="projects" />
          <Section6 id="contact" />
        </PageBox>
      </div>
    </div>
  );
}

export default App;
