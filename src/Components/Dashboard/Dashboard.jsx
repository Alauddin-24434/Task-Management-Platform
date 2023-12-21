import { useEffect, useState } from 'react';
import TaskList from './TaskList';


const Dashboard = () => {
  const [userData, setUserData] = useState({}); // State for storing user data

  useEffect(() => {
    // Fetch user data (tasks, profile information) from the backend/API
    // Update state using setUserData
  }, []); // Trigger the effect on component mount

  return (
    <div className="dashboard">
      <h2>Welcome, {userData?.username}!</h2>
      <img src={userData.profilePicture} alt="Profile" />
      
      {/* Task Lists */}
      <TaskList title="To-Do" tasks={userData?.todoTasks} />
      <TaskList title="Ongoing" tasks={userData?.ongoingTasks} />
      <TaskList title="Completed" tasks={userData?.completedTasks} />
    </div>
  );
};

export default Dashboard;
