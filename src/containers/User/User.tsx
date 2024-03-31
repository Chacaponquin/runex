"use client";

import { Navbar, PageLoader } from "@modules/shared/components";
import { Header, Info } from "./components";
import { useUser } from "./hooks";
import { useUser as useUserModule } from "@modules/user/hooks";
import { Redirect } from "@modules/app/components";
import { APP_ROUTES } from "@modules/app/constants";

interface Props {
  children: React.ReactNode;
}

export default function User({ children }: Props) {
  const { userData } = useUser();
  const { fetchUserLoading, actualUser } = useUserModule();

  return (
    <PageLoader loading={fetchUserLoading}>
      <Redirect url={APP_ROUTES.ROOT} condition={actualUser !== null}>
        <div className="w-full flex flex-col">
          <Navbar fixed={false} />
          <Header />

          <div className="flex flex-col flex-grow items-center w-full h-full bg-gray-50 px-5">
            <main className="flex flex-col items-center max-w-[700px] w-full h-full gap-x-12">
              <Info userData={userData} />
              {children}
            </main>
          </div>
        </div>
      </Redirect>
    </PageLoader>
  );
}
