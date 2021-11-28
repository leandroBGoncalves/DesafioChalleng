import router from 'next/router';
import { 
    BoxRetur, 
    HeaderContainerAll, 
    BoxAdd 
} from "./styleHeader";

interface HeaderProps {
    title: string,
    button: Boolean,
    IconReturn: Boolean,
    PushButton: () => void,
}


export default function Header({title, button, IconReturn, PushButton}: HeaderProps) {

    return (
        <HeaderContainerAll>
            {IconReturn && 
            <BoxRetur>
                <img onClick={() => router.push('/')} src="/images/Return.svg" alt="Icone Retornar" />
            </BoxRetur>}
            <BoxAdd return={false}>
                <h5>{title}</h5>
                {button && <button onClick={PushButton}>Adicionar +</button>}
            </BoxAdd>
        </HeaderContainerAll>
    )
}