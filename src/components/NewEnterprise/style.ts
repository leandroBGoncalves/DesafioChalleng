import styled from 'styled-components';

export const ConatinerNew = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
`

export const ContentNew = styled.div`
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 1rem 2rem;
`

export const HeaderNew = styled.div`
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;
    margin-bottom: 50px;

    h5 {
        font-family: Inter, sans-serif;
        font-weight: 700;
        font-size: 1.3rem;
        color: #302E45;
    }
`;

export const BoxSelect = styled.div`
    width: 100%;

    div {
        & + div {
            margin-top: 50px;
        }
    }
`;

export const ResultCep = styled.div`
    height: 10rem;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    p {
        width: 35%;

        & + p {
            margin-top: 20px;
        }
    }
`;