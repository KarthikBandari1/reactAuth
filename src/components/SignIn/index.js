import "./index.css"
import {googleEl} from "../../assets/index.js"
import {appleEl} from "../../assets/index.js"
const SignIn = () => (
  <div className="sign-in-cont">
    <div className="left-cont">
      <p className="board-text">Board.</p>
    </div>
    <div className="right-cont">
      <p>Sign In</p>
      <p>Sign in to your account</p>
      <div className="df">
        <div className="small-card-cont">
          <img src={googleEl} alt="google" />
          <p className="small-card-text">Sign in with Google</p>
        </div>
        <div className="small-card-cont">
          <img src={appleEl} alt="apple" />
          <p className="small-card-text">Sign in with Apple</p>
        </div>
      </div>
    </div>
  </div>
);

export default SignIn;
