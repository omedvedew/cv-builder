import React from "hoist-non-react-statics/node_modules/@types/react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  large?: boolean;
}
