import "./commenterReg.css"
import { Link } from "react-router-dom";

export default function CommenterReg() {
    return (
        <div className="register">
          <span className="registerTitle">Register as Commenter</span>
            <p>If you want to REGISTER as Blogger, then click here: </p>
                <button>
                  <Link className="link" to="/register">
                    Blogger Registration
                  </Link>
                </button>
            <form className="registerForm">
              <label>Username</label>
              <input className="registerInput" type="text" placeholder="Enter your username..." />
              <label>Email</label>
              <input className="registerInput" type="text" placeholder="Enter your email..." />
              <label>Password</label>
              <input className="registerInput" type="password" placeholder="Enter your password..." />
              <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    )
}
