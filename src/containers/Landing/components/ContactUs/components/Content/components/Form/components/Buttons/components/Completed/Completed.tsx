import { Check } from "@modules/app/modules/icon/components";

export default function Completed() {
  return (
    <div className="flex items-center gap-x-3 py-2.5 px-5 bg-green-100 rounded">
      <i className="stroke-green-500">
        <Check size={27} />
      </i>

      <span className="text-base">Gracias!!!</span>
    </div>
  );
}
