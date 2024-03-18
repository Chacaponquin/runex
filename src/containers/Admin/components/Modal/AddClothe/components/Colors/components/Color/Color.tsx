import { ProductColor } from "@modules/product/domain";

export default function Color({ color, name }: ProductColor) {
  return (
    <div className="flex items-center gap-x-3">
      <div
        className="min-h-[20px] min-w-[20px] rounded-full"
        style={{ backgroundColor: `${color}` }}
      ></div>

      <span className="text-base">{name}</span>
    </div>
  );
}
