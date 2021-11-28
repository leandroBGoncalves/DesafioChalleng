import { useEffect, useState } from "react";
import axios from "axios";
import { MenuItem, TextField, FormControl, IconButton } from "@material-ui/core";
import { BoxCep, BoxSelect, ConatinerNew, ContentNew, HeaderNew, ResultCep } from "./style";

import Header from '../Header/index';
import ButtonFooter from "../buttonFooter/buttonFooter";
import { apiResolver } from "next/dist/server/api-utils";

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
    const [cep, setCep] = useState();
    const [number, setNumber] = useState(isEdit ? ShowData.address.number : 'Numero')

   async function CepQuery() {
        await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
          console.log(response.data)
        })
    }

  function handleCep(e) {
    setCep(e.target.value);
  }

  {/*  async function CreateEnterprise() {
      await axios.post('http://localhost:3001/enterprises', {
        name: name,
        status: currency,
        purpose: status,
        ri_number: "",
        address: {
        street: "Rua Lucinda Ferreira",
        number: number,
        district: "Ipiranga",
        city: "São Paulo",
        state: "SP",
        cep: cep
      }
    })
  }*/}

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
                    <BoxCep>
                    <FormControl fullWidth sx={{ m: 1,}}>
                        <TextField
                              id="cep"
                              value={cep}
                              placeholder={isEdit ? ShowData.address.cep : 'CEP'}
                              onChange={handleCep}
                              variant="standard"
                              fullWidth
                        />
                    </FormControl>
                        <IconButton onClick={CepQuery} type="submit" sx={{ p: '10px' }} aria-label="search">
                          <img src="/images/Vector (1).svg" />
                        </IconButton>
                    </BoxCep>
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
                                CepQuery()
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