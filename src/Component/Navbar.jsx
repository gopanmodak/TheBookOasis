import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/TheBookOasis_Main_Logo.webp";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    

    <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#FFFFFF]">

      <div className="flex items-center justify-between max-w-7xl mx-auto p-3 relative">
      <div>
        <img src={logo} alt="" className="h-25 object-cover rounded-lg" />
      </div>

      <div className=" hidden md:flex justify-center items-center gap-5">
        <NavLink  to= "/">Home</NavLink>
        <NavLink  to= "/new-releases"> New Releases</NavLink>
        <NavLink  to= "/best-sellers">Best Sellers</NavLink>
        <NavLink  to= "/popular-books">Popular Books</NavLink>
        <NavLink  to= "/about-us"> About Us</NavLink>
      </div>

      <div className="flex justify-center items-center gap-5">
        <button onClick={()=>navigate('/cart')}>
          {" "}
          <LuShoppingCart className="text-2xl cursor-pointer hover:text-red-600" />{" "}
        </button>
        <button onClick={()=>navigate('/login')}>
          <FaRegUser className="text-xl cursor-pointer hover:text-blue-600" />
        </button>
      </div>

      <div className="md:hidden px-10">
        <button onClick={() => setOpen(!open)}>
          
        {open ? <span className="text-2xl font-bold text-red-600"> X</span> :  <HiMenu className="text-2xl" />  }
        </button>
      </div>

      {open && (
        <div className="bg-white flex flex-col justify-start items-start p-10 gap-5 fixed top-20 left-0 w-full py-5 z-50 rounded-2xl ease-in">
          <NavLink  to= "/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink  to= "/new-releases" onClick={() => setOpen(false)}>New Releases</NavLink>
          <NavLink  to= "/best-sellers" onClick={() => setOpen(false)}>Best Sellers</NavLink>
          <NavLink  to= "/popular-books" onClick={() => setOpen(false)}>Popular Books</NavLink>
          <NavLink  to= "/about-us" onClick={() => setOpen(false)}> About Us</NavLink>
        </div>
      )}
    </div>
    </div>
  );
};

export default Navbar;
