import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Card from './components/card';
import podaci from './podaci';

function App() {

  let informacije = podaci.map(item => {
    return(
    <Card
    key={item.id}
    {...item}
    />
    )
  })

  return (
    <div>
    <NavBar/>
    {informacije}
    </div>
  );
}

export default App;
