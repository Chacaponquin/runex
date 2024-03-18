import React, { createContext, useState } from "react";
import { ModalProps } from "../interfaces/modal";
import { MODAL_ACTIONS } from "../constants";
import { AddClothe } from "../components";

interface Props {
  openModal: null | ModalProps;
  handleClose(): void;
  handleOpenModal(props: ModalProps): void;
}

export const ModalContext = createContext<Props>({ openModal: null } as Props);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [openModal, setOpenModal] = useState<ModalProps | null>(null);

  function handleClose() {
    setOpenModal(null);
  }

  function handleOpenModal(props: ModalProps) {
    setOpenModal(props);
  }

  const value = { openModal, handleClose, handleOpenModal };

  return (
    <ModalContext.Provider value={value}>
      {openModal && openModal.type === MODAL_ACTIONS.ADD_CLOTHE && (
        <AddClothe />
      )}
      {children}
    </ModalContext.Provider>
  );
}
