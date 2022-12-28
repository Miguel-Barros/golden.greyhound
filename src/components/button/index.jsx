import React from "react";

export default function Button({ label, type, danger, action, className }) {
  return (
    <div
      className={`px-4 py-2 cursor-pointer font-semibold text-lg text-center rounded-md text-typography-primary hover:opacity-80 ease-in-out duration-300 ${className} ${
        type === "primary" ? "bg-background-secondary" : "border-2"
      } ${danger && "border-background-danger text-typography-danger"}`}
      onClick={() => action()}
    >
      {label}
    </div>
  );
}
