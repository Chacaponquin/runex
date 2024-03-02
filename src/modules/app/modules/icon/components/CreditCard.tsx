import React from "react";
import { IconProps } from "../interfaces";
import { DEFAULT_ICON_SIZE } from "../constants";

export default function CreditCard({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44 18V8H4V18"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 18H4V40H44V18Z"
        fill="none"
        stroke="inherit"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M12 29H14"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 29H22"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 29H30"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
