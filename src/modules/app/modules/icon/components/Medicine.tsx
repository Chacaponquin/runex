import React from "react";
import { IconProps } from "../interfaces";
import { DEFAULT_ICON_SIZE } from "../constants";

export default function Medicine({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.8785 37C29.0529 39.0738 26.2237 40.5872 24 41.3262C17 39 4 29 4 18C4 11.9249 8.92487 7 15 7C18.7203 7 22.0093 8.8469 24 11.6738C25.9907 8.8469 29.2797 7 33 7C39.0751 7 44 11.9249 44 18C44 19.7465 43.6723 21.4677 43.0929 23.1371"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 29H31L34 25L37 33L39.9625 29H44"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
