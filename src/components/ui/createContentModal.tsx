import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { XMarkIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import Button from "./button";
import { serverUrl } from "../../constants/constants";

// Define the content types based on your API
const ContentTypes = [
  "YOUTUBE",
  "TWITTER",
  "DOCUMENT",
  "LINK",
  "TAG",
  "CONTENT",
] as const;

const contentSchema = z.object({
  title: z
    .string()
    .min(10, { message: "Title must be at least 10 characters" })
    .max(100, { message: "Title must be at most 100 characters" }),
  type: z // How to make sure type is one of the ContentTypes. So we can use refine() to apply a custom error message.
    .enum(ContentTypes)
    .refine((val) => ContentTypes.includes(val), {
      message: `Type must be one of ${ContentTypes.join(", ")}`,
    }),
  tags: z
    .array(z.string())
    .max(20, { message: "Tags must be at most 20 characters" })
    .optional(),
  link: z // How to make the link field optional but still validate as a URL if provided. So we can use z.preprocess() to handle empty strings as undefined before applying the .url() validation.
    .preprocess(
      (value) =>
        typeof value === "string" && value.trim() === "" ? undefined : value,
      z.string().url({ message: "Link must be a valid URL" }).optional()
    ),
  content: z
    .string()
    .max(1000, { message: "Content must be at most 1000 characters" })
    .optional(),
});

type ContentFormInputs = z.infer<typeof contentSchema>;

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateContentModal = ({ open, onClose }: CreateContentModalProps) => {
  const [error, setError] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContentFormInputs>({
    resolver: zodResolver(contentSchema),
  });

  const onSubmit: SubmitHandler<ContentFormInputs> = async (data) => {
    try {
      const response = await axios.post(
        `${serverUrl}/content/create`,
        {
          ...data,
          tags,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        console.log("Content created successfully:", response.data.message);
        reset();
        setTags([]);
        onClose();
      } else {
        setError(response.data.message || "Failed to create content");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            "An error occurred while creating content"
        );
      } else {
        setError("An unexpected error occurred");
      }
      console.error("Error creating content:", error);
    }
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value) {
      e.preventDefault();
      setTags([...tags, e.currentTarget.value]);
      e.currentTarget.value = "";
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-oxfordblue bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Create Content</h2>
            <Button
              startIcon={<XMarkIcon className="w-5 h-5" />}
              variant="secondary"
              size="sm"
              onClick={onClose}
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                {...register("title")}
                type="text"
                placeholder="Title"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div>
              <select
                {...register("type")}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Type</option>
                {ContentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.type && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.type.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("link")}
                type="text"
                placeholder="Link (optional)"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.link && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.link.message}
                </p>
              )}
            </div>
            <div>
              <textarea
                {...register("content")}
                placeholder="Content (optional)"
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={4}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Add tags (press Enter)"
                className="w-full p-2 border border-gray-300 rounded-md"
                onKeyPress={handleAddTag}
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 px-2 py-1 rounded-full text-sm flex items-center"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-1 text-gray-500 hover:text-gray-700"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Create Content
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateContentModal;

// import { XMarkIcon } from "@heroicons/react/16/solid";
// import Button from "./button";

// interface CreateContentModalProps {
//   open: boolean;
//   onClose: () => void;
// }

// const CreateContentModal = ({ open, onClose }: CreateContentModalProps) => {
//   return (
//     <>
//       {open && (
//         <>
//           <div className="w-screen h-screen opacity-20 bg-oxfordblue fixed top-0 left-0 flex justify-center items-center"></div>
//           <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
//             <div className="flex flex-col justify-center">
//               <span className="bg-white opacity-100 p-4 rounded-lg">
//                 {/* Close Button */}
//                 <div className="flex justify-between mb-4">
//                   <h2 className="text-lg justify-start">Create Content</h2>
//                   <Button
//                     startIcon={<XMarkIcon className="w-4 h-4" />}
//                     variant="secondary"
//                     size="md"
//                     onClick={onClose}
//                   />
//                 </div>
//                 {/* Inner Content */}
//                 <div className="flex flex-col gap-4">
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Title"
//                       className="border border-oxfordblue rounded-md p-2"
//                     />
//                   </div>
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Link"
//                       className="border border-oxfordblue rounded-md p-2"
//                     />
//                   </div>
//                   <button className="bg-primary text-seasalt px-4 py-2 rounded-md">
//                     Create
//                   </button>
//                 </div>
//               </span>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default CreateContentModal;
