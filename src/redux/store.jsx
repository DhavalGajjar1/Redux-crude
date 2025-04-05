import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import EmpReducer from "./EmpReducer";
import { loadState, saveState } from '../utils/localStorage';

let persistedState = loadState();
const store = createStore(
    combineReducers({
        empData: EmpReducer,
    }),
    persistedState,
    applyMiddleware(thunk)
);

store.subscribe(() => {
    saveState(store.getState());
})

export default store;