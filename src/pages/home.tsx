import { Link } from "react-router-dom";

const Home = () => {
  return <div>
    <h1 className="text-2xl font-semibold mb-4">Home</h1>
    <Link to="/dashboard" className="bg-mediumslateblue p-4 text-seasalt mr-2 rounded-sm">Dashboard</Link>
    <Link to="/authenticate" className="bg-mediumslateblue p-4 text-seasalt rounded-sm">Sign In</Link>
    <Link to="/all-shared-links" className="bg-mediumslateblue p-4 text-seasalt ml-2 rounded-sm">Shared Links</Link>
  </div>;
};

export default Home;
