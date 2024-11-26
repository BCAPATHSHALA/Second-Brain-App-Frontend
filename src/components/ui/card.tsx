import { DocumentIcon, ShareIcon, TrashIcon } from "@heroicons/react/16/solid";

interface CardProps {
  title: string;
  link?: string;
  type: "TWITTER" | "YOUTUBE" | "DOCUMENT" | "LINK" | "TAG" | "CONTENT";
}

const Card = ({ title, link, type }: CardProps) => {
  return (
    <span className="max-w-96 p-4 border outline-1 shadow-md rounded-md flex flex-col gap-4 h-fit">
      {/* Card Header */}
      <div className="flex w-full justify-between ">
        <div className="flex items-center gap-2">
          <DocumentIcon className="w-6 h-6 text-battleshipgray" />
          <h2 className="text-lg max-w-52 text-oxfordblue capitalize">
            {title} {type}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <a href={link} target="_blank">
            <ShareIcon className="w-4 h-4 text-battleshipgray cursor-pointer hover:text-mediumslateblue hover:w-6 hover:h-6 transition-all duration-500 ease-in-out" />
          </a>
          <TrashIcon className="w-4 h-4 text-battleshipgray cursor-pointer hover:text-mediumslateblue hover:w-6 hover:h-6 transition-all duration-500 ease-in-out" />
        </div>
      </div>
      {/* Card Content */}
      <div className="flex items-center gap-2 flex-col">
        {type === "YOUTUBE" && (
          <iframe
            src={link?.replace("watch", "embed")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full aspect-video rounded-md border-mediumslateblue border-2 shadow-xl"
          ></iframe>
        )}

        {type === "TWITTER" && (
          <blockquote className="twitter-tweet">
            <a href={link?.replace("x", "twitter")}></a>
          </blockquote>
        )}
      </div>
      {/* Card Footer */}
      <div className="flex justify-center gap-4 flex-col w-full">
        {/* Badge */}
        <div className="font-semibold flex gap-2">
          <p className="bg-secondary text-primary text-sm rounded-full px-2 py-1">
            #twitter
          </p>
          <p className="bg-secondary text-primary text-sm rounded-full px-2 py-1">
            #youtube
          </p>
        </div>

        <p className="text-sm text-battleshipgray">Added on 01/01/2023</p>
      </div>
    </span>
  );
};

export default Card;
