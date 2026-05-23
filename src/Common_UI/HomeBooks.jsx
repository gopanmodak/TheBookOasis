import { FaEye } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const HomeBooks = ({books}) => {

  const navigate = useNavigate();

  const handleOnDetails = () =>{
    navigate (`/tranding/${books.primary_isbn13}`)
  }
  
  return (
    <div className="group relative overflow-hidden hover:scale-105 transition-transform duration-500 ">

    
   <div>
    <img src={books.book_image} alt="" className="rounded-lg" />
   </div>


   <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-lg">
     
    
   </div>
      
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" onClick={handleOnDetails}><FaEye  className="text-white text-2xl cursor-pointer"/></span>

    </div>
  )
}

export default HomeBooks