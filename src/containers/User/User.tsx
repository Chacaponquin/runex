"use client";

import { Footer, Navbar, PageLoader } from "@modules/shared/components";
import { useUser as useUserModule } from "@modules/user/hooks";
import { Redirect } from "@modules/app/components";
import { APP_ROUTES } from "@modules/app/constants";

interface Props {
  children: React.ReactNode;
}

export default function User({ children }: Props) {
  const { fetchUserLoading, actualUser } = useUserModule();

  return (
    <PageLoader loading={fetchUserLoading}>
      <Redirect url={APP_ROUTES.ROOT} condition={actualUser !== null}>
        <div className="w-full flex flex-col">
          <Navbar fixed={false} />

          <div className="flex flex-col flex-grow items-center w-full h-full px-5 mb-28">
            <main className="flex flex-col items-center max-w-[1100px] w-full h-full gap-x-12">
              {children}
            </main>
          </div>

          <Footer />
        </div>
      </Redirect>
    </PageLoader>
  );
}
