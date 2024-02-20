"use client";

import { Form, Header } from "./components";
import { useSignUp } from "./hooks";

export default function SignUp() {
  const { form, handleChange, handleSubmit, loading } = useSignUp();

  return (
    <div className="w-full flex items-center justify-center h-screen bg-dark-950 text-white px-6 py-4">
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
  );
}
