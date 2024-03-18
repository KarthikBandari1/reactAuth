import "./index.css";
import { googleEl } from "../../assets/index.js";
import { appleEl } from "../../assets/index.js";

function SignIn(props) {
  const { login } = props;
  return (
    <div className="sign-in-cont">
      <div className="left-cont">
        <p className="board-text">Board.</p>
      </div>
      <div className="right-cont">
        <div>
          <p className="sign-in-text">Sign In</p>
          <p className="sign-down">Sign in to your account</p>
          <div className="df">
            <button onClick={login} className="small-card-cont">
              <img className="google-icon" src={googleEl} alt="google" />
              <p className="small-card-text">Sign in with Google</p>
            </button>

            <button className="small-card-cont">
              <img className="google-icon" src={appleEl} alt="apple" />
              <p className="small-card-text">Sign in with Apple</p>
            </button>
          </div>
        </div>
        <div className="form-cont">
          <label className="form-label">Email address</label>
          <br />
          <input className="input" type="text" />
          <br />
          <label>Password</label>
          <br />
          <input className="input" type="password" />
          <p className="fp">Forgot password?</p>
          <button className="sign-but">Sign In</button>
        </div>
        <p className="dont">
          Don’t have an account? <span>Register here</span>
        </p>
      </div>
    </div>
  );
}
export default SignIn;
