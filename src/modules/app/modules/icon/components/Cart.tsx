import React from "react";
import { IconProps } from "../interfaces";
import { DEFAULT_ICON_SIZE } from "../constants";

export default function Cart({
  size = DEFAULT_ICON_SIZE,
  white = false,
}: IconProps & { white?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20.5"
        cy="41.5"
        r="3.5"
        fill={white ? "#ffffff" : "inherit"}
      />
      <circle
        cx="37.5"
        cy="41.5"
        r="3.5"
        fill={white ? "#ffffff" : "inherit"}
      />
      <path
        d="M5 6L14 12L19 34H39L44 17H25"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 26L32.2727 26L41 26"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
