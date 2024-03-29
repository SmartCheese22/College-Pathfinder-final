import React, {useState,useEffect} from 'react';
import './profileAdmin.css';
import gravatar from 'gravatar';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminProfile({ user }) {
    const [userCounts, setUserCounts] = useState({});
    
    useEffect(() => {
        axios.get('http://localhost:5000/users/user-count') 
        .then(response => {
            setUserCounts(response.data);
        })
        .catch(error => {
            console.error('Error fetching user counts:', error);
        });
    }, []);

  return (
    <div className="profile-container">
      <div className="profile">
        <ProfileSection user={user} />
        <DeleteUser user={user}/>
        <DonutChart userCounts={userCounts} />
      </div>
    </div>
  );
}

function DonutChart({ userCounts }) {
    const series = [userCounts.collegeS, userCounts.collegeG, userCounts.admin];
    const options = {
      labels: ['College Searching', 'College Going', 'Admins'],
      chart: {
        type: 'donut',
      },
    };
    return (
      <div className="professional" style={{display:"grid", marginTop:"90px", marginBottom:"20px"}}>
        <p style={{ textAlign: 'center', fontSize: '30px', marginTop: '15px', marginBottom: '15px', fontWeight: '500' }}>
            User Distribution
        </p>
        <div style={{ maxHeight: '100%', overflow: 'hidden' }}>
        <ReactApexChart options={options} series={series} type="donut" />
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
  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newUsername, setNewUsername] = useState(user.username);

  const handleNameEdit = () => {
    setIsEditingName(true);
  };
  const handleUsernameEdit = () => {
    setIsEditingUsername(true);
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
              <input type="text" value={newName} onChange={e => setNewName(e.target.value)} className="profile-data-values" onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleNameSubmit();
          }
        }}/>
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
              <input type="text" value={newUsername} onChange={e => setNewUsername(e.target.value)} className="profile-data-values" onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleUsernameSubmit();
          }
        }}/>
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
              <input type="text" value={newEmail} onChange={e => setNewEmail(e.target.value)} className="profile-data-values" onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleEmailSubmit();
          }
        }}/>
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
    </div>
  );
}
function DeleteUser({ user }) {
    const [deleteBy, setDeleteBy] = useState('email'); // Default to delete by email
    const [deleteInput, setDeleteInput] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [error, setError] = useState('');
  
    const handleDeleteByChange = (event) => {
      setDeleteBy(event.target.value);
    };
  
    const handleDeleteInputChange = (event) => {
      setDeleteInput(event.target.value);
      setError(''); // Reset error state when input changes
    };
  
    const handleDelete = () => {
      if (deleteInput.trim() === '') {
        setError('Please enter a valid email or username.');
        return;
      }
  
      // Determine the endpoint based on the selected deleteBy option
      const deleteEndpoint =
        deleteBy === 'email'
          ? `http://localhost:5000/users/profile/deleteByEmail/${deleteInput}`
          : `http://localhost:5000/users/profile/deleteByUsername/${deleteInput}`;
  
      if (showConfirmation) {
        axios
          .delete(deleteEndpoint)
          .then((response) => {
            console.log(response.data);
            setShowConfirmation(false);
          })
          .catch((error) => {
            console.error('Error deleting user:', error);
          });
      } else {
        setShowConfirmation(true);
      }
    };
  
    return (
      <div className="professional" style={{display:"grid", marginTop:"90px", marginBottom:"20px"}}>
        <p style={{ textAlign: 'center', fontSize: '30px', marginTop: '15px', marginBottom: '15px', fontWeight: '500' }}>
          Delete User
        </p>
        <div className="profile_data_rows">
          <select value={deleteBy} onChange={handleDeleteByChange} className="delete_select">
            <option value="email">Delete by Email</option>
            <option value="username">Delete by Username</option>
          </select>
        </div>
        <div className="profile_data_rows">
          <input type="text" value={deleteInput} onChange={handleDeleteInputChange} placeholder={`Enter ${deleteBy}`} className="delete-input"/>
        </div>
        <div className="profile_data_rows">
            {showConfirmation && (
            <div className="confirmation-modal">
              <p>Are you sure you want to delete?</p>
              <button onClick={handleDelete} className="confirm-button">Confirm Delete</button>
              <button onClick={() => setShowConfirmation(false)} className="cancel-button">Cancel</button>
            </div>
          )}
          {!showConfirmation && <button onClick={handleDelete} className="delete-button">Delete</button>}
        </div>
        <div className="profile_data_rows">
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    );
  }
  
export default AdminProfile;
