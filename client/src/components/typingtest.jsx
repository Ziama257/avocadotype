import React, { useState, useEffect } from "react";
import axios from 'axios';
const TypingTest = () => {
    const texts = [
    "the cat in the hat",
    "all is fair in love and war",
    "the early bird catches the worm",
    "actions speak louder than words",
    "beauty is in the eye of the beholder",
    "a picture is worth a thousand words",
    "you can't have your cake and eat it too",
    "when in rome, do as the romans do",
    "the pen is mightier than the sword",
    "a watched pot never boils",
    "rome wasn't built in a day",
    "birds of a feather flock together",
    "don't count your chickens before they hatch",
    "where there's smoke, there's fire",
    "an apple a day keeps the doctor away",
    "haste makes waste",
    "fortune favors the bold",
    "i'm gonna make him an offer he can't refuse",
    "the proof of the pudding is in the eating",
    "every cloud has a silver lining",
    "carpe diem, seize the day, boys make your lives extraordinary",
    "practice makes perfect",
    "life is like a box of chocolates",
    "toto, i've a feeling we're not in Kansas anymore",
    "what goes around, comes around",
    "the grass is always greener on the other side",
    "easier said than done",
    "out of the frying pan and into the fire",
    "the quick brown fox jumps over the lazy dog",
    "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "a quick brown fox jumps over the lazy dog",
    "the five boxing wizards jump quickly",
    "she sells seashells by the seashore",
    "how can you mend a broken heart?",
    "to be or not to be, that is the question",
    "the best preparation for tomorrow is doing your best today",
    "show me the money",
    "one morning i shot an elephant in my pajamas how he got in my pajamas i don't know"
    ];
    const [scores,setScores] = useState([]);
    const [comment, setComment] =useState("");
    const [text, setText] = useState("");
    const [input, setInput] = useState("");
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [timer, setTimer] = useState(1);
    const [wpm, setWPM] = useState(0);
    const [endTime, setEndTime] = useState(null);
    const [errors, setErrors] = useState("");
    const user = JSON.parse(localStorage.getItem('user'));
    const formValidator = () => {
        if (comment.length < 3) {
            return false
        }
        return true
    }
    //set up timer
    useEffect(() => {
    if (isTimerRunning) {
        const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
        return () => {
        clearInterval(intervalId);
        };
    }
    }, [isTimerRunning]);

    useEffect(() => {
    // select a random text from above
    setText(texts[Math.floor(Math.random() * texts.length)]);
    }, []);

    // accept the inputs and check for accuracy
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setInput(inputValue);
        // start the timer
        if (!isTimerRunning) {
            setIsTimerRunning(true);
        }
        // end the test once the input length is longer than the text
        // for some reason this way works better?
        if (inputValue.length > text.length - 1) {
            setEndTime(new Date());
            setIsTimerRunning(false);
            setWPM(calculateWPM(timer));
        }
        };
    // calculate the words per minute
    const calculateWPM = (timeElapsed) => {
        //remove the spaces between words to get accurate words typed
        const wordsTyped = input.trim().split(" ").length;
        //divide by 60 to get minutes
        const minutesElapsed = timeElapsed / 60;
        //divide words typed by minutes to get wpm
        return minutesElapsed > 0 ? Math.floor(wordsTyped / minutesElapsed) : 0;
    };
    // resets test
    const handleRestart = () => {
        setInput("");
        setIsTimerRunning(false);
        setTimer(0);
        setWPM(0);
        setEndTime(null);
        // inputRef.current.focus();
        setText(texts[Math.floor(Math.random() * texts.length)]);
    };
    const token = localStorage.getItem('token');

    const handleSubmit = (e) => {
        if (formValidator()){
            axios.post('http://localhost:8000/api/scores', {
                wpm, comment, headers: { Authorization: `Bearer ${token}` }
            })
            .then( res => {
                console.log(res.data);
                setScores([...scores, res.data]);
                console.log(scores)
            })
            .catch(err=>console.log(err))
        }
        else{
            e.preventDefault();
            setErrors({comment: "Comment must be at least 3 characters"})
        }
    }



// ADD LOGOUT BUTTON
    return (
    <div className="container">
        <div className="header">
            <h2>Welcome, {user.username}!</h2>
            <h2 style={{fontSize:"75px"}}>AvocadoType!</h2>
        </div>
        <div>
            <div className="card mx-auto" id="passage">
                <p style={{fontSize:"35px"}}>{text}</p>
            </div>
        </div>
        <div>
            <textarea
            class="form-control mx-auto" rows="3"
            style={{}}
            value={input}
            onChange={handleInputChange}
            disabled={endTime !== null}
            placeholder="Start typing..."
            />
        </div>
        {isTimerRunning && <p>Time elapsed: {timer} seconds</p>}
        {!isTimerRunning && endTime && (
        <div className={'container'}>
            <p>
                Time elapsed: {timer} seconds 
            </p>
            <br/>
            <h1 style={{marginTop:"50px", marginBottom:"80px"}}>Great Job! You Typed {wpm} wpm!</h1>
            {errors.comment? <p className="text-danger">{errors.comment}</p> : ""}
            <form onSubmit={handleSubmit} className="form col-md-4 mx-auto">
            <div className='Form-group mt-3'>
                    <label htmlFor="" className='form-label'>Comment on your score</label> 
                    <input type="text" className='form-control' onChange={ (e) =>setComment(e.target.value)} />
            </div>
                <button className='btn btn-primary mt-3'>Submit Score</button>
            </form>
        </div>
        )}
        <button className='btn btn-primary mt-3 mx-auto' onClick={handleRestart}>Restart</button>
    </div>
    );
};

export default TypingTest;