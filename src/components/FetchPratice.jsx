import React, { useEffect, useState } from 'react'

function FetchPratice() {
    const [dog, Setdog] = useState("25")
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => Setdog(data.message))
        // .then(data => console.log(data))
    }, [])
    return (
        <>
            <h1>fetch API</h1>
            {dog && <img width={"200px"} height={"200px"} src={dog}></img>}
        </>
    );


}

export default FetchPratice