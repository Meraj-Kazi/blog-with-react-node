import "./commenterLogin.css";
import { Link } from "react-router-dom";

export default function CommenterLogin() {
    return (
        <div className="login">
          <span className="loginTitle">Login as Commenter</span>
          <p>If you want to LOGIN as Blogger, then click here: </p>
                <button>
                  <Link className="link" to="/login">
                    Blogger Login
                  </Link>
                </button>
          <form className="loginForm">
            <label>Username</label>
            <input className="loginInput" type="text" placeholder="Enter your username..." />
            <label>Password</label>
            <input className="loginInput" type="password" placeholder="Enter your password..." />
            <button className="loginButton">Login</button>
          </form>
            <button className="loginRegisterButton">Register</button>
        </div>
    )
}
