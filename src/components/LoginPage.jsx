import {useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = ({setLoginStatus}) => {
    //states
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    //handle the submission
    const formSubmission = (e) => {
        e.preventDefault()
        if (user==='admin' && pass==='admin'){
            setLoginStatus(true)
        }
        else{
            toast.error("Invalid Credentials, for test purpose use 'admin','admin'!")
        }
    }
    return (<>
      <div className="form-wrapper">
        <img
          src="https://images.pexels.com/photos/5998739/pexels-photo-5998739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <form className="login-form" onSubmit={formSubmission}>
          <h1>Task Manager</h1>
          <div>
            <label>Username</label>
            <input
              placeholder="Enter your username"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <label>Password</label>
            <input
              placeholder="Enter your password"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>)
}

export default LoginPage;