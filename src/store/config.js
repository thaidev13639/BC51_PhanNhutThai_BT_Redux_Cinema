import { combineReducers, createStore } from "redux";
import { movies } from "./Reducers/movies";


const rootReducer = combineReducers({
    movies: movies,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())