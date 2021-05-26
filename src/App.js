import React, { useState } from "react";
import "./App.scss";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";

function App() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState({});

  const getUserData = () => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  // console.log(user);
  // console.log(userData);

  return (
    <div className="App">
      <Form setUser={setUser} user={user} getUserData={getUserData} />
      <Results userData={userData} />
    </div>
  );
}

export default App;
