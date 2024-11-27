import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/ui/card";
import { serverUrl } from "../constants/constants";
import Button from "../components/ui/button";
import { Brain } from "lucide-react";
import { BoltIcon } from "@heroicons/react/24/solid";

interface Content {
  _id: string;
  title: string;
  link?: string;
  type: "TWITTER" | "YOUTUBE" | "DOCUMENT" | "LINK" | "TAG" | "CONTENT";
  tags?: string[];
  content?: string;
  createdAt: string;
}

const SharedBrain = () => {
  const { sharedHash } = useParams<{ sharedHash: string }>();
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSharedContents = async () => {
      try {
        const response = await axios.get(`${serverUrl}/brain/${sharedHash}`);
        if (response.data.success) {
          setContents(response.data.data);
        } else {
          setError("Failed to fetch shared content");
        }
      } catch (error) {
        console.error("Error fetching shared contents:", error);
        setError("Shared hash does not exist");
      } finally {
        setLoading(false);
      }
    };

    fetchSharedContents();
  }, [sharedHash]);

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
            Second Brain
          </h1>
          <p className="text-sm text-mediumslateblue">
            Second Brain is a free and open source platform for creating and
            sharing content.
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
          <Link to="/all-shared-links">
            <Button
              variant="secondary"
              size="md"
              className="w-full"
              startIcon={<BoltIcon className="w-4 h-4" />}
            >
              All Second Brain
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {contents.map((content) => (
          <Card
            key={content._id}
            {...content}
            onDelete={() => {}} // Disable delete functionality for shared content
          />
        ))}
      </div>
    </div>
  );
};

export default SharedBrain;
