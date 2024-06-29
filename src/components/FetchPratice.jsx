import React, { useEffect, useState } from "react";

function FetchPractice() {
  const [dogs, setDogs] = useState([]);
  const numDogs = 4;

  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/${numDogs}`)
      .then((res) => res.json())
      .then((data) => setDogs(data.message))
      .catch((error) => console.error("Error fetching dogs:", error));
  }, [numDogs]);

  return (
    <>
      <h1>Fetch API Example</h1>
      {dogs.length > 0 && (
        <div>
          {dogs.map((dog, index) => (
            <img
              key={index}
              src={dog}
              alt={`Dog ${index + 1}`}
              style={{ width: "200px", height: "200px", margin: "10px" }}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default FetchPractice;