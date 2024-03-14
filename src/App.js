import React, { useState } from 'react';
import './App.css';
import Navbar from './componant/Navbar';
import TextFrom from './componant/TextFrom';
// import About from './componant/About';
import Alert from './componant/Alert';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // Set default mode to 'light'

  const [alert , setAlert]=useState(null);
  const showAlert = (message , type) =>{
      setAlert({
          msg:message,
          type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
      
      // setInterval(() => {
      //   document.title = 'TextUtil is Amazing Mode';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install TextUtil Now';
      // }, 1500);
  }

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode is Enable","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor ='white';
      showAlert("Light mode is Enable","success");
    }
  };

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container" mx-3>
      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          
          {/* <Route exact path="/"> */}
          <TextFrom showAlert={showAlert} heading="Enter Text" mode={mode}/>
          {/* </Route>
        </Switch> */}
      
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
