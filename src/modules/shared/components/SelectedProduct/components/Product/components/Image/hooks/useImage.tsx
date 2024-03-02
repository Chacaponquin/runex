"use client";

import { useState } from "react";

export default function useImage() {
const [selectedImage, setSelectedImage] = useState<number>(0);

function handleChangeImage(index: number) {
  setSelectedImage(index);
}


  return {selectedImage, handleChangeImage};
}
