import React, { useEffect,useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const res = await fetch (`https://fakestoreapi.com/product`);
    const data = await res.json();
    setUsers(data);
  };

  return(
    <div>
      <h1>Fetching Data</h1>
      <button onClick={getData}>Search</button>
    <div>
    {users.map((user) => (
      <div key={user.email}>{user.email}</div>
    ))}
    </div>
    </div>
  )
}
    

  
  


export default App
