"use client";
import ErrorModal from "@/components/modals/ModalError";
import React, { createContext, useContext, useState, ReactNode } from "react";

type ModalType = "error" | "confirm" | "alert" | null;

interface ModalContextType {
  modalError: (msg: string) => void;
  modalAlert: (msg: string, title: string) => void;
  modalConfirm: (msg: string, onConfirm: () => void) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModals = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModals debe usarse dentro de ModalProvider");
  return ctx;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [message, setMessage] = useState("");
  const [modalTitle, setModalTitle] = useState<string>("");
  const [onConfirm, setOnConfirm] = useState<(() => void) | undefined>(
    undefined
  );

  const hideModal = () => {
    setModalType(null);
    setMessage("");
    setOnConfirm(undefined);
  };

  const modalError = (msg: string) => {
    setModalType("error");
    setMessage(msg);
  };

  const modalAlert = (msg: string, title: string) => {
    setModalType("alert");
    setMessage(msg);
    setModalTitle(title);
  };

  const modalConfirm = (msg: string, confirmCb: () => void) => {
    setModalType("confirm");
    setMessage(msg);
    setOnConfirm(() => confirmCb);
  };

  return (
    <ModalContext.Provider
      value={{ modalError, modalAlert, modalConfirm, hideModal }}
    >
      {children}

      <ErrorModal
        show={modalType === "error"}
        string={message}
        onHide={hideModal}
      />
    </ModalContext.Provider>
  );
};
