import React,{useState ,useEffect}from 'react'

function Profile() {
  
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
        setProfile(savedProfile);
    }
}, []);
  
  return (
    <div className="profile">
    {profile ? (
        <div>
            <h2>{profile.fname} {profile.lname}</h2>
            <p>Email: {profile.email}</p>
            <p>Course: {profile.corce}</p>
            <p>Gender: {profile.gender}</p>
            {/* Display other profile details */}
        </div>
    ) : (
        <p>Loading profile...</p>
    )}
</div>
  );
}

export default Profile