import { ReactElement } from "react";

interface SidebarItemProps {
  title: string;
  icon: ReactElement;
}

const SidebarItem = ({ title, icon }: SidebarItemProps) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer text-battleshipgray text-sm hover:text-primary transition-all duration-500 ease-in-out">
      {icon}
      <h2 className="text-sm">{title}</h2>
    </div>
  );
};

export default SidebarItem;
