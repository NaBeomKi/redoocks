import { createContext, useContext, useReducer } from "react";
import reducer, { initState } from "./reducer";

const ToDosContext = createContext();

const ToDosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <ToDosContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDosContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(ToDosContext);
  return dispatch;
};

export const useToDoState = () => {
  const { state } = useContext(ToDosContext);
  return state;
};

export default ToDosProvider;
