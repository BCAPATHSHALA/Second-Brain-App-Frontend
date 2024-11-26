import { BoltIcon } from "@heroicons/react/16/solid";
import SidebarItem from "./sidebarItem";
import {
  FileText,
  HashIcon,
  LinkIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-seasalt border-r fixed left-0 top-0">
      {/* Sidebar Header */}
      <div className="flex items-center justify-center h-16 bg-mediumslateblue">
        <BoltIcon className="w-8 h-8 text-seasalt" />
        <h1 className="text-xl font-semibold text-seasalt">Second Brain</h1>
      </div>

      {/* Sidebar Items */}
      <div className="flex flex-col gap-4 p-4 mt-4">
        <SidebarItem
          title="Twitter"
          icon={<TwitterIcon className="w-6 h-6" />}
        />
        <SidebarItem
          title="Youtube"
          icon={<YoutubeIcon className="w-6 h-6" />}
        />
        <SidebarItem title="Document" icon={<FileText className="w-6 h-6" />} />
        <SidebarItem title="Link" icon={<LinkIcon className="w-6 h-6" />} />
        <SidebarItem title="Tag" icon={<HashIcon className="w-6 h-6" />} />
      </div>
    </div>
  );
};

export default Sidebar;
