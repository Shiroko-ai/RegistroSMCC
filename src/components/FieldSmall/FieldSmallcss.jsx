import styled from 'styled-components'
export const InputField = styled.input`
width : 100%;
display: block;
border-radius : 10rem;
font-size : 0.8rem;
padding : 1.5rem 1rem;
color : black;
border : 2px solid #d1d3e2;
height: calc(1.5em + 0.75rem + 2px);
transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
&:focus {
background-color: #fff;
border-color: #fbc587;
outline: 0;
}
`
export const DivField = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
`
