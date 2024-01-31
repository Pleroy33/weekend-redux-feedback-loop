import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ThankYou() {
    console.log("inside ThankYou");

    const dispatch = useDispatch();
    const history = useHistory();

    const handleReset = () => {
        console.log('inside handleReset')
        dispatch({ type: 'RESET_STORE' })

        history.push('/')
    };
    return (
        <>
            <div className='App'>
                <header className='App-header'><h1>Thank You </h1>
                </header>

                <h4>Your feedback is greatly appreciated and will be reviewed by staff</h4>

                <button data-testid="next" onClick={handleReset}>Take the survey again!!</button>
            </div>
        </>
    )
}

export default ThankYou