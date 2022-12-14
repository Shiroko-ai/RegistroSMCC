import styled from 'styled-components'
export const DivField = styled.div`
    display: flex;
    flex: 0 0 auto;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 1rem;
`
export const InputField = styled.input`
    width : 100%;
    display: block;
    border-radius : 10rem;
    font-size : 0.8rem;
    padding : 1.5rem 1rem;
    color : black;
    border : 2px solid #d1d3e2;
    height: 1.5rem;
    transition: border-color 0.3s ease-in-out, box-shadow 0.15s ease-in-out;
    overflow: visible;
    margin: 0;
    font-family: inherit;
    &:focus {
    background-color: #fff;
    border-color: #fbc587;
    outline: 0;
    }
`
export const SelectField = styled.select`
    width : 100%;
    display: block;
    border-radius : 10rem;
    font-size : 0.8rem;
    padding : 1rem 1rem;
    color : black;
    border : 2px solid #d1d3e2;
    transition: border-color 0.3s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
    background-color: #fff;
    border-color: #fbc587;
    
    }
    &:focus-visible {
    background-color: #fff;
    border-color: #d1d3e2;
    
    }
`
