import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../../constants/constants";
import Button from "./button";
import { format } from "date-fns";
import { Brain, ExternalLink } from "lucide-react";
import { BoltIcon } from "@heroicons/react/24/solid";

interface SharedLink {
  _id: string;
  hash: string;
  userId: {
    _id: string;
    username: string;
  };
  createdAt: string;
}

const SharedLinkListing = () => {
  const [sharedLinks, setSharedLinks] = useState<SharedLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSharedLinks = async () => {
      try {
        const response = await axios.get(
          `${serverUrl}/brain/all-shared-links/1`,
          {
            withCredentials: true,
          }
        );
        if (response.data.success) {
          setSharedLinks(response.data.data);
        } else {
          setError("Failed to fetch shared links");
        }
      } catch (error) {
        console.error("Error fetching shared links:", error);
        setError("An error occurred while fetching shared links");
      } finally {
        setLoading(false);
      }
    };

    fetchSharedLinks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
      <div className="w-full flex justify-center items-center bg-oxfordblue h-fit flex-col rounded-lg gap-4">
        <div className="flex flex-col justify-center items-center gap-2 py-8">
          <h1 className="text-2xl font-semibold text-mediumslateblue uppercase font-serif">
            All Second Brain Links
          </h1>
          <p className="text-sm text-mediumslateblue">
            Share your Second Brain with the world
          </p>
        </div>
        <div className="w-full flex justify-center items-center gap-4 pb-8 ">
          <Link to="/dashboard">
            <Button
              variant="primary"
              size="md"
              className="w-full"
              startIcon={<Brain className="w-4 h-4" />}
            >
              Create New Brain
            </Button>
          </Link>
          <Link to="/">
            <Button
              variant="secondary"
              size="md"
              className="w-full"
              startIcon={<BoltIcon className="w-4 h-4" />}
            >
              Back to Second Brain
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sharedLinks.map((link) => (
          <div key={link._id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2 text-mediumslateblue">
              {link.userId.username}'s Brain -{" "}
              <span className="text-battleshipgray">{link.hash}</span>
            </h2>
            <p className="text-xs text-battleshipgray mb-8">
              Added on {format(new Date(link.createdAt), "MMM dd, yyyy")}
            </p>
            <Link to={`/shared/${link.hash}`}>
              <Button
                variant="primary"
                size="md"
                className="w-full"
                startIcon={<ExternalLink className="w-4 h-4" />}
              >
                Open Brain
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SharedLinkListing;
