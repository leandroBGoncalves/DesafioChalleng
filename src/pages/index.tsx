import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import ButtonFooter from "../components/buttonFooter/buttonFooter";
import { 
    ContainertLupa, 
    ContentLupa, 
} from "./styleSummary";
import NewEnterprise from "../components/NewEnterprise";
import Header from "../components/Header";
import ShowListEnterprise from "./ShowEnterprise";
import { IconButton, Input, InputAdornment } from "@material-ui/core";


export default function Home() {
    const [enterprises, setEnterprises] = useState([]);
    const [registerEnterprise, setregisterEnterprise] = useState(false);
    const [isHome, setIsHome] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [enterprisesNumber, setEnterprisesNumber] = useState(0)
    const [search, setSearch] = useState("")

const Enterprises = async () => {
    await axios.get('http://localhost:3001/enterprises').then((response) => {
        setEnterprises(response.data)
});
}

function numberEnterprises() {
    setEnterprisesNumber(enterprises.length)
}

console.log(enterprises)

useEffect(() => {
    numberEnterprises()
})

useEffect(() => {
    Enterprises()
}, [])

function handleHereNewEnterprise() {
    setIsHome(false);
    setregisterEnterprise(true);
}

function handleHome() {
    setregisterEnterprise(false);
    setIsHome(true);
}



const  handleSearch = enterprises.filter((body) => {
        return body.name
        .toLowerCase()
        .includes(search.toLocaleLowerCase())  
    })

    return (
      <>
        <Head>
          <title>ChallengJob</title>
        </Head>

        <main>
            {registerEnterprise && <NewEnterprise handleHome={handleHome} reloadEnterprises={Enterprises}/>}
            {isHome &&
            <>
            <Header 
            title="Empreendimentos" 
            button={true} 
            IconReturn={false} 
            PushButton={handleHereNewEnterprise}
            PushButtonReturn={handleHome}
            />
            <ContainertLupa>
                <ContentLupa>
                    <div>
                    <Input
                    fullWidth
                    id="standard-adornment-password"
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                    endAdornment={
                      <InputAdornment onClick={handleSearch} position="start">
                        <IconButton type="submit" aria-label="search">
                        <img src="/images/Vector (1).svg" alt="Icone Lupa" />
                        Buscar
                        </IconButton>
                    </InputAdornment>
                       }
                    />
                    </div>
                </ContentLupa>
            </ContainertLupa>
            {handleSearch.slice(0, rowsPerPage).map((data) => {
                return (
                    <ShowListEnterprise handleHome={handleHome} data={data} reloadEnterprises={Enterprises}/>
                )
            })}
            <ButtonFooter description={enterprisesNumber >= rowsPerPage ? "Carregar mais" : "Nada mais para carregar..."} pushClick={() => setRowsPerPage(rowsPerPage + 5)}/>
            </>
            }
        </main>
      </>
    )
  }