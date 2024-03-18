import { MODAL_ACTIONS } from "../constants";

export type AddClotheProps = {
  type: MODAL_ACTIONS.ADD_CLOTHE;
};

export type EditClotheProps = {
  type: MODAL_ACTIONS.EDIT_CLOTHE;
  id: string;
};

export type ModalProps = AddClotheProps | EditClotheProps;
