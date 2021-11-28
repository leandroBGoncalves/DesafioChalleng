import { useState } from "react";
import { MenuItem, TextField, FormControl } from "@material-ui/core";
import { BoxSelect, ConatinerNew, ContentNew, HeaderNew, ResultCep } from "./style";

import Header from '../Header/index';
import ButtonFooter from "../buttonFooter/buttonFooter";

export default function NewEnterprise() {
    const [currency, setCurrency] = useState('Lançamento');
    const [name, setName] = useState('Nome do empreendimento');
    const [status, setStatus] = useState('Residencial');
    const [cep, setCep] = useState('CEP');
    const [number, setNumber] = useState('Numero')


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
          value: 'Pronto pra morar',
          label: 'Pronto pra morar  ',
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
        <Header title="Cadastro de empreendimento" button={false} IconReturn={true} PushButton/>
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
                              value={currency}
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
                              value={status}
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
                              Rua Doutor Messuti, 
                            </p>
                            <p>
                              Vila Bastos
                            </p>
                            <p>
                              Santo André
                            </p>
                            <p>
                              SP
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
        <ButtonFooter description="Cadastrar" />
    </>
    )
}