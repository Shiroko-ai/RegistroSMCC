import React from 'react'

export default function Field (props) {
  return (<div className='form-group'>
    <input
      type= {props.type}
      className='form-control form-control-user'
      id={props.id} aria-describedby={props.aria}
      placeholder={props.placeholder}
      onChange={props.Handler}
    />

  </div>)
}
