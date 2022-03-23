import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Account from "./Account";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/account" exact element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
