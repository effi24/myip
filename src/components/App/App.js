import './App.css';
import { useEffect, useState } from 'react';
import { internalIpV4 } from 'internal-ip';


function App() {
  useEffect(() => {
    internalIpV4().then((res) => {
      console.log(res);
    })
  },[])

  return (
    <div className="App">
    </div>
  );
}

export default App;
