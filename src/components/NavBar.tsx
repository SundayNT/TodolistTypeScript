import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="sticky top-0 z-10 bg-gradient-to-r from-[#000428] to-[#004e92] md:flex justify-evenly"> 
        <Link to="/"><h1 className="text-center text-white p-3 font-bold text-3xl hover:text-[#91F1EF] transition duration-300 active:text-[#38AECC]">Home</h1></Link>
        <Link to="to-do-list"><h1 className="text-center text-white p-3 font-bold text-3xl hover:text-[#91F1EF] transition duration-300 active:text-[#38AECC]">To Do List</h1></Link>
    </div>
  )
}

export default NavBar;
