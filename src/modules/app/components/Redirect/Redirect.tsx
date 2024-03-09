"use client";

import React, { Fragment } from "react";
import { redirect } from "next/navigation";

interface Props {
  url: string;
  condition: boolean;
  children: React.ReactNode;
}

export default function Redirect({ url, condition, children }: Props) {
  return <Fragment>{condition ? children : redirect(url)}</Fragment>;
}
