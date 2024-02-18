import { useMemo } from "react";

interface Props {
  totalPages: number;
}

export default function useScroll({ totalPages }: Props) {
  const pages: Array<number> = useMemo(() => {
    const result: Array<number> = [];

    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1);
    }

    return result;
  }, [totalPages]);

  return { pages };
}
