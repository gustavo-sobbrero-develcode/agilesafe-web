import styled from "styled-components";

export const Container = styled.div`
    height: 100px;
    display: flex;
    background-color: lightgray;
    box-shadow: 0 0 20px 3px;

    > svg {
        position: fixed;
        color: #008080;
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
    }
`;

export const Title = styled.h1`
    align-self: center;
    position: absolute;
    left: 30%;
    font-size: 26px;
    color: #008080;
`
