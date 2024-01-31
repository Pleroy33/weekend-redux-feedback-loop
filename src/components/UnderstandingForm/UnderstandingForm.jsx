import React from 'react';  //bring in react 
import { useState } from 'react';//bring in useState for local state
import { useDispatch } from 'react-redux'; //bring in useDispatch for reducers 
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';//

function UnderstandingForm() {
    console.log('in viewName feedback form')
    const reduxStore = useSelector(store => store);
    const history = useHistory();

    const [newUnderstanding, setNewUnderStanding] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting newUnderstanding:', newUnderstanding);
        dispatch({ type: "SET_UNDERSTANDING", payload: newUnderstanding });
        setNewUnderStanding('')
        history.push('/support')
    }
    return (
        <>
            <div className='App'>
                <header className='App-header'>
                    <h1 className='App-title'>Feedback!</h1>
                    <h4>Don't forget it!</h4>

                </header>
                <h2>How well are you understanding the content?</h2>
                <p>Please choose between 1-5 with 5 being the highest</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="understanding">Please answer here</label>
                    <input type="number" id="understanding" min="1" max="5" data-testid="input" value={newUnderstanding} onChange={(event) => setNewUnderStanding(event.target.value)} />
                    <button type="submit" data-testid="next">
                        Next
                    </button>
                </form>



            </div>

        </>

    )
}

export default UnderstandingForm
