import { DEFAULT_ICON_SIZE } from "../constants";
import { IconProps } from "../interfaces";

export default function ArrowUp({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 30L25 18L37 30"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
