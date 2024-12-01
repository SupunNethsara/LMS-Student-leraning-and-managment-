import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActiveUsers = () => {
  const [activeUserCount, setActiveUserCount] = useState(0);
  const [activeUserDetails, setActiveUserDetails] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchActiveUsers = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/active-users');
        const { count, users } = response.data;

        setActiveUserCount(count);
        setActiveUserDetails(users);
      } catch (error) {
        console.error('Error fetching active users:', error);
        setError('Failed to fetch active user data.');
      }
    };

    fetchActiveUsers();
    const interval = setInterval(fetchActiveUsers, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <h2>Active Users</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Total Active Users: {activeUserCount}</p>
      <ul>
        {activeUserDetails.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}) - Role: {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveUsers;
