import Link from "next/link";
import React from "react";

const Button = ({
  children,
  variant,
  href,
}: {
  children: React.ReactNode;
  variant: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={`${
        variant === "primary"
          ? "text-text-primary border border-border-medium hover:bg-text-primary hover:text-bg-primary transition-colors duration-300"
          : "bg-text-primary text-bg-primary border border-border-dark hover:bg-transparent hover:text-text-primary transition-colors duration-300"
      } px-4 py-2 rounded-md cursor-pointer`}
    >
      {children}
    </Link>
  );
};

export default Button;
