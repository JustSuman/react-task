import { useState } from "react";
import Homepage from "./components/Homepage";
import LoginPage from "./components/LoginPage.jsx";

function App() {
  //check if the user is logged in or not with state
  const [loginStatus, setLoginStatus] = useState(false);
  //conitional rendering
  if (!loginStatus) {
    return <LoginPage setLoginStatus={setLoginStatus} />;
  } else {
    return <Homepage setLoginStatus={setLoginStatus} />;
  }
}

export default App;
