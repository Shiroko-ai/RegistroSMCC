import React from 'react'
import { DivField, InputField, SelectField } from './Fieldcss'
export default function Field ({ children, ...props }) {
  if (props.type === 'select') {
    return (
    <DivField>
      <SelectField
        type= {props.type}
        id={props.id} aria-describedby={props.aria}
        placeholder={props.placeholder}
        onChange={props.Handler}
      >
      { children }
      </SelectField>
    </DivField>
    )
  } else {
    return (
      <DivField>
        <InputField
          type= {props.type}
          id={props.id} aria-describedby={props.aria}
          placeholder={props.placeholder}
          onChange={props.Handler}
        />
      </DivField>)
  }
}
