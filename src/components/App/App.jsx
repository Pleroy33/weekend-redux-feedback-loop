import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentsForm from '../CommentsForm/Comments';
import PostRatings from '../Review/Review';
import ThankYou from '../Success/Success';
function App() {


  return (
    <div>
      <Router>
        <Route path="/" exact>
          <FeelingForm />
        </Route>

        <Route path="/understanding" >
          <UnderstandingForm />
        </Route>

        <Route path="/support" >
          <SupportForm />
        </Route>

        <Route path="/comments" >
          <CommentsForm />
        </Route>

        <Route path="/review" >
          <PostRatings />
        </Route>

        <Route path="/success" >
          <ThankYou />
        </Route>










      </Router>

    </div>

  )
}

export default App;
