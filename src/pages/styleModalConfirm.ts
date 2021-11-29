import styled from 'styled-components';

export const ContainerHomeConfirm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 30px 10px;

    p {
        font-family: Inter, sans-serif;
        font-weight: 500;
        font-size: 1.2rem;
        color: #6D6C7B;
    }
`;

export const ButtonConfirm = styled.button`
    width: 100px;
    height: 30px;
    background: #4F46BB;
    border-radius: 30px;
    border: none;
    margin: 0 0 10px 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px;

    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #FFFFFF;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }
`;