import React, {useEffect, useState} from 'react';
import Profiles from "./components/profiles.js";


function App() {
  const[users, setUsers] = useState([]);

  const initialUrl = "https://randomuser.me/api/?results=15"
  const fetchUsers = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setUsers(data.results))
    .catch(error => console.log(error))

  };
  useEffect(() =>{
    fetchUsers(initialUrl);

  }, [])
  
  return (
    <>
    <div className="head1">
      <div className="flecha">
      <img  src="flecha.png" alt=""></img></div>
      <div className="titulo">
      <h1>Perfiles de usuarios</h1></div>
    </div>
    
    <div>
      <Profiles users={users}/>

    </div>
    </>
  );
}

export default App;
