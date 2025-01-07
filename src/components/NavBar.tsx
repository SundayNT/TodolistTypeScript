import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="sticky top-0 z-10 bg-gray-600 md:flex justify-evenly"> 
        <Link to="/"><h1 className="text-center text-white p-3 font-bold text-3xl hover:text-teal-400 active:text-teal-700">Home</h1></Link>
        <Link to="to-do-list"><h1 className="text-center  text-white p-3 font-bold text-3xl hover:text-teal-400 active:text-teal-700">To Do List</h1></Link>
    </div>
  )
}

export default NavBar;
