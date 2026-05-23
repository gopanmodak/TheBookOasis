import { useContext } from "react";
import { FaTruck } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { AuthContext } from "../../Context/AuthProvider";

const HomeBooksDetails = () => {
  const { id } = useParams();
  const { googleBook, loading } = useContext(AuthContext);

  const selectedBook = googleBook.find((book) => book.primary_isbn13 == id);
  const date = new Date(selectedBook?.updated_date);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span>
          {" "}
          <PulseLoader color="#36d7b7" />{" "}
        </span>
      </div>
    );
  }
  return (
    <div className="max-w-5xl mx-auto p-10">
      <div className="max-w-5xl mx-auto bg-[#F7FAFC]  flex sm:flex-row flex-col gap-10 font-sans">
           
              {/* Left Side */}

        <div>
          <img
            src={selectedBook?.book_image}
            alt="Books"
            className=" hover:scale-105 rounded-lg transition-transform duration-500"
          />
        </div>

              {/* Right Side */}

        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <p className="badge badge-primary ">Limited Edition</p>
            <p className="badge badge-secondary"> Best Seller </p>
          </div>
          <h2 className="text-2xl font-bold text-zinc-700 ">
            {selectedBook?.title}
          </h2>
          <p className="text-blue-700">{selectedBook?.contributor}</p>

          <div className="flex gap-5">
            <p> Updated Date : {date.toDateString()}</p>
            <p>({date.toTimeString()})</p>
          </div>
          <div className="border-b-2 border-zinc-400 my-3"></div>

          <div>
            <p>Description</p>
            <p>{selectedBook?.description}</p>
          </div>

          <div className="border-b-2 border-zinc-400 my-3"></div>

          <div className="flex justify-between">
            <div></div>
            <div>
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>

          <div className="flex  gap-5">
            <p className="flex gap-2">
              {" "}
              <span>
                <FaTruck className="text-2xl text-green-600" />
              </span>{" "}
              Next Day Delivery{" "}
            </p>
            <p className="flex gap-2">
              {" "}
              <span>
                <GoVerified className="text-2xl text-green-600" />
              </span>{" "}
              Free Shipping & Returns
            </p>
          </div>
        </div>
      </div>
           
           {/* Alternatively Buy */}

      <h2 className="text-2xl font-bold text-zinc-700 my-10">
        Buy Alternatively{" "}
      </h2>
      <div className="flex gap-5">
        {selectedBook?.buy_links.map((link, index) => (
          <a href={link.url} target="_blank" key={index}>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomeBooksDetails;
