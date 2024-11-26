import { useState } from "react";
import { PlusIcon, ShareIcon } from "@heroicons/react/16/solid";
import Button from "../components/ui/button";
import Card from "../components/ui/card";
import CreateContentModal from "../components/ui/createContentModal";
import Sidebar from "../components/ui/sidebar";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-seasalt p-8 md:ml-64">
        {/* Buttons */}
        <div className="flex gap-4 justify-end mb-8">
          <Button
            title="Share Brain"
            startIcon={<ShareIcon className="w-4 h-4" />}
            variant="secondary"
            size="md"
          />
          <Button
            title="Add Content"
            startIcon={<PlusIcon className="w-4 h-4" />}
            variant="primary"
            size="md"
            onClick={() => setOpen(true)}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <Card
            title="Youtube"
            type="YOUTUBE"
            link="https://www.youtube.com/watch/7ZdGP4pqWKI?si=wjI-ipu1Bk4QpK7F"
          />
          <Card
            title="Twitter"
            type="TWITTER"
            link="https://x.com/manojofficialmj/status/1858568106492522570"
          />
          <Card
            title="Youtube"
            type="YOUTUBE"
            link="https://www.youtube.com/watch/7ZdGP4pqWKI?si=wjI-ipu1Bk4QpK7F"
          />
          <Card
            title="Youtube"
            type="YOUTUBE"
            link="https://www.youtube.com/watch/7ZdGP4pqWKI?si=wjI-ipu1Bk4QpK7F"
          />
        </div>

        {/* Modal */}
        <CreateContentModal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
