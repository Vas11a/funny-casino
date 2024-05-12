import React from 'react'
import disc from './assets/disk.png'

function App() {

  const [deg, setDeg] = React.useState(0)
  const [balance, setBalance] = React.useState(10000000000000000)
  const [bet, setBet] = React.useState('')
  // x2  337 -  17
  // lost 18- 65
  // x1 66 - 108
  // lost 109 - 156
  // x2 157 - 197
  // lost 198 - 245
  // x5 246 - 287
  // lost 288 - 336

  const spin = () => {
    const randomNumber = Math.floor(Math.random() * (1440 - 360 + 1)) + 360 + deg;
    setDeg(randomNumber);
    const helper = randomNumber % 360

    setTimeout(() => {
      if ((helper >= 337) || helper <= 17 || (helper >= 157 && helper <= 197)) {
        let newBalance = balance + (bet * 2)
        setBalance(newBalance)
      } else if (helper >= 66 && helper <= 108) {
        
      } else if (helper >= 246 && helper <= 287) {
        let newBalance = balance + (bet * 2)
        setBalance(newBalance)
      } else {
        let newBalance = balance -bet
        setBalance(newBalance)
      }
    }, 1000);
  }

  return (
    <div className="wrapper">
      <div className='balance'>Balance: {balance}</div>
      <div className='balka1'>
        <div className='balka2'></div>
      </div>
      <div className='disc-cont'>
        <img
          style={{ transform: `rotate(${deg}deg)` }}
          src={disc}
          className='disc'
          alt="" />
      </div>
      <div className='input-cont'>
        <input onChange={(e) => setBet(e.target.value)} value={bet} placeholder='Your bet' type="text" />
      </div>
      <div className='btn-cont'>
        <div onClick={spin} className='btn'>Spin!</div>
      </div>
    </div>
  );
}

export default App;
