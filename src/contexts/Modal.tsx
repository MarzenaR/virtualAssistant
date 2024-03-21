import React, {Dispatch, SetStateAction, createContext, useContext, useState} from 'react';

interface ModalInterface{
      isModalOpen: boolean;
      setIsModalOpen: Dispatch<SetStateAction<boolean>>;
      modalComponent: string;
      setModalComponent: Dispatch<SetStateAction<string>>;
}

const ModalContext = createContext<ModalInterface>({
      isModalOpen: false,
      setIsModalOpen: () => {},
      modalComponent: '',
      setModalComponent: () => {}
});

interface ModalProviderProps{
      children: JSX.Element
}

const ModalProvider = ({children}: ModalProviderProps) => {
      const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
      const [modalComponent, setModalComponent] = useState<string>('');

      return (
            <ModalContext.Provider value={{isModalOpen, setIsModalOpen, modalComponent, setModalComponent}}>
                  {children}
            </ModalContext.Provider>
      )
}

export const useModal = () => {
      const {isModalOpen, setIsModalOpen, modalComponent, setModalComponent}: ModalInterface = useContext(ModalContext);

      const openModal = (modalComponent: string) => {
            setIsModalOpen(true);
            setModalComponent(modalComponent);
      }

      const closeModal = () => {
            setIsModalOpen(false);
            setModalComponent('');
      }

      return {isModalOpen, openModal, closeModal, modalComponent}
}

export default ModalProvider;