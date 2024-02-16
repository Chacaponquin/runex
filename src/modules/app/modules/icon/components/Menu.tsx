import React from "react";
import { IconProps } from "../interfaces";
import { DEFAULT_ICON_SIZE } from "../constants";

export default function Menu({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 20L23 6L6 6L6 20L23 20Z"
        fill="none"
        stroke="inherit"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M42 42V28L25 28L25 42H42Z"
        fill="none"
        stroke="inherit"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M31 6V20H42V6H31Z"
        fill="none"
        stroke="inherit"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M6 28L6 42H17V28H6Z"
        fill="none"
        stroke="inherit"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
