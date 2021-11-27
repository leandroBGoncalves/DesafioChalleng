import styled from 'styled-components';


export const HeaderContainerAll = styled.header`
    width: 1920px;
    max-width: 100%;
    height: 80px;
    background: #FFFFFF;

    div {
        width: 100%;
        height: 100%;
        padding: 0 10rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h5 {
            font-family: Montserrat, sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 1.5rem;
            color: #4F46BB;
        }

        button {
            width: 12rem;
            height: 2rem;
            background: #4F46BB;
            border: none;
            border-radius: 2rem;

            display: flex;
            align-items: center;
            justify-content: space-around;

            font-family: Inter, sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 1rem;
            color: #FFFFFF;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }

`