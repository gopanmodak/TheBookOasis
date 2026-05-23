import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Footer = () => {

  const {name} =useContext(AuthContext)
  return (
    <div>
      <footer className="$$footer $$sm:footer-horizontal $$footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © 2023 - {new Date().getFullYear()} - All right reserved by{" "}
            <span className="text-red-600 font-bold">The Book Oasis</span>
          </p>

         <p>Developed by <span className="text-red-600 font-bold">{name}</span></p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
