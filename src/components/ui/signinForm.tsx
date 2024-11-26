import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import axios from "axios";

import { serverUrl } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

const signInSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInFormInputs = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
    try {
      const response = await axios.post(`${serverUrl}/user/signin`, data, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.success) {
        navigate("/dashboard");
        console.log("Signin successful:", response.data.message);
      } else {
        setError(response.data.message || "Signin failed");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message || "An error occurred during signin"
        );
      } else {
        setError("An unexpected error occurred");
      }
      console.error("Error during signin:", error);
    }
  };

  return (
    <div className="rounded-lg flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div> */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                type="text"
                {...register("username")}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-battleshipgray text-oxfordblue rounded-t-md focus:outline-none focus:ring-mediumslateblue focus:border-mediumslateblue focus:z-10 sm:text-sm"
                placeholder="Username"
              />
              {errors.username && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-battleshipgray text-oxfordblue rounded-b-md focus:outline-none focus:ring-mediumslateblue focus:border-mediumslateblue focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-battleshipgray" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-battleshipgray" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-mediumslateblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mediumslateblue"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
