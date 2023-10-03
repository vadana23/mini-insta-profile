import clsx from "clsx";

export const Button = ({ variant = "primary", children }) => {
  return (
    <button
      className={clsx(
        "px-4 py-1.5 text-sm font-medium text-white bg-[#333] border-0 rounded-lg leading-tight hover:opacity-80 transition-all duration-300",
        {
          "bg-[#0095f6]": variant === "primary",
          "bg-[#333]": variant === "secondary",
        }
      )}
    >
      {children}
    </button>
  );
};
