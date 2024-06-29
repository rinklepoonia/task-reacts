import React, { useEffect, useState } from 'react'

function Effects() {
  const [incNumber, SetincNumber] = useState(0)
  const [decNumber, SetdecNumber] = useState(0)
  useEffect(() => {
    alert('wait')
  }, [])
    ;
  return (
    <div className='my-5 py-5'>
      <div className='container'>
        <h1>Useeffect</h1>
        <div className='d-flex gap-4 justify-content-center'>
          <div>
            <p>{incNumber}</p>
            <button onClick={() => SetincNumber(incNumber + 1)}>click-plus</button>
          </div>
          <div>
            <p>{decNumber}</p>
            <button onClick={() => SetdecNumber(decNumber - 1)}>click-minus</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Effects