import { createStore } from "redux";

const initialState = {
  count: 0,
  items: [],
  todos: [
    {
      id: 1,
      text: "do homework",
      isCompleted: false,
    },
    {
      id: 2,
      text: "do grocery",
      isCompleted: true,
    },
    {
      id: 3,
      text: "go to gym",
      isCompleted: false,
    },
  ],
};

function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      // This isn't the item we care about - keep it as-is
      return item;
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      inBasket: true,
    };
  });
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state, // return old state
        count: state.count + 1, // cahnge the count property to count +1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "ADD_VALUE":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "MINUS_VALUE":
      return {
        ...state,
        count: state.count - action.payload,
      };
    case "DIVIDE_VALUE":
      return {
        ...state,
        count: state.count / action.payload,
      };
    case "MULTIPLY_VALUE":
      return {
        ...state,
        count: state.count * action.payload,
      };
    case "ADD_TO_LIST":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "ADD_TODOS":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "COMPLETE_TODO":
      // find the todo in the list
      // we need to change the isCompleted to true

      // 1. find the index of the todo we need to change
      const oldTodoPosition = state.todos.findIndex((element) => (element.id === action.payload.id))

      // 2. build the new list of todos
      const newTodoList = state.todos;

      // 3. Update the todo at that index with the value true
      newTodoList[oldTodoPosition] = {
        ...newTodoList[oldTodoPosition],
        isCompleted: !newTodoList[oldTodoPosition].isCompleted // switch the value of is completed
      }

      // 4. Return the new state
      return {
        ...state,
        todos: [...newTodoList]
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        items: updateObjectInArray(state.items, action),
      };
    case "CLEAR_ITEMS": {
      return {
        ...state,
        items: [],
      };
    }

    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
