import { PlusIcon, ShareIcon } from "@heroicons/react/16/solid";
import Button from "./components/ui/button";
import Card from "./components/ui/card";

const App = () => {
  return (
    <div className="flex gap-4 flex-col">
      <div>
        {" "}
        <Button
          title="Share Brain"
          startIcon={<ShareIcon className="w-4 h-4" />}
          variant="secondary"
          size="md"
        />
        <Button
          title="Create Content"
          startIcon={<PlusIcon className="w-4 h-4" />}
          variant="primary"
          size="md"
        />
      </div>

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
      </div>
    </div>
  );
};

export default App;
