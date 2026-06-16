import { useState, useEffect } from "react"

function UserCard(){
    const [loading, setloading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => {
            setUser(data.results[0])
            setloading(false)
        })
    }, [])

    if (loading){
        return <h2>Loading...</h2>
    }

    return (
        <div>
          <img src={user.picture.large} />

          <h2>
            {user.name.first} {user.name.last}
          </h2>

          <p>{user.email}</p>
        </div>
    )
}

export default UserCard