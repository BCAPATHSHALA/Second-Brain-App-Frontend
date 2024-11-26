import { Link } from "react-router-dom";

const Home = () => {
  return <div>
    <h1 className="text-2xl font-semibold mb-4">Home</h1>
    <Link to="/dashboard" className="bg-mediumslateblue p-4 text-seasalt mr-2 rounded-sm">Dashboard</Link>
    <Link to="/signin" className="bg-mediumslateblue p-4 text-seasalt mr-2 rounded-sm">Signin</Link>
    <Link to="/signup" className="bg-mediumslateblue p-4 text-seasalt rounded-sm">Signup</Link>
  </div>;
};

export default Home;
