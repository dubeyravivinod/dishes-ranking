import { useState } from "react";
import Login from "./components/Layout/Login/Login";
import Navbar from "./components/Nav/Navbar";

function App() {

  const [user, setUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setUsername = (username) => {
    console.log("usernmae:: ", username);
    setUser(username);
    setIsLoggedIn(true);
  }

  return (
    <div className="App">
      <Navbar loggedInUser={user} loggedIn={isLoggedIn} setLogout={()=>setIsLoggedIn(false)} />
      <Login getUser={setUsername} loggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
