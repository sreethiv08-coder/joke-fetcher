import { useState, useEffect } from "react"

function JokeFetcher(){
    const [joke, setJoke] = useState(null)

    useEffect(() => {
        fetch("https://official-joke-api.appspot.com/random_joke") 
          .then(response => response.json())
          .then(data => {
            setJoke(data)
          })
    }, [])

    if(!joke){
        return <h2>Loading...</h2>
    }

    return (
      <div>
        <h2>Joke Fetcher</h2>

        <p>{joke.setup}</p>

        <p>{joke.punchline}</p>
      </div>
    )
}

export default JokeFetcher 
