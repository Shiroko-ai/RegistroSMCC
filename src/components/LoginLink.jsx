import { Link } from 'react-router-dom'
import styled from 'styled-components'
const LinkDiv = styled.div`
  text-align: center;
`
const Linkd = styled(Link)`
  font-size: 80%;
  font-weight: 400;
  color: #fbc587;
  text-decoration: none;
  &:hover{
    color: #fbc587;
    text-decoration: none;
  }
`
export default function LoginLink (props) {
  return (
      <LinkDiv>
      <Linkd
        to={props.to}
      >
        {props.text}
      </Linkd>
    </LinkDiv>)
}
