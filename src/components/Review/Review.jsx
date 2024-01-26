import { useState } from 'react';//bring in useState for local state
import { useDispatch, useSelector } from 'react-redux'; //bring in useDispatch for reducers 
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';//


function PostRatings() {

    const feeling = useSelector(store => store.feeling)
    const understanding = useSelector(store => store.understanding)
    const support = useSelector(store => store.support)
    const comments = useSelector(store => store.comments)
    const history = useHistory()

    console.log(feeling.feeling)


    const handleSubmit = (event) => {
        event.preventDefault();

        const newFeedback = {
            feeling: feeling.feeling,
            understanding: understanding.understanding,
            support: support.support,
            comments: comments.comments

        }
        console.log('Submitting newRatings:', newFeedback);
        axios.post('/api/feedback', newFeedback)
            .then(response => {
                console.log()
            })
            .catch(error => {
                console.error(error)

            })

    };





    return (

        <div className='App'>
            <header className='App-header'>
                <h1 className='App-title'>Review Your Feedback!</h1>
                <h4>Thanks for your input!</h4>

            </header>
            <div>
                <h2>feeling: {feeling.feeling}</h2>
                <h2>understanding: {understanding.understanding}</h2>
                <h2>support: {support.support}</h2>
                <h2>comments: {comments.comments}</h2>
            </div>



            <form onSubmit={handleSubmit}>
                <label htmlFor="review">Click here when you're ready to submit!</label>
                <button type="submit" data-testid="next">
                    Submit
                </button>
            </form>



        </div>



    )
}

export default PostRatings






