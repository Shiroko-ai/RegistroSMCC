export default function ButtonLogin (props) {
  return (<button
    type={props.type}
    className='btn btn-primary btn-user btn-block'
    style={{
      backgroundColor: '#800040',
      borderColor: '#800040'
    }}
  >{props.text}
  </button>)
}
