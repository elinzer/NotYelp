import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { getBusinesses } from "../store/business";
import * as sessionActions from '../store/session'


const NavBar = ({loaded}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div>
        <button>Profile</button>
        <li>
          <LogoutButton />
        </li>
      </div>
    )
  } else {
    sessionLinks = (
      <div>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
      </div>
    )
  }


  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            NotYelp
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li> */}
        <li>
          <button onClick={() => dispatch(getBusinesses())}>
            {/* Temporary Button to test Redux Store */}
            Get Businesses
          </button>
        </li>
      </ul>
      {loaded && sessionLinks}
    </nav>
  );
};

export default NavBar;
