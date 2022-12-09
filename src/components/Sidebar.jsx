import { Link } from 'react-router-dom'
import styled from 'styled-components'
const ElementList = styled.ul`
    background-color: rgb(255, 255, 255);
    width: 14rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-top: 0;
    margin-bottom: 1rem;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
const SidebarName = styled.div`
    height: 4.375rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 800;
    padding: 1.5rem 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    display: inline;
    margin-left: 1rem;
    color: black;
`
const Title = styled.div`
    color: black;
    padding: 0 1rem;
    padding-top: 0px;
    padding-right: 1rem;
    padding-bottom: 0px;
    padding-left: 1rem;
    font-weight: 800;
    font-size: 0.65rem;
    text-transform: uppercase;
`
const Divider = styled.hr`
        margin: 0 1rem 1rem;
        margin-top: 0;
        border-top: ${props => props.visible ? '1px solid black' : '0px solid white'};
        
`
const Item = styled(Link)`
        position: relative;
        display: block;
        width: 100%;
        text-align: left;
        padding: 1rem;
        width: 14rem;
        text-decoration: none;
        color: #b1b1b1;
        font-size: 0.85rem;
        &:hover{
            text-decoration: none;
            color: #fbc587;
        }
`
export default function Sidebar (props) {
  return (
  <ElementList>
            <SidebarName>
                USUARIO
            </SidebarName>
            <Divider visible/>
            <Divider/>
            <Title>
                Usuarios
            </Title>
            <Item to = "/Admins">
                Lista de administradores
            </Item>
            <Item to = "/MMD">
                Lista de MMD
            </Item>
            <Item to = "/users">
                Lista de usuarios registrados
            </Item>
            <Item to = "/analytics">
                Analíticas
            </Item>
    </ElementList>
  )
}
