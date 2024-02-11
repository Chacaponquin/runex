import { DEFAULT_ICON_SIZE } from "../constants";
import { IconProps } from "../interfaces";

export default function ArrowDown({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36 18L24 30L12 18"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
