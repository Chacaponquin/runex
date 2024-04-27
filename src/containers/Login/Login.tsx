"use client";

import { PageLoader } from "@modules/shared/components";
import { Form, Image as LoginImage } from "./components";
import { useLogin } from "./hooks";
import { Redirect } from "@modules/app/components";
import { APP_ROUTES } from "@modules/app/constants";
import { useUser } from "@modules/user/hooks";

export default function Login() {
  const {
    form,
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
    handleChangeRemember,
    loading,
  } = useLogin();

  const { actualUser, fetchUserLoading } = useUser();

  return (
    <PageLoader loading={fetchUserLoading}>
      <Redirect url={APP_ROUTES.ROOT} condition={actualUser === null}>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen">
          <Form
            handleChangeEmail={handleChangeEmail}
            handleChangePassword={handleChangePassword}
            form={form}
            handleLogin={handleLogin}
            handleChangeRemember={handleChangeRemember}
            loading={loading}
          />

          <LoginImage />
        </div>
      </Redirect>{" "}
    </PageLoader>
  );
}
