"use client";

import { useState } from "react";
import { UserData } from "../interfaces";

export default function useUser() {
  const [userData, setUserData] = useState<Array<UserData>>([]);
  const [loading, setLoading] = useState(false);

  return { loading, userData };
}
