export default function ButtonLogin (props) {
  return (<button
    type={props.type}
    className='btn btn-primary btn-user btn-block'
  >{props.text}
  </button>)
}
