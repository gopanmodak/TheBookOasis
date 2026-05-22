import { motion } from "motion/react";
 
import newsLetterImg from "../assets/Book_Home_Footer.svg"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import HomeBooks from "../Common_UI/HomeBooks";
import { PulseLoader } from "react-spinners";

const Home = () => {

  const {googleBook,loading} = useContext(AuthContext);

  if(!loading){
    return <div className="flex justify-center items-center h-screen">

          <span> <PulseLoader  color="#36d7b7" /> </span>
    </div>

  }
  return (
    <div className="mt-10 font-sans">
      {/*  Hero Banner */}

      <div className="relative max-w-7xl mx-auto p-5 my-10">
        <img
          src="https://images.unsplash.com/photo-1583526241256-cb18e8635e5b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="books banner"
          className="w-full h-100 object-cover rounded-lg filter brightness-30 hover:scale-101 transition-transform duration-500"
        />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-20 p-10  text-start text-white"
        >
          <h1 className="text-3xl font-bold max-w-xs">
            Discover Your Next Read
          </h1>

          <p className="mt-4 max-w-md mb-3">
            Curating clarity and inspiration for the modern reader. Explore our
            hand-picked collection of this season's most impactful literature.
          </p>
          <button className="btn btn-primary">Shop Now</button>
        </motion.div>
      </div>


       {/*  Browse By Author */}

          <div>

            <motion.h1 
            initial={{opacity:0 ,y:-50}}
            animate={{opacity:1 ,y:0}}
            transition={{duration:0.5}}
            className="text-3xl font-bold text-center my-10">Browse By Author</motion.h1>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-5xl mx-auto text-center font-semibold p-5">

               <Link to="/humayun-ahmed" className="border border-zinc-400 p-3 hover:bg-zinc-400 rounded-lg">Humayun Ahmed</Link>
               <Link to="/kazi-nazrul-islam" className="border border-zinc-400 p-3 hover:bg-zinc-400 rounded-lg">Kazi Nazrul Islam</Link>
               <Link to="/rabindranath-tagore" className="border border-zinc-400 p-3 hover:bg-zinc-400 rounded-lg">Rabindranath Tagore</Link>
               <Link to="/satyajit-ray" className="border border-zinc-400 p-3 hover:bg-zinc-400 rounded-lg">Satyajit Ray</Link>

               

            </div>

          </div>


         {/*  Google Books */}


         <div>
          {googleBook?.map((books)=> <HomeBooks key={books.id} book={books}/>)}
         </div>

           {/* NewsLetter*/}

           <div className="grid grid-cols-2 items-center  max-w-7xl mx-auto my-10 p-5">

            <div className="bg-slate-900 text-zinc-300 rounded-l-2xl p-10">
              <h1 className="text-2xl font-bold">Summer Reading Sale</h1>
              <p className="my-3 max-w-md">Up to 40% off on all fiction titles. Refresh your library with our curated summer picks.</p>
              <button className="btn btn-primary"> Claim Discount</button>
            </div>

            <div className="bg-[#FFF4E6] w-full rounded-r-2xl h-full flex justify-center items-center">
              <img src={newsLetterImg} alt="" className="h-50 object-cover  rounded-r-2xl"/>
            </div>
           </div>

    </div>
  );
};

export default Home;








