import TaskManager from "./taskmanager";

const Homepage = ({ setLoginStatus }) => {
  //handling logout
  const logout = () => {
    setLoginStatus(false);
  };
  return (
    <>
      <button onClick={logout} className="logout-btn">
        Logout
      </button>
      <TaskManager />
    </>
  );
};

export default Homepage;
