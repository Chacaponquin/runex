"use client";

import { useContext } from "react";
import { ModalContext } from "../context";
import { MODAL_ACTIONS } from "../constants";

export default function useModal() {
  const { handleClose, handleOpenModal } = useContext(ModalContext);

  function handleOpenAddClothe() {
    handleOpenModal({ type: MODAL_ACTIONS.ADD_CLOTHE });
  }

  return { handleClose, handleOpenAddClothe };
}
