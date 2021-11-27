import Head from "next/head";
import ButtonFooter from "../components/buttonFooter/buttonFooter";
import { 
    BoxNameEnterprise, 
    ContainerHome, 
    ContainertLupa, 
    ContentHome, 
    ContentLupa 
} from "./styleSummary";

export default function Home() {
  

    return (
      <>
        <Head>
          <title>Home | ChallengJob</title>
        </Head>
        <main>
            <ContainertLupa>
                <ContentLupa>
                    <div>
                        <img src="/images/Vector (1).svg" alt="Icone Lupa" />
                        <p>Buscar</p>
                    </div>
                </ContentLupa>
            </ContainertLupa>
            <ContainerHome>
                <ContentHome>
                    <div>
                        <BoxNameEnterprise>                      
                            <span>Villega Vila Velha</span>
                            <img src="/images/Vector.svg" alt="Icone de Lapis" />
                            <img src="/images/Vector-1.svg" alt="Icone de Lixeira" />
                        </BoxNameEnterprise>
                        <p>Rua Dório Silva, 100 - Vila Guaranhuns, Vila Velha</p>
                    </div>
                    <div>
                        <div>Lançamento</div>
                        <div>Residencial</div>
                    </div>
                </ContentHome>
            </ContainerHome>
            <ContainerHome>
                <ContentHome>
                    <div>
                        <BoxNameEnterprise>                      
                            <span>Villega Vila Velha</span>
                            <img src="/images/Vector.svg" alt="Icone de Lapis" />
                            <img src="/images/Vector-1.svg" alt="Icone de Lixeira" />
                        </BoxNameEnterprise>
                        <p>Rua Dório Silva, 100 - Vila Guaranhuns, Vila Velha</p>
                    </div>
                    <div>
                        <div>Lançamento</div>
                        <div>Residencial</div>
                    </div>
                </ContentHome>
            </ContainerHome>
            <ContainerHome>
                <ContentHome>
                    <div>
                        <BoxNameEnterprise>                      
                            <span>Villega Vila Velha</span>
                            <img src="/images/Vector.svg" alt="Icone de Lapis" />
                            <img src="/images/Vector-1.svg" alt="Icone de Lixeira" />
                        </BoxNameEnterprise>
                        <p>Rua Dório Silva, 100 - Vila Guaranhuns, Vila Velha</p>
                    </div>
                    <div>
                        <div>Lançamento</div>
                        <div>Residencial</div>
                    </div>
                </ContentHome>
            </ContainerHome>
            <ContainerHome>
                <ContentHome>
                    <div>
                        <BoxNameEnterprise>                      
                            <span>Villega Vila Velha</span>
                            <img src="/images/Vector.svg" alt="Icone de Lapis" />
                            <img src="/images/Vector-1.svg" alt="Icone de Lixeira" />
                        </BoxNameEnterprise>
                        <p>Rua Dório Silva, 100 - Vila Guaranhuns, Vila Velha</p>
                    </div>
                    <div>
                        <div>Lançamento</div>
                        <div>Residencial</div>
                    </div>
                </ContentHome>
            </ContainerHome>
            <ButtonFooter />
        </main>
      </>
    )
  }