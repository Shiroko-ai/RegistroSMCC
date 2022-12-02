import { Buttonlogin } from './Buttoncss'
export default function Button(props) {
  return (<Buttonlogin
    type={props.type}
  >{props.text}
  </Buttonlogin>)
}
