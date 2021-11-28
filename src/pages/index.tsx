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
import ShowListEnterprise from "./ShowEnterprise";


export default function Home() {
    const [enterprises, setEnterprises] = useState([]);
    const [registerEnterprise, setregisterEnterprise] = useState(false);
    const [isHome, setIsHome] = useState(true);

const Enterprises = async () => {
    await axios.get('http://localhost:3001/enterprises').then((response) => {
        setEnterprises(response.data)
});
}

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


    return (
      <>
        <Head>
          <title>ChallengJob</title>
        </Head>

        <main>
            {registerEnterprise && <NewEnterprise handleHome={handleHome}/>}
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
                        <img src="/images/Vector (1).svg" alt="Icone Lupa" />
                        <p>Buscar</p>
                    </div>
                </ContentLupa>
            </ContainertLupa>
            {enterprises.map((data) => {
                return (
                    <ShowListEnterprise handleHome={handleHome} data={data} />
                )
            })}
            <ButtonFooter description="Carregar mais"/>
            </>
            }
        </main>
      </>
    )
  }