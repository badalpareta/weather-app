import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Weather,{FiveDay} from './Weather'
import "./Account.css";
let Account = () => {
  let [city, setCity] = useState("");
  let aboutRef = useRef();
  let navigate = useNavigate();
  let [forecastData, setData] = useState();
  useEffect(() => {
    if (localStorage.getItem("User") === null) {
      navigate("/");
    }
  }, []);

  let handleCity = (e) => {
    setCity(e.target.value)
    }

  let handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  let handleAbout = () => {
    aboutRef.current.style.visibility = "visible";
  };
  let closeAbout = () => {
    aboutRef.current.style.visibility = "hidden";
  };
 
  return (
    <div className="account">
      <div ref={aboutRef} className="about-container">
        <button id="close-about" onClick={closeAbout} children="X" />
        <h2>About Us Information</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit
          doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
          deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
          velit hic maxime doloremque. Quaerat provident commodi consectetur
          veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates
          pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
          excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
          Voluptatem quaerat non architecto ab laudantium modi minima sunt esse
          temporibus sint culpa, recusandae aliquam numquam totam ratione
          voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
          aliquam eligendi, placeat qui corporis!
        </p>
      </div>
      <button id="logout-btn" onClick={handleLogout} children="Logout" />
      <div>
        {" "}
        <h3>Select City</h3>
        <select  onChange={handleCity}>
          <option selected disabled children="List of Cities" />
          <option value="Chennai" children="Chennai" />
          <option value="Delhi" children="Delhi" />
          <option value="Kolkata" children="Kolkata" />
          <option value="Mumbai" children="Mumbai" />
        </select>
      </div>
      <div className="weather-details">
        <div className="details">
          <p>Current Weather Data</p>
          <Weather city={city}/>
        </div>
        <div className="details">
          5 Day Weather Forecast
       <FiveDay city={city}/>
        </div>
      </div>
      <button id="about-btn" onClick={handleAbout}>
        About Us
      </button>
    </div>
  );
};
export default Account;
