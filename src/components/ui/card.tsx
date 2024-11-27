import {
  DocumentIcon,
  ShareIcon,
  TrashIcon,
  LinkIcon,
  HashtagIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
import { TwitterIcon, YoutubeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

interface CardProps {
  _id: string;
  title: string;
  link?: string;
  type: "TWITTER" | "YOUTUBE" | "DOCUMENT" | "LINK" | "TAG" | "CONTENT";
  tags?: string[];
  createdAt: string;
  onDelete: (id: string) => void;
  content?: string;
}

const Card = ({
  _id,
  title,
  link,
  type,
  tags,
  content,
  createdAt,
  onDelete,
}: CardProps) => {
  const getIcon = () => {
    switch (type) {
      case "TWITTER":
        return <TwitterIcon className="w-6 h-6 flex-shrink-0 text-blue-400" />;
      case "YOUTUBE":
        return <YoutubeIcon className="w-6 h-6 flex-shrink-0 text-red-500" />;
      case "DOCUMENT":
        return (
          <DocumentIcon className="w-6 h-6 flex-shrink-0 text-yellow-500" />
        );
      case "LINK":
        return <LinkIcon className="w-6 h-6 flex-shrink-0 text-green-500" />;
      case "TAG":
        return (
          <HashtagIcon className="w-6 h-6 flex-shrink-0 text-purple-500" />
        );
      case "CONTENT":
        return (
          <NewspaperIcon className="w-6 h-6 flex-shrink-0 text-gray-500" />
        );
      default:
        return (
          <DocumentIcon className="w-6 h-6 flex-shrink-0 text-battleshipgray" />
        );
    }
  };

  return (
    <div className="w-full bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-4 flex flex-col h-full">
        {/* Card Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 flex-1 min-w-0">
            {getIcon()}
            <h2 className="text-lg font-semibold text-oxfordblue truncate">
              {title}
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            {link && (
              <Link
                to={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-battleshipgray hover:text-mediumslateblue transition-colors duration-300"
              >
                <ShareIcon className="w-5 h-5" />
              </Link>
            )}
            <button
              onClick={() => onDelete(_id)}
              className="text-battleshipgray hover:text-red-500 transition-colors duration-300"
              aria-label="Delete"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex-grow">
          {type === "YOUTUBE" && link && (
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                src={link.replace("watch?v=", "embed/")}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-md border-mediumslateblue border-2"
              ></iframe>
            </div>
          )}

          {type === "TWITTER" && link && (
            <div className="twitter-embed mb-4">
              <blockquote className="twitter-tweet" data-dnt="true">
                <a href={link.replace("x.com", "twitter.com")}></a>
              </blockquote>
            </div>
          )}

          {content && (
            <pre className="mt-4 p-3 rounded-md overflow-x-auto text-sm whitespace-pre-wrap">
              {content}
            </pre>
          )}
        </div>

        {/* Card Footer */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {tags && tags.map((tag, index) => (
              <span
                key={index}
                className="bg-secondary text-primary text-xs px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
          <p className="text-xs text-battleshipgray">
            Added on {format(new Date(createdAt), "MMM dd, yyyy")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

// import { DocumentIcon, ShareIcon, TrashIcon } from "@heroicons/react/16/solid";
// import { Link } from "react-router-dom";

// interface CardProps {
//   title: string;
//   link?: string;
//   type: "TWITTER" | "YOUTUBE" | "DOCUMENT" | "LINK" | "TAG" | "CONTENT";
// }

// const Card = ({ title, link, type }: CardProps) => {
//   return (
//     <div className="w-full max-w-sm mx-auto p-4 border outline-1 shadow-md rounded-md flex flex-col gap-4 h-full">
//       {/* Card Header */}
//       <div className="flex w-full justify-between items-center">
//         <div className="flex items-center gap-2 flex-1 min-w-0">
//           <DocumentIcon className="w-6 h-6 flex-shrink-0 text-battleshipgray" />
//           <h2 className="text-base sm:text-lg text-oxfordblue capitalize truncate">
//             {title} {type}
//           </h2>
//         </div>
//         <div className="flex items-center gap-3 ml-2">
//           <Link to={link ? link : ""} target="_blank">
//             <ShareIcon className="w-4 h-4 text-battleshipgray cursor-pointer hover:text-mediumslateblue hover:w-5 hover:h-5 transition-all duration-300 ease-in-out" />
//           </Link>
//           <button aria-label="Delete">
//             <TrashIcon className="w-4 h-4 text-battleshipgray cursor-pointer hover:text-mediumslateblue hover:w-5 hover:h-5 transition-all duration-300 ease-in-out" />
//           </button>
//         </div>
//       </div>

//       {/* Card Content */}
//       <div className="flex items-center gap-2 flex-col w-full">
//         {type === "YOUTUBE" && (
//           <div className="w-full aspect-video">
//             <iframe
//               src={link?.replace("watch", "embed")}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//               className="w-full h-full rounded-md border-mediumslateblue border-2 shadow-xl"
//             ></iframe>
//           </div>
//         )}

//         {type === "TWITTER" && (
//           <div className="w-full overflow-hidden">
//             <blockquote className="twitter-tweet">
//               <a href={link?.replace("x", "twitter")}></a>
//             </blockquote>
//           </div>
//         )}
//       </div>

//       {/* Card Footer */}
//       <div className="flex justify-center gap-4 flex-col w-full mt-auto">
//         {/* Badge */}
//         <div className="flex flex-wrap gap-2">
//           <span className="bg-secondary text-primary text-xs sm:text-sm rounded-full px-2 py-1">
//             #twitter
//           </span>
//           <span className="bg-secondary text-primary text-xs sm:text-sm rounded-full px-2 py-1">
//             #youtube
//           </span>
//         </div>

//         <p className="text-xs sm:text-sm text-battleshipgray">
//           Added on 01/01/2023
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;
