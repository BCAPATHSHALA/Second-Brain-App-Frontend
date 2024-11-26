import { XMarkIcon } from "@heroicons/react/16/solid";
import Button from "./button";

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateContentModal = ({ open, onClose }: CreateContentModalProps) => {
  return (
    <>
      {open && (
        <>
          <div className="w-screen h-screen opacity-20 bg-oxfordblue fixed top-0 left-0 flex justify-center items-center"></div>
          <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
            <div className="flex flex-col justify-center">
              <span className="bg-white opacity-100 p-4 rounded-lg">
                {/* Close Button */}
                <div className="flex justify-between mb-4">
                  <h2 className="text-lg justify-start">Create Content</h2>
                  <Button
                    startIcon={<XMarkIcon className="w-4 h-4" />}
                    variant="secondary"
                    size="md"
                    onClick={onClose}
                  />
                </div>
                {/* Inner Content */}
                <div className="flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Title"
                      className="border border-oxfordblue rounded-md p-2"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Link"
                      className="border border-oxfordblue rounded-md p-2"
                    />
                  </div>
                  <button className="bg-primary text-seasalt px-4 py-2 rounded-md">
                    Create
                  </button>
                </div>
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CreateContentModal;
