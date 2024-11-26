import { DocumentIcon, ShareIcon, TrashIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  link?: string;
  type: "TWITTER" | "YOUTUBE" | "DOCUMENT" | "LINK" | "TAG" | "CONTENT";
}

const Card = ({ title, link, type }: CardProps) => {
  return (
    <div className="w-full max-w-sm mx-auto p-4 border outline-1 shadow-md rounded-md flex flex-col gap-4 h-full">
      {/* Card Header */}
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <DocumentIcon className="w-6 h-6 flex-shrink-0 text-battleshipgray" />
          <h2 className="text-base sm:text-lg text-oxfordblue capitalize truncate">
            {title} {type}
          </h2>
        </div>
        <div className="flex items-center gap-3 ml-2">
          <Link to={link ? link : ""} target="_blank">
            <ShareIcon className="w-4 h-4 text-battleshipgray cursor-pointer hover:text-mediumslateblue hover:w-5 hover:h-5 transition-all duration-300 ease-in-out" />
          </Link>
          <button aria-label="Delete">
            <TrashIcon className="w-4 h-4 text-battleshipgray cursor-pointer hover:text-mediumslateblue hover:w-5 hover:h-5 transition-all duration-300 ease-in-out" />
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex items-center gap-2 flex-col w-full">
        {type === "YOUTUBE" && (
          <div className="w-full aspect-video">
            <iframe
              src={link?.replace("watch", "embed")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-md border-mediumslateblue border-2 shadow-xl"
            ></iframe>
          </div>
        )}

        {type === "TWITTER" && (
          <div className="w-full overflow-hidden">
            <blockquote className="twitter-tweet">
              <a href={link?.replace("x", "twitter")}></a>
            </blockquote>
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="flex justify-center gap-4 flex-col w-full mt-auto">
        {/* Badge */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-secondary text-primary text-xs sm:text-sm rounded-full px-2 py-1">
            #twitter
          </span>
          <span className="bg-secondary text-primary text-xs sm:text-sm rounded-full px-2 py-1">
            #youtube
          </span>
        </div>

        <p className="text-xs sm:text-sm text-battleshipgray">
          Added on 01/01/2023
        </p>
      </div>
    </div>
  );
};

export default Card;
