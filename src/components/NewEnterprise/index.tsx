import { useState } from "react";
import { MenuItem, TextField, FormControl } from "@material-ui/core";
import { BoxSelect, ConatinerNew, ContentNew, HeaderNew, ResultCep } from "./style";

import Header from '../Header/index';
import ButtonFooter from "../buttonFooter/buttonFooter";

interface NewEnterpriseProps {
  handleHome: () => void,
  ShowData: {
    id: string,
    name: string,
    purpose: string,
    status: string,
    address: {
        street: string,
        number: number,
        district: string,
        city: string,
        state: string,
        cep: string,
    }
},
  isEdit: boolean,
  closeModal: () => void,
}

export default function NewEnterprise({handleHome, ShowData, isEdit, closeModal}: NewEnterpriseProps) {
    const [currency, setCurrency] = useState('Lançamento');
    const [name, setName] = useState(isEdit ? ShowData.name : 'Nome do empreendimento');
    const [status, setStatus] = useState('Residencial');
    const [cep, setCep] = useState(isEdit ? ShowData.address.cep : 'CEP');
    const [number, setNumber] = useState(isEdit ? ShowData.address.number : 'Numero')

    function handleHomeFromEdit() {
      closeModal(false);
    }

    const currencies = [
        {
          value: 'Breve lançamento',
          label: 'Breve lançamento',
        },
        {
          value: 'Lançamento',
          label: 'Lançamento',
        },
        {
          value: 'Em obras',
          label: 'Em obras',
        },
        {
          value: 'Pronto para morar',
          label: 'Pronto para morar',
        },

      ];

      const HereStatus = [
        {
          value: 'Residencial',
          label: 'Residencial',
        },
        {
          value: 'Comercial',
          label: 'Comercial',
        },
      ];

    return (
        <>
        <Header title={isEdit ? "Editar empreendimento" : "Cadastro de empreendimento"} button={false} IconReturn={true} PushButton={handleHome} PushButtonReturn={isEdit ? handleHomeFromEdit : handleHome}/>
        <ConatinerNew>
            <ContentNew>
                <HeaderNew>
                    <h5>
                        Informações
                    </h5>
                </HeaderNew>
                <BoxSelect>
                    <FormControl fullWidth sx={{ m: 1,}}>
                        <TextField
                              id="standard-select-currency"
                              select
                              value={isEdit ? ShowData.status : currency}
                              onChange={(e) => {
                                setCurrency(e.target.value)
                              }}
                              variant="standard"
                              fullWidth
                        >
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1,}}>
                        <TextField
                              id="name"
                              value={name}
                              onChange={(e) => {
                                setName(e.target.value)
                              }}
                              variant="standard"
                              fullWidth
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1,}}>
                        <TextField
                              id="Status"
                              select
                              value={isEdit ? ShowData.purpose : status}
                              onChange={(e) => {
                                setStatus(e.target.value)
                              }}
                              variant="standard"
                              fullWidth
                        >
                          {HereStatus.map((status) => (
                            <MenuItem key={status.value} value={status.value}>
                              {status.label}
                            </MenuItem>
                          ))}
                        </TextField>
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1,}}>
                        <TextField
                              id="cep"
                              value={cep}
                              onChange={(e) => {
                                setCep(e.target.value)
                              }}
                              variant="standard"
                              fullWidth
                        />
                    </FormControl>
                    <ResultCep>
                        <div>
                            <p>
                              {isEdit ? ShowData.address.street : "Rua:"} 
                            </p>
                            <p>
                              {isEdit ? ShowData.address.district : "Bairro:"}
                            </p>
                            <p>
                              {isEdit ? ShowData.address.city : "Cidade:"}
                            </p>
                            <p>
                              {isEdit ? ShowData.address.state : "Estado"}
                            </p>
                      </div>
                    <FormControl fullWidth sx={{ m: 1,}}>
                        <TextField
                              id="Number"
                              value={number}
                              onChange={(e) => {
                                setNumber(e.target.value)
                              }}
                              variant="standard"
                              fullWidth
                        />
                    </FormControl>
                    </ResultCep>
                </BoxSelect>
            </ContentNew>
        </ConatinerNew>
        <ButtonFooter description={isEdit ? "Editar" : "Cadastrar"} />
    </>
    )
}