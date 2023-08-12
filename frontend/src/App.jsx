import React, { useState } from 'react';
import MyContext from 'components/MyContext';
import 'mocks/photos';
import 'mocks/topics';
import './App.scss';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useModal from 'hooks/useModal';

const App = () => {
  const { openModal, closeModal, modalOpen, selectedPhoto} = useModal();
  const contextValues = {
    favorites: [],
    toggleFavorite: () => {},
  };
  
  return (

    <MyContext.Provider value={contextValues}>
      <div className="App">
        <HomeRoute
          topics={topics} photos={photos} openModal={openModal}
        />
        <PhotoDetailsModal
          isOpen={modalOpen}
          onClose={closeModal}
          selectedPhoto={selectedPhoto}
        />
      </div>
    </MyContext.Provider>
  );
};

export default App;