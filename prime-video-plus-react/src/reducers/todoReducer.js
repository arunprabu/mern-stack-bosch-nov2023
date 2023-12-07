/*
Reducer?
----
  * a function that takes in state and action as params
  * it must return state 
  * action is an object. it must have type property and an optional payload property
  * action types are the possible actions that will occur in the feature
  * example action types are 'ADD_TODO' and 'LIST_TODOS', 'EDIT_TODO', 'DELETE_TODO'
  * action can also have payload property
  * the reducer function will never be called directly from component 
  * There's only one way to call the reducer fn.. THE component must dispatch an action
*/

function todoReducer(state = [], action) {
  console.log(action);
  console.log(state); // state logic -- array of object for maintaining list of todos

  switch (action.type) {
    case "LIST_TODOS":
      return action.payload;

    case "ADD_TODO":
      return [...state, action.payload];

    default:
      return state;
  }
}

export default todoReducer;
