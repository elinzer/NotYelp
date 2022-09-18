import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import DisplayAllReviews from "./components/Reviews/DisplayReviews";
import { authenticate } from "./store/session";
import * as reviewActions from "./store/review";
import BusinessCreateForm from "./components/Business/CreateBusiness";
import CreateReview from './components/Reviews/CreateReviewModal';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
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
      <NavBar />
      <Switch>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/test-get-reviews">
          <DisplayAllReviews />
        </Route>
        <Route path='/test-post-review'>
          <CreateReview />
        </Route>
        <Route path="/test-create-business">
          <BusinessCreateForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
