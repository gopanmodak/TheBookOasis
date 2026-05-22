import { createContext, useEffect, useState } from "react"


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()
const AuthProvider = ({children}) => {


  const [googleBook, setGoogleBook] = useState([]);
  const [googleBookLoading, setGoogleBookLoading] = useState(false);

  useEffect(()=>{
    fetch("https://www.googleapis.com/books/v1/volumes?q=quilting&maxResults=40&key=AIzaSyAqvol__ISlMKD1cKIVH7MGWYBLDuYJtX4")
    .then(response => response.json())
    .then(data =>{
      setGoogleBook(data.items)
      setGoogleBookLoading(true)
    })
  },[])

  const authInfo ={
  name : "Gopan Kumar Modak",
  googleBook,
  loading: googleBookLoading

  }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>

        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider