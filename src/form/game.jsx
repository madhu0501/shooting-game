import React from 'react'

const Game = (props) => {
     
     return (
        
          <div className='score-board'>
                    {/* <h1>hlo</h1> */}
                    <h1>Game Number- {props.num}</h1>
                    <h2>Player 1  <span>won-{props.p1}</span> </h2>
                    <h2>Player 2  <span>won -{props.p2}</span> </h2>

               </div>

      
     )
}

export default Game
