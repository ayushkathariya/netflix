import React from "react";

export default function FormComponent() {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email address"
          className="p-3 text-black"
        />
        <input
          type="submit"
          value="Get Started >"
          className="p-2 font-semibold text-start bg-[#e50914] cursor-pointer"
        />
      </form>
    </div>
  );
}
