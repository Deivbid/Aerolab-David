import React, { Component } from 'react';
import './App.css';

//Assets
import bannerImage from '../static/header-x2.png';

//Components
import Header from '../components/Header';
import Banner from '../components/Banner';
import Shelf from '../components/shelf/Shelf';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner src={bannerImage} alt={"Main Banner"} />

        <main>
          <Shelf />
        </main>

        <Footer />       
      </div>
    );
  }
}

export default App;
