import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import BusinessDetail from "./components/Business/BusinessDetail";
import DisplayAllReviews from "./components/Reviews/DisplayReviews";
import { authenticate } from "./store/session";
import * as reviewActions from "./store/review";
import CreateReview from "./components/Reviews/CreateReviewModal";
import SplashPage from "./components/SplashPage";
import { getBusinesses } from "./store/business";
import { getItems } from "./store/item";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      await dispatch(getBusinesses());
      await dispatch(getItems());
      setLoaded(true);
    })();
  }, [dispatch]);

  useEffect(() => {
    dispatch(reviewActions.getReviews());
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar loaded={loaded} />
      <Switch>
        <Route path="/test-get-reviews">
          <DisplayAllReviews />
        </Route>
        <Route path="/test-post-review">
          <CreateReview />
        </Route>
        <Route path="/businesses/:businessId">
          <BusinessDetail />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true}>
          <SplashPage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
