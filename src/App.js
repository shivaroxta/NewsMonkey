import "./App.css";

import React, { useState } from "react";

import  NavBar  from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router ,Route, Routes  } from "react-router-dom";

const App=()=> {
  
  const [progress, setProgress] = useState(0)

  

 
    return (
      <div>
       

      <Router>
      <NavBar/> 
      <Routes>
      <Route path="" setProgress={setProgress}   element = {<News pageSize = {5} country = "in" category = "general"/>}/>
      <Route path="/business" setProgress={setProgress}   element = {<News key="business" pageSize = {5} country = "in" category = "business"/>}/>
      <Route path="/entertainment" setProgress={setProgress}   element = {<News key ="entertainment" pageSize = {5} country = "in" category = "entertainment"/>}/>
      <Route path="/general"  setProgress={setProgress}  element = {<News key ="general" pageSize = {5} country = "in" category = "general"/>}/>
      <Route path="/health" setProgress={setProgress}   element = {<News key ="health" pageSize = {5} country = "in" category = "health"/>}/>
      <Route path="/science" setProgress={setProgress}  element = {<News key="science" pageSize = {5} country = "in" category = "science"/>}/>
      <Route path="/sports" setProgress={setProgress}  element = {<News key="sports" pageSize = {5} country = "in" category = "sports"/>}/>
      <Route path="/technology"setProgress={setProgress}   element = {<News key="technology" pageSize = {5} country = "in" category = "technology"/>}/>
 
      </Routes>
      </Router>
      
    </div>
    
  )}
  export default  App
