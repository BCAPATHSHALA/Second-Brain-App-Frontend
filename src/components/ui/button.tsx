import { ReactElement } from "react";

interface ButtonInterface {
  title: string;
  size: "lg" | "sm" | "md";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  variant: "primary" | "secondary";
}

const sizeStyles = {
  lg: "px-8 py-4 text-xl",
  md: "px-4 py-2 text-md",
  sm: "px-2 py-1 text-sm",
};

const variantStyles = {
  primary: "bg-primary text-seasalt",
  secondary: "bg-secondary text-mediumslateblue font-semibold",
};

const Button = ({
  title,
  size,
  startIcon,
  endIcon,
  variant,
}: ButtonInterface) => {
  return (
    <button
      className={`flex justify-center items-center font-light rounded-md ${sizeStyles[size]} ${variantStyles[variant]}`}
    >
      {startIcon}
      <p className={`pl-2  pr-2`}>{title}</p>
      {endIcon}
    </button>
  );
};

export default Button;
