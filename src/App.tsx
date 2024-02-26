import './App.css'
import logo from "./assets/logo.png"
import facebook from "./assets/facebook.png"
import insta from "./assets/instagram.png"
import linkedin from "./assets/linkedin.png"

function App() {

  return (
    <>
      <div className="main-div">
        <img id="logo" src={logo} alt="logo" width={150} />
        <h4>Coming Soon</h4>

        <div className="social-media">
         <a href="https://www.facebook.com/profile.php?id=61555132777586" target="blank"> <img src={facebook} alt="facebook" width={35} /> </a>
         <a href="https://www.instagram.com/timp_eats" target="blank"> <img src={insta} alt="insta" width={35} /> </a>
          <a href="https://in.linkedin.com/company/timp-eats" target="blank">
            <img src={linkedin} alt="linkedin" width={35} />
          </a>
        </div>
      </div>
    </>
  )
}

export default App
