import React from "react";

interface Props {
  title: string;
  required: boolean;
  children: React.ReactNode;
}

export default function FormSection({ required, title, children }: Props) {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1.5">
        {title} {required && <span className="text-red-500">*</span>}
      </label>

      {children}
    </div>
  );
}
