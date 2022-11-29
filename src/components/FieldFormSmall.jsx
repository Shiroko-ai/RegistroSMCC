import styled from 'styled-components'
const InputField = styled.input`
width : 100%;
display: block;
border-radius : 10rem;
font-size : 0.8rem;
padding : 1.5rem 1rem;
color : black;
border : 1px solid #d1d3e2;
height: calc(1.5em + 0.75rem + 2px);
transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
&:focus {
background-color: #fff;
border-color: #bac8f3;
outline: 0;
box-shadow: 0 0 0 0.2rem rgb(78 115 223 / 25%);
}
`
const DivField = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
`
export default function FieldFormSmall (props) {
  return (<DivField>
    <InputField
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      onChange = {props.Handler}
    />
  </DivField>)
}
