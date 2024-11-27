"use client";

import { useState } from "react";
import SignUpForm from "../components/ui/signupForm";
import SignInForm from "../components/ui/signinForm";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen bg-seasalt flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-oxfordblue">
          {isSignIn ? "Sign in to your account" : "Create a new account"}
        </h2>
        <p className="mt-2 text-center text-sm text-battleshipgray">
          Or{" "}
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="font-medium text-primary hover:text-mediumslateblue"
          >
            {isSignIn ? "create a new account" : "sign in to your account"}
          </button>
        </p>
      </div>

      <div className="mt-8">
        <div className="bg-primary shadow rounded-lg md:p-10 sm:p-2 h-1/3">
          {isSignIn ? <SignInForm /> : <SignUpForm setIsSignIn={setIsSignIn}/>}
        </div>
      </div>
    </div>
  );
}
