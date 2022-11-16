export default function ButtonLogin (props) {
  return (<button
    type={props.type}
    className='btn btn-primary btn-user btn-block'
    style={{
      backgroundColor: '#b1b1b1',
      borderColor: '#b1b1b1'
    }}
  >{props.text}
  </button>)
}
