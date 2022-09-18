import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import DisplayAllReviews from "./components/Reviews/DisplayReviews";
import { authenticate } from "./store/session";
import * as reviewActions from "./store/review";
import BusinessCreateForm from "./components/Business/CreateBusiness";
import BusinessEditForm from "./components/Business/EditBusiness";
import CreateReview from "./components/Reviews/CreateReviewModal";
import SplashPage from "./components/SplashPage";
import { getBusinesses } from "./store/business";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      await dispatch(getBusinesses());
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
        <Route path="/test-create-business">
          <BusinessCreateForm />
        </Route>
        <Route path="/test-edit-business">
          <BusinessEditForm />
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
