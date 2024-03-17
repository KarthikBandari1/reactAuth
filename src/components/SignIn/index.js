import "./index.css";

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
          <img src="../../assets/google.png" alt="google" />
          <p className="small-card-text">Sign in with Google</p>
        </div>
        <p className="small-card-cont">
          <img src="../../assets/apple.png" alt="apple" />
          <p className="small-card-text">Sign in with Apple</p>
        </p>
      </div>
    </div>
  </div>
);

export default SignIn;
