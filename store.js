import { createStore } from 'redux';

const initialState = {
  likedProperties: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_LIKE_PROPERTY':
      const index = state.likedProperties.indexOf(action.payload);
      let updatedLikedProperties = [...state.likedProperties];
      if (index > -1) {
        updatedLikedProperties.splice(index, 1); // Remove if it's already liked
      } else {
        updatedLikedProperties.push(action.payload); // Add to liked properties
      }
      return {
        ...state,
        likedProperties: updatedLikedProperties,
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);
export default store;

