import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session";
import businessesReducer from "./business";
import reviewReducer from "./review";
import itemReducer from "./item";
import likeReducer from "./like";
import queriedBusinessReducer from "./queried_business";
const rootReducer = combineReducers({
  session,
  businesses: businessesReducer,
  queried_businesses: queriedBusinessReducer,
  reviews: reviewReducer,
  items: itemReducer,
  likes: likeReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
