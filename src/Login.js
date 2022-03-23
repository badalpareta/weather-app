import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

let Login = () => {
  let [username, setUser] = useState("");
  let [password, setPass] = useState("");
  let navigate = useNavigate();
  let handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "pass") {
        navigate("/account")
      localStorage.setItem("User", username);
    } else {
      alert("Please fill these, Username:user & Password:pass");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <form onSubmit={handleSubmit}>
        <h3 style={{ textAlign: "center", textTransform: "uppercase" }}>WEATHER APP</h3>
        <input
          value={username}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="Username"
          className="inputbox"
        />
        <input
          value={password}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Password"
          className="inputbox"
        />
        <button id="submit-btn" type="submit" children="Submit" />
      </form>
    </div>
  );
};
export default Login;
