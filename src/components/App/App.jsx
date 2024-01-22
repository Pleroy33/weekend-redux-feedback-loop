import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  

  return (
    <div>
    <Router>
    <Route path= "/" exact>
      <FeedbackForm question="How are you feeling today?" 
      direction='Please choose between 1-5 with 5 being the highest'
      viewName='Feeling'
      />
    </Route>
   

    </Router>
    
    </div>
  
  )
}

export default App;
