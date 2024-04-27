import { IconProps } from "@modules/app/modules/icon/interfaces";

interface Props {
  handleClick(): void;
  icon: React.FC<IconProps>;
  children: React.ReactNode;
}

export default function MenuButton({ handleClick, icon, children }: Props) {
  return (
    <div className="relative flex flex-col">
      <button
        className="hover:stroke-blue-500 transition-all duration-200"
        onClick={handleClick}
      >
        {icon({ size: 22 })}
      </button>

      {children}
    </div>
  );
}
