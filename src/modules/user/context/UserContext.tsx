"use client";

import { createContext, useState, useEffect } from "react";
import { useUserServices } from "../services";
import { CurrentUser } from "../domain";

interface Props {
  actualUser: CurrentUser | null;
  loading: boolean;
}

const UserContext = createContext<Props>({
  actualUser: null,
  loading: true,
});

function UserProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [actualUser, setActualUser] = useState<CurrentUser | null>(null);

  const { getUserByToken } = useUserServices();

  useEffect(() => {
    setLoading(true);
    getUserByToken({
      onSuccess(user) {
        setActualUser(user);
      },
      onError() {
        setActualUser(null);
      },
      onFinally() {
        setLoading(false);
      },
    });
  }, []);

  const data = {
    actualUser,
    loading,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
