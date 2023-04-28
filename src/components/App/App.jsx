import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Header from '../Header/Header'
import GalleryList from '../GalleryList/GalleryList';



function App() {

  const [gallery, setGallery] = useState([])

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      setGallery(response.data);
    }).catch((error) => {
      console.log('whoopsie on fetchGallery', error);
    })
  }
  console.log(gallery);



  return (
    <div className="App">
      <Header />
      <p>Gallery goes here</p>
      <GalleryList 
        gallery={gallery}
      />
    </div>
  );
}

export default App;
