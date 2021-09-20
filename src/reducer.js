import { v4 as uuidv4 } from "uuid";

export const initState = {
  toDos: [],
  completed: [],
};

export const ADD = "ADD";
export const DELETE = "DELETE";
export const COMPLETE = "COMPLETE";
export const UNCOMPLETE = "UNCOMPLETE";

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { id: uuidv4(), text: action.payload }],
      };
    case DELETE:
      return {
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
      };
    case COMPLETE: {
      const target = state.toDos.find((todo) => todo.id === action.payload);
      return {
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: [...state.completed, target],
      };
    }
    case UNCOMPLETE: {
      const target = state.completed.find((todo) => todo.id === action.payload);
      return {
        toDos: [...state.toDos, target],
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default reducer;
