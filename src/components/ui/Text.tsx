import React from "react";
import clsx from "clsx";

type Props = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  type?: "title" | "base" | "custom";
  color?:
    | "primary"
    | "contrast"
    | "error"
    | "success"
    | "warning"
    | "grey"
    | "custom";
  size?: "xl" | "lg" | "md" | "sm" | "xs" | "custom" | "14";
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

const Text: React.FC<Props> = ({
  size = "md",
  as = "p",
  color = "primary",
  type = "base",
  className,
  children,
  ...props
}) => {
  const clases = clsx(
    className,
    {
      "font-nunito": type === "title",
      "font-raleway": type === "base",
      "": type === "custom",
    },
    {
      "text-primary": color === "primary",
      "text-contrast": color === "contrast",
      "text-red-500": color === "error",
      "text-green-400": color === "success",
      "text-yellow-400": color === "warning",
      "": color === "custom",
    },
    {
      "text-xl md:text-2xl": size === "xl",
      "text-lg md:text-lg": size === "lg",
      "text-base md:text-md": size === "md",
      "text-sm md:text-sm": size === "sm",
      "text-[12px] md:text-[14px]": size === "14",
      "text-xs md:text-xs": size === "xs",
      "": type === "custom",
    }
  );

  const elementProps: any = {
    ...props,
    className: clases,
  };

  return React.createElement(as, elementProps, children);
};

export default Text;
