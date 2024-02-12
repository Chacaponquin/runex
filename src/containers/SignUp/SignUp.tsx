"use client";

import React from "react";
import { Form, Header } from "./components";
import { useSignUp } from "./hooks";

export default function SignUp() {
  const { form, handleChange, handleSubmit } = useSignUp();

  return (
    <div className="w-full flex items-center justify-start h-screen bg-dark-950 text-white px-32">
      <main className="flex flex-col max-w-[600px] w-full">
        <Header />
        <Form
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}
