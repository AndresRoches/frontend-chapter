import React from 'react';

// Componente individual de la carta
function Card({ name, description, imageUrl }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', margin: '10px', padding: '10px', width: '300px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: 'white' }}>
      <img src={imageUrl} alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

// Componente principal que renderiza una lista de cartas
function App() {
  const cardsData = [
    {
      name: 'Chavo',
      description: 'El protagonista de la serie, un niño huérfano y travieso.',
      imageUrl: 'https://www.prensalibre.com/wp-content/uploads/2021/09/chavo-del-82-1.jpg'  // Replace this with actual image URL
    },
    {
      name: 'Quico',
      description: 'El niño consentido de la vecindad, reconocible por sus mejillas infladas.',
      imageUrl: 'https://depor.com/resizer/WuBzBiNeyjZ_l9BCoya9p7AkRxs=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/V4GXRJ4PPNDLNBCCIV67IJQZSY.jpg'  // Replace this with actual image URL
    },
    {
      name: 'Doña Florinda',
      description: 'La madre sobreprotectora de Quico, siempre lista con su rodillo.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzK4t0Rwu_-1PAPqf5v_XD75DespEid1_RtIg76i4w7g&s'  // Replace this with actual image URL
    },
    {
      name: 'Don Ramón',
      description: 'Uno de los adultos de la vecindad, famoso por su gorra y su evasión del alquiler.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP68xUhVIaxj9seu9hf-XHKV79fIzgYJ1g6H80-z4OvA&s'  // Replace this with actual image URL
    },
    {
      name: 'La Chilindrina',
      description: 'Amiga del Chavo y Quico, conocida por su astucia y sus coletas.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTddkf__BKRpL0Cuh6ZYy1XFAP1hJlOCot-D5JqPj4q8w&s'  // Replace this with actual image URL
    },
    {
      name: 'Profesor Jirafales',
      description: 'El maestro de la escuela local, siempre llevando flores a Doña Florinda.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLUJcCj5N1TMBnW7nYs89LtF4-MQHRbb3fKIT3dADSg&s'  // Replace this with actual image URL
    },
    {
      name: 'Señor Barriga',
      description: 'El dueño de las casas de la vecindad, siempre intentando cobrar la renta.',
      imageUrl: 'https://www.mdzol.com/u/fotografias/m/2023/3/1/f850x638-1371289_1448778_6259.jpg'  // Replace this with actual image URL
    }
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#f0f0f0', padding: '20px 0' }}>
      <h1 style={{ width: '100%', textAlign: 'center', margin: '20px 0', color: '#333' }}>Chavo del 8 Personajes</h1>
      {cardsData.map((card, index) => (
        <Card key={index} name={card.name} description={card.description} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
}

export default App;
