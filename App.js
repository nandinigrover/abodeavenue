import { Provider } from 'react-redux';
import store from './components/store';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import PropertySearchForm from './components/PropertySearchForm';
import PropertyCard from './components/PropertyCard';
import Contact from './components/Contact';
import About from './components/About';
import PropertyModal from './components/PropertyModal';
import Footer from './components/Footer';
import FavoritesTab from './components/FavoritesTab';

function App() {
  const [searchCriteria, setSearchCriteria] = useState({
    type: '', minPrice: '', maxPrice: '', minBedrooms: '', maxBedrooms: '', postcode: ''
  });
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [draggedPropertyId, setDraggedPropertyId] = useState(null);

  useEffect(() => {
    fetch('/properties.json')
      .then(response => response.json())
      .then(data => setProperties(data.properties))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  const [likedProperties, setLikedProperties] = useState(
    new Set(JSON.parse(localStorage.getItem('likedProperties')) || [])
  );

  useEffect(() => {
    localStorage.setItem('likedProperties', JSON.stringify([...likedProperties]));
  }, [likedProperties]);

  const toggleLikeProperty = (propertyId) => {
    setLikedProperties(prev => {
      const updated = new Set(prev);
      if (updated.has(propertyId)) {
        updated.delete(propertyId);
      } else {
        updated.add(propertyId);
      }
      return updated;
    });
  };

  const handleDragStart = (e, propertyId) => {
    setDraggedPropertyId(propertyId);
  };

  const handleDropOnFavorites = (e) => {
    e.preventDefault();
    toggleLikeProperty(draggedPropertyId);
  };

  const handlePropertyClick = (property) => {
  setSelectedProperty(property);
};

  return (
    <Provider store={store}>
    <div className="app-container">
      <Header toggleFavoritesTab={() => setShowFavorites(!showFavorites)} />
      <PropertySearchForm onSearch={setSearchCriteria} />
      {showFavorites && (
        <FavoritesTab 
          likedProperties={likedProperties} 
          onToggleLike={toggleLikeProperty} 
          properties={properties} 
          onDropOnFavorites={handleDropOnFavorites}
        />
      )}
      {selectedProperty && <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />}
      <div className="property-cards-container">
       {properties
    .filter(property => {
      return (
        (searchCriteria.type === 'any' || property.type === searchCriteria.type || searchCriteria.type === '') &&
        (property.price >= Number(searchCriteria.minPrice) || searchCriteria.minPrice === '') &&
        (property.price <= Number(searchCriteria.maxPrice) || searchCriteria.maxPrice === '') &&
        (property.bedrooms >= Number(searchCriteria.minBedrooms) || searchCriteria.minBedrooms === '') &&
        (property.bedrooms <= Number(searchCriteria.maxBedrooms) || searchCriteria.maxBedrooms === '') &&
        (property.location.startsWith(searchCriteria.postcode) || searchCriteria.postcode === '')
      );
    })
    .map(property => (
      <PropertyCard
        key={property.id}
        property={property}
        onPropertyClick={handlePropertyClick}
        isFavorite={likedProperties.has(property.id)}
        onToggleFavorite={toggleLikeProperty}
        onDragStart={handleDragStart}
      />
    ))}
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
    </Provider>
  );
}

export default App;

// import React, { useState, useEffect  } from 'react';
// import './/App.css';
// import Header from './components/Header';
// import PropertySearchForm from './components/PropertySearchForm';
// import PropertyCard from './components/PropertyCard';
// import Contact from './components/Contact';
// import About from './components/About';
// import PropertyModal from './components/PropertyModal';
// import Footer from './components/Footer';

// function App() {
//   const [searchCriteria, setSearchCriteria] = useState({
//     type: '',
//     minPrice: '',
//     maxPrice: '',
//     minBedrooms: '',
//     maxBedrooms: '',
//     postcode: ''
//   });

//   const [properties, setProperties] = useState([]); 
//   const [selectedProperty, setSelectedProperty] = useState(null);

//    useEffect(() => {
//     fetch('/path-to/properties.json')
//       .then(response => response.json())
//       .then(data => setProperties(data.properties))
//       .catch(error => console.error('Error fetching properties:', error));
//   }, []);

//   const handleSearch = (criteria) => setSearchCriteria(criteria);

//   const handlePropertyClick = (property) => setSelectedProperty(property);

//   const handleCloseModal = () => setSelectedProperty(null);

//   return (
//     <div>
//       <Header />
//       <PropertySearchForm onSearch={handleSearch} />
//       {selectedProperty && <PropertyModal property={selectedProperty} onClose={handleCloseModal} />}
//       <PropertyCard searchCriteria={searchCriteria} onPropertyClick={handlePropertyClick} />
//       <About />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

//second template

// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Header from './components/Header';
// import PropertySearchForm from './components/PropertySearchForm';
// import PropertyCard from './components/PropertyCard';
// import Contact from './components/Contact';
// import About from './components/About';
// import PropertyModal from './components/PropertyModal';
// import Footer from './components/Footer';
// import FavoritesTab from './components/FavoritesTab';

// function App() {
//   const [searchCriteria, setSearchCriteria] = useState({
//     type: '',
//     minPrice: '',
//     maxPrice: '',
//     minBedrooms: '',
//     maxBedrooms: '',
//     postcode: ''
//   });
//   const [properties, setProperties] = useState([]);
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [likedProperties, setLikedProperties] = useState(new Set());

//   useEffect(() => {
//     fetch('/properties.json')
//       .then(response => response.json())
//       .then(data => setProperties(data.properties))
//       .catch(error => console.error('Error fetching properties:', error));
//   }, []);

//   const handleSearch = (criteria) => setSearchCriteria(criteria);

//   const handlePropertyClick = (property) => setSelectedProperty(property);

//   const handleCloseModal = () => setSelectedProperty(null);

//   const toggleLikeProperty = (propertyId) => {
//     setLikedProperties((prevLikedProperties) => {
//       const updatedLikedProperties = new Set(prevLikedProperties);
//       if (updatedLikedProperties.has(propertyId)) {
//         updatedLikedProperties.delete(propertyId);
//       } else {
//         updatedLikedProperties.add(propertyId);
//       }
//       return updatedLikedProperties;
//     });
//   };

//   return (
//     <div>
//       <Header />
//       <PropertySearchForm onSearch={handleSearch} />
//       {selectedProperty && <PropertyModal property={selectedProperty} onClose={handleCloseModal} />}
//       <PropertyCard
//         properties={properties}
//         searchCriteria={searchCriteria}
//         likedProperties={likedProperties}
//         onPropertyClick={handlePropertyClick}
//         onToggleLike={toggleLikeProperty}
//       />
//       <About />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Header from './components/Header';
// import PropertySearchForm from './components/PropertySearchForm';
// import PropertyCard from './components/PropertyCard';
// import Contact from './components/Contact';
// import About from './components/About';
// import PropertyModal from './components/PropertyModal';
// import Footer from './components/Footer';
// import FavoritesTab from './components/FavoritesTab';

// function App() {
//   const [searchCriteria, setSearchCriteria] = useState({
//     type: '', minPrice: '', maxPrice: '', minBedrooms: '', maxBedrooms: '', postcode: ''
//   });
//   const [properties, setProperties] = useState([]);
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   // const [likedProperties, setLikedProperties] = useState(new Set());
//   const [showFavorites, setShowFavorites] = useState(false);

//   useEffect(() => {
//     fetch('/properties.json')
//       .then(response => response.json())
//       .then(data => setProperties(data.properties))
//       .catch(error => console.error('Error fetching properties:', error));
//   }, []);

//   const handleSearch = criteria => setSearchCriteria(criteria);
//   const handlePropertyClick = property => setSelectedProperty(property);
//   const handleCloseModal = () => setSelectedProperty(null);

//   const [likedProperties, setLikedProperties] = useState(
//     new Set(JSON.parse(localStorage.getItem('likedProperties')) || [])
//   );

//   useEffect(() => {
//   localStorage.setItem('likedProperties', JSON.stringify([...likedProperties]));
// }, [likedProperties]);

//  const toggleLikeProperty = (propertyId) => {
//   setLikedProperties(prev => {
//     const updated = new Set(prev);
//     if (updated.has(propertyId)) {
//       updated.delete(propertyId);
//     } else {
//       updated.add(propertyId);
//     }
//     return updated;
//   });
// };

//   const toggleFavoritesTab = () => setShowFavorites(!showFavorites);

//   return (
//     <div className="app-container">
//       <Header toggleFavoritesTab={toggleFavoritesTab} />
//       <PropertySearchForm onSearch={handleSearch} />
//       {showFavorites && <FavoritesTab likedProperties={likedProperties} onToggleLike={toggleLikeProperty} properties={properties} />}
//       {selectedProperty && <PropertyModal property={selectedProperty} onClose={handleCloseModal} />}
//       <PropertyCard
//         properties={properties}
//         searchCriteria={searchCriteria}
//         likedProperties={likedProperties}
//         onPropertyClick={handlePropertyClick}
//         onToggleLike={toggleLikeProperty}
    
//       />
//       <About />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;











