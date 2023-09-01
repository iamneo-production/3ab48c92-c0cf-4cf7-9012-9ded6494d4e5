import React from 'react';

const Gallery = () => {
  const artworks = [
    { id: 1, title: 'Artwork 1', artist: 'Artist A', imageUrl: 'path/to/artwork1.jpg' },
    { id: 2, title: 'Artwork 2', artist: 'Artist B', imageUrl: 'path/to/artwork2.jpg' },
    // Add more artworks here
  ];

  return (
    <div className="gallery">
      {artworks.map(artwork => (
        <div key={artwork.id} className="art-card">
          <img src={artwork.imageUrl} alt={artwork.title} className="art-image" />
          <div className="art-details">
            <h2 className="art-title">{artwork.title}</h2>
            <p className="artist-name">By {artwork.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
