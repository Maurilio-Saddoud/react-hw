import React, {useState} from 'react'

const Counter = () => {
    const [num, setNum] = useState(1)

    return (
      <div className='counterContainer' style={{flexDirection: 'column'}}>
          {num}
          <div>
            <button onClick={() => {setNum(num +1)}}>
                +
            </button>
            <button onClick={() => {setNum(num -1)}}>
              -
            </button> 
          </div>
      </div>
    );
  }
  
  export default Counter;
  