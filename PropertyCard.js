import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

const PropertyCard = ({ property, onPropertyClick, isFavorite, onToggleFavorite, onDragStart }) => {
  const { id, images, location, type, price, bedrooms } = property;

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onToggleFavorite(id);
  };

  return (
    <div 
      className="property-card" 
      draggable
      onDragStart={(e) => onDragStart(e, id)}
      onClick={() => onPropertyClick(property)}
    >
      <img src={images[0]} alt={location} className="property-image" />
      <button 
        className="heart-button" 
        onClick={handleFavoriteClick}
      >
        <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeartRegular} 
        className={`heart ${isFavorite ? 'liked' : ''}`} />
      </button>
      <div className="property-info">
        <h2 className="property-location">{location}</h2>
        <p className="property-type">{type}</p>
        <p className="property-price">£{price.toLocaleString()}</p>
        <p className="property-bedrooms">{bedrooms} bedroom(s)</p>
      </div>
    </div>
  );
};

export default PropertyCard;


























