import { useEffect, useState } from "react";
import axios from "axios";
import Router from 'next/router'
import { 
  MenuItem, 
  TextField, 
  FormControl, 
  IconButton 
} from "@material-ui/core";
import { 
  BoxCep, 
  BoxSelect, 
  ConatinerNew, 
  ContentNew, 
  HeaderNew, 
  ResultCep 
} from "./style";

import Header from '../Header/index';
import ButtonFooter from "../buttonFooter/buttonFooter";
import { apiResolver } from "next/dist/server/api-utils";
import ModalConfirmAddress from "./modalConfirmAdress";

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
  closeModal: any,
  isEdit: boolean,
  reloadEnterprises: () => void,
}

interface confirmAddressProps {
  addressCep: {
    logradouro: string,
    bairro: string,
    localidade: string,
    uf: string,
  }
}



export default function NewEnterprise({
  handleHome, 
  ShowData, 
  isEdit, 
  closeModal,
  reloadEnterprises,
}: NewEnterpriseProps) {
    const [currency, setCurrency] = useState('Lançamento');
    const [name, setName] = useState(isEdit ? ShowData.name : 'Nome do empreendimento');
    const [status, setStatus] = useState('Residencial');
    const [cep, setCep] = useState();
    const [number, setNumber] = useState(isEdit ? ShowData.address.number : 'Numero')
    const [openModal, setOpenModal] = useState(false);
    const [addressCep, setAddressCep] = useState([]);
    const [street, setStreet] = useState('Rua');
    const [district, setDistrict] = useState('Bairro');
    const [city, setCity] = useState('Cidade');
    const [uf, setUf] = useState('Estado');

    var closeModal: any

    var isEdit: boolean

    function handleCloseModalConfir() {
      setOpenModal(false)
    }

    function confirmAddress({addressCep}: confirmAddressProps) {
      setStreet(addressCep.logradouro);
      setDistrict(addressCep.bairro);
      setCity(addressCep.localidade);
      setUf(addressCep.uf);
      setOpenModal(false)
    }

   async function CepQuery() {
        await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          const data = response.data;
          setAddressCep(data)
          setOpenModal(true)
        }).catch(() => {
          window.alert('Verifique se o CEP esta correto Ex: 79000111')
        })
    }

  function handleCep(e: any) {
    setCep(e.target.value);
  }

  async function upDateEnterprise() {
    await axios.put(`http://localhost:3001/enterprises/${ShowData.id}`, {
      name: name,
      status: currency,
      purpose: status,
      address: {
      street: street,
      number: number,
      district: district,
      city: city,
      state: uf,
      cep: cep
    }
  })
    .then(() => {
      window.alert('Empreendimento atualizado')
      reloadEnterprises()
      closeModal(false)
    }).catch((err) => {
      window.alert(err)
    })
  }

  async function CreateEnterprise() {
      await axios.post('http://localhost:3001/enterprises', {
        name: name,
        status: currency,
        purpose: status,
        address: {
        street: street,
        number: number,
        district: district,
        city: city,
        state: uf,
        cep: cep
      }
    }).then(() => {
      window.alert('Empreendimento criado com sucesso')
      handleHome()
      setTimeout(() => {
        reloadEnterprises()
      }, 500);
    }).catch((err) => {
      window.alert(`Erro ao Criar empreendimento - ${err}`);
    })
  }

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
        <Header 
        title={isEdit ? "Editar empreendimento" : "Cadastro de empreendimento"} 
        button={false} 
        IconReturn={true} 
        PushButton={handleHome} 
        PushButtonReturn={isEdit ? handleHomeFromEdit : handleHome}
        />
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
                              {isEdit ? ShowData.address.street : street} 
                            </p>
                            <p>
                              {isEdit ? ShowData.address.district : district}
                            </p>
                            <p>
                              {isEdit ? ShowData.address.city : city}
                            </p>
                            <p>
                              {isEdit ? ShowData.address.state : uf}
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
        <ModalConfirmAddress 
        openModal={openModal} 
        handleClose={handleCloseModalConfir} 
        address={addressCep} 
        pushButton={confirmAddress}
        />
        <ButtonFooter 
        pushClick={isEdit ? upDateEnterprise : CreateEnterprise} 
        description={isEdit ? "Editar" : "Cadastrar"} 
        />
    </>
    )
}