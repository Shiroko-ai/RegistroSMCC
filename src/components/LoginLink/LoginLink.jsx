import { LinkDiv, Linkd } from './LoginLinkcss'
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
