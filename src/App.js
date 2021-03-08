import './App.css'; 
import React from 'react'; 
import ProfilPhoto from './Component/Profil/ProfilPhoto'; 
import FullName from './Component/Profil/FullName'; 
import Adress from './Component/Profil/Adress';


function App() {
  return (
    <div style={{border:'solid , 5px , #314e52' , maxWidth:'100vW'}} className="App">  
    <FullName/>
    <ProfilPhoto/> 
    <Adress/>
    
    </div>
  );
}

export default App;
