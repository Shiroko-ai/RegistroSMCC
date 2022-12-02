import { DivField, InputField } from './FieldSmallcss'
export default function FieldSmall (props) {
  return (<DivField>
    <InputField
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      onChange = {props.Handler}
    />
  </DivField>)
}
