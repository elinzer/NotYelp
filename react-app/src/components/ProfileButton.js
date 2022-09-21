// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import * as sessionActions from "../store/session";
import "./ProfileButton.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };

  return (
    <>
      <div className="fixes profilebutton by existing">
        <div className="profileDiv">
          <button onClick={openMenu} className="profileButton">
            <div className="profileIcon">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "25px",
                  width: "25px",
                  fill: "gray",
                }}
              >
                <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
              </svg>
            </div>
          </button>
        </div>
        {showMenu && (
          <div className="showMenu">
            <div className="profile-dropdown">
              <div className="userProfile">User: {user.username}</div>
              <div className="divLine"></div>
              {/* <Link to='/view-your-spots' className='allSpotButton'>View My Spots</Link> */}
              <Link to="/test-current" className="my-reviews">
                My Reviews
              </Link>
              <div className="divLine"></div>
              <div className="logoutUser" onClick={logout}>
                <svg width={24} height={24} className="logout-icon">
                  <path d="M15 2a1 1 0 110 2H4v16h11a1 1 0 110 2H3a1 1 0 01-1-1V3a1 1 0 011-1h12zm1.09 4.72a1 1 0 011.41 0L22 11.3a1 1 0 010 1.4l-4.59 4.58a1 1 0 01-1.41.02 1 1 0 010-1.42L18.87 13H7a1 1 0 110-2h11.87l-2.78-2.86a1 1 0 010-1.42z" />
                </svg>
                Log Out
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
