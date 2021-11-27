import { BoxRetur, HeaderContainerAll, BoxAdd } from "./styleHeader";

interface HeaderProps {
    title: string,
    button: Boolean
}

export default function Header({title, button}: HeaderProps) {
    return (
        <HeaderContainerAll>
            <BoxRetur>
                <img src="/images/Return.svg" alt="Icone Retornar" />
            </BoxRetur>
            <BoxAdd>
                <h5>{title}</h5>
                {button && <button>Adicionar +</button>}
            </BoxAdd>
        </HeaderContainerAll>
    )
}