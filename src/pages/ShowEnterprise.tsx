
import { Alert, Button, Dialog } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import NewEnterprise from "../components/NewEnterprise";
import { 
    BoxNameEnterprise, 
    ContainerHome,  
    ContentHome, 
    ContentStatus
} from "./styleSummary";

interface ShowListEnterpriseProps {
    data: {
    id: string,
    value: string,
    name: string,
    purpose: string,
    status: string,
    address: {
        street: string,
        number: number,
        district: any,
        state: string,
    }
    }
reloadEnterprises: () => void
}

export default function ShowListEnterprise({data, reloadEnterprises}: ShowListEnterpriseProps) {
    const [openModal, setOpenModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);


    async function DeleteEnterprise(value) {
        await axios.delete(`http://localhost:3001/enterprises/${value}`)
        .then(() => {
            window.alert('Sucesso')
            setOpenModalDelete(false)
            reloadEnterprises()
        }).catch((err) => {
            window.alert(`Erro ao Deletar, ${err}`)
        })
    }

    return (
        <ContainerHome key={data.id}>
            <ContentHome>
            {openModalDelete && 
            <Alert
              maxWidth="md"
              severity="error"
              action={
                <>
                <Button onClick={() => setOpenModalDelete(false)}color="inherit" size="small">
                  Cancelar
                </Button>
                <Button onClick={() => DeleteEnterprise(data.id)}color="inherit" size="small">
                  Confirmar
                </Button>
                </>
              }
            >
              Confirma a exclusão do Empreendimento?
            </Alert>}
                {!openModalDelete && 
                <div>
                    <BoxNameEnterprise>                      
                        <span>{data.name}</span>
                        <img 
                        onClick={() => {
                            setOpenModal(true);
                            setIsEdit(true);
                        }} 
                        src="/images/Vector.svg" 
                        alt="Icone de Lapis" 
                        />
                        <img 
                        onClick={() => {
                            setOpenModalDelete(true);
                        }}
                        src="/images/Vector-1.svg" 
                        alt="Icone de Lixeira" 
                        />
                    </BoxNameEnterprise>
                    <p>{data.address.street}, {data.address.number} - {data.address.district}, {data.address.state}</p>
                </div>}
                <ContentStatus>
                    <div>{data.status === "RELEASE" ? "Lançamento" : data.status}</div>
                    <div>{data.purpose === "HOME" ? "Residencial" : data.purpose}</div>
                </ContentStatus>
            </ContentHome>
            <Dialog
            open={openModal}
            onClose={() => {
                setOpenModal(false)
            }}
            maxWidth="md"
            fullWidth
            >
            <NewEnterprise 
            ShowData={data} 
            isEdit={isEdit} 
            closeModal={setOpenModal}
            reloadEnterprises={reloadEnterprises}
            />
            </Dialog>
        </ContainerHome>
    )
}