import React, {useState} from 'react';
import './profileCollegeSearching.css';
import { useSelector , useDispatch} from 'react-redux';
import axios from 'axios';
import { updateUserName ,updateEmail, updateAddress} from "./authActions";
import gravatar from 'gravatar';

function CollegeSearchingProfile({user}){
    return(
      <div className="profile-container">
          <div className="profile">
              <ProfileSection user={user}/>
          </div>
      </div>
    );
}

function ProfileSection({user}){
    return (
        <div className="profile_details">
            <ProfilePhotoSection user={user}/>
            <ProfileDataSection user={user}/>
        </div>
    );
  }
  
  function ProfilePhotoSection({user}){
    const gravatarUrl = gravatar.url(user.email, { s: 75,r: "pg", d: 'robohash' });
    return (
        <>
        <div className="profile_photo">
            <div style={{ borderRadius: '50%', overflow: 'hidden', width: 75, height: 75 }}>
                <img src={gravatarUrl} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div >
                <div>
                    <p className="profile_verified">Verified</p>
                </div>
            </div>
        </div>
        </>
    );
  }
  
  function ProfileDataSection({ user }) {
    console.log(user);

    return (
        <div className="professional">
            <p style={{ textAlign: 'center', fontSize: '30px', marginTop: "15px", marginBottom: "15px", fontWeight: '500' }}>Personal Details</p>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Your Name</p>
                </div>
                <div style={{ marginBottom: "5px" }}>
                    <p className="profile-data-values">{user.name}</p>
                </div>
            </div>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Your Username</p>
                </div>
                <div style={{ marginBottom: "5px" }}>
                    <p className="profile-data-values">{user.username}</p>
                </div>
            </div>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Email</p>
                </div>
                <div style={{ marginBottom: "5px" }}>
                    <p className="profile-data-values">{user.email}</p>
                </div>
            </div>
        </div>
    );
}

  
export default CollegeSearchingProfile;