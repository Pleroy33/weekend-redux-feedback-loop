/**This page was an abandoned idea.   I left it here for the sake of showing my thought process at the tiem. */



// import React from 'react';  //bring in react 
// import axios from 'axios';  //bring in axios if needed for CRUD endpoints
// import { HashRouter as Router, Route, Link } from "react-router-dom";//bring in Hashrouter for path usage
// import store from '../../store';
// import { useState } from 'react';//bring in useState for local state
// import { useDispatch } from 'react-redux'; //bring in useDispatch for reducers 
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';//


// function FeedbackForm({ question, direction, viewName, routePath,inputType }) {
//     console.log('in viewName feedback form', viewName)
//     const reduxStore = useSelector(store => store);
//     const history = useHistory();

//     const [input, setInput] = useState('');
//     const dispatch = useDispatch();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const newInput = { input };
//         console.log('Submitting newInput:', newInput);
//         dispatch({ type: "Set_New_Input", payload: newInput });
//         setInput('')
//         history.push(routePath)
//     }




//     return (
//         <>
//             <div className='App'>
//                 <header className='App-header'>
//                     <h1 className='App-title'>Feedback!</h1>
//                     <h4>Don't forget it!</h4>

//                 </header>
//                 <h2>{question}</h2>
//                 <p>{direction}</p>
//                 <form onSubmit={handleSubmit}>
//                     <input type={inputType} placeholder='Please answer here' value={input} onChange={(event) => setInput(event.target.value)} />
//                     <button type="submit" data-testid="next">
//                         Next
//                     </button>
//                 </form>



//             </div>

//         </>

//     )
// }

// export default FeedbackForm