"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  query: string | undefined;
}

export default function useNavbar({ query }: Props) {
  const router = useRouter();

  const [search, setSearch] = useState(query ? query : "");

  function handleSearch() {
    if (search) {
      router.push(`?q=${search}`, { scroll: true });
    }
  }

  function handleChangeSearch(v: string) {
    setSearch(v);
  }

  return {
    handleSearch,
    search,
    handleChangeSearch,
  };
}
