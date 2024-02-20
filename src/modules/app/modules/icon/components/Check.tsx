import { IconProps } from "../interfaces";
import { DEFAULT_ICON_SIZE } from "../constants";

export default function Check({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 24L20 34L40 14"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
