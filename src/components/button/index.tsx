import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
  children: React.ReactNode;
  size?: ButtonSize;
};

const base =
  "flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-sm cursor-pointer transition-all";
const variants: Record<ButtonVariant, string> = {
  primary: "bg-gold text-navy hover:opacity-90",
  secondary:
    "text-white/70 border border-white/20 hover:border-gold hover:text-gold",
};

const sizes: Record<ButtonSize, string> = {
  sm: "text-xs px-4 py-1.5",
  md: "text-sm px-6 py-2.5",
  lg: "text-base px-8 py-3.5",
};

const Button = ({
  variant,
  size = "md",
  children,
  type = "button",
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
