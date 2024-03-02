import React from "react";
import { IconProps } from "../interfaces";
import { DEFAULT_ICON_SIZE } from "../constants";

export default function Lock({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24"
        cy="30"
        r="14"
        fill="none"
        stroke="inherit"
        strokeWidth="4"
      />
      <path
        d="M31 18V11C31 7.13401 27.866 4 24 4V4C20.134 4 17 7.13401 17 11V18"
        stroke="inherit"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M24 26L24 34"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
