"use client";

import { useEffect, useState } from "react";
import { UserData } from "../interfaces";

export default function useUser() {
  const [userData, setUserData] = useState<Array<UserData>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setUserData([]);
  }, []);

  return { loading, userData };
}
