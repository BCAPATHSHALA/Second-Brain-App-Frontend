import { PlusIcon, ShareIcon } from "@heroicons/react/16/solid";
import Button from "./components/ui/button";
import Card from "./components/ui/card";
import CreateContentModal from "./components/ui/createContentModal";
import { useState } from "react";
import Sidebar from "./components/ui/sidebar";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Sidebar */}
      <Sidebar />
      <div className="min-h-screen bg-seasalt p-8 ml-64">
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
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
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

export default App;
