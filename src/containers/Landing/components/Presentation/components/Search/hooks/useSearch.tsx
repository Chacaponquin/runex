"use client";

import React, { useId, useState } from "react";

export default function useSearch() {
  const [focus, setFocus] = useState(false);
  const id = useId();

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return { handleBlur, handleFocus, focus, id, handleSubmit };
}
