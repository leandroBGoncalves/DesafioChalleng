import styled from 'styled-components';

export const ContainerHome = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 2rem;

`

export const ContentHome = styled.div`
    width: 80%;
    height: 8rem;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(48, 46, 69, 0.06);
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3.4rem;
`

export const BoxNameEnterprise = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;

    span {
        font-family: Inter, sans-serif;
        font-weight: 700;
        font-size: 1.3rem;
        color: #302E45;
        margin-right: 1.2rem;
    }

    img {
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }

        & + img {
            margin-left: 0.75rem;
        }
    }

    `
export const ContentLupa = styled.div`
    width: 80%;
    height: 2.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #BBB8D9;
    div {
        height: 100%;
        display: flex;
        align-items: flex-end;
        cursor: pointer;

        img {
            margin-right: 1.4rem;
        }

        p {
            font-family: Inter, sans-serif;
            font-weight: 400;
            font-size: 1rem;
            color: #302E45;
        }
    }
`

export const ContainertLupa = styled.div`
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
`