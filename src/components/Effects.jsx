import React, { useEffect, useState } from 'react'

function Effects() {
  const [incNumber, SetincNumber] = useState(0)
  const [decNumber, SetdecNumber] = useState(0)
  useEffect(() => {
    alert('wait')
  }, [])
    ;
  return (
    <div>
      <h1>Useeffect</h1>
      <p>{incNumber}</p>
      <button onClick={() => SetincNumber(incNumber + 1)}>click-plus</button>
      <p>{decNumber}</p>
      <button onClick={() => SetdecNumber(decNumber - 1)}>click-minus</button>
    </div >
  )
}

export default Effects