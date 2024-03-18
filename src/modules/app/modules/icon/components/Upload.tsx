import { IconProps } from "../interfaces";
import { DEFAULT_ICON_SIZE } from "../constants";

export default function Upload({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="icon-955336b7f10b972"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
        style={{ maskType: "alpha" }}
      >
        <path d="M48 0H0V48H48V0Z" fill="#000000" />
      </mask>
      <g mask="url(#icon-955336b7f10b972)">
        <path
          d="M6 24.0083V42H42V24"
          stroke="inherit"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33 15L24 6L15 15"
          stroke="inherit"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.9917 32V6"
          stroke="inherit"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
