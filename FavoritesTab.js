import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import PropertyCard from './PropertyCard';

const FavoritesTab = ({ likedProperties, onToggleFavorite, properties }) => {
  const favoritesArray = Array.from(likedProperties || []);

  return (
    <Droppable droppableId="favorites">
      {(provided) => (
        <div
          className="favorites-tab"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <h2>Favorites</h2>
          {favoritesArray.length > 0 ? (
            favoritesArray.map((propertyId, index) => {
              const property = properties.find((p) => p.id === propertyId);
              if (!property) return null;

              return (
                <PropertyCard
                  key={propertyId}
                  property={property}
                  onToggleFavorite={onToggleFavorite}
                  isFavorite={true}
                  index={index}
                />
              );
            })
          ) : (
            <p>No favorites added yet.</p>
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default FavoritesTab;


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
// import PropertyCard from './PropertyCard';

// const FavoritesTab = ({ favorites, onToggleFavorite, properties }) => {
//   return (
//     <div className="favorites-tab">
//       <h2>Favorites</h2>
//       {Array.from(favorites).map(propertyId => {
//         // Find the property details using the propertyId
//         const propertyDetails = properties.find(property => property.id === propertyId);
//         return (
//           <div key={propertyId} className="favorite-item">
//             {/* Display property details using the PropertyCard component */}
//             {propertyDetails && (
//               <PropertyCard 
//                 property={propertyDetails}
//                 onPropertyClick={() => {}} 
//               />
//             )}
//             <button onClick={() => onToggleFavorite(propertyId)}>
//               <FontAwesomeIcon icon={faHeartSolid} />
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export {FavoritesTab};

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
// import PropertyCard from './PropertyCard';

// const FavoritesTab = ({ favorites, onToggleFavorite, properties }) => {
//   return (
//     <div className="favorites-tab">
//       <h2>Favorites</h2>
//       {Array.from(favorites).map(propertyId => {
//         // Find the property details using the propertyId
//         const property = properties.find(p => p.id === propertyId);
//         if (!property) {
//           return null; // or some fallback UI
//         }
//         return (
//           <div key={property.id} className="favorite-item">
//             {/* Now passing property object directly to the PropertyCard */}
//             <PropertyCard 
//               property={property}
//               onPropertyClick={() => {}} // Add functionality or remove if not required
//               onToggleLike={() => onToggleFavorite(propertyId)}
//               isLiked={true} // Since it's in favorites, we assume it's liked
//             />
//             {/* Toggle like button */}
//             <button onClick={() => onToggleFavorite(propertyId)} className="like-button">
//               <FontAwesomeIcon icon={faHeartSolid} />
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default FavoritesTab; 



// // FavoritesTab.js
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
// import PropertyCard from './PropertyCard';

// const FavoritesTab = ({ likedProperties, onToggleLike, properties }) => {
//   const favoritesArray = Array.from(likedProperties || []);

//   return (
//     <div className="favorites-tab">
//       <h2>Favorites</h2>
//       {favoritesArray.length > 0 ? (
//         favoritesArray.map(propertyId => {
//           const property = properties.find(p => p.id === propertyId);
//           if (!property) return null; // Handle the case where the property is not found

          
//           return (
//             <div key={propertyId} className="favorite-item">
//               <PropertyCard
//                 property={property}
//                 onToggleLike={onToggleLike}
//                 isLiked={likedProperties.has(propertyId)} 
//               />
//               <button onClick={() => onToggleLike(propertyId)} className="like-button">
//                 <FontAwesomeIcon icon={faHeartSolid} />
//               </button>
//             </div>
//           );
//         })
//       ) : (
//         <p>No favorites added yet.</p>
//       )}
//     </div>
//   );
// };

// export default FavoritesTab;

// FavoritesTab.js
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import PropertyCard from './PropertyCard';

// const FavoritesTab = ({ likedProperties, onToggleLike, properties }) => {
//   const favoritesArray = Array.from(likedProperties || new Set());

//   const onDragEnd = (result) => {
//     if (!result.destination) return;
//     // Logic to reorder properties based on drag result
//   };
//   const handleOnDragEnd = (result) => {
//   if (!result.destination) return;
  
//   const newFavorites = Array.from(likedProperties);
//   const [reorderedItem] = newFavorites.splice(result.source.index, 1);
//   newFavorites.splice(result.destination.index, 0, reorderedItem);
  
//   setlikedProperties(new Set(newFavorites));
// };

//   return (
//     <DragDropContext onDragEnd={handleOnDragEnd}>
//       <Droppable droppableId="favoritesDroppable" >
//         {(provided) => (
//           <div
//             className="favorites-tab"
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//           >
//             <h2>Favorites</h2>
//             {favoritesArray.map((property, index) => (
//               <Draggable key={property.id} draggableId={property.id} index={index}>
//                 {(provided) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                   >
//                     <PropertyCard
//                       property={property}
//                       onToggleLike={onToggleLike}
//                       isLiked={likedProperties.has(property.id)}
//                       index={index}
//                     />
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default FavoritesTab;

// import React from 'react';
// import PropertyCard from './PropertyCard';

// const FavoritesTab = ({ likedProperties, onToggleLike, properties }) => {
//   // Transform the Set of liked properties IDs into an array of liked properties objects
//   const favoriteProperties = properties.filter(property => likedProperties.has(property.id));

//   return (
//     <div className="favorites-tab">
//       <h2>Favorites</h2>
//       {favoriteProperties.length > 0 ? (
//         favoriteProperties.map(property => (
//           <div key={property.id} className="favorite-item">
//             <PropertyCard
//               property={property}
//               onToggleLike={onToggleLike}
//               isLiked={true} // Since this is the Favorites tab, all properties here are liked
//               onPropertyClick={() => {}} // You can define how to handle property click or leave as no operation if not needed
//             />
//             {/* You might not need a like button here since it's already in PropertyCard, but if you need it, ensure it toggles the like status correctly */}
//           </div>
//         ))
//       ) : (
//         <p>No favorites added yet.</p>
//       )}
//     </div>
//   );
// };

// export default FavoritesTab;












