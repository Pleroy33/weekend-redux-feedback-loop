import React from 'react';  //bring in react 
import { useState } from 'react';//bring in useState for local state
import { useDispatch } from 'react-redux'; //bring in useDispatch for reducers 
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';//

function FeelingForm() {
    const reduxStore = useSelector(store => store);
    const history = useHistory();

    const [newFeeling, setNewFeeling] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting newFeeling:', newFeeling);
        dispatch({ type: "SET_FEELING", payload: newFeeling });
        setNewFeeling('')
        history.push('/understanding')
    }
    return (
        <>
            <div className='App'>
                <header className='App-header'>
                    <h1 className='App-title'>Feedback!</h1>
                    <h4>Don't forget it!</h4>

                </header>
                <h2>How are you feeling today?</h2>
                <h3>Please choose between 1-5 with 5 being the highest</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Feeling">Please answer here</label>
                    <input type="number" id="Feeling" min="1" max="5" value={newFeeling} onChange={(event) => setNewFeeling(event.target.value)} />
                    <button type="submit" data-testid="next">
                        Next
                    </button>
                </form>



            </div>

        </>

    )
}

export default FeelingForm