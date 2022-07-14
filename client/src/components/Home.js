import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
function Home() {
    const {user, isAuthenticated} = useAuth0();

  return (
    <div>
        {
            isAuthenticated && (
                <pre style={{"textAlign" : "start"}}>
                    {JSON.stringify(user, null, 2)}
                </pre>
            )
        }
    </div>
    
  )
}

export default Home