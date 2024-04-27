"use client";

import { APP_ROUTES } from "@modules/app/constants";
import { Form, Header } from "./components";
import { useSignUp } from "./hooks";
import { useUser } from "@modules/user/hooks";
import { Redirect } from "@modules/app/components";
import { PageLoader } from "@modules/shared/components";

export default function SignUp() {
  const { form, handleChange, handleSubmit, loading } = useSignUp();
  const { fetchUserLoading, actualUser } = useUser();

  return (
    <PageLoader loading={fetchUserLoading}>
      <Redirect url={APP_ROUTES.ROOT} condition={actualUser === null}>
        <div className="w-full flex items-center justify-center h-screen px-6 py-4">
          <main className="flex flex-col max-w-[1100px] w-full">
            <div className="flex max-w-[600px] flex-col w-full">
              <Header />
              <Form
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                loading={loading}
              />
            </div>
          </main>
        </div>
      </Redirect>
    </PageLoader>
  );
}
