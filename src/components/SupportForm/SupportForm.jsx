import React from 'react';  //bring in react 
import { useState } from 'react';//bring in useState for local state
import { useDispatch } from 'react-redux'; //bring in useDispatch for reducers 
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';//

function SupportForm(){
    const reduxStore = useSelector(store => store);
    const history = useHistory();

    const [newSupport, setNewSupport] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting newSupport:', newSupport);
        dispatch({ type: "SET_SUPPORT", payload: newSupport });
        setNewSupport('')
        history.push('/comments')
    }
    return (
        <>
            <div className='App'>
                <header className='App-header'>
                    <h1 className='App-title'>Feedback!</h1>
                    <h4>Don't forget it!</h4>

                </header>
                <h2>How well are you being supported?</h2>
                <p>Please choose between 1-5 with 5 being the highest</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor ="Support"> Please answer here </label>
                    <input type="number" id="Support"  min="1"  max="5" data-testid="input" value={newSupport} onChange={(event) => setNewSupport(event.target.value)} />
                    <button type="submit" data-testid="next">
                        Next
                    </button>
                </form>



            </div>

        </>

    )
}

export default SupportForm