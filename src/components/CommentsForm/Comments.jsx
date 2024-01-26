import React from 'react';  //bring in react 
import { useState } from 'react';//bring in useState for local state
import { useDispatch } from 'react-redux'; //bring in useDispatch for reducers 
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';//

function CommentsForm(){
    const reduxStore = useSelector(store => store);
    const history = useHistory();

    const [newComments, setNewComments] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting newComments:', newComments);
        dispatch({ type: "SET_COMMENTS", payload: newComments });
        setNewComments('')
        history.push('/review')
    }
    return (
        <>
            <div className='App'>
                <header className='App-header'>
                    <h1 className='App-title'>Feedback!</h1>
                    <h4>Don't forget it!</h4>

                </header>
                <h2>Any comments you want to leave?</h2>
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor ="comments"> Please answer here </label>
                    <input type="text" id="comments"  value={newComments} onChange={(event) => setNewComments(event.target.value)} />
                    <button type="submit" data-testid="next">
                        Next
                    </button>
                </form>



            </div>

        </>

    )
}

export default CommentsForm