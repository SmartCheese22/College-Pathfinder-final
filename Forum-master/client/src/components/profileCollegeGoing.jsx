import React, {useState} from 'react';
import './profileCollegeGoing.css';
import gravatar from 'gravatar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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
  
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingCollege, setIsEditingCollege] = useState(false);
  const [isEditingBranch, setIsEditingBranch] = useState(false);
  const [isEditingYear, setIsEditingYear] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newUsername, setNewUsername] = useState(user.username);
  const [newCollege, setNewCollege] = useState(user.college);
  const [newBranch, setNewBranch] = useState(user.branch);
  const [newYear, setNewYear] = useState(user.year);

  const handleNameEdit = () => {
    setIsEditingName(true);
  };
  const handleUsernameEdit = () => {
    setIsEditingUsername(true);
  };
  const handleCollegeEdit = () => {
    setIsEditingCollege(true);
  };
  const handleBranchEdit = () => {
    setIsEditingBranch(true);
  };
  const handleyearEdit = () => {
    setIsEditingYear(true);
  };

  const handleEmailEdit = () => {
    setIsEditingEmail(true);
  };

  const handleNameSubmit = () => {
    axios
      .patch(`http://localhost:5000/users/profile/updateName/${user.email}`, { name: newName })
      .then(response => {
        console.log(response.data);
        setIsEditingName(false);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error updating name:', error);
      });
  };
  const handleUsernameSubmit = () => {
    axios
      .patch(`http://localhost:5000/users/profile/updateUsername/${user.email}`, { username: newUsername })
      .then(response => {
        console.log(response.data);
        setIsEditingUsername(false);
        window.location.reload();
        
      })
      .catch(error => {
        console.error('Error updating username:', error);
      });
  };


  const handleEmailSubmit = () => {
    axios
      .patch(`http://localhost:5000/users/profile/updateEmail/${user.email}`, { newEmail: newEmail })
      .then(response => {
        console.log(response.data);
        setIsEditingEmail(false);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error updating email:', error);
      });
  };

  const handleCollegeSubmit = () => {
    axios
      .patch(`http://localhost:5000/users/profile/updateCollege/${user.email}`, { college: newCollege })
      .then(response => {
        console.log(response.data);
        setIsEditingCollege(false);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error updating email:', error);
      });
  };

  const handleBranchSubmit = () => {
    axios
      .patch(`http://localhost:5000/users/profile/updateBranch/${user.email}`, { branch: newBranch })
      .then(response => {
        console.log(response.data);
        setIsEditingBranch(false);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error updating email:', error);
      });
  };

  const handleYearSubmit = () => {
    axios
      .patch(`http://localhost:5000/users/profile/updateYear/${user.email}`, { year: newYear })
      .then(response => {
        console.log(response.data);
        setIsEditingYear(false);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error updating email:', error);
      });
  };

  return (
    <div className="professional">
      <p style={{ textAlign: 'center', fontSize: '30px', marginTop: '15px', marginBottom: '15px', fontWeight: '500' }}>
        Personal Details
      </p>
      <div className="professional_details">
        <div>
        <p className="profile_data_rows" style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black' }}>Your Name</p>

        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: '5px' }}>
          {isEditingName ? (
            <>
              <input type="text" value={newName} onChange={e => setNewName(e.target.value)} className="profile-data-values" />
              <button className="edit-button" onClick={handleNameSubmit}>
                Save
              </button>
            </>
          ) : (
            <>
              <p className="profile-data-values">{user.name}</p>
              <button className="edit-button" onClick={handleNameEdit}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>
      {/* username */}
      <div className="professional_details">
        <div>
          <p className="profile_data_rows" style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black' }}>Username</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: '5px' }}>
          {isEditingUsername ? (
            <>
              <input type="text" value={newUsername} onChange={e => setNewUsername(e.target.value)} className="profile-data-values" />
              <button className="edit-button" onClick={handleUsernameSubmit}>
                Save
              </button>
            </>
          ) : (
            <>
              <p className="profile-data-values">{user.username}</p>
              <button className="edit-button" onClick={handleUsernameEdit}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>
      {/* //email */}
      <div className="professional_details">
        <div>
          <p className="profile_data_rows" style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black' }}>Email</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: '5px' }}>
          {isEditingEmail ? (
            <>
              <input type="text" value={newEmail} onChange={e => setNewEmail(e.target.value)} className="profile-data-values" />
              <button className="edit-button" onClick={handleEmailSubmit}>
                Save
              </button>
            </>
          ) : (
            <>
              <p className="profile-data-values">{user.email}</p>
              <button className="edit-button" onClick={handleEmailEdit}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>
      {/* College */}
      <div className="professional_details">
        <div>
          <p className="profile_data_rows" style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black' }}>College</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: '5px' }}>
          {isEditingCollege ? (
            <>
              <input type="text" value={newCollege} onChange={e => setNewCollege(e.target.value)} className="profile-data-values" />
              <button className="edit-button" onClick={handleCollegeSubmit}>
                Save
              </button>
            </>
          ) : (
            <>
              <p className="profile-data-values">{user.college}</p>
              <button className="edit-button" onClick={handleCollegeEdit}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>
      {/* branch */}
      <div className="professional_details">
        <div>
          <p className="profile_data_rows" style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black' }}>Branch</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: '5px' }}>
          {isEditingBranch ? (
            <>
              <input type="text" value={newBranch} onChange={e => setNewBranch(e.target.value)} className="profile-data-values" />
              <button className="edit-button" onClick={handleBranchSubmit}>
                Save
              </button>
            </>
          ) : (
            <>
              <p className="profile-data-values">{user.branch}</p>
              <button className="edit-button" onClick={handleBranchEdit}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>
      {/* year */}
      <div className="professional_details">
        <div>
          <p className="profile_data_rows" style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black' }}>Email</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: '5px' }}>
          {isEditingYear ? (
            <>
              <input type="text" value={newYear} onChange={e => setNewYear(e.target.value)} className="profile-data-values" />
              <button className="edit-button" onClick={handleYearSubmit}>
                Save
              </button>
            </>
          ) : (
            <>
              <p className="profile-data-values">{user.year}</p>
              <button className="edit-button" onClick={handleyearEdit}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Opinions({ user }) {
  const [isEditingAcademicOpinion, setIsEditingAcademicOpinion] = useState(false);
  const [newAcademicOpinion, setNewAcademicOpinion] = useState(user.AcademicOpinion);
  
  const [isEditingNonAcademicOpinion, setIsEditingNonAcademicOpinion] = useState(false);
  const [newNonAcademicOpinion, setNewNonAcademicOpinion] = useState(user.NonAcademicOpinion);
  
  const [isEditingPlacementOpinion, setIsEditingPlacementOpinion] = useState(false);
  const [newPlacementOpinion, setNewPlacementOpinion] = useState(user.PlacementOpinion);
  
  const [isEditingOverallOpinion, setIsEditingOverallOpinion] = useState(false);
  const [newOverallOpinion, setNewOverallOpinion] = useState(user.OverallOpinion);

  const handleAcademicOpinionEdit = () => {
    setIsEditingAcademicOpinion(true);
  };
  const handleNonAcademicOpinionEdit = () => {
    setIsEditingNonAcademicOpinion(true);
  };
  const handlePlacementOpinionEdit = () => {
    setIsEditingPlacementOpinion(true);
  };
  const handleOverallOpinionEdit = () => {
    setIsEditingOverallOpinion(true);
  };

  const handleAcademicOpinionSubmit = () => {
    axios
      .patch(`http://localhost:5000/users/profile/updateAcademicOpinion/${user.email}`, { AcademicOpinion: newAcademicOpinion })
      .then(response => {
        console.log(response.data);
        setIsEditingAcademicOpinion(false);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error updating Acadmeic Opinion:', error);
      });
  };
  const handleNonAcademicOpinionSubmit = () => {
    axios
      .patch(`http://localhost:5000/users/profile/updateNonAcademicOpinion/${user.email}`, { NonAcademicOpinion: newNonAcademicOpinion })
      .then(response => {
        console.log(response.data);
        setIsEditingNonAcademicOpinion(false);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error updating Non Acadmeic Opinion:', error);
      });
  };
  const handlePlacementOpinionSubmit = () => {
    axios
      .patch(`http://localhost:5000/users/profile/updatePlacementOpinion/${user.email}`, { PlacementOpinion: newPlacementOpinion })
      .then(response => {
        console.log(response.data);
        setIsEditingPlacementOpinion(false);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error updating Placement Opinion:', error);
      });
  };
  const handleOverallOpinionSubmit = () => {
    axios
      .patch(`http://localhost:5000/users/profile/updateOverallOpinion/${user.email}`, { OverallOpinion: newOverallOpinion })
      .then(response => {
        console.log(response.data);
        setIsEditingOverallOpinion(false);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error updating Acadmeic Opinion:', error);
      });
  };
  return (
    <div className="opinions">
      <p style={{ textAlign: 'center', fontSize: '30px', marginTop: "15px", marginBottom: "15px", fontWeight: '500' }}>Opinions</p>
      <div className="opinions_details">
        <div>
          <p className="opinions_data_rows" style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black' }}>Academic Opinion</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: '5px' }}>
          {isEditingAcademicOpinion ? (
            <>
              <input type="text" value={newAcademicOpinion} onChange={e => setNewAcademicOpinion(e.target.value)} className="opinions-data-values" onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAcademicOpinionSubmit();
          }
        }} />
              <button className="edit-button" onClick={handleAcademicOpinionSubmit}>
                Save
              </button>
            </>
          ) : (
            <>
              <p className="opinions-data-values">{user.AcademicOpinion}</p>
              <button className="edit-button" onClick={() => setIsEditingAcademicOpinion(true)}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>
      <div className="opinions_details">
        <div>
          <p className="opinions_data_rows" style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black' }}>Non Academic Opinion</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: '5px' }}>
          {isEditingNonAcademicOpinion ? (
            <>
              <input type="text" value={newNonAcademicOpinion} onChange={e => setNewNonAcademicOpinion(e.target.value)} className="opinions-data-values"  onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleNonAcademicOpinionSubmit();
          }
        }}/>
              <button className="edit-button" onClick={handleNonAcademicOpinionSubmit}>
                Save
              </button>
            </>
          ) : (
            <>
              <p className="opinions-data-values">{user.NonAcademicOpinion}</p>
              <button className="edit-button" onClick={() => setIsEditingNonAcademicOpinion(true)}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>
      <div className="opinions_details">
        <div>
          <p className="opinions_data_rows" style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black' }}>Placement Opinion</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: '5px' }}>
          {isEditingPlacementOpinion ? (
            <>
              <input type="text" value={newPlacementOpinion} onChange={e => setNewPlacementOpinion(e.target.value)} className="opinions-data-values" onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handlePlacementOpinionSubmit();
          }
        }}/>
              <button className="edit-button" onClick={handlePlacementOpinionSubmit}>
                Save
              </button>
            </>
          ) : (
            <>
              <p className="opinions-data-values">{user.PlacementOpinion}</p>
              <button className="edit-button" onClick={() => setIsEditingPlacementOpinion(true)}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>
      <div className="opinions_details">
        <div>
          <p className="opinions_data_rows" style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black' }}>Overall Opinion</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: '5px' }}>
          {isEditingOverallOpinion ? (
            <>
              <input type="text" value={newOverallOpinion} onChange={e => setNewOverallOpinion(e.target.value)} className="opinions-data-values"  onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleOverallOpinionSubmit();
          }
        }}/>
              <button className="edit-button" onClick={handleOverallOpinionSubmit}>
                Save
              </button>
            </>
          ) : (
            <>
              <p className="opinions-data-values">{user.OverallOpinion}</p>
              <button className="edit-button" onClick={() => setIsEditingOverallOpinion(true)}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>
      {/* Define similar sections for other opinions... */}
    </div>
  );
}

export default CollegeGoingProfile;
