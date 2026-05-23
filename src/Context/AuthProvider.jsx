import { createContext, useEffect, useState } from "react"


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()
const AuthProvider = ({children}) => {


  const [googleBook, setGoogleBook] = useState([]);
  const [googleBookLoading, setGoogleBookLoading] = useState(true);

  useEffect(()=>{
    fetch("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=wxTVVSzfTLVxhXvCct9fmG5Qoe0KE6ybCPCa6RubpkJqhpYU")
    .then(response => response.json())
    .then(data =>{
      setGoogleBook(data.results.lists[0].books)
      setGoogleBookLoading(false)
      console.log(data)
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