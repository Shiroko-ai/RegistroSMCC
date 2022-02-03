export default function FieldFormSmall (props) {
  return (<div className='col-sm'>
    <input
      type={props.type} className='form-control form-control-user'
      id={props.id} aria-describedby='emailHelp'
      placeholder={props.placeholder} style={{ color: '#800040' }}
      onChange = {props.Handler}
    />
  </div>)
}
