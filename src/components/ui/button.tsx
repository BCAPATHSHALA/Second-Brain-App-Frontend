import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  startIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  startIcon,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-500 ease-in-out";
  const variantStyles = {
    primary:
      "bg-primary text-seasalt hover:bg-mediumslateblue focus:ring-mediumslateblue",
    secondary:
      "bg-secondary text-mediumslateblue font-semibold hover:bg-battleshipgray hover:text-seasalt",
  };
  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {
        <div className="flex justify-center items-center gap-2">
          {startIcon}
          {children}
        </div>
      }
    </button>
  );
};

export default Button;
