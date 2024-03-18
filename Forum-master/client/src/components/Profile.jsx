import React from 'react';
import CollegeGoingProfile from './profileCollegeGoing';
import CollegeSearchingProfile from './profileCollegeSearching';
import { NavLink } from "react-router-dom";

const Profile = ({user}) => {
  return (
      <div>
        <ShowProfile user={user}/>
      </div>
  );
};

function ShowProfile({ user}) {
  if (user && user.userType) {
    if (user.userType === "collegeG") {
      return (
        <div>
          <CollegeGoingProfile user={ user } />
        </div>
      );
    } else if (user.userType === "collegeS") {
      return (
        <div>
          <CollegeSearchingProfile user={ user}/>
        </div>
      );
    }
  }

  // If user object or userType is missing, render a fallback message or component
  return (
    <div>
      <p>User data not available or userType not specified.</p>
    </div>
  );
}

export default Profile;