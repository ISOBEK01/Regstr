
import './App.css';
import tabiat from "./assets/images/s.jpg";
import g from "./assets/images/g.png";
import w from "./assets/images/w.jpg";
function App() {
  return (
    <div>
      <div className="container">
      <div className="box">
        <span>
          <img src={tabiat} alt="" />
          <div className="h2">
            <h2>Untitled UI</h2></div>
        </span>
        <div className="ce">
          <center><h1>Welcome back, Olivia</h1>
            <p>Contine with Google or enter your detalis</p></center>
          <button><img src={g} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;Login in with detalis.</button>
          <span>
            <div className="hr">
              <hr /> </div>
            <h4>or</h4>
            <div className="hr1">
              <hr /></div>
            <form action="">
              <center>
                <input required minLength={3} maxLength={45} placeholder='Email' type="email" name="" id="" />
                <input placeholder='Password' required minLength={3} maxLength={45} type="password" name="" id="" /></center>
            </form>
          </span>
        </div>
        <div className="in">
          <form>
           <label htmlFor="j">
           <input type="checkbox" name="" id="j" />
           &nbsp;&nbsp; Remember for 30 days
           </label>
          </form>
          <h2>Forgot password</h2>
        </div>
        <div className="bu">
          <button>Login</button>
          <h3>Don't have account? <span>Sign up for free</span></h3>
        </div>
      </div>
      <div className="i">
      <img src={w} alt="" /></div>
      </div>
    </div>

  );
}

export default App;
