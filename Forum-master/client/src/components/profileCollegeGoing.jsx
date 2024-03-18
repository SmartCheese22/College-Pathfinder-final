import React from 'react';
import './profileCollegeGoing.css';
import gravatar from 'gravatar';

function CollegeGoingProfile({ user }) {
  return (
    <div className="profile-container">
      <div className="profile">
        <ProfileSection user={user} />
        <Opinions user={user} />
      </div>
    </div>
  );
}

function ProfileSection({ user }) {
  return (
    <div className="profile_details">
      <ProfilePhotoSection user={user} />
      <ProfileDataSection user={user} />
    </div>
  );
}

function ProfilePhotoSection({ user }) {
  const gravatarUrl = gravatar.url(user.email, { s: 75, r: "pg", d: 'robohash' });
  return (
    <div className="profile_photo">
      <div style={{ borderRadius: '50%', overflow: 'hidden', width: 75, height: 75 }}>
        <img src={gravatarUrl} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div>
        <div>
          <p className="profile_verified">Verified</p>
        </div>
      </div>
    </div>
  );
}

function ProfileDataSection({ user }) {
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
          <p className="profile_data_rows">Your User Name</p>
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
      <div className="professional_details">
        <div>
          <p className="profile_data_rows">College</p>
        </div>
        <div style={{ marginBottom: "5px" }}>
          <p className="profile-data-values">{user.college}</p>
        </div>
      </div>
      <div className="professional_details">
        <div>
          <p className="profile_data_rows">Branch</p>
        </div>
        <div>
          <p className="profile-data-values">{user.branch}</p>
        </div>
      </div>
    </div>
  );
}

function Opinions({ user }) {
  return (
    <div className="opinions">
      <p style={{ textAlign: 'center', fontSize: '30px', marginTop: "15px", marginBottom: "15px", fontWeight: '500' }}>Opinions</p>
      <div className="opinions_details">
        <div>
          <p className="opinions_data_rows">Academic Opinion</p>
        </div>
        <div style={{ marginBottom: "5px" }}>
          <p className="opinions-data-values">{user.AcademicOpinion}</p>
        </div>
      </div>
      <div className="opinions_details">
        <div>
          <p className="opinions_data_rows">Non-Academic Opinion</p>
        </div>
        <div style={{ marginBottom: "5px" }}>
          <p className="opinions-data-values">{user.NonAcademicOpinion}</p>
        </div>
      </div>
      <div className="opinions_details">
        <div>
          <p className="opinions_data_rows">Placement Opinion</p>
        </div>
        <div style={{ marginBottom: "5px" }}>
          <p className="opinions-data-values">{user.PlacementOpinion}</p>
        </div>
      </div>
      <div className="opinions_details">
        <div>
          <p className="opinions_data_rows">Overall Opinion</p>
        </div>
        <div style={{ marginBottom: "5px" }}>
          <p className="opinions-data-values">{user.OverallOpinion}</p>
        </div>
      </div>
    </div>
  );
}

export default CollegeGoingProfile;
