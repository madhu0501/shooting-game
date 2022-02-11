import { useState } from 'react';
import './App.css';
import Game from './game'

function App() {

  const [player1, setplayer1] = useState(0)
  const [player2, setplayer2] = useState(0)
  const [number, setnumber] = useState(0)


  const [play1, setplay1] = useState(true)
  const [health1, setheatlth1] = useState(100)
  const [health2, setheatlth2] = useState(100)


  const update1 = () => {
    const x = Math.floor(Math.random() * 5)
    setplay1(!play1)
    if (number<6){

      if ((health2 - x) <= 0) {
        alert("player-1 won the match")
        setheatlth1(100)
        setheatlth2(100)
        setnumber(number+1)
        setplayer1(player1)
        setplayer2(player2+1)
      }
      else {
        setheatlth2(health2 - x)
      }
    }
    else{
        if (player1>player2){
          alert("player-1 won the game")
        }
        else{
          alert("player-2 won the game")
        }
    }
  }


  const update2 = () => {
    const x = Math.floor(Math.random() * 5)
    setplay1(!play1)
    if (number<6){

      if ((health1 - x) <= 0) {
        alert("player-2 won the match")
        setheatlth1(100)
        setheatlth2(100)
        setnumber(number+1)
        setplayer1(player1+1)
        setplayer2(player2)
      }
      else {
        setheatlth1(health1 - x)
      }
    }
    else{
        if (player1>player2){
          alert("player-1 won the game")
        }
        else{
          alert("player-2 won the game")
        }
    }


  }


  return (
    <div className="container">
      <Game 
      num={number}
      p1={player1}
      p2={player2}
      />

      <div className='game'>
        {
          play1 ? <>
            <div className='title'><h1> player-1 Turn </h1></div>
            <div className='scores'>
              <h2>player 1 health-{health1}</h2>
              <h2>player 2 health-{health2}</h2>

            </div>
            <div className='play'>
              <button className='player1' onClick={update1}>player-1 Shoot </button>
            </div>



          </>
            :

            <>
              <div className='title'> <h1> player-2 Turn</h1></div>
              <div className='scores'>
                <h2>player 1 health -{health1}</h2>
                <h2>player 2 health -{health2}</h2>

              </div>
              <button className='player1' onClick={update2}>player-2 shoot </button>

            </>



        }

      </div>


    </div>
  );
}

export default App;
