import { PlusIcon, ShareIcon } from "@heroicons/react/16/solid";
import Button from "./components/ui/button";

const App = () => {
  return (
    <div className="flex gap-4">
      <Button
        title="Create New Content"
        startIcon={<ShareIcon className="w-4 h-4" />}
        variant="secondary"
        size="md"
      />
      <Button
        title="Create New Content"
        startIcon={<PlusIcon className="w-4 h-4" />}
        variant="primary"
        size="md"
      />
    </div>
  );
};

export default App;
