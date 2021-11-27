import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import ButtonFooter from "../components/buttonFooter/buttonFooter";
import { 
    BoxNameEnterprise, 
    ContainerHome, 
    ContainertLupa, 
    ContentHome, 
    ContentLupa, 
    ContentStatus
} from "./styleSummary";
import NewEnterprise from "../components/NewEnterprise";
import Header from "../components/Header";

interface HomeProps {
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

export default function Home() {
    const [enterprises, setEnterprises] = useState<HomeProps[]>([])

const Enterprises = async () => {
    await axios.get('http://localhost:3001/enterprises').then((response) => {
        setEnterprises(response.data)
});
}

useEffect(() => {
    Enterprises()
}, [])


    return (
      <>
        <Head>
          <title>ChallengJob</title>
        </Head>

        <main>
            <NewEnterprise />
            {/*
            <Header title="Empreendimentos" button={true}/>
            <ContainertLupa>
                <ContentLupa>
                    <div>
                        <img src="/images/Vector (1).svg" alt="Icone Lupa" />
                        <p>Buscar</p>
                    </div>
                </ContentLupa>
            </ContainertLupa>
            {enterprises.map((data) => {
                return (
                    <ContainerHome key={data.id}>
                        <ContentHome>
                            <div>
                                <BoxNameEnterprise>                      
                                    <span>{data.name}</span>
                                    <img src="/images/Vector.svg" alt="Icone de Lapis" />
                                    <img src="/images/Vector-1.svg" alt="Icone de Lixeira" />
                                </BoxNameEnterprise>
                                <p>{data.address.street}, {data.address.number} - {data.address.district}, {data.address.state}</p>
                            </div>
                            <ContentStatus>
                                <div>{data.status === "RELEASE" ? "Lançamento" : data.status}</div>
                                <div>{data.purpose === "HOME" ? "Residencial" : data.purpose}</div>
                            </ContentStatus>
                        </ContentHome>
                    </ContainerHome>
                )
            })}*/}
            <ButtonFooter />
        </main>
      </>
    )
  }