import { Link } from "react-router-dom";
import { BrainIcon, LightbulbIcon, ShareIcon } from "lucide-react";
import { Spotlight } from "../components/ui/Spotlight";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-seasalt to-gray-100 flex flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-8">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="black"
      />
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <BrainIcon className="h-24 w-24 text-mediumslateblue" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-noto-serif text-oxfordblue">
          Your Digital Second Brain
        </h1>
        <p className="text-sm md:text-2xl mb-8 text-battleshipgray max-w-2xl mx-auto font-playpen-sans">
          Organize your thoughts, ideas, and information in one place.
          Accessible from anywhere, at any time.
        </p>
        <p className="text-sm md:text-2xl mb-8 text-oxfordblue max-w-2xl mx-auto font-playpen-sans">
          Sign up now to start organizing your thoughts and ideas without
          worrying about{" "}
          <span className="font-semibold text-mediumslateblue ">emails</span>.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link
            to="/authenticate"
            className="bg-mediumslateblue text-seasalt px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 ease-in-out flex items-center justify-center"
          >
            <LightbulbIcon className="mr-2 h-5 w-5" />
            Get Started
          </Link>
          <Link
            to="/all-shared-links"
            className="bg-seasalt text-mediumslateblue px-8 py-3 rounded-full text-lg font-semibold border-2 border-mediumslateblue hover:bg-mediumslateblue hover:text-seasalt transition duration-300 ease-in-out flex items-center justify-center"
          >
            <ShareIcon className="mr-2 h-5 w-5" />
            Explore Shared Brains
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
