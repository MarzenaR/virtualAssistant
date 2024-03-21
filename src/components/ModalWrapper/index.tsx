import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useModal } from '../../contexts/Modal';
import Login from '../forms/Login';
import Register from '../forms/Register';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalWrapper = () => {
      const {isModalOpen, closeModal, modalComponent} = useModal();

      const renderModalContent = () => {
            switch(modalComponent){
                  case 'login':
                        return <Login />;
                  case 'register':
                        return <Register />;
                  default:
                        return <>Modal not found</>
            }
      }

      return (
            <Modal
                  open={isModalOpen}
                  onClose={closeModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  >
                  <Box sx={style}>
                        {renderModalContent()}
                  </Box>
            </Modal>
      )
}

export default ModalWrapper;