
import { Dialog } from "@material-ui/core";
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
}

export default function ShowListEnterprise({data}: ShowListEnterpriseProps) {
    const [openModal, setOpenModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

        console.log(data)
    return (
        <ContainerHome key={data.id}>
            <ContentHome>
                <div>
                    <BoxNameEnterprise>                      
                        <span>{data.name}</span>
                        <img onClick={() => {
                            setOpenModal(true);
                            setIsEdit(true);
                        }} 
                        src="/images/Vector.svg" 
                        alt="Icone de Lapis" 
                        />
                        <img src="/images/Vector-1.svg" alt="Icone de Lixeira" />
                    </BoxNameEnterprise>
                    <p>{data.address.street}, {data.address.number} - {data.address.district}, {data.address.state}</p>
                </div>
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
                <NewEnterprise ShowData={data} isEdit={isEdit} closeModal={setOpenModal}/>
            </Dialog>
        </ContainerHome>
    )
}