import { bouncy } from "ldrs";

bouncy.register();

interface Props {
  size: number;
}

export default function Loader({ size }: Props) {
  return <l-bouncy size={size} color="black"></l-bouncy>;
}
