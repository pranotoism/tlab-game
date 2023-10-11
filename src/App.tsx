import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import MainLayout from './layouts/main';
import GameList from './components/list/GameList';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <MainLayout>
        <GameList />
      </MainLayout>
    </>
  );
}

export default App;
