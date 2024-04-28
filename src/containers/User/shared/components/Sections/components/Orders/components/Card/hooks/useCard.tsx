"use client";

import { useState } from "react";

export default function useCard() {
const [open, setOpen] = useState(false)


function handleChangeOpen(){
    setOpen(prev => !prev)
}

  return {handleChangeOpen, open};
}
