import React, { useEffect,useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const res = await fetch (`https://fakestoreapi.com/products`);
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
  function byecookies(){
   var cookies = $.cookie();
   for(var cookie in cookies){
    $removeCookie(cookie);
   }
  }

}
    

  
  


export default App
