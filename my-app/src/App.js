import React from 'react';

// Componente individual de la carta
function Card({ title, subtitle, imageUrl }) {
  return (
    <div style={{ border: '1px solid gray', margin: 10, padding: 10, width: '300px', display: 'flex', flexDirection: 'column' }}>
      <img src={imageUrl} alt="Imagen de la carta" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

// Componente principal que renderiza una lista de cartas en filas de tres
function App() {
  const cardsData = [
    {
      title: 'Título de la Carta 1',
      subtitle: 'Subtítulo de la Carta 1',
      imageUrl: 'https://via.placeholder.com/300.png/09f/fff'
    },
    {
      title: 'Título de la Carta 2',
      subtitle: 'Subtítulo de la Carta 2',
      imageUrl: 'https://via.placeholder.com/300.png/021/fff'
    },
    {
      title: 'Título de la Carta 3',
      subtitle: 'Subtítulo de la Carta 3',
      imageUrl: 'https://via.placeholder.com/300.png/321/fff'
    },
    {
      title: 'Título de la Carta 4',
      subtitle: 'Subtítulo de la Carta 4',
      imageUrl: 'https://via.placeholder.com/300.png/456/fff'
    },
    {
      title: 'Título de la Carta 5',
      subtitle: 'Subtítulo de la Carta 5',
      imageUrl: 'https://via.placeholder.com/300.png/654/fff'
    },
    {
      title: 'Título de la Carta 6',
      subtitle: 'Subtítulo de la Carta 6',
      imageUrl: 'https://via.placeholder.com/300.png/879/fff'
    }
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} subtitle={card.subtitle} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
}

export default App;
