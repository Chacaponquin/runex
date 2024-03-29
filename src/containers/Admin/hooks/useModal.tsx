"use client";

import { useContext } from "react";
import { ModalContext } from "../context";
import { MODAL_ACTIONS } from "../constants";

export default function useModal() {
  const { handleClose, handleOpenModal } = useContext(ModalContext);

  function handleOpenAddClothe() {
    handleOpenModal({ type: MODAL_ACTIONS.ADD_CLOTHE });
  }

  function handleOpenEditClothe(id: string) {
    handleOpenModal({ type: MODAL_ACTIONS.EDIT_CLOTHE, id: id });
  }

  function handleOpenAddMedicine() {
    handleOpenModal({ type: MODAL_ACTIONS.ADD_MEDICINE });
  }

  function handleOpenEditMedicine(id: string) {
    handleOpenModal({ type: MODAL_ACTIONS.EDIT_MEDICINE, id: id });
  }

  return {
    handleClose,
    handleOpenAddClothe,
    handleOpenEditClothe,
    handleOpenEditMedicine,
    handleOpenAddMedicine,
  };
}
