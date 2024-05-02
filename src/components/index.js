const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return [...state, action.todo]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);

// To Remove items from todo list 
const REMOVE_TODO = 'REMOVE_TODO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case REMOVE_TODO:
      // Don't mutate state here or the tests will fail
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)]; // Create a new array without the todo at the specified index
    default:
      return state;
  }
};

const removeToDo = (index) => {
  return {
    type: REMOVE_TODO,
    index
  }
}

const store = Redux.createStore(immutableReducer);
