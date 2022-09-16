import './App.css';
import Btn from './components/Button';
import { Input } from 'reactstrap';
import { useState, useEffect } from 'react';

function App() {

  const [number, setNumber] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [guess,setGuess]=useState('Make a Guess 🤔')
  const [score,setScore]=useState(5);
  const [hint,setHint]=useState('');
  const range='<Between 0 to 20>';

  const handleOnChangeEvent = (num) => {
    setNumber(Number(num.target.value));
  }

  const randomNumberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 20);
    setRandomNumber(randomNumber);
  }

  useEffect(randomNumberGenerator, []);

  const handleCheck = () => {
    if (number == randomNumber) {
      setGuess('You Win! 🤩');
      setHint('');
    }
    else {
      setScore(score - 1);
      if(score == 0){
        setGuess('Game Over 😭');
        setHint('');
        setScore(0);
      }
      else{
      if(number > randomNumber){
        setHint('Guess Lower 😉')
      }
      else{
        setHint('Guess Higher 😉')
      }
      setGuess('You Lose! 😔')
    }
    }
  }

  const handleReset = () => {
    setNumber('');
    randomNumberGenerator();
    setGuess('Make a Guess 🤔');
    setHint('');
    setScore(5);
  }

  return (
    <div className="container">
      <div className='row header mt-4'>
        <h1>How lucky you are? 👻</h1>
        <h4>{range}</h4>
      </div>
      <div className='row justify-content-sm-center'>
      <div className='col col-sm-6'>
        <Input onChange={handleOnChangeEvent} placeholder='Enter your guess here...' value={number}/>
        </div>
        <h2 className='guess mt-4'>{guess}</h2>
        <h2 className='guess mt-4'>{hint}</h2>
      </div>
      <div className='row'>
        <div className='col offset-sm-3 col-sm-1 btndisp1'>
        <Btn title='Again!' click={handleReset} />
        </div>
        <div className='col offset-sm-1 col-sm-3 btndisp2'>
        <Btn title='Check!' click={handleCheck} />
        </div>
      </div>
      <div className='row'>
        <div className='col offset-sm-3'>
      <h2 className='sc'>Score: {score}</h2>
      </div>
      </div>
    </div >
  );
}

export default App;
