import { ContainerButton } from "./style";

interface ButtonFooterProps {
    description: string,
}

export default function ButtonFooter({description}: ButtonFooterProps) {
    return (
        <ContainerButton>
            <button>{description}</button>
        </ContainerButton>
    )
}
