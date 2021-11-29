import { useState } from 'react';
import { Alert, Dialog, DialogProps } from '@material-ui/core';
import { ButtonConfirm, ContainerHome } from './styleModal';

interface ModalConfirmProps {
    openModal: boolean,
    handleClose: () => void,
    pushButton: () => void,
    address: {
        logradouro: string,
        bairro: string,
        localidade: string,
        uf: string
    }
}

export default function ModalConfirmAddress({openModal, address, handleClose, pushButton}: ModalConfirmProps) {

    return (
        <Dialog
        open={openModal}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        >
            <Alert severity="warning">Confirme se o endereço esta correto!</Alert>
            <ContainerHome>
                  <p>
                    {address.logradouro}, {address.bairro} 
                  </p>
                  <p>
                    {address.localidade} - {address.uf}
                  </p>
            </ContainerHome>
            <ButtonConfirm onClick={pushButton}>Confirmar</ButtonConfirm>
        </Dialog>

    )
}