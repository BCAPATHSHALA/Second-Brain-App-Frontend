import { ReactElement } from "react";

interface ButtonInterface {
  title?: string;
  size: "lg" | "sm" | "md";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  variant: "primary" | "secondary";
  onClick?: () => void;
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
  onClick,
}: ButtonInterface) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center font-light rounded-md gap-2 ${sizeStyles[size]} ${variantStyles[variant]}`}
    >
      {startIcon}
      {title && <span>{title}</span>}
      {endIcon}
    </button>
  );
};

export default Button;
