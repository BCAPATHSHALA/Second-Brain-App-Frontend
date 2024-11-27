import { useState } from "react";
import axios from "axios";
import {
  XMarkIcon,
  ClipboardIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
import Button from "./button";
import { serverUrl } from "../../constants/constants";

interface ShareBrainModalProps {
  open: boolean;
  onClose: () => void;
}

const ShareBrainModal = ({ open, onClose }: ShareBrainModalProps) => {
  const [isShared, setIsShared] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    try {
      const response = await axios.post(
        `${serverUrl}/brain/share`,
        { share: true },
        { withCredentials: true }
      );
      if (response.data.success) {
        setIsShared(true);
        setShareLink(`${window.location.origin}/shared/${response.data.hash}`);
      }
    } catch (error) {
      console.error("Error sharing brain:", error);
    }
  };

  const handleUnshare = async () => {
    try {
      const response = await axios.post(
        `${serverUrl}/brain/share`,
        { share: false },
        { withCredentials: true }
      );
      if (response.data.success) {
        setIsShared(false);
        setShareLink("");
      }
    } catch (error) {
      console.error("Error unsharing brain:", error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-oxfordblue bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-seasalt rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Share Your Brain</h2>
            <Button
              startIcon={<XMarkIcon className="w-5 h-5" />}
              variant="secondary"
              size="sm"
              onClick={onClose}
            />
          </div>
          <div className="space-y-4">
            {isShared ? (
              <>
                <p>Your brain is currently shared. Here's your share link:</p>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={shareLink}
                    readOnly
                    className="flex-grow p-2 border rounded"
                  />
                  <Button
                    startIcon={
                      isCopied ? (
                        <ClipboardDocumentCheckIcon className="w-5 h-5" />
                      ) : (
                        <ClipboardIcon className="w-5 h-5" />
                      )
                    }
                    variant="secondary"
                    size="sm"
                    onClick={copyToClipboard}
                  >
                    {isCopied ? "Copied!" : "Copy"}
                  </Button>
                </div>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={handleUnshare}
                  className="w-full"
                >
                  Stop Sharing
                </Button>
              </>
            ) : (
              <>
                <p>Share your brain to allow others to view your content.</p>
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleShare}
                  className="w-full"
                >
                  Share My Brain
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareBrainModal;
